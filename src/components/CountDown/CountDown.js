import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

function CountDown() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days}d : {hours}h : {minutes}m : {seconds}s </span>;
        }
    };



    return (
        <>
            <div className="flex items-center gap-x-3 ">
                <p>Ends after:</p>
                <div className="bg-primary py-1 px-2 text-white">
                    <Countdown
                        date={Date.now() + 100000000}
                        renderer={renderer}
                        daysInHours={true}
                    />
                </div>
            </div>
        </>
    )
}

export default CountDown


//     < div className = "w-[50px] text-white center-child" >
//         <span>07</span>h
//                     </ > :
// <div className="w-[50px] text-white center-child">
//     <span>38</span>m
// </div> :
// <div className="w-[50px] text-white center-child">
//     <span>38</span>s
// </div>