/**
 * Created by gcDataTechnology on 1/22/2016.
 */
var recipeApp = angular.module('recipeApp',['ui.bootstrap']);

recipeApp.controller('messagesModalController', function($scope, $http){

    //$scope.message = message;
    $scope.pushem= function(message){

        alert(message);
    }



});