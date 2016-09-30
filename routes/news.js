'use strict';

const fetchUrl = require('fetch').fetchUrl;
const xml2js = require('xml2js');
const config = require('../inc/config.json');
const parser = new xml2js.Parser();

module.exports = (request, response) => {
  const limit = request.query.limit || 100;
  
  return fetchUrl(config.newsUrl, (error, meta, body) => {
    let originalData;
    let data;
    let responseBody;
    
    if (error) {
      return response.status(500).send({error: true, error: error});
    }
    
    originalData = body.toString('utf-8');
    
    if (originalData) {
      return parser.parseString(originalData, (err, result) => {

        if (err) {
          return response.status(500).send({error: true, error: err});
        }
        
        responseBody = result.rss.channel[0].item;

        return response.status(200).send(responseBody.slice(0, limit));
      });
    }
    
    return response.status(500).send({error: true, error: 'No data received'});
  });
};
