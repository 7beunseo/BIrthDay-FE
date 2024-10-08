import styled from "styled-components";

export const Input = styled.input`
    width: 100%; 
    padding: 10px;
    border: 0px solid #ccc; 
    border-radius: 5px; 
    background-color: #E1E1E1;
    
    &:focus {
        outline: none;
        border: 0px solid #ccc; /
        background-color: #E1E1E1; 
    }

    &:hover {
        background-color: #E1E1E1; 
    }
`;

export const TextArea = styled.textarea`
    width: 100%; 
    padding: 10px;
    border: 0px solid #ccc; 
    border-radius: 5px; 
    background-color: #E1E1E1;
    height: 50px;
    resize: none; 
    
    &:focus {
        outline: none;
        border: 0px solid #ccc; /
        background-color: #E1E1E1; 
    }

    &:hover {
        background-color: #E1E1E1; 
    }
`