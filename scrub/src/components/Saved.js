import React from "react";
import "../styles/Saved.css";


const Saved= () => (
<div className="container3"> 

  <h3>Saved Articles</h3>
  <div class="buttonInside">
   <input placeholder="News Article Data Saved" size = "135" />
    <button id="save">Remove</button>
    <input placeholder="Notes:" size = "135" /> 
  </div>
  <div class="buttonInside" >
   <input placeholder="News Article Data Saved" size = "135" />
    <button id="save">Remove</button>
  <input placeholder="Notes:" size = "135" /> 
  </div>

</div>
);

export default Saved;