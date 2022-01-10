const axios = require("axios");
const cheerio = require("cheerio");

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
  
  module.exports = {getJobType};
  
  