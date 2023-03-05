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
                
                rpc.callServer('vehicleSpawn', 'ferrari')
                break;
            case 1:
                rpc.callServer('vehicleSpawn', 'mercedes')
                break;
            case 2:
                rpc.callServer('vehicleSpawn', 'bugatti')
                break;
            case 3:
                rpc.callServer('vehicleSpawn', 'bmwm4')
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
                <img className='rounded-xl ml-[25%] mt-[10%] absolute' src='/images/vehbg.png'/>
                    <div className='absolute ml-[27%] mt-[300px] space-x-10'>
                        <button 
                            onClick={() => {vehicleSpawn(0)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Ferarri
                        </button>   
                        <button 
                            onClick={() => {vehicleSpawn(1)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Mercedes S650
                        </button>  
                        <button 
                            onClick={() => {vehicleSpawn(2)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Bugatti Chiron
                        </button>  
                        <button 
                            onClick={() => {vehicleSpawn(3)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>BMW M4
                        </button>  
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