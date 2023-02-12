import * as rpc from 'rage-rpc';
import React, { useEffect, useState } from 'react';

const APanel = () => {
    const [interfaceOpen, setInterfaceOpen] = useState(true)

    if(interfaceOpen == true) {
        return (
            <div>
                <div className='ml-[25%] mt-[5%] w-[1000px] h-[700px] absolute bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80'>
                <div className='text-white mt-[30px] ml-[45px] '>
                    <div className='flex relative float-left space-x-[30px]'>
                        <button 
                            onClick={() => {}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]">Get all weapons
                        </button>
                        <button 
                            onClick={() => {}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative  hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]">Vehicle spawn
                        </button>
                        <button 
                            onClick={() => {}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]">Set money
                        </button>
                        <button 
                            onClick={() => {}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]">Change username
                        </button>
                    </div>
                </div>
                    <footer className='text-white relative mt-[580px] mr-[20px] float-right'>APanel v0.0.1</footer>
                    
                </div>
            </div>
        )
    } else return (
        <></>
    )

}

export default APanel