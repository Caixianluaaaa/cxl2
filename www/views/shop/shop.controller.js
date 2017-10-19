(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'蔡仙禄',
        ab:'',
        name1:'刘智勇',
        phone:'15659793538',
        phone1:'15659793538',
        createTime:'2017-9-28 15:30:00',
        email:'1251975954@qq.com',
        hylx:'111'
      });
    });
  }])
})();
