import React from 'react'
import { getItemDeleteGetItems } from '../../actions/actions'
import { useDispatch } from 'react-redux'

export default function ButtonDelete({ id }) {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(getItemDeleteGetItems(id))
    }

    return (
        <div>
            <button
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
