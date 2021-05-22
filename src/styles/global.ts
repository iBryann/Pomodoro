import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
    * {
        color: #fff;
        font-family: 'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    body {
        transition: background-color 0.5s ease-in-out 0s;
    }
`;

export default Style;