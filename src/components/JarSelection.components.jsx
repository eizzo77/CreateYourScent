import react from "react";
import "./JarSelection.components.css"

export const JarSelection = ({title,items,setCandleObj}) => {

    const renderSubTypes = (subTypes) => {
        return subTypes.map((subType) => {
            return (
                <div className="btn" onClick={()=>setCandleObj((prevState)=> ({...prevState,jar:subType}))}>{subType} </div>
            ); 
        })
    }

    const renderItems = items.map((item) => {
        return (
            <div className={item.type.toLowerCase()} key={item.type}>
                        <div className="blur"></div>
                        <div className="btn-container">
                            {item.subTypes && renderSubTypes(item.subTypes)}
                        </div>
                    </div>
        );
    })

    return(
            <>
                <h3 className="level-title">
                {title}
                </h3>
                <div className="jar-selection-container">
                    {renderItems}
                </div>
            </>
    );
}