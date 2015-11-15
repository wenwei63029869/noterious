'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, UserModel, ENDPOINT_URI, $q) {
    var service = this;

    function extract(result) {
      return result.data;
    }

    function getUrl() {
      return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards.json';
    }

    service.all = function () {
      return $http.get("https://wenwei63029869.firebaseio.com/users/b901cb6b-6036-4d2d-994e-fbca2d51aa92/boards.json").then(extract);
    };
    /*
    function getUrlForId(boardId) {
      return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards/' + boardId + '.json';
    }

    service.fetch = function (boardId) {
      return $http.get(getUrlForId(boardId)).then(extract);
    };

    service.create = function (board) {
      return $http.post(getUrl(), board).then(extract);
    };

    service.update = function (boardId, board) {
      return $http.put(getUrlForId(boardId), board).then(extract);
    };

    service.destroy = function (boardId) {
      return $http.delete(getUrlForId(boardId)).then(extract);
    };
    */
  });