var app = angular.module("myApp",[]);
function PhoneListCtrl($scope){
  $scope.phones = [
    {"name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S.",
    "age": 1},
    {"name": "Motorola XOOM with Wi-Fi",
    "snippet": "The Next, Next Generation tablet.",
    "age": 42},
    {"name": "MOTOROLA XOOM1",
    "snippet": "The Next, Next Generation tablet.",
    "age": 23}
];
}


function customersCtrl($scope, $location){
  $scope.myUrl = $location.absUrl();
}


function timeoutCtrl($scope, $timeout){
  $scope.myHeader = "Hello World!";
  $timeout(function(){
    $scope.myHeader = "How are you today?";
  }, 2000);
}


app.service('hexify', function() {
  this.myFunc = function(x){
    return x.toString(16);
  }
});

function zidingyiCtrl($scope, hexify){
  $scope.hex = hexify.myFunc(255);
}

app.filter('myFormat', ['hexify', function(hexify){
  return function(x){
    return hexify.myFunc(x);
  }
}])

function filterCtrl($scope){
  $scope.counts = [255,251,200];
}
