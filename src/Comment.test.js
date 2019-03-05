import React from 'React'
import { shallow } from 'enzyme'
import Comment from './Comment'
import { FormControl, Button, Form } from 'react-bootstrap';

const comments ={
    comentario: {value:'teste'}
}

const event = {
    target: { value: 'teste' , elements:  comments },
    preventDefault: () => {}
}

describe('<Comment />', () => {

    it('should handle changes in textarea', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<Comment sendNewComment={sendComment}  />)
        wrapper.find(FormControl).simulate('change', event)
        expect(wrapper.state().newComment).toBe('teste')
    })
    
    it('should call sendComment on button click ', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<Comment sendNewComment={sendComment}  />)
        wrapper.find(Form).simulate('submit', event)
        expect(sendComment).toBeCalledWith('teste')
        expect(sendComment.mock.calls[0][0]).toBe('teste')
        expect(wrapper.state().newComment).toBe('')
    })

})