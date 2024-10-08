import * as S from "../styles/SendStyle";
import Input from "./Input";
import sendButton from "../img/sendButton.png"
import TextArea from "./TextArea";

function Send() {
    return (
        <S.Send>
            <S.InputBox>
                <S.From>
                    <TextArea />
                </S.From>
            
                <S.From>
                    <S.FormInfo>From.</S.FormInfo>
                    <Input />
                </S.From>

                <S.From>
                <S.FormInfo>PW</S.FormInfo>
                <Input />
                </S.From>
            </S.InputBox>

            <S.SendButton src={sendButton} alt="SendButton" />

        </S.Send>
    );
}

export default Send;
