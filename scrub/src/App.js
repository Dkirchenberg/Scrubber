import React from "react";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import Saved from "./components/Saved";


const App = () => (
<div className="container">
<Title />
<SearchForm />
<Results />
<Saved />

</div>
);

export default App;


