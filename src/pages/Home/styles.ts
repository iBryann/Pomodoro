import styled, { createGlobalStyle } from 'styled-components';

export const Header = styled.header`
    max-width: 620px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    .logo {
        color: white;
    }

    button {
        font-size: 14px;
        color: rgb(235, 235, 235);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 5px 12px;

        &:hover {
            text-decoration: none;
            color: white;
        }

        @media (max-width: 576px) {
            & {
                padding: 8px;
            }
            span {
                display: none;
                padding: 5px 5px;
            }
        }
    }

`;

export const Container = styled.div`
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
`;

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background-color: #DB524D;
    }

    h3, h5 {
        margin: 0;
        line-height: 0;
        padding: 0;
    }

    .timeToWork {
        margin: 15px 0px;
    }

    .timeToWork p {
        color: white;
        font-size: 18px;
    }

    .tasks {
        color: white;
        width: 500px;
    }

    .threeDots {
        background: rgba(239, 239, 239, 0.1);
        border-radius: 5px;
        width: 32px;
        height: 35px;
    }

    .threeDots i {
        color: white;
    }

    .tasksOptions {
        visibility: hidden;
        border-radius: 5px;
        width: 190px;
        background: white;
        position: absolute;
        right: 0;
        /* bottom: calc(-122px - 15px); */
        bottom: calc(-122px - -57px);
        z-index: 1;
    }

    .tasksOptions a {
        color: black;
        font-size: 14px;
        text-decoration: none;
    }

    .tasksOptions div:hover {
        text-decoration: none;
        background: #f1f0f0;
    }

    .tasksOptions a  i{
        color: black;
    }

    .tasksOptions.open {
        visibility: visible;
    }

    .addTask {
        width: 500px;
    }

    .addTask button {
        color: #EFBFBE;
        width: 100%;
        height: 55px;
        border: 2px dashed rgba(255, 255, 255, 0.4);
    }

    .addTask button:hover {
        text-decoration: none;
        color: white;
    }

    .taskNote {
        display: none;
        position: absolute;
        bottom: -145px;
        width: 500px;
        background: white;
        border-radius: 7px;
    }

    .taskNote.open {
        display: block;
    }

    .taskNote input {
        border: none;
        font-size: 22px;
        font-weight: 600;
        color: #555555;
        outline: none;
    }

    .taskNote button {
        border: 1px solid #BBBBBB;
        box-shadow:0 2px 0 rgb(214, 214, 214);
    }

    .taskNote button:hover {
        background: none;
        border: 1px solid #BBBBBB;
    }

    .taskNote a {
        color: #BBBBBB;
        font-size: 14px;   
    }

    .taskNote textarea {
        display: none;
        background: #EFEFEF;
    }

    .taskNote textarea.open {
        display: block;
        background: #EFEFEF;
    }

    .taskNote .footer{
        background: #EFEFEF;
        height: 55px;
        padding: 10px 15px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    .taskNote .btnSave {
        border: none;
        color: white;
        box-shadow: none;
        width: 70px;
    }

    .taskNote .btnSave:hover{
        border: none;
        background:#6c757d;
    }

    .taskNote .btnCancel {
        color: #B2B2B2;
        border: none;
        background: #EFEFEF;
        box-shadow: none;
        width: 70px;
    }

    .taskNote .btnCancel:hover{
        background: #EFEFEF;
        border: none;
    }

    .tasksAdded {
        width: 500px;
        background: white;
        border-radius: 4px;
    }

    .tasksAdded .threeDots {
        border: 1px solid #B2B2B2;
    }

    .tasksAdded .threeDots i {
        color: #B2B2B2;
    }

    .tasksAdded .taskDescription {
        display: block;
        border-radius: 4px;
        width: 450px;
        background: #FCF8DE;
    }

    .tasksAdded .taskDescription.close {
        display: none;
    }

`;