import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <div className="card mb-3"  >
    <div className="row g-0">
        <div className="col-md-4">
            <Skeleton
                square
                height="100%"
                containerClassName="avatar-skeleton"
                className='py-5'
            />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <Skeleton width={100} className='w-75' />
                <Skeleton count={2} />
                <Skeleton width={100} className='w-25' />
                <Skeleton width={100} className='w-50' />
                <Skeleton width={100} className='w-50' />
                <Skeleton count={1} width={100} height={40} />
            </div>
            <div className='d-flex justify-content-center gap-5 my-2'>
                <Skeleton count={1} width={100} height={40} />
                <Skeleton count={1} width={100} height={40} />
            </div>
        </div>

    </div>
    <div className="row g-0">
        <div className="col-md-4">
            <Skeleton
                square
                height="100%"
                containerClassName="avatar-skeleton"
                className='py-5'
            />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <Skeleton width={100} className='w-75' />
                <Skeleton count={2} />
                <Skeleton width={100} className='w-25' />
                <Skeleton width={100} className='w-50' />
                <Skeleton width={100} className='w-50' />
                <Skeleton count={1} width={100} height={40} />
            </div>
            <div className='d-flex justify-content-center gap-5 my-2'>
                <Skeleton count={1} width={100} height={40} />
                <Skeleton count={1} width={100} height={40} />
            </div>
        </div>

    </div>
</div>
  )
}
