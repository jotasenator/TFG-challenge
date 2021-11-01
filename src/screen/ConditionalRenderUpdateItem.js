import React from 'react'

import { useSelector } from 'react-redux';
import LoadingSkeletonUpdate from '../components/skeletons/LoadingSkeletonUpdate';
import UpdateItem from './UpdateItem';


export default function ConditionalRenderUpdateItem() {

    const { selected } = useSelector(state => state.axiosDataReducer)

    const id = selected?.id
    const name = selected?.name
    const cost = selected?.cost
    const departmentName = selected?.department[0].name
    const departmentIdentification = selected?.department[0].identification
    const categoryName = selected?.category[0].name
    const categoryId = selected?.category[0].id
    return (
        <>
            {!selected ? <LoadingSkeletonUpdate /> :
                <div>
                    {(selected !== null) &&
                        <UpdateItem
                            id={id}
                            name={name}
                            cost={cost}
                            departmentName={departmentName}
                            departmentIdentification={departmentIdentification}
                            categoryName={categoryName}
                            categoryId={categoryId}
                        />}
                </div >}
        </>
    )
}
