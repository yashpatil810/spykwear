$(document).ready(function(){
	$('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};
      console.log(todo);
      
      $.ajax({
        method: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          console.log(data);
          location.reload();
        }
      });

      return false;

  });

  $('.todo-li').click(function(){
    var item = $(this).text();
    
    $.ajax({
      type: 'DELETE',
      url: '/todo/'+item,
      success: function(data){
        console.log(item);
        location.reload();
      }
    });
  });

});