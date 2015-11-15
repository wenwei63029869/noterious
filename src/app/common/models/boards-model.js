'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, UserModel, ENDPOINT_URI, $q) {
    var service = this,
    boards = {
        1: {
          description: "Anything and everything!",
          isPublic: true,
          title: "Random Ideas"
        },
        2: {
          description: "BizDev Ideas",
          isPublic: false,
          title: "Hustle"
        },
        3: {
          description: "this is a test",
          isPublic: false,
          title: "testing"
        }
      };

      service.all = function(){
        var deferred = $q.defer;

        deferred.resolve(boards);

        return deferred.promise;
      }
  });