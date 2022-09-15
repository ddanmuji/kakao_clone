import { Router } from 'express';
import { Op } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { User } from '../schemas';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await User.findAndCountAll({
      where: { id: { [Op.ne]: req.session.userId } },
    });

    return res.json(result);
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.get('/me', async (req, res) => {
  try {
    const { username, userId, isLogged } = req.session;

    return res.json({ username, userId, isLogged });
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const userId = uuid();
    const username = req.body.username;
    const user = await User.create({ id: userId, username });

    req.session.username = username;
    req.session.userId = userId;
    req.session.isLogged = true;

    await req.session.save();

    return res.json({ statusText: 'OK', data: user });
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.post('/logout', async (req, res) => {
  try {
    delete req.session.user;
    await req.session.save();

    return res.redirect('/');
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

export default router;
