const axios = require("axios");
const cheerio = require("cheerio");

const getInternships = (companyName) => {
    return axios
      .get(
        "https://www.glassdoor.com/Job/berlin-software-engineer-internship-jobs-SRCH_IL.0,6_IC2622109_KO7,35.htm"
      )
      .then((response) => response.data)
      .then((html) => {
        const $ = cheerio.load(html);
        const internships = $("article > div > ul > li > div > a");
  
        const parsedInternships = [];
        for (let internship of internships) {
            parsedInternships.push(internship.text);
        }
        console.log(internships);

        return companyName
          ? parsedInternships.filter(
              (internship) =>
                internship.toLocaleLowerCase() ===
                companyName.toLocaleLowerCase()
            )
          : parsedInternships;
      })
      .catch(console.error);
  };
  
  module.exports = { getInternships };