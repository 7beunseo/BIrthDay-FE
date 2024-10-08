import styled from "styled-components";


export const Birth = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 0px 30px;
    gap: 30px;

    @media (max-width: 768px) { 
        flex-direction: column; 
        margin-top: 10px;
    }
`;

export const BirthItem = styled.div`
    flex: 1; 
    margin: 0 10px; 

    @media (max-width: 768px) { 
        margin: 0 auto;
    }
`;

export const BirthTitle = styled.div`
    padding: 20px 0px;
    margin-top: 20px;
    font-size: 30px;
    text-align: center;

    span {
        font-weight: bold;
    }

    @media (max-width: 768px) { 
        font-size: 20px;
    }
`