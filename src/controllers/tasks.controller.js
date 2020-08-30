const Tasks = {};

Tasks.getTasks = (req, res) => res.json([]);
Tasks.createTask = (req, res) => res.json({ message: "Task Created" });

Tasks.getTaskById = (req, res) => res.json({});
Tasks.updateTask = (req, res) => res.json({ message: "Task Updated" });
Tasks.deleteTask = (req, res) => res.json({ message: "Task Deleted" });

module.exports = Tasks;
