import * as I from "../styles/InputStyle";

function Input({ placeholder, value, onChange, type }) {
    return (
        <>
            <I.Input
                type={type || "text"}
                placeholder={placeholder}
                value={value} // 상태 값 추가
                onChange={onChange} // onChange 핸들러 추가
            />
        </>
    );
}

export default Input;
