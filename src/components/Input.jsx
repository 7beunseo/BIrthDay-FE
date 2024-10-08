import * as I from "../styles/InputStyle";

function Input({placeholder}) {
    return (
        <>
            <I.Input type="text" placeholder={placeholder} />
        </>
    );
}

export default Input;
