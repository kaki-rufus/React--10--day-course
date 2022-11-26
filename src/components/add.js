import React, { useState } from 'react'
import './style.css'

function Add(){

    const [add1, setAdd1] = useState(0)
    const [add2, setAdd2] = useState(0)
    const [total, setTotal] = useState(add1 + add2)

    const Added = () => {
        setTotal(add1 + add2)
    }

    return(
        <div className='addition'>
            <div className='take-input'>
                <div className='first'>
                    <input className = 'input' type="number"  value={add1} onChange={e => setAdd1(+e.target.value)}/>
                </div>
                <div className='second'>
                    <input className = 'input' type="number"  value={add2} onChange={e => setAdd2(+e.target.value)}/>
                </div>
            </div>
            <div className='result'>
                <p><button type='submit' className='add' onClick={Added}>ADD</button></p>
            </div>

            <div className='give'>
                <h1>{total}</h1>
            </div>
        </div>
    );
}

export default Add