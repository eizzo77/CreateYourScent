import React from "react";
import "./ColorSection.components.css"

export const ColorSelection = ({colors,setCandleObj}) => {

    // const [chosenColor,setChosenColor] = React.useState("");

    const renderColors = colors.map((color) => {
        return (
            <React.Fragment key={color}>
                <input class={color} type="radio" name="hat-color" value={color} id={`hat-color-${color}`} onClick={()=>setCandleObj({color})}/>
                <label class={color} for={`hat-color-${color}`}>{color}</label>
            </React.Fragment>
        );
    })

    return(
        <div className="color-picker-container">
        <div class="colorPicker">
            {renderColors}
        </div>
        </div>
    );
}