const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');
const {
    mongoClient
} = require('./db');
const PORT = 3000;
const app = express();

const getJobs = async (companyName) => {
    var items = []
    return axios
        .get(
            "https://www.snagajob.com/search?q=software+engineer&radius=20"
        )
        .then((response) => response.data)
        .then((html) => {
            const $ = cheerio.load(html);

            const jobs = $("job-card > div > div > h2");

            const parsedJobs = [];
            for (let job of jobs) {
                parsedJobs.push($(job).text());
            }
            const companies = $("job-card > div > div > h3");

            const parsedCompanies = [];
            for (let company of companies) {
                parsedCompanies.push($(company).text());
            }

            for (let i = 0; i < parsedCompanies.length; i++) {
                items.push([parsedJobs[i], parsedCompanies[i]]);
            }
            console.log(items);

            if (companyName) {
                let searchRes = []
                for (let i = 0; i < items.length; i++) {
                    if (items[i][1] == companyName) {
                        searchRes.push(items[i][0]);
                    }
                }
                console.log(searchRes);
                return searchRes;
            }
            return parsedCompanies;
        })
        .catch(console.error);

};



module.exports = {
    getJobs
};