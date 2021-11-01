import React from 'react'

import { useSelector } from 'react-redux';
import LoadingSkeletonUpdate from '../components/skeletons/LoadingSkeletonUpdate';
import UpdateItem from './UpdateItem';


export default function ConditionalRenderUpdateItem() {

    const { selected } = useSelector(state => state.axiosDataReducer)

    const id = selected?.results[0].url.split('/')[4]
    const url= selected?.url
    const name = selected?.name
    const photo = selected?.photo
    const description = selected?.description
    const email = selected?.email
    const phone = selected?.phone
    const hire_date = selected?.hire_date
    const is_mvp = selected?.is_mvp
    
    return (
        <>
            {!selected ? <LoadingSkeletonUpdate /> :
                <div>
                    {(selected !== null) &&
                        <UpdateItem
                            id={id}
                            url={url}
                            name={name}
                            photo={photo}
                            description={description}
                            email={email}
                            phone={phone}
                            hire_date={hire_date}
                            is_mvp={is_mvp}
                            
                        />}
                </div >}
        </>
    )
}
