var todoModel = require('../model/todo');

var todos = {

    //fetching all todo list
    fetchAll: function (req, res) {
        todoModel.find(function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'Error fetching todo list', message: 'DB Error' + err, docs: '' });
            }
            else {
                res.status(200).json({ status: 'fetching todo list succeed', message: 'DB Success', docs: docs });
            }
        });
    },

    //creating new todo list
    create: function (req, res) {
        newTodo = new todoModel();

        newTodo.task = req.body.task;
        newTodo.status = req.body.status;

        newTodo.save(function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'Saving todo list failed', message: 'DB Error' + err, docs: '' });
            }
            else {
                res.status(200).json({ status: 'todo list saved successfully', message: 'DB Success', docs: docs });
            }
        });
    },

    //updating existing todo list
    update: function (req, res) {
        todoModel.findById(req.params.id, function (err, docs) {
            if (err) {
                res.status(500).json({ staus: `can't fetch data to update for invalid id`, message: 'DB Error' + err, docs: '' });
            }

            docs.task = req.body.task;
            docs.status = req.body.staus;

            docs.save(function (err) {
                if (err) {
                    res.status(500).json({ status: `can't save the updated data`, message: 'DB Error' + err, docs: '' });
                }
                else {
                    res.status(200).json({ status: 'todo list updated successfully', message: 'DB Success', docs: docs });
                }
            });
        });
    },

    //deleting a todo from list
    delete: function (req, res) {
        todoModel.remove({
            _id: req.params.id
        }, function (err, docs) {
            if (err) {
                res.status(500).json({ status: `can't delete data of invalid id`, message: 'DB Error' + err, docs: '' });
            }
            else {
                res.status(200).json({ status: 'todo list deleted successfully', message: 'DB Error' + err, docs: docs });
            }
        });


    }
}

module.exports = todos;