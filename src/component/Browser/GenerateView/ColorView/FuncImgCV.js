import nameOfColor from 'data/NameTheColor';
import React from 'react';
import { Flip, toast } from 'react-toastify';

export default function FuncImgCV({ payload }) {
    
    const divcolor = payload.divcolor

    function handleLock() {
        payload.setIsFixed(pstate => {
            return !pstate
        })
    }

    function handleCopy() {
        window.navigator.clipboard.writeText(divcolor)
        toast(nameOfColor(divcolor) + " (" + divcolor + ") is copied.", {
            position: "bottom-center",
            transition: Flip,
            type: "info",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }

    function handleEvent() {
        switch (payload.imgFunction) {
            case imgFunction.LOCKFN:
                return handleLock()
            case imgFunction.COPYFN:
                return handleCopy()
            default:
                return
        }
    }

    const imgStyle = {
        visibility: payload.fixvisibility,
    }

    return (
        <img
            className="lockImg"
            style={imgStyle}
            src={payload.src}
            onClick={handleEvent}
            alt="colorFunction"
        />
    )
}

export const imgFunction = {
    LOCKFN: "lock",
    COPYFN: "handleCopy"
}