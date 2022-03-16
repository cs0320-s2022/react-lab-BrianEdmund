import React from "react";

function TextBox(props: { label: any; change: any; }) {
    const {
        label,
        change
    } = props;

    const changeVal = (e: any) => {
        change(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder={label} onChange={changeVal} />
        </div>
    )
}

export default TextBox;
