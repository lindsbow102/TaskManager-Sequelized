module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    task_name: DataTypes.STRING,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Task;
}
