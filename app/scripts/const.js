/**
 * Shared constants for the whole application.
 */
(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // URL
  app.BACK_END_URL = 'http://localhost:8080/algo-impl';


  // Endpoints

  // Algorithms
  app.REST_ALGO_ENDPOINT = app.BACK_END_URL + '/algo';
  app.REST_ALGO_SORT_ENDPOINT = app.REST_ALGO_ENDPOINT + '/sort';

  // Reports
  app.REST_REPORT_ENDPOINT = app.BACK_END_URL + '/report';
  app.REST_REPORT_SAVE_ENDPOINT = app.REST_REPORT_ENDPOINT + '/save';

  console.log('Constants set!');

})(document);
