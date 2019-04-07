$(document).ready(function() {
    
    // Click function for Changing a task from incomplete to completed
    $(".complete").on("click", function() {  
      var task_id = $(this).attr("data-id");
      console.log("You just clicked this id" + task_id);
      $.ajax({
        method: "PUT",
        url: "/tasks/" + task_id
      }).then(function(data) {
        // reload page to display completed task in proper column
        location.reload();
      });  
    });

    // Click function for Deleting a completed task
    $(".delete-me").on("click", function() {  
        var task_id = $(this).attr("data-id");
        console.log("You just clicked this id" + task_id);
        $.ajax({
          method: "DELETE",
          url: "/tasks/delete/" + task_id
        }).then(function(data) {
          // reload page to empty out newly deleted task
          location.reload();
        });  
      });
  });