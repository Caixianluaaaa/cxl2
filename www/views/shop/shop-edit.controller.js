﻿(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'蔡仙禄',
      ab:'',
      name1:'蔡仙禄',
      phone:'15659793538',
      phone1:'15659793538',
      createTime:'2017-9-28 15:30:00',
      email:'1251975954@qq.com',
      hylx:'111'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
