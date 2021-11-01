import React, { useEffect } from 'react'

import { useForm } from '../hooks/useForm'

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom'

import { modifyItem } from '../actions/actions';


export default function UpdateItem({ id, name, cost, departmentName, departmentIdentification, categoryName, categoryId }) {

    const history = useHistory()

    const dispatch = useDispatch()

    const [formValues, handleInputChange, reset] = useForm({

        newName: name,
        newCost: cost,
        newDepartmentName: departmentName,
        newDepartmentIdentification: departmentIdentification,
        newCategoryName: categoryName,
        newCategoryId: categoryId
    })

    useEffect(() => {
        reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, name, cost, departmentName, departmentIdentification, categoryName, categoryId])


    const {
        newName,
        newCost,
        newDepartmentName,
        newDepartmentIdentification,
        newCategoryName,
        newCategoryId } = formValues

    const handleUpdateItem = (e) => {
        e.preventDefault()
        modifyItem(id, newName, newCost, newDepartmentName, newDepartmentIdentification, newCategoryName, newCategoryId, dispatch, history)
    }

    return (
        <div className='container mt-5 mb-5 pb-3 bg-light'>
            <form className='mt-3' onSubmit={handleUpdateItem}>

                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Name'
                    placeholder='Name'
                    name='newName'
                    autoComplete='off'
                    value={newName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Cost'
                    placeholder='Cost'
                    name='newCost'
                    autoComplete='off'
                    value={newCost}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Name'
                    placeholder='Department Name'
                    name='newDepartmentName'
                    autoComplete='off'
                    value={newDepartmentName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Department Identification'
                    placeholder='Department Identification'
                    name='newDepartmentIdentification'
                    autoComplete='off'
                    value={newDepartmentIdentification}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Name'
                    placeholder='Category Name'
                    name='newCategoryName'
                    autoComplete='off'
                    value={newCategoryName}
                    onChange={handleInputChange} />
                <input
                    className='input mb-1 p-3'
                    type='text'
                    title='Category Id'
                    placeholder='Category Id'
                    name='newCategoryId'
                    autoComplete='off'
                    value={newCategoryId}
                    onChange={handleInputChange} />

                <button className='btn btn-success ' type=' submit'>
                    Modify Item
                </button>
            </form>
        </div>
    )
}
