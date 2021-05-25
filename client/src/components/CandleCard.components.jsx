import {AddToCartButton} from "../components/AddToCartButton.components"
import "./CandleCard.components.css"

export const CandleCard = ({candle}) => {

    const renderCandleDetails = () => {
        console.log(Object.keys(candle))
        return Object.keys(candle).map(detail => {
            return (detail !== "imageURL" && detail !== "_id") && <p>{candle[detail]}</p>
        })
    }

    return (
        <div className="card-container">
            <img className="card-img" src={candle.imageURL}/>
            <p>Wax: {candle.wax}</p>
            <p>Wick: {candle.wick}</p>
            <p>Burn Time: {candle.burnTime}</p>
            <p>Scents: {candle.scents.join(",")}</p>
            <AddToCartButton />
            {/* {renderCandleDetails()} */}

        </div>
    );
}