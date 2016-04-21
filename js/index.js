function addTodoInfo($scope){
  $scope.todoTitle = "";
  $scope.describe = "";
  $scope.todoList = [];
  $scope.addInfo = function(){
    if($.trim($scope.todoTitle) != ""){
      $scope.todoList.push({"title": $scope.todoTitle, "describe": $scope.describe});
    }
    $scope.todoTitle = "";
    $scope.describe = "";
  }

}
