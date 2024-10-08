import * as C from "../styles/ContentStyle";
import trashImage from "../img/trash.png"

function Content() {
    return (
      <>
      <C.ContentBox>
        <C.Content>
            <C.TopMessage>          
                <C.Id>1</C.Id>
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
        </C.Content>

        <C.Content>
            <C.TopMessage>          
                <C.Id>1</C.Id>
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
        </C.Content>

        <C.Content>
            <C.TopMessage>          
                <C.Id>1</C.Id>
                <C.Message>나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야야양야야야야</C.Message>
                <C.Trash src={trashImage} alt="trash" />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
        </C.Content>

        <C.Content>
            <C.TopMessage>          
                <C.Id>1</C.Id>
                <C.Message>나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야야양야야야야</C.Message>
                <C.Trash src={trashImage} alt="trash" />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
        </C.Content>

        <C.Content>
            <C.TopMessage>          
                <C.Id>1</C.Id>
                <C.Message>나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야세상에서제일긴문장나는야야양야야야야</C.Message>
                <C.Trash src={trashImage} alt="trash" />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
        </C.Content>

      </C.ContentBox>

      </>
    );
  }
  
  export default Content;