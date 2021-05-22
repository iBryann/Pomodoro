import React, { useState } from 'react';
import Style from './style';

import { useTheme } from '../../hooks/useTheme';

interface ITimer {
    type: number;
    minutes: number;
    label: string;
}

const Timer = () => {
    const theme = useTheme();
    const [timer, setTimer] = useState<ITimer>({ type: 1, minutes: 25, label: 'Time to work!' });

    function setType(type: number) {
        let minutes = 0;
        let label = 'Time for a break';

        if (type === 1) {
            minutes = 25;
            label = 'Time to work!';
            theme.setBgColor('#DB524D');
        }
        else if (type === 2) {
            minutes = 5;
            theme.setBgColor('#468E91');
        }
        else {
            minutes = 15;
            theme.setBgColor('#437EA8');
        }
        
        setTimer({type, minutes, label} as ITimer);
    }

	return (
        <>
            <Style buttonColor={theme.bgColor} />
                    
            <div className="d-flex align-items-center justify-content-center">
                <div className="clock d-flex justify-content-center flex-column pt-4 pb-4">

                    <ul className="clock_tabs mx-auto">
                        <li>
                            <button onClick={() => setType(1)} className={` ${timer.type === 1 && 'active'}`}>Pomodoro</button>
                        </li>
                        <li>
                            <button onClick={() => setType(2)} className={` ${timer.type === 2 && 'active'}`}>Short Break</button>
                        </li>
                        <li>
                            <button onClick={() => setType(3)} className={` ${timer.type === 3 && 'active'}`}>Long Break</button>
                        </li>
                    </ul>

                    <div className="timer d-flex justify-content-center align-items-center flex-column">
                        <div className="timer_counter">
                            {timer.minutes}
                        </div>

                        <button type="button">
                            START
                        </button>
                    </div>

                </div>
            </div>


            <div className="col-md-12 timeToWork">
                <p className="text-center">{timer.label}</p>
            </div>
        </>
    );
}

export default Timer;