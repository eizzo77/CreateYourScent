import {useEffect, useState} from "react";
import "./Scent.components.css"

export const Scent = ({scent,setCandleObj}) => {

    const [checkedScent,setCheckedScent] = useState(false) 

    useEffect(() => {
        if (checkedScent) {
            setCandleObj((prevState)=> ({...prevState,scents:[...prevState.scents,scent.name]})) 
        }
         else if(checkedScent === false) {
            setCandleObj((prevState)=> ({...prevState,scents:prevState.scents.filter((s) => s !== scent.name)}))
        }
    },[checkedScent])

    const onScentClick = () => {
        setCheckedScent(!checkedScent);
    }

    return(
        <div class="card" onClick={onScentClick}>
        <div class="card_image"> 
          <img src={scent.imageURL} style={{filter: checkedScent? "brightness(0.6)" : "brightness(1)"}}/>
          {checkedScent && <i class="fas fa-check fa-3x"></i>}
          <p>{scent.name}</p>
        </div>
      </div>
    );
}