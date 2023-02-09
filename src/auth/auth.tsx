import '../index.css';
import React from 'react';

const Auth = () => {
    return (
        
        <div>
            <div>
                <form className="mx-[150px] my-[500px]">
                <button type="button" className="text-[#1e0909] w-[350px] hover:text-white border border-[#1e0909] hover:bg-[#1e0909] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:[#1e0909] dark:text-[#1e0909] dark:hover:text-white dark:hover:bg-[#1e0909] dark:focus:ring-blue-800">Log In</button>
                </form>
            </div>
            <div className="block relative float-right space-x-[100px] my-[200px]">
                <a href="#" className=""><img className="my-10 w-[50px]" src="/images/discord.png/"></img></a>
                <a href="#"><img className="my-10" src="/images/yt.png/"></img></a>
                <a href="#"><img className="my-10" src="/images/inst.png/"></img></a>

            </div>
        </div>


    )
}

export default Auth