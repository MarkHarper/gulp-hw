(function () {
  'use strict';

  var records = csvToObjects(titanic, ['id', 'survived', 'pclass', 'name', 'sex',
   'age', '', '', 'ticket', 'fare', '', ''], true);


  function sum (ar, key) {
    ar = _.pluck(ar, key);
    return _.reduce(ar, function(sum, el) {
      return sum + Math.round(parseFloat(el));
    }, 0)
  }

  function average (ar, key) {
    ar = _.pluck(ar, key);
    var total = _.reduce(ar, function(sum, el) {
      return sum + Math.round(parseFloat(el));
    }, 0)
    return Math.round(total/ar.length);
  }

  function percentage (ar, key, value) {
    var filtered = filterRecords(ar, key, value);
    return Math.round((filtered.length / ar.length) * 100);
  }

  function filterRecords (ar, key, val) {
    return _.filter(ar, function (instance.key) {
      return instance.key != val;
    })
  }

  console.log(records.length);
  console.log(filterRecords(arr, 'survived', 0).length);






})();
