import '../index.css';
import '../auth/auth' 
import { useState } from 'react';
import * as rpc from 'rage-rpc'

const Hud = () => {
    return (
        <div>
            <h1 className="font-serif font-bold text-center text-white mt-2">WORK IN PROGRESS</h1>
            <div className='absolute'>
                <p id='user'>Player(ID)</p>
            </div>
        </div>
    )
}


export default Hud;