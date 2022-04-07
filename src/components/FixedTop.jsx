import React from 'react'

export const FixedTop = () => {
    return (
        <div
            className='row p-1'
            style={{
                position: 'fixed',
                backgroundColor: 'gray',
                top: '0',
                right: '40%',
                zIndex: '9',
            }}
        >
            <div className="col-3 p-1 bg-green">
                <p className='text-center'>1</p>
                <span>Orders</span>
            </div>
            <div className="col-3 p-1 bg-danger">
                <p className='text-center'>1</p>
                <span>Canceled</span>
            </div>
            <div className="col-3 p-1 bg-primary">
                <p className='text-center'>0</p>
                <span>Completed</span>
            </div>
            <div className="col-3 p-1 bg-info">
                <p className='text-center'>100.00%</p>
                <span>Fulfillment</span>
            </div>
        </div>
    )
}
