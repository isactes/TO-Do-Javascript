const fetch = require('node-fetch')
const config = require('../../../config')


const fetch = require('node-fetch');
const config = require('../../../config');

async function Ramdom_Qoute_url() {
  try {
    const ramdomQouteurl = config.apiQouteRamdom.uri;
    const options = {
      method: 'GET',
      headers: { Accept: 'application/json' }
    };

    const response = await fetch(ramdomQouteurl, options);
    if (response.status === 200) {
      const data = await response.json();
      console.log(`✨Recache successful Random Quote: ${response.status}`, data);
      return data; 
    } else {
      console.error(`Recache failed 💀: ${response.status}`);
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred 💀💀', error);
    throw error;
  }
}

module.exports = { Ramdom_Qoute_url }