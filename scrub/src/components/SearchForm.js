import React from "react";
import "../styles/SearchForm.css";

const searches =  {
  topic: "https://www.nytimes.com",
  year2017: "https://www.nytimes.com/2017",
  year2018:"https://www.nytimes.com/search?query=current%20tv"

};



const SearchForm= () => (
<div className="container1"> 
<form>
  <div className="form-group">
    <label for="InputTopic">Topic</label>
    <input type="text" class="form-control" id="InputTopic" aria-describedby="TopicHelp" placeholder="Enter topic" src = {searches.topic}/>
  </div>
  <div className="form-group">
    <label for="StartYear">Start Year</label>
    <input type="text" class="form-control" id="StartYear" placeholder="Enter Start Year" src = {searches.year2017} />
  </div>
  <div className="form-group">
    <label for="EndYear">End Year</label>
    <input type="text" class="form-control" id="EndYear" placeholder="Enter End Year" src = {searches.year2018} />
  </div>
  <button onClick = {searches} type="search" class="btn btn-primary">Search</button>s
</form>
</div>
);

export default SearchForm;