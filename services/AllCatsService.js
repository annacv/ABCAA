'use strict'

class AllCatsService {
  constructor() {
    this.baseURL = 'https://api.thecatapi.com/v1/images/search/';
    this.searchConditions = '?limit=9&page=0';
  }
  getCatslist = async () => {
    const header = {
      'x-api-key': 'bdf516bc-9857-4b28-ae55-ba8068c64160',
      'Content-Type': 'application/json',
      'size': 'small'
    }
    try {
      const response = await fetch(`${this.baseURL}${this.searchConditions}`, { header: header });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const AllCatsServiceInstance = new AllCatsService();


