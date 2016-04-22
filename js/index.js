function addTodoInfo($scope){
  $scope.todoTitle = "";
  $scope.todoList = [];
  $scope.isDel = false;
  $scope.isRec = true;
  $scope.addInfo = function(){
    if($.trim($scope.todoTitle) != ""){
      $scope.todoList.push({"title": $scope.todoTitle,"isDel": false,"isRec": true});
    }
    $scope.todoTitle = "";
  }

  $scope.delInfo = function(one){
    one.isDel = true;
    one.isRec = false;
  }
  $scope.recInfo = function(one){
    one.isDel = false;
    one.isRec = true;
  }
}
