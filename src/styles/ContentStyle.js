import styled from "styled-components";

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 20px;
    gap: 10px;
`
export const Content = styled.div`
    background-color: #C6E1FF;
    padding: 20px;
    border-radius: 20px;
`;

export const TopMessage = styled.div`
    display: flex;
    gap: 2s0px;
    background-color: #C6E1FF;
    justify-content: space-between; 
`

export const ButtonMessage = styled.div`
`
export const Trash = styled.img`
    width: 13px;
    height: 16px;
    margin-bottom: 10px;
        margin-left: 6px;
    display: block; 
    cursor: pointer;
`

export const Message = styled.div`
    flex: 1; 
    white-space: normal; /* 줄바꿈을 허용 */
    overflow-wrap: break-word; /* 긴 단어를 줄바꿈 */
    word-wrap: break-word; 
`;

export const CreatedAt = styled.div`
    font-size: 15px;
    align-self: flex-end; 
    text-align: right; 
`;

export const Id = styled.div`
    width: 30px;
`