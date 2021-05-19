import react from "react";
import "./SummerizeSection.components.css"
export const SummerizeSection = ({title,candleObj}) => {

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
                    <div className="add-to-cart-btn">
                        ADD TO CART
                    </div>
                </div>
            </div>
        </>
    );
}