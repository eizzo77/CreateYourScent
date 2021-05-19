import {Scent} from "./Scent.components";
import "./ScentSelection.components.css";

export const ScentSelection = ({title,items,setCandleObj}) => {

  const renderScents = items.map((scent) => {
    return (
      <>
        <Scent scent={scent} key={scent.name} setCandleObj={setCandleObj}/>
      </>
    );
  })

  return(
    <>
      <h3 className="level-title">
        {title}
      </h3>
      <div class="cards-list">
        {renderScents}
      </div>
    </>
    );
}