import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectItem } from '../../actions/actions'



export default function ButtonUpdate({ id }) {

    const dispatch = useDispatch()
    const handleUpdate = () => {
        dispatch(selectItem(id))
    }

    return (
        <div>
            <button
                className='btn btn-success'
                onClick={handleUpdate}

            >
                <Link to={`/update/:${id}`}>Update</Link>
            </button>
        </div>
    )
}
