import * as S from "../styles/SendStyle";
import Input from "./Input";
import sendButton from "../img/sendButton.png"

function Send() {
    return (
        <S.Send>
            <S.InputBox>
                <Input />
                <S.From>
                    From. <Input />
                </S.From>
            </S.InputBox>

            <S.SendButton src={sendButton} alt="SendButton" />

        </S.Send>
    );
}

export default Send;
