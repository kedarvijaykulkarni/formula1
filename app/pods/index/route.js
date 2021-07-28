import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  queryParams = {
    season: {
      refreshModel: true,
    },
  };
  async model(params) {
    let urlString = `//ergast.com/api/f1/current.json`;
    if (params && params.season) {
      urlString = `//ergast.com/api/f1/${params.season}.json`;
    }
    console.log('urlString', urlString);
    return fetch(urlString)
      .then((response) => response.json())
      .then((data) => {
        return {
          races: data.MRData.RaceTable.Races,
          season: data.MRData.RaceTable.season,
        };
      });
  }
}
