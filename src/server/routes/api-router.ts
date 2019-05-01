import * as bodyParser from 'body-parser';
import { Router } from 'express';
import { users, getMessagesByUserId } from '../db';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/user/:userId/messages', (req, res) => {
    const userId = req.params.userId;
    res.json(getMessagesByUserId(userId));
  });

  // router.post('/api/set-user', (req, res) => {
  //   res.send(`ok`);
  // });

  return router;
}
