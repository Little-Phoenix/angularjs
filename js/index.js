function addTodoInfo($scope){
  $scope.todoTitle = "";
  $scope.todoList = [];
  $scope.isDel = false;
  $scope.isRec = true;
  //初始化，初始化todoList
  $scope.init = function(){
    var keys = localStorage.getItem("keys");
    if(keys){
      var keyArr = keys.split(",");
      $.each(keyArr,function(i,key){
        var oneStr = localStorage.getItem(key);
        if(oneStr){
          var one = JSON.parse(oneStr);
          $scope.todoList.push(one);
        }
      });
    }
  }
  $scope.addInfo = function(){
    if($.trim($scope.todoTitle) != ""){
      var currentTime = new Date();
      var one = {"title": $scope.todoTitle,
                 "isDel": $scope.isDel,
                 "isRec": $scope.isRec,
                 "createTime": currentTime,
                 "updateTime": currentTime,
                 "key": currentTime.getTime()};
      $scope.todoList.push(one);

      var keys = localStorage.getItem("keys");
      if(!keys){
        keys = currentTime.getTime();
      }else{
        keys += "," + currentTime.getTime();
      }

      //保存值
      localStorage.setItem("keys", keys);
      localStorage.setItem(currentTime.getTime(), JSON.stringify(one));
    }
    $scope.todoTitle = "";
  }

  $scope.delInfo = function(one){
    one.isDel = true;
    one.isRec = false;
    one.updateTime = new Date();
    localStorage.setItem(one.key, JSON.stringify(one));
  }
  $scope.recInfo = function(one){
    one.isDel = false;
    one.isRec = true;
    one.updateTime = new Date();
    localStorage.setItem(one.key, JSON.stringify(one));
  }

  $scope.init();

}
