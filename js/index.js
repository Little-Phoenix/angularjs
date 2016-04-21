function addTodoInfo($scope){
  $scope.todoTitle = "";
  $scope.todoList = [];
  $scope.addInfo = function(){
    if($.trim($scope.todoTitle) != ""){
      $scope.todoList.push({"title": $scope.todoTitle});
    }
    $scope.todoTitle = "";
  }

  $scope.delInfo = function(one){
    $.each($scope.todoList,function(i,item){
      if(item.todoTitle == one.todoTitle){
        $scope.todoList.splice(i,1);
        return false;
      }
    });
  }

}
