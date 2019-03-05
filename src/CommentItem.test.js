import React from 'React'
import { CommentItem } from './CommentItem';
import { render } from 'enzyme'

it('should render', () => {
    const comment  = {
        comment: 'teste'
    }
    const wrapper = render(<CommentItem item={ comment }/>)
     expect(wrapper.text()).toBe('teste')
})

it('should render empty', () => {
    const comment  = {
        comment: ''
    }
    const wrapper = render(<CommentItem  />)
     expect(wrapper.text()).toBe('empty')
})