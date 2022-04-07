import React from 'react'

export const FixedMotocycle = () => {
    return (
        <div
            className='rounded-start'
            style={
                {
                    position: 'fixed',
                    color: 'white',
                    backgroundColor: 'gray',
                    top: '40%',
                    right: '0',
                    zIndex: '9',
                    padding: '10px',
                }
            }>
            <div className='fs-5 row'>
                <div className="col-6">
                    <p className=''>1</p>
                </div>
                <div className="col-6">
                    <img src="https://res.cloudinary.com/dqsdwvs5c/image/upload/v1636657988/2_qadjt8.png" alt="" style={{ width: '20px' }} />
                </div>
            </div>
            <div className='fs-5 row'>
                <div className="col-6">
                    <p className=''>1</p>
                </div>
                <div className="col-6">
                    <img src="https://res.cloudinary.com/dqsdwvs5c/image/upload/v1636657988/2_qadjt8.png" alt="" style={{ width: '20px' }} />
                </div>
            </div>
        </div >
    )
}
