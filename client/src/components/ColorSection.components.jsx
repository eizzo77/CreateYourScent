import React from "react";
import "./ColorSection.components.css"

export const ColorSelection = ({title,colors,setCandleObj}) => {

    // const [chosenColor,setChosenColor] = React.useState("");

    const renderColors = colors.map((color) => {
        return (
            <React.Fragment key={color}>
                <input class={color} type="radio" name="hat-color" value={color} id={`hat-color-${color}`} onClick={()=>setCandleObj((prevState)=> ({...prevState,color}))}/>
                <label class={color} for={`hat-color-${color}`}>{color}</label>
            </React.Fragment>
        );
    })

    return(
        <>
        <h3 className="level-title">
        {title}
         </h3>
        <div className="color-picker-container">
        <div class="colorPicker">
            {renderColors}
        </div>
        </div>
        </>
    );
}