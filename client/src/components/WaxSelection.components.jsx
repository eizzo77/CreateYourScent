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
  {/* <div class="hex1">
    <div class="hex2">
      <span class="hexlink h11">
        <div class="hexcover"></div>
        <h3>Pure BeeWax</h3>
        <p>description about the this wax</p>
        <div class="plus"></div>
        </span>
    </div>
  </div>
  <div class="hex1">
    <div class="hex2">
      <span class="hexlink h12">
        <div class="hexcover"></div>
        <h3>White BeeWax</h3>
        <p>description about the this wax</p>
        <div class="plus"></div>
      </span>
    </div>
  </div>
  <div class="hex1">
    <div class="hex2">
      <a class="hexlink h13" >
        <div class="hexcover"></div>
        <h3>Soy Vegan Wax</h3>
        <p>description about the this wax</p>
        <div class="plus"></div>
      </a>
    </div>
  </div>

  <br />

  <div class="hex1">
    <div class="hex2">
      <a class="hexlink h14">
        <div class="hexcover"></div>
        <h3>Massage Coconut Pure Wax</h3>
        <p>description about the this wax</p>
        <div class="plus"></div>
      </a>
    </div>
  </div>
  <div class="hex1">
    <div class="hex2">
      <a class="hexlink h15">
        <div class="hexcover"></div>
        <h3>Chia Seeds Oil</h3>
        <p>description about the this wax</p>
        <div class="plus"></div>
      </a>
    </div>
  </div> */}
</div>  
    </>
    );
} 