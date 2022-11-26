import React, { useState } from 'react';
import style from './style.css'
import user from './users_data';

const user_one = {
    name : 'Rufus Kairu',
    location : 'Nairobi',
    food_type : 'Everything',
    age : 45,
    likes : 'Coding',
    profile_ig : 'kaki@.com'
}

const Render = () => {

    const [name, setName] = useState('Kairu')
    const [age, setAge] = useState(20)

    const [one, setOne] = useState(0)

    const decrement = () =>{
        setOne(one - 1);
    }
    const increment = () =>{
        setOne(one + 1);
    }

    return(
        <div className='kaki'>
            <div>
                <h1>You need to here this my friends</h1>
                <p>{user_one.name} is the name I was given back then</p>
                <p><strong>I am {user_one.age} years old</strong></p>

                <br />
                <h3><strong>My twitter handle is</strong></h3>
                <br />
                <p className='handle'><a href="#">@{user_one.profile_ig}</a></p>
            </div>

            <div className='loop'>
                {user.map((x, index) => {
                    return (
                        <div key={index} className='loop-list'>
                            {index}
                            <p>{x.name}</p>
                            <p>{x.location}</p>
                            <p>{x.likes}</p>
                        </div>
                    )
                })}
            </div>

            <div className='update'>
                <div>
                    <h2>Update data from input</h2>
                </div>

                {/* display data */}
                <div className='input-display'>
                    <p>Display name: {name}</p>
                    <p>Display age: {age}</p>
                </div>

                {/* collect user input */}
                <div className='inputs'>

                    {/* input name */}
                    <div className='field'>
                        Name:
                        <input 
                            type="text" 
                            className='input' 
                            placeholder='kaki' 
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </div>

                    {/* input age */}
                    <div className='field'>
                        Age:
                        <input 
                            type="number" 
                            className='input' 
                            placeholder='20'
                            value={age}
                            onChange = {event => setAge(+event.target.value)}
                        />
                    </div>

                </div>

            </div>

            {/* increment/decrement */}
            <div className='incredecre'>
                <button type='submit' onClick={decrement}>-</button>
                <div className='start'>{one}</div>
                <button type='submit' onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Render;
