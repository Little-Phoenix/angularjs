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

  $scope.delInfo = function(one){
    $.each($scope.todoList,function(i,item){
      if(item.todoTitle == one.todoTitle && item.describe == one.describe){
        $scope.todoList.splice(i,1);
        return false;
      }
    });
  }

}
