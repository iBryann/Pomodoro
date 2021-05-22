import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
    .overlay {
        z-index: 999;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        overflow-y: scroll;
        padding: 2rem 0;
    }

    .formSetting {
        background: white;
        border-radius: 7px 7px 0 0;
        width: 100%;
        max-width: 400px;
    }

    .titleTimerSetting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #BBBBBB;
        font-size: 17px;
        font-weight: 600;
    }

    #formTimeSettings h6{
        color: #555555;
        font-size: 17px;
        font-weight: 600;
    }

    .timeMinutes label {
        color: #BBBBBB;
        font-size: 14px;
        font-weight: 600;
    }

    .timeMinutes input {
        color: #6D6D6D;
        background: #EFEFEF;
        padding: 10px;
        border: none;
    }

    .list-group-item {
        color: #555555;
        font-size: 17px;
        font-weight: 600;
    }

    .footerForm {
        background: #EFEFEF;
        height: 70px;
        padding: 14px 20px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        /* float: right; */
    }
    
    /* Hide default HTML checkbox */
    .switch input {display:none;}
    
    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        border-radius: 50%;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input.success:checked + .slider {
        background-color: #8bc34a;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;

export default Style;