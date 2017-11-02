const { get, post, put, del } = require('server/router');
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = [
    get('/todo', async ctx => {
        let todoList;

        try {
            todoList = await Todo.find({deleted: false}).exec();
            return todoList;
        } catch (e) {
            console.log(e);
            return e;
        }
    }),
    get('/todo/:id', async ctx => {
        let todo;

        try {
            todo = await Todo.findById(ctx.params.id);
            return todo;
        } catch (e) {
            console.log(e);
            return e;
        }
    }),
    post('/todo', async ctx => {
        let todo = new Todo(ctx.data);

        try {
            await todo.save();
        } catch (e) {
            console.log(e);
            return e;
        }

        return todo;
    }),
    put('/todo/:id', async ctx => {
        let todo;

        try {
            todo = await Todo.findById(ctx.params.id);

            Object.keys(ctx.data).forEach(key => {
                todo[key] = ctx.data[key];
            });
        } catch (e) {
            console.log(e);
            return e;
        }

        return todo;
    }),
    del('/todo/:id', async ctx => {
        let todo;

        try {
            todo = await Todo.findById(ctx.params.id);
            await todo.remove();
        } catch (e) {
            console.log(e);
            return e;
        }

        return todo;
    })
];