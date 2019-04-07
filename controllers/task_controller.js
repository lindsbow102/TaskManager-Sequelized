var express = require("express");

var router = express.Router();

// Import the entire models folder
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/tasks");
});

// Create all our routes and set up logic within those routes where required.
router.get("/tasks", function(req, res) {
  db.Task.findAll().then(function(dbTask) {
    console.log(dbTask);
    var hbsObject = {
      tasks: dbTask
    };
    return res.render("index", hbsObject);
  });
});

router.post("/tasks/create", function(req, res) {
  db.Task.create({
    task_name: req.body.task_name
  }).then(function(dbTask) {
    console.log(dbTask);
    res.redirect("/");
  });
});

router.put("/tasks/:id", function(req, res) {

  
  db.Task.update({
      completed: true
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      //res.redirect does not work here.  Another option would be res.sendStatus(200);
      res.json("/");
    });
});

router.delete("/tasks/delete/:id", function(req, res) {
  db.Task.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbTask) {
        //res.redirect does not work here.  Another option would be res.sendStatus(200);
        res.json("/");
  })
});

// Export routes for server.js to use.
module.exports = router;
