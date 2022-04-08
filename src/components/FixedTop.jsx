import React from 'react'

export const FixedTop = () => {
    return (
        <div className='fixed-top'>
            <div className='row w-50  p-1 fixed-content'>
                <div className="col-3 p-1 bg-green-transparent">
                    <p className='text-center text-white fw-bold mb-0'>1</p>
                    <p className='text-center text-white  mb-0'>Orders</p>
                </div>
                <div className="col-3 p-1 bg-red-transparent">
                    <p className='text-center text-white fw-bold mb-0'>1</p>
                    <p className='text-center text-white mb-0'>Canceled</p>
                </div>
                <div className="col-3 p-1 bg-blue-transparent">
                    <p className='text-center text-white fw-bold mb-0'>0</p>
                    <p className='text-center text-white mb-0'>Completed</p>
                </div>
                <div className="col-3 p-1 bg-info-transparent">
                    <p className='text-center text-white fw-bold mb-0'>100.00%</p>
                    <p className='text-center text-white mb-0'>Fulfillment</p>
                </div>
            </div>
        </div>
    )
}
