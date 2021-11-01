import React from 'react'
import Skeleton from 'react-loading-skeleton';

export default function LoadingSkeletonUpdate() {
    return (
        <div className='container mt-5 mb-5 pt-3 pb-3 '>
            <Skeleton count={6} height={60} />
            <div className='head-table-skeleton'>
                <div><Skeleton width={210} height={40} /></div>
            </div>
        </div>
    )
}
