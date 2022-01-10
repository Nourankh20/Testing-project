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
        console.log(parsedInternships.length);
        //console.log(output);

        return  output;    

      })
      .catch(console.error);
  };
  
// const getInternships = (companyName) =>
//   {
//       dataAggregate = [];
//       // companyName = companyName; 
//       return axios.get("https://www.glassdoor.com/Job/berlin-software-engineer-internship-jobs-SRCH_IL.0,6_IC2622109_KO7,35.htm")
//       .then((response) => response.data)
//       .then( (html) =>
//       {
//         const $ = cheerio.load(html);
//         const internships = $("article > div > ul > li");
//         internships.each(( i, el) =>
//         {
//           const company = $(el)
//           .find('.d-flex flex-column job-search-key-1pzmdmc e1rrn5ka1')
//           .end()
//           .find('.job-search-key-l2wjgv e1n63ojh0 jobLink')
//           .html()

//           const rating = $(el)
//           .find(". job-search-key-srfzj0 e1cjmv6j0")
//           .end();
         

//           console.log(company);
//           if (companyName ===company )
//             {
//               dataAggregate.push(
//               {
//                 rating : rating ,
//                 companyName : companyName
//               });
//             }
//         });
        
//         return dataAggregate;   // .catch(console.error);
//       }); 
    // return dataAggregate;   // .catch(console.error);
  // };
  module.exports = { getInternships };