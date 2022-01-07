const axios = require("axios");
const cheerio = require("cheerio");

const getInternships = (companyName) => {
    companyName = companyName+" Logo"; 
    return axios
      .get(
        "https://www.glassdoor.com/Job/berlin-software-engineer-internship-jobs-SRCH_IL.0,6_IC2622109_KO7,35.htm"
      )
      .then((response) => response.data)
      .then((html) => {
        const $ = cheerio.load(html);
        const internships = $("article > div > ul > li > div > a  > span > img");

        const parsedInternships = [];
        for (let internship of internships) {
            parsedInternships.push(internship.attribs.title);
        }
        // console.log(internships);
        output = companyName
        ?  parsedInternships.filter(
            (internship) =>
              internship.toLocaleLowerCase().split(' ')[0] ===
              companyName.toLocaleLowerCase().split(' ')[0]
          )
        : parsedInternships;   

        for (let internship of parsedInternships) {
            internship =internship.toString().split(" ")[0, internship.length-1];
            
        }
        console.log(parsedInternships)
        return  output;    

      })
      .catch(console.error);
    //   console.log(parsedInternships)
  };
  
  module.exports = { getInternships };