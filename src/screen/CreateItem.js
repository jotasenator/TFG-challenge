
import React from 'react'

import { useForm } from '../hooks/useForm'

import { useDispatch } from 'react-redux';


import { useHistory, Link } from 'react-router-dom'


import { createNewItem } from '../actions/actions';



export default function CreateItem() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [formValues, handleInputChange] = useForm({
        id: '',
        name: '',
        cost: '',
        departmentName: '',
        departmentIdentification: '',
        categoryName: '',
        categoryId: ''
    })

    const {
        id,
        name,
        cost,
        departmentName,
        departmentIdentification,
        categoryName,
        categoryId } = formValues

    const handleCreate = (e) => {
        e.preventDefault()
        createNewItem(id, name, cost, departmentName, departmentIdentification, categoryName, categoryId, dispatch, history)

    }

    return (
        <div className='container mt-5 mb-5 pb-3 bg-light'>
            <form className='mt-3' onSubmit={handleCreate}>
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Id'
                    placeholder='Id'
                    name='id'
                    autoComplete='off'
                    value={id}
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
                    title='Cost'
                    placeholder='Cost'
                    name='cost'
                    autoComplete='off'
                    value={cost}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Name'
                    placeholder='Department Name'
                    name='departmentName'
                    autoComplete='off'
                    value={departmentName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Identification'
                    placeholder='Department Identification'
                    name='departmentIdentification'
                    autoComplete='off'
                    value={departmentIdentification}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Name'
                    placeholder='Category Name'
                    name='categoryName'
                    autoComplete='off'
                    value={categoryName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Id'
                    placeholder='Category Id'
                    name='categoryId'
                    autoComplete='off'
                    value={categoryId}
                    onChange={handleInputChange} />
                <div className='btn-row'>

                    <button className='btn btn-success ' type=' submit'>
                        Create New Item
                    </button>
                    <button className='btn btn-danger '>

                        <Link to={'/'}>Cancel</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
