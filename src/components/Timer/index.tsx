import { useState } from 'react';
import Style from './style';

import { useTheme } from '../../hooks/useTheme';

interface ITimer {
    type: number; //0:pomodoro, 1:break, 2:long break
    minutes: number;
    label: string;
    status: boolean; //false:stop, true:start
    countdown?: string;
}

const Timer = () => {
    const theme = useTheme();
    const [timer, setTimer] = useState<ITimer>({ type: 1, minutes: 25, status: false, label: 'Time to work!' });
    let status = timer.status;

    console.log(status);

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

    const startCountdown = (minutes: number) => {
        let endTime = new Date((new Date()).getTime() + (minutes * 60 * 1000));
        
        function Countdown() {
            let now = new Date();
            let interval = endTime.getTime() - now.getTime();
            let s: any = Math.floor(interval / 1000);
            let m: any = Math.floor(s / 60);
            s %= 60;
            m %= 60;
            s = (s < 10) ? "0" + s : s;
            m = (m < 10) ? "0" + m : m;

            console.log(status, `${m}:${s}`);
            
            if (now >= endTime) {
                alert('fim');
                return true
            }
            else {
                setTimer({...timer, countdown: `${m}:${s}`})
                setTimeout(Countdown, 1000);
            }
        }
        Countdown();
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
                            {status ? timer.countdown : `${timer.status} ${timer.minutes === 5 ? '0' : ''}${timer.minutes}:00`}
                        </div>

                        <button
                            onClick={() => {
                                status = !status;
                                setTimer({...timer, status: status});

                                startCountdown(timer.minutes);
                            }}
                            className={` ${status && 'active'}`}
                            type="button"
                        >
                            {status ? 'STOP' : 'START'}
                        </button>

                        <button
                            onClick={() => { 
                                status = !status;
                                setTimer({...timer, status: status});
                            }}
                        >
                            teste: {String(status)}
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