import * as rpc from 'rage-rpc';
import React, { useEffect, useState } from 'react';

const APanel = () => {
    const [interfaceOpen, setInterfaceOpen] = useState(false)

    // const repairVehicle = () => {
    //     setInterfaceOpen(false)
    //     rpc.callServer('repairVehicle')
    // }

    const vehicleSpawn = (cars: number) => {
        setInterfaceOpen(false)
        switch (cars) {
            case 0:
                
                rpc.callServer('vehicleSpawn0')
                break;
            case 1:
                rpc.callServer('vehicleSpawn1')
                break;
            case 2:
                rpc.callServer('vehicleSpawn2')
                break;
        
            default:
                break;
        }
    }


    window.addEventListener("keydown", (e) => {
        if (e.key === 'ArrowUp') {
            setInterfaceOpen(true)
        }
        else if (e.key === 'ArrowDown') {
            setInterfaceOpen(false)
        }
    })

    if(interfaceOpen == true) {
        rpc.callServer('interfaceIsOpen')
        return (
            <div>
                <div className='ml-[25%] mt-[5%] w-[1000px] h-[700px] absolute bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80 rounded-xl'>
                <div className='text-white mt-[30px] ml-[45px] '>
                    <div className='flex relative float-left space-x-[30px]'>
                        <button 
                            onClick={() => {vehicleSpawn(0)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative  hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Ferarri
                        </button>
                        <button 
                            onClick={() => {vehicleSpawn(1)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Mercedes S650
                        </button>
                        <button 
                            onClick={() => {vehicleSpawn(2)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] relative hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Bugatti Chiron
                        </button>
                    </div>
                </div>
                    <footer className='text-white relative mt-[580px] mr-[20px] float-right'>APanel v0.0.1</footer>
                    
                </div>
            </div>
        )
    } else {
        rpc.callServer('interfaceIsClosed')
        return (
            <></>
        )
    } 
}



export default APanel