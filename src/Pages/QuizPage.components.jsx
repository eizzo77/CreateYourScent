import react from "react";
import {JarSelection} from "../components/JarSelection.components";
import { ScentSelection } from "../components/ScentSelection.components";
import {WaxSelection} from "../components/WaxSelection.components";
import "./QuizPage.components.css"

const quizsections = [  <JarSelection title="Pick The Type of Jar" />,
                        <WaxSelection title="Choose your favorite Wax"/>,
                        <ScentSelection title="What are your favorite Scents?"/>]

export const QuizPage = () => {
    return(
        <div className="quiz-page">
            <div className="quiz-container">
                {quizsections[2]}
            </div>
            {/* <div className="selections-nav">
            </div> */}
        </div>
    );
}