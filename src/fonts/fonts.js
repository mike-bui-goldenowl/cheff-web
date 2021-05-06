import { createGlobalStyle } from "styled-components";

import SFProDisplayBold from "./FontsFree-Net-SFProDisplay-Bold.ttf";
import SFProDisplayMedium from "./FontsFree-Net-SFProDisplay-Medium.ttf";
import SFProDisplayRegular from "./FontsFree-Net-SFProDisplay-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'SFProDisplayBold';
        src: local('SFProDisplayBold'),
        url(${SFProDisplayBold}) format("truetype"),
    }

    @font-face {
        font-family: 'SFProDisplayMedium';
        src: local('SFProDisplayMedium'),
        url(${SFProDisplayMedium}) format("truetype"),
    }

    @font-face {
        font-family: 'SFProDisplayRegular';
        src: local('SFProDisplayRegular'),
        url(${SFProDisplayRegular}) format("truetype"),
    }
    

    `;
