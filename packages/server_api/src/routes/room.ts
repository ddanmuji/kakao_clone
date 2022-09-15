import { Router } from 'express';
import { Room, User } from '../schemas';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const rooms = await Room.findAll({ include: User });
    return res.json(rooms);
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.get('/:roomId', async (req, res) => {
  try {
    const room = await Room.findOne({
      where: { id: Number(req.params.roomId) },
      include: User,
    });

    return res.json(room);
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const room = await Room.create({ opponentId: req.body.opponentId });
    return res.json(room);
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

export default router;
