import '../../index.css';

const Hud = () => {

    return (
        
        <div>
            
            <img src='/images/hudlogo2.png/' className='relative float-right mr-[30px] mt-[40px]'/>
            <div className='relative flex space-x-5 float-right mr-4 mt-[10px] text-xl'>
                <h1>ID: 0</h1>
                <h1>|</h1>
                <h1>mtw</h1>
            </div>
            <div className='relative'>
                <img src='/images/clock.png/' className='float-right mt-[10px] ml-[100px] mr-[-320px]'/>
                <img src='/images/date.png/' className='float-right mt-[10px] mr-[-200px]'/>
            </div>

            
            
        </div>
    )
}


export default Hud;