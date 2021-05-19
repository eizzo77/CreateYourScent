import {useEffect, useState} from "react";
import axios from "axios";
import { ColorSelection } from "../components/ColorSection.components";
import {JarSelection} from "../components/JarSelection.components";
import { ScentSelection } from "../components/ScentSelection.components";
import { SummerizeSection } from "../components/SummerizeSection.components";
import {WaxSelection} from "../components/WaxSelection.components";
import {Spinner} from "../components/Spinner.components";
import "./QuizPage.components.css"

export const QuizPage = () => {

    const [candleObj,setCandleObj] = useState({
        scents: [],
    });
    const [quizData,setQuizData] = useState({});
    const [sectionIndex,setSectionIndex] = useState(-1);
    const [quizSections,setQuizSections] = useState([]);
    const [showSpinner,toggleShowSpinner] = useState(true);

    const getQuizsections = () => {
                                return ([  <JarSelection title={quizData.jars.title} items={quizData.jars.jarsTypes} setCandleObj={setCandleObj} property="jar"/>,
                                <WaxSelection title={quizData.waxes.title} items={quizData.waxes.waxesData} setCandleObj={setCandleObj}/>,
                                <ScentSelection title={quizData.scents.title} items={quizData.scents.scentsData} setCandleObj={setCandleObj}/>,
                                <ColorSelection title={quizData.colors.title} colors={quizData.colors.colors} setCandleObj={setCandleObj}/>,
                                <JarSelection title={quizData.wicks.title} items={quizData.wicks.wicksData} setCandleObj={setCandleObj} property="wick"/>])
    }

    useEffect(() =>  {
        const fetch = async () => {
            const quizData = await axios.get("http://localhost:5555/api/quiz-items");
            setQuizData(quizData.data[0]);
            setTimeout(()=> {
                toggleShowSpinner(false);
            },2000)
            setSectionIndex(0);
        }
        fetch();
    },[])

    useEffect(() => {
        if (Object.keys(quizData).length !== 0) {
            const sections = getQuizsections();
            setQuizSections(sections);
        }
    },[quizData])

    const arrowOnClick = (movement) => {
        const indexAfterClick = sectionIndex + movement;
        if (indexAfterClick >= 0 && indexAfterClick <= quizSections.length) {
            setSectionIndex(indexAfterClick);
        }
    }

    return(
        <div className="quiz-page" style={{backgroundColor:showSpinner? "#3f4444" : "#f8edeb"}}>
            {showSpinner ? <Spinner/> :
            <>
            <div class="arrow back" onClick={() => arrowOnClick(-1)}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>            </div>
            <div className="quiz-container">
                {sectionIndex >= 0 && sectionIndex === quizSections.length ?  <SummerizeSection title="Your Candle is Ready!" candleObj = {candleObj}/> :quizSections[sectionIndex]}
            </div>
            <div className="arrow next" onClick={() => arrowOnClick(1)}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </div>
            </>}
            {console.log(candleObj)}
        </div>
    );
}