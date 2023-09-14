const Task = require('../models/task')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong, please try again' })
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong, please try again' })
    }
}
const getTask = (req, res) => {
    res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
    res.send('Update a task')
}
const deleteTask = (req, res) => {
    res.send('Delete a task')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}