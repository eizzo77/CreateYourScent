import react from "react";
import "./JarSelection.components.css"

export const JarSelection = ({title,items}) => {

    const renderSubTypes = (subTypes) => {
        return subTypes.map((subType) => {
            return (
                <div className="btn">{subType}</div>
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
                    {/* <div className="glass">
                        <div className="blur"></div>
                        <div className="btn-container">
                            <div className="btn">Glass 1</div>
                            <div className="btn">Glass 2</div>
                        </div>
                    </div>
                    <div className="ceramic">
                    <div className="blur"></div>
                        <div className="btn-container">
                            <div className="btn">Ceramic</div>
                            <div className="btn">Clay</div>
                        </div>
                    </div>
                    <div></div> */}
                </div>
            </>
    );
}