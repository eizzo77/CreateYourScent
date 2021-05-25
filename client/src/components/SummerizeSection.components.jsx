import {AddToCartButton} from "./AddToCartButton.components";
import "./SummerizeSection.components.css"
export const SummerizeSection = ({title,candleObj,saveOrder}) => {

    const renderCandleDetails = Object.keys(candleObj).map((detail) => {
        console.log(detail,candleObj[detail]);
            return <div>{`${detail} : ${candleObj[detail]}`}</div>
        })

    return(
        <>
            <h3 className="level-title">
                {title}
            </h3>
            <div className="summerize-container">
                <div className="summerize-wrapper">
                    <div className="details">
                    {renderCandleDetails}
                    </div>
                </div>
            </div>
            <AddToCartButton saveOrder={saveOrder} candleObj={candleObj}/>
        </>
    );
}