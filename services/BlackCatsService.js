'use strict'

function BlackCatsService() {
  this.baseURL = 'https://api.thecatapi.com/v1/images/search';
  this.searchConditions = '?limit=3&breed_id=bomb';
}

BlackCatsService.prototype.getCatslist = async function() {
  let header = {
    'x-api-key' : 'bdf516bc-9857-4b28-ae55-ba8068c64160',
    'Content-Type': 'application/json',
    'size': 'small'
  }
  try {
    var response = await fetch(`${this.baseURL}${this.searchConditions}`, {header: header});
    var data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log(error);
  }
}

// service also declared as a singleton var
var BlackCatsServiceInstance = new BlackCatsService();

