import styled from '@emotion/styled'



export const ButtonClose = styled.button`
position: absolute;

top: 15px;
right: 15px;
border: none;
border-radius: 5px;
padding: 5px;
cursor: pointer;
background-color: white;
`

export const Backdrop = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #202020a4;
`

export const Modal = styled.div`
    width: 1100px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    
    transform: translate(-50%, -50%)`


