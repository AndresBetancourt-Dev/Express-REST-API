const Task = require("../models/Task");
const Tasks = {};

Tasks.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: "There was an error with the Database" });
  }
};

Tasks.createTask = async (req, res) => {
  try {
    const { title, content, author, date } = req.body;
    const newTask = new Task({
      title,
      content,
      author,
      date,
    });
    await newTask.save();
    res.json({ message: "Task Added" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

Tasks.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

Tasks.updateTask = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
      title,
      content,
      author,
    });
    res.json({ message: "Task Updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
Tasks.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = Tasks;
