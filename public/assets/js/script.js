$(document).ready(function() {
  // Click event for Posting a new task
  $("#submit-task").on("click", function(e) {
    e.preventDefault();

    const newTask = $("#new-task").val().trim();
    console.log(newTask);

    $.ajax("/tasks/create", {
      type: "POST",
      data: {
        task_name: newTask
      }
    }).then(function() {
      location.reload();
    });
  });

  // Click event for Updating a task from incomplete to completed
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

  // Click event for Deleting a completed task
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
