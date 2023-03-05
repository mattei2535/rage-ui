import * as rpc from 'rage-rpc';
import { useState } from 'react';

const Veh = () => {
    const [vehicleInterface, setVehicleInterface] = useState(false)

    const vehicleSpawn = (cars: number) => {
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

    window.addEventListener('keydown', (e) => {
        if (e.key == 'ESC') return (<></>)
    })

    rpc.on('cmd:Veh', () => {
        setVehicleInterface(true)
    })

    if (vehicleInterface == true) {
        rpc.callClient('showCursor')
        return (
            <div>
                <img className='rounded-xl ml-[25%] mt-[10%] absolute' src='/images/vehbg.png'/>
                    <div className='relative text-3xl mr-[27%] float-right mt-[40%]'>
                        <button 
                            onClick={() => {setVehicleInterface(false), rpc.callClient('hideCursor')}}
                            type="button" 
                            className="text-[#ffffff] w-[100px] border-transparent hover:text-black hover:bg-[#a00a0a]
                                    font-medium rounded-xl text-xl py-1.5 text-center"><p>Inchide</p>
                        </button> 
                    </div>
                    <div className='absolute ml-[27%] mt-[250px] space-x-10'>
                        <button 
                            onClick={() => {vehicleSpawn(0), setVehicleInterface(false)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Ferarri
                        </button>   
                        <button 
                            onClick={() => {vehicleSpawn(1), setVehicleInterface(false)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Mercedes S650
                        </button>  
                        <button 
                            onClick={() => {vehicleSpawn(2), setVehicleInterface(false)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>Bugatti Chiron
                        </button>  
                        <button 
                            onClick={() => {vehicleSpawn(3), setVehicleInterface(false)}}
                            type="button" 
                            className="text-[#ffffff] w-[200px] hover:text-black border border-[#ffffff] hover:bg-[#ffffff] focus:ring-4 focus:outline-none 
                                    focus:ring-[#ffffff] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#ffffff] dark:hover:black 
                                    dark:hover:bg-[#ffffff] dark:focus:ring-[#ffffff]"><img className="ml-[55px]" src="/images/inst.png/"></img>BMW M4
                        </button>
                    </div>
            </div>
        )
    
    }
    else return <></>
}



export default Veh;