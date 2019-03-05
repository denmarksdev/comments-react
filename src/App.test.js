import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App'
import Comments from './Comments'
import Comment from './Comment'
import { ProgressBar } from 'react-bootstrap'
import { EventEmitter } from 'events'
import { watch } from 'chokidar';

describe('<App />', () => {
    it('renders without crashing', () => {

        const database = {
            ref: jest.fn()
        }

        database.ref.mockReturnValue({
            on: jest.fn()
        })

        const wrapper = shallow(<App database={database} />)
        expect(wrapper.find(ProgressBar).length ).toBe(1)

        wrapper.setState({ isLoading: false })
        expect(wrapper.find(Comments).length).toBe(1)
        expect(wrapper.find(Comment).length).toBe(1)
    });

    it('Adds a new comment', () => {

        const database = {
            ref: jest.fn()
        }

        const child = jest.fn()
        const update = jest.fn()

        database.ref.mockReturnValue({
            on: jest.fn(),
            child,
            update
        })

        const push = jest.fn()
        child.mockReturnValue({
            push
        })

        push.mockReturnValue({
            key:1
        })

        const wrapper = shallow(<App database={database} />)
        wrapper.instance().onSendNewComment('new comment')
        expect(child).toBeCalledWith('comments')
        expect(update).toBeCalledWith({
            'comments/1': {
                'comment': 'new comment'
            }
        })
    });

    it('renders comments from firebase', () => {

        const database = {
            ref: jest.fn()
        }

        const eventEmiter = new EventEmitter()
        database.ref.mockReturnValue( eventEmiter)

        const wrapper = shallow(<App database={database} />)
        wrapper.setState({ isLoading: false })

        // não recebeu comments
        expect(wrapper.find(Comments).length).toBe(1)
        expect(wrapper.find(Comment).length).toBe(1)

        // recebendo o value
        const comments = {
            'a': {comment: 'comment 1'},
            'b': {comment: 'comment 2'},
        }
        const val = jest.fn()
        val.mockReturnValue(comments)

        eventEmiter.emit('value', 
        {
            val
        })

        // tests
        expect(wrapper.state().isLoading).toBeFalsy()
        expect(wrapper.state().comments).toBe(comments)
        expect( wrapper.find(Comments).get(0).props.comments).toBe(comments)
        expect(wrapper.find(ProgressBar).length).toBe(0)
        expect(wrapper.find(Comment).get(0).props.sendNewComment).toBe( wrapper.instance().onSendNewComment)
    });

})