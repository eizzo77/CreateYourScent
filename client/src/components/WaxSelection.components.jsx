import "./WaxSelection.components.css"

export const WaxSelection = ({title,items,setCandleObj}) => {

  const renderWaxHex = items.map((item,index) => {
    return (
      <div class="hex1" >
        <div class="hex2">
        <a class={`hexlink h${index+1}`}>
          <div class="hexcover"></div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div class="plus" onClick={() => setCandleObj((prevState)=> ({...prevState,wax:item.name}))}></div>
      </a>
    </div>
  </div>
    );
  })

    return(
        <>
            <h3 className="level-title">
                {title}
            </h3>
<div id="hexcontainer">
  {renderWaxHex}
</div>  
    </>
    );
} 