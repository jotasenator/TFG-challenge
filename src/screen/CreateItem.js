
import React from 'react'

import { useForm } from '../hooks/useForm'

import { useDispatch } from 'react-redux';


import { useHistory, Link } from 'react-router-dom'

import { createNewItem } from '../actions/actions';



export default function CreateItem() {

    const dispatch = useDispatch()
    const history = useHistory()


    const [formValues, handleInputChange] = useForm({
        url: '',
        name: '',
        photo: '',
        description: '',
        email: '',
        phone: '',
        hire_date: '',
        is_mvp: ''
    })

    const {
        url,
        name,
        photo,
        description,
        email,
        phone,
        hire_date,
        is_mvp
    } = formValues

    const handleCreate = (e) => {
        e.preventDefault()
        createNewItem(url, name, photo, description, email, phone, hire_date, is_mvp, dispatch, history)
    }

    return (
        <div className='container mt-5 mb-5 pb-3 bg-light' style={{ width: '300px' }}>
            <form className='mt-3' onSubmit={handleCreate}>

                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='URL'
                    placeholder='URL'
                    name='url'
                    autoComplete='off'
                    value={url}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Name'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Photo'
                    placeholder='Photo'
                    name='photo'
                    autoComplete='off'
                    value={photo}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Description'
                    placeholder='Description'
                    name='description'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Email'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Phone'
                    placeholder='Phone'
                    name='phone'
                    autoComplete='off'
                    value={phone}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='HireDate'
                    placeholder='Hire Date'
                    name='hire_date'
                    autoComplete='off'
                    value={hire_date}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='MVPstatus'
                    placeholder='MVP status'
                    name='is_mvp'
                    autoComplete='off'
                    value={is_mvp}
                    onChange={handleInputChange} />
                <div className='btn-row'>

                    <button className='btn btn-success ' type=' submit'>
                        New Realtor
                    </button>
                    <button className='btn btn-danger '>

                        <Link to={'/'}>Cancel</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
