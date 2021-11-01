import React from 'react'
import Skeleton from 'react-loading-skeleton';



export default function LoadingSkeletonTable() {
    return (
        <div className='container mt-5 mb-5 pt-5 pb-5 '>

            <div className='head-table-skeleton'>
                <div className='test-skeleton'><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
                <div><Skeleton width={80} height={40} /></div>
            </div>

            <Skeleton count={10} height={70} />
        </div>
    )
}
