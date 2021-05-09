import react from "react";
import {JarSelection} from "../components/JarSelection.components";
import {WaxSelection} from "../components/WaxSelection.components";
import "./QuizPage.components.css"

const quizLevels = [<JarSelection title="Pick The Type of Jar" />,<WaxSelection title="Choose your favorite Wax"/> ]

export const QuizPage = () => {
    return(
        <div className="quiz-page">
            <div className="quiz-container">
                {quizLevels[1]}
            </div>
            <div className="selections-nav">

            </div>
        </div>
    );
}