'use strict'

function AllCatsService() {
  this.baseURL = 'https://api.thecatapi.com/v1/images/search/';
  this.searchConditions = '?limit=9&page=0';
}

AllCatsService.prototype.getCatslist = async function() {
  let header = {
    'x-api-key' : 'bdf516bc-9857-4b28-ae55-ba8068c64160',
    'Content-Type': 'application/json',
    'size': 'small'
  }
  try {
    var response = await fetch(`${this.baseURL}${this.searchConditions}`, {header: header});
    var data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

// service also declared as a singleton var
var AllCatsServiceInstance = new AllCatsService();

