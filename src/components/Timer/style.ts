import { createGlobalStyle } from "styled-components";

interface IStyle {
    buttonColor: string;
}

const Style = createGlobalStyle<IStyle>`
    .clock {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 20px 0px 30px;
        border-radius: 6px;
        margin-bottom: 20px;

        .clock_tabs {
            display: flex;
            font-size: 16px;
            list-style-type: none;
            margin: 0px;
            color: #fff;

            li {
                button {
                    color: inherit;
                    border-radius: 4px;
                    padding: 2px 12px;
                    border: none;
                    background-color: transparent;
                }
                button.active {
                    font-weight: bold;
                    background: none rgba(0, 0, 0, 0.15);
                }
            }

        }

        .timer {
            .timer_counter {
                font-size: 120px;
                font-weight: bold;
            }
            button {
                color: ${theme => theme.buttonColor };
                font-size: 22px;
                font-weight: bold;
                background-color: white;
                box-shadow: rgb(235 235 235) 0px 6px 0px;
                cursor: pointer;
                height: 55px;
                width: 200px;
                margin: 20px 0px 0px;
                padding: 0px 12px;
                border: none;
                border-radius: 4px;
                transition: color 0.5s ease-in-out 0s;
            }
            button.active {
                transform: translateY(6px);
                box-shadow: none;
            }
        }

    }
`;

export default Style;