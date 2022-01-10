const axios = require("axios");
const cheerio = require("cheerio");

const getCompJobs = (locationName) => {
  return axios
    .get(
      "https://wuzzuf.net/a/Software-Engineer---Internship-Jobs-in-Egypt"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
         
      const companies = $("div>div>div>div>div .css-d7j1kk>a");
      const locations = $("div>div>div>div>div .css-d7j1kk>span");

      const parsedcompanies = [];
      for (let company of companies) {
        parsedcompanies.push($(company).text());
      }

      const parsedlocations = [];
      for (let location of locations) {
        parsedlocations.push($(location).text());
      }
      
      var items = []
      for (let i = 0 ; i < parsedcompanies.length ; i++){
        items.push([parsedcompanies[i],parsedlocations[i]]);
      }
      

      if(locationName){
        let searchRes = []
        for (let i = 0 ; i < items.length ; i++){
          if(items[i][1].includes(locationName)){
            searchRes.push(items[i][0]);
          }
        }
        return searchRes;
      }
      return parsedcompanies;

    })
    .catch(console.error);
    
};
const getJobType = (jobType) => {
    return axios
      .get(
        "https://wuzzuf.net/a/Software-Engineer---Internship-Jobs-in-Egypt"
      )
      .then((response) => response.data)
      .then((html) => {
        const $ = cheerio.load(html);
       
        const jobs = $("div>div>div>h2>a");
  
        const parsedjobs = [];
        for (let job of jobs) {
          parsedjobs.push($(job).text());
        }
        console.log(parsedjobs)
      
  
        if(jobType){ 
          let searchRes = []
          for (let i = 0 ; i < parsedjobs.length ; i++){
            if((parsedjobs[i]).includes(jobType)){
              searchRes.push(parsedjobs[i]);
            }
          }
          console.log(searchRes);
          return searchRes;
        }
        return parsedjobs;
  
      })
      .catch(console.error);
  };
module.exports = { getCompJobs ,getJobType};
