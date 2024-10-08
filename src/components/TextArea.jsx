import * as I from "../styles/InputStyle";

function TextArea({ placeholder, value, onChange }) {
    return (
        <>
            <I.TextArea
                type="text"
                placeholder={placeholder}
                value={value} // 상태 값 추가
                onChange={onChange} // onChange 핸들러 추가
            />
        </>
    );
}

export default TextArea;
