import styled from "styled-components";

export const Send = styled.div`
    margin-top: 20px;
    box-shadow: 
        -1px 1px 5px rgba(128, 128, 128, 0.1), 
        5px 5px 10px rgba(128, 128, 128, 0.3); 
    padding: 20px;
    border-radius: 10px; 
    display: flex;
    justify-content: space-between;
    align-items: flex-end; 
`;

export const InputBox = styled.div`
    width: 80%;
`;

export const From = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
`;

export const SendButton = styled.img`
    width: 40px;
    height: 40px;
    align-self: flex-end; 
`;