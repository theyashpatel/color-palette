import React, { useEffect } from 'react';
import isMobile from 'react-device-detect';
import { Flip, toast, ToastContainer } from 'react-toastify';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';

export default function AddOns() {

    useEffect(() => {
        console.log("I am here")
        const message = isMobile ? "Tap" : "Cick"
        toast(message + " on color to copy HEX code.", {
          position: "bottom-center",
          transition: Flip,
          type: "info",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
    }, [])
    return (
        <div>
            {/* <ToastContainer /> */}
            <ReactTooltip place="top" type="dark" effect="float" delayShow={500} />
        </div>
    )
}