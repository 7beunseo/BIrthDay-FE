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