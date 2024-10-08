import * as S from "../styles/SendStyle";
import Input from "./Input";
import sendButton from "../img/sendButton.png"
import TextArea from "./TextArea";

function Send() {
    return (
        <S.SendContainer>
            <S.From>
                <TextArea placeholder={"축하 메세지를 남겨주세요"}/>
            </S.From>

            <S.From>
                <S.FormInfo>From.</S.FormInfo>
                <Input  placeholder={"신원을 밝혀라"} />
            </S.From>

            <S.Send>
                <S.InputBox>
                    <S.From>
                    <S.FormInfo>PW</S.FormInfo>
                    <Input  placeholder={"비밀번호를 입력해주세요"}/>
                    </S.From>
                </S.InputBox>

                <S.SendButton src={sendButton} alt="SendButton" />
            </S.Send>
        </S.SendContainer>
        
    );
}

export default Send;
