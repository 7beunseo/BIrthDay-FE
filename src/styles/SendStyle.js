import styled from "styled-components";

export const SendContainer = styled.div`
    margin-top: 20px;
    box-shadow: 
        -1px 1px 5px rgba(128, 128, 128, 0.1), 
        5px 5px 10px rgba(128, 128, 128, 0.3); 
    padding: 20px;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Send = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-end; 

    @media (max-width: 768px) { 
        margin-top: 0px;
    }
`;

export const InputBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column; 
    gap: 10px;

    @media (max-width: 768px) { 
        font-size: 15px;
    }
`;

export const From = styled.div`
    display: flex;
    font-weight: bold; 
    align-items: center; 
    gap: 10px;
`;

export const FormInfo = styled.div`
    width: 70px;
`

export const SendButton = styled.img`
    width: 35px;
    height: 35px;
    align-self: flex-end; 

        @media (max-width: 768px) { 
        width: 30px;
        height: 30px;
    }
`;