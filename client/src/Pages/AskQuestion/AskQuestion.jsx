import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

function AskQuestion() {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId:User?.result._id }, navigate))
    }
    return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a question</h1>
                <form onSubmit = {handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imgine you're asking a question to another person</p>
                            <input type='text' id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name='' id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}} cols='30' rows='10'></textarea>
                            
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Topics</h4>
                            <p>Add topics to describe what your question is about</p>
                            <input type='text' id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} />
                        </label>
                    </div>
                    <input type='submit' value='Post' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion