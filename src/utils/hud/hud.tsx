import '../../index.css';
import * as rpc from 'rage-rpc'
import { useEffect, useState } from 'react';

const Hud = () => {

    const [cash, setCash] = useState(0)
    const [nick, setNick] = useState('')
    const [id, setId] = useState(0)

    rpc.on('playerInfos', ({money, nick, id}:{money: number, nick: string, id: number}) => {
        setCash(money)
        setNick(nick)
        setId(id)
    })

    return (
        <div>
            <img src='/images/hudlogo2.png/' className='relative float-right mr-[30px] mt-[40px]'/>
            <div className='relative flex space-x-5 float-right mr-4 mt-[10px] text-xl'>
                <h1>ID: {id}</h1>
                <h1>|</h1>
                <h1>{nick}</h1>
            </div>
            <div className='relative'>
                <img src='/images/clock.png/' className='float-right mt-[10px] ml-[100px] mr-[-320px]'/>
                <img src='/images/date.png/' className='float-right mt-[10px] mr-[-200px]'/>
                <img src='/images/dollar.png' className='relative float-right w-[35px] h-[35px] mt-[260px] mr-[-380px]'/>
                <p className='relative text-white text-2xl float-right mt-[260px] mr-[-330px] align-middle font-Oswald'>{cash.toLocaleString()}</p>

            </div>

        </div>
    )
}


export default Hud;