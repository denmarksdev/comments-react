import React from 'react'
import { shallow } from 'enzyme'
import  Comments from './Comments'
import { CommentItem } from './CommentItem';

describe('<Comments />', ()=> {

    const comments = {
       a:  {id: 'a', comment:'Comment 1'},
       b:  {id: 'b', comment:'Comment 2'},
    }

    it('should render Comments', () => {
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find(CommentItem).length).toBe(2)
        expect( wrapper.find(CommentItem).get(0).props.item).toBe(comments.a)
        expect( wrapper.find(CommentItem).get(1).props.item).toBe(comments.b)
        expect( wrapper.find(CommentItem).get(0).key).toBe('a')
        expect( wrapper.find(CommentItem).get(1).key).toBe('b')
    })

    it('should work with no Comments', () => {
        const comments = {}
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find(CommentItem).length ).toBe(0)
    })
    
})