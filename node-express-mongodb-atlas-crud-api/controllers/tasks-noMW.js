const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    //res.status(200).json({ tasks });
    //res.status(200).json({ tasks, amount:tasks.length });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ msg: error.errors.name.message });
  }
};

const getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    //const task = await Task.findById(taskId).exec(); //this is possible too
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.errors.name.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // const task = await Task.findOneAndUpdate({ _id: taskId }, req.body);
    // --> now task in db is updated, but the var still contains the old value
    // besides, validators do not run
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
      //overwrite: true; the whole object is replaced with the one sent via param. used in case of put instead of patch
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task });
    //res.status(200).send(); this is possible too
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
