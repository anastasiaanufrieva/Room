require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
let db = require('./db');
const PORT = 3001;
const app = express();

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routes/userRouter');

// app.use(cors());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(morgan('dev'));

app.use(
  session({
    secret: 'oh klahoma',
    resave: false,
    store: new FileStore(),
    saveUninitialized: false,
    name: 'sid',
    cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 },
    httpOnly: true,
  }),
);

app.use((req, res, next) => {
  res.locals.userId = req.session?.userId;
  next();
});

app.use('/user', userRouter);

//Получаем массив комнат
app.get('/rooms', (req, res) => {
  const rooms = db.map(el => ({ id: el.id, room: el.room }))
  res.json(rooms);
});
//Отдает массив устройств в комнате
app.get('/rooms/:id', (req, res) => {
  const data = db.find(el => el.id === Number(req.params.id))
  if (data) {
    return res.json(data.devices)
  }
  res.json([]);
});

app.post('/rooms', (req, res) => {
  const {id, elId} = req.body
  const data = db.find(el => el.id === +id).devices.find(el => el.id === +elId)
  data.status = !data.status
})

app.listen(PORT, () => {
  console.log('Server has been started on PORT ' + PORT)
})
