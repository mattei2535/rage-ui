import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as rpc from 'rage-rpc'

const Toasts = () => {
    rpc.on('sendToast', ({type, message}:{type: "success" | "warning" | "info" | "error", message: string}) => {
        toast[type](message);
    })


    return (
        
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        transition={Slide}
        limit={3}
        theme="dark"
        />
        
    )
}

export default Toasts