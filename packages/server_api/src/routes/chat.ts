import { Router } from 'express';
import { Chat, Room, User } from '../schemas';

const router = Router();

router.get('/:roomId', async (req, res) => {
  try {
    const chat = await Chat.findAll({
      where: { roomId: req.params.roomId },
      include: [User, Room],
    });

    return res.json(chat);
  } catch (error) {
    return res.json({ message: 'error' });
  }
});

router.post('/:roomId', async (req, res) => {
  try {
    const chat = await Chat.create({
      senderId: req.session.userId,
      content: req.body.content,
      roomId: req.params.roomId,
    });

    return res.json(chat);
  } catch (error) {
    console.error(error);
    return res.json({ message: 'error' });
  }
});

export default router;
