import axios from "axios";
import { useState,useEffect } from "react";
import {CandleCard} from "../components/CandleCard.components";
import {Spinner} from "../components/Spinner.components";
import "./StorePage.components.css"

export const StorePage = () => {

    const [candles,setCandles] = useState([]);
    const [spinner,toggleSpinner] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const candlesRes = await axios.get("http://localhost:5555/api/candle");
            setCandles(candlesRes.data)
            toggleSpinner(false);
        }
        fetch();
    },[])

    const renderCandlesProducts = () => {
        return candles.map(candle => {
            return <CandleCard key={candle.id} candle={candle}/>
        })
    }

    return(
        <div className="store-page" style={{backgroundColor:spinner? "#3f4444" : "#f8edeb"}}>
            <div className="store-container">
            {spinner? <Spinner/> :
                renderCandlesProducts()}
            </div>
        </div>
    );
}