import React from 'react'

export const FixedComponent = () => {
    return (
        <div
            className='rounded-end'
            style={
                {
                    position: 'fixed',
                    color: 'white',
                    backgroundColor: 'gray',
                    top: '40%',
                    left: '0',
                    zIndex: '9',
                    padding: '10px',
                }
            }>
            <div className='fs-5 row'>
                <div className="col">
                    <img src="https://res.cloudinary.com/dqsdwvs5c/image/upload/v1635900990/letra-v_2_r9fyq8.png" alt="" style={{ width: '20px' }} />
                </div>
                <div className="col">
                    <p className=''>1</p>
                </div>
            </div>
            <div className='fs-5 row'>
                <div className="col">
                    <img src="https://res.cloudinary.com/dqsdwvs5c/image/upload/v1635966568/letra-v_1_zqi3xu.png" alt="" style={{ width: '20px' }} />
                </div>
                <div className="col">
                    <p className=''>1</p>
                </div>
            </div>
            <div className='fs-5 row'>
                <div className="col">
                    <img src="https://res.cloudinary.com/dqsdwvs5c/image/upload/v1635900040/letra-u_1_hjgc8s.png" alt="" style={{ width: '20px' }} />
                </div>
                <div className="col">
                    <p className=''>1</p>
                </div>
            </div>

        </div >
    )
}
