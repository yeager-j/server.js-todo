const server = require('server');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-list', { useMongoClient: true });
mongoose.Promise = global.Promise;

require('./models/todo.model');

server(
    { security: { csrf: false } },
    ctx => {
      console.info(`${ctx.method} ${ctx.url}`);
    },
    require('./controllers/todo.controller')
).then(ctx => {
    console.log('Server launched on port ' + ctx.options.port);
});