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
        const internships = $("ul > li > a > span");
  
        const parsedInternships = [];
        for (let internship of internships) {
            parsedInternships.push(internship.text);
        }
        // return firstCharacter
        //   ? parsedPresidents.filter(
        //       (president) =>
        //         president.charAt(0).toLocaleLowerCase() ===
        //         firstCharacter.toLocaleLowerCase()
        //     )
        //   : parsedPresidents;
      })
      .catch(console.error);
  };
  
  module.exports = { getInternships };