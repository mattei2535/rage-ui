import '../index.css';
import * as rpc from 'rage-rpc'
import { useState } from 'react';
import Hud from '../hud/hud'

const Auth = () => {

    const [authInterface, setAuthInterface] = useState('login')
    const [registerData, setRegisterData] = useState<({username: string, email: string, password: string})>({username: '', email: '', password: ''})
    const [loginData, setLoginData] = useState<({username: string, password: string})>({username: '', password: ''})
    const [authState, setAuthState] = useState(false)

    rpc.on('mti:authSystem', () => {
        setAuthState(true);
    })

    rpc.on('loginAuthorization', () => {
        setAuthState(false)
    })


    if (authInterface === 'register') {
        return (
            <div>
            <form>
                <img src="/images/bg2.png/" alt="background" className="absolute bg-no-repeat w-[1920px] h-[1080px]" />
                <div className="block relative float-left mx-[50px] space-x-[100px] my-[300px]">
                        <a href="#"><img className="my-10 w-[50px]" src="/images/discord.png/"></img></a>
                        <a href="#"><img className="my-10" src="/images/yt.png/"></img></a>
                        <a href="#"><img className="my-10" src="/images/inst.png/"></img></a>
                    </div>
                <div className='relative float-right'>
                    <div className='absolute my-[87px] mx-[150px]'>
                        <img src="/images/username.png" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='absolute my-[235px] mx-[150px]'>
                        <img src="/images/mail.png" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='absolute my-[375px] mx-[150px]'>
                        <img src="/images/pass.png" className='w-[50px] h-[50px]'/>
                    </div>
                    
                    
                    <input
                    onChange={(e) => {
                        e.preventDefault()
                        setRegisterData({
                            ...registerData,
                            username: e.target.value
                        })
                    }}
                    placeholder='username' autoFocus={true} required type='text' className='py-[30px] font-serif my-[80px] mx-[220px] w-[250px] h-[30px] border-solid border-b-2 border-black bg-transparent outline-none text-center'/>
                    <input
                    onChange={(e) => {
                        e.preventDefault()
                        setRegisterData({
                            ...registerData,
                            email: e.target.value
                        })
                    }}
                    placeholder='email' required type="text" className='py-[30px] mx-[220px] block w-[250px] h-[30px] border-solid border-b-2 border-black bg-transparent outline-none text-center' />
                    <input
                    onChange={(e) => {
                        e.preventDefault()
                        setRegisterData({
                            ...registerData,
                            password: e.target.value
                        })
                    }}
                    placeholder='password' required type='password' className='py-[30px] font-serif my-[80px] mx-[220px] w-[250px] h-[30px] border-solid border-b-2 border-black bg-transparent outline-none text-center'/>
                    <button 
                        onClick={() => {setAuthInterface('login'); rpc.callServer('registerInfos', ({username: registerData.username, email: registerData.email, password: registerData.password}))}}
                        type="button" 
                        className="text-[#1e0909] mx-[-530px] my-[200px] w-[350px] absolute hover:text-white border border-[#1e0909] hover:bg-[#1e0909] focus:ring-4 focus:outline-none 
                                focus:ring-[#1e0909] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#1e0909] dark:hover:text-white 
                                dark:hover:bg-[#1e0909] dark:focus:ring-[#1e0909]">Register
                    </button>
                    <p className='mx-[225px] my-[60px] font-serif text-sm'>If you have problems with logging in,
                        <br/>
                        you can make ticket request <u><a href='#' className='hover:text-[#1e0909]'>here!</a></u>
                    </p>

                </div>
            </form>
        </div>   

        )
    }

    if (authState == false) return (
        <Hud />
    )
    else return (
        <div>
            <form>
                <img src="/images/bg1.png/" alt="background" className="absolute bg-no-repeat w-[1920px] h-[1080px]" />

                <div className='relative'>
                    <div className='absolute my-[105px] mx-[150px]'>
                        <img src="/images/username.png" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='absolute my-[265px] mx-[150px]'>
                        <img src="/images/pass.png" className='w-[50px] h-[50px]'/>
                    </div>
                    
                    
                    <input
                    onChange={(e) => {
                        e.preventDefault()
                        setLoginData({
                            ...loginData,
                            username: e.target.value
                        })
                    }}
                    placeholder='username' autoFocus={true} type='text' className='py-[30px] font-serif my-[100px] mx-[220px] w-[250px] h-[30px] border-solid border-b-2 border-black bg-transparent outline-none text-center'/>
                    <input
                    onChange={(e) => {
                        e.preventDefault()
                        setLoginData({
                            ...loginData,
                            password: e.target.value
                        })
                    }}                    
                    placeholder='password' type="password" className='py-[30px] mx-[220px] block w-[250px] h-[30px] border-solid border-b-2 border-black bg-transparent outline-none text-center' />

                    <button 
                        onClick={() => {rpc.callServer('checkLoginData', ({username: loginData.username, password: loginData.password}))}}
                        type="button" 
                        className="text-[#1e0909] mx-[160px] my-[80px] w-[350px] absolute hover:text-white border border-[#1e0909] hover:bg-[#1e0909] focus:ring-4 focus:outline-none 
                                focus:ring-[#1e0909] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#1e0909] dark:hover:text-white 
                                dark:hover:bg-[#1e0909] dark:focus:ring-[#1e0909]">Log In
                    </button>
                    <p className='my-[150px] mx-[322px]'>OR</p>
                    <button 
                        onClick={() => setAuthInterface('register')}
                        type="button" 
                        className="text-[#1e0909] mx-[160px] my-[-125px] w-[350px] absolute hover:text-white border border-[#1e0909] hover:bg-[#1e0909] focus:ring-4 focus:outline-none 
                                focus:ring-[#1e0909] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#1e0909] dark:hover:text-white 
                                dark:hover:bg-[#1e0909] dark:focus:ring-[#1e0909]">Register
                    </button>
                    <p className='mx-[225px] my-[-60px] font-serif text-sm'>If you have problems with logging in,
                        <br/>
                        you can make ticket request <u><a href='#' className='hover:text-[#1e0909]'>here!</a></u>
                    </p>
                    <div className="block relative float-right space-x-[100px] my-[-300px]">
                        <a href="#"><img className="my-10 w-[50px]" src="/images/discord.png/"></img></a>
                        <a href="#"><img className="my-10" src="/images/yt.png/"></img></a>
                        <a href="#"><img className="my-10" src="/images/inst.png/"></img></a>
                    </div>
                </div>
            </form>
        </div>   

    )
}

export default Auth;