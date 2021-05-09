import react from "react";
import "./QuizPage.components.css"

export const QuizPage = () => {
    return(
        <div className="quiz-page">
            <div className="quiz-container">
                <h3 className="level-title">
                FROM mindful mission TO unique*
                <br/>
                BE PART OF YOUR MOMENT
                </h3>
                <div className="jar-selection-container">
                    <div className="glass">
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
                    <div></div>
                </div>
            </div>
        </div>
    );
}