import { useEffect, useRef } from "react";
// import "./SwatchBook";
import "./SwatchBook.components.css"

export const SwatchBook = () => {

    const sbRef = useRef(null);

    // useEffect( ()=> {
    //     sbRef.SwatchBook({})
    // },[])

    return (
        <>
        <div ref={sbRef} id="sb-container" class="sb-container">

<div>
    <span class="sb-icon icon-cog"></span>
    <h4><span>All Settings</span></h4>
</div>

<div>
    <span class="sb-icon icon-flight"></span>
    <h4><span>User Modes</span></h4>
</div>	

<div>
</div>	

<div>
    <h4><span>Profile</span></h4>
    <h5><span>We ♥ color</span></h5>
</div>

</div>
        </>
    );
}