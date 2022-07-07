const router = require('express').Router();
const { User } = require('../db/models');

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.post('/logup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const [currUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, password },
    });

    if (!created) {
      res.json({ created: 'error' });
    } else {
      req.session.user = currUser;
      res.json({ currUser });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      if (password === user.password.toString()) {
        req.session.user = user;
        res.json({ user });
      } else {
        res.json({ user: 'неправильный пароль' });
      }
    } else {
      res.json({ user: 'пользователь не найден' });
    }
  } catch (error) {
    res.json({ user: 'error' });
  }
});

module.exports = router;
