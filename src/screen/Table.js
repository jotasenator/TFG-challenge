import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../actions/actions'
import ButtonCreate from '../components/buttons/ButtonCreate'
import ButtonDelete from '../components/buttons/ButtonDelete'
import ButtonUpdate from '../components/buttons/ButtonUpdate'
import LoadingSkeletonTable from '../components/skeletons/LoadingSkeletonTable'

export const Table = () => {
    const dispatch = useDispatch()

    const { data } = useSelector(state => state.axiosDataReducer)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])


    return (
        <>{!data ? <LoadingSkeletonTable /> :
            <div className='container mt-5 mb-5'>
                <ButtonCreate />
                <table className="table table-striped table-hover caption-top ">
                    <caption>Online Store</caption>
                    <thead className='table-dark'>
                        <tr className='text-center'>
                            <th scope="col">Id</th>
                            {/* <th scope="col">URL</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Description</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Hire Date</th>
                            <th scope="col">MVP</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.results.map((x, index) => (
                                <tr key={x.id}>
                                    <th scope="col">{index + 1}</th>
                                    {/* <th scope="col">{x.url}</th> */}
                                    <th scope="col" className='name'><p >{x.name}</p></th>
                                    <th scope="col"><img className='photo' src={x.photo} alt={`${x.name}`}/></th>
                                    <th scope="col">{x.description}</th>
                                    <th scope="col">{x.email}</th>
                                    <th scope="col">{x.phone}</th>
                                    <th scope="col">{x.hire_date}</th>
                                    <th scope="col">{x.is_mvp.toString()}</th>
                                    <th><ButtonUpdate id={x.id} /></th>
                                    <th ><ButtonDelete id={x.id} /></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        }</>
    )
}
