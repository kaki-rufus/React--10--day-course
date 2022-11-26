import React, { useState } from 'react'

function Phrase(){

    const [phrase, setPhrase] = useState('')

    if (phrase === 'kaki_the_geek'){
        alert('You may pass!')
    }

    return(

        <div className='phrase'>
            <h2>What's the secret phrase ?</h2>
            
        <p>{phrase}</p>

            <input type="text" placeholder='super secret' value={phrase} onChange = {e => setPhrase(e.target.value)}/>
            <p>
                Hint: It's <strong>kaki_the_geek</strong>
            </p>
        </div>

    );
}
export default Phrase;