import axios from "axios";


export default {

  getTopic: function() {
    return axios.get("https://www.nytimes.com");
  },
  getStartYear: function() {
    return axios.get("https://www.nytimes.com/2017");
  },
  getEndYear: function() {
    return axios.get("https://www.nytimes.com/search?query=current%20tv");
  },
};

 