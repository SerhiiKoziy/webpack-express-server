import express from 'express';

const router = express.Router();
router.get('/get1', function (req, res) {
  res.send('Hello World1 from get1!');
});
router.get('/get2', function (req, res) {
  res.send('Hello World2 from get2!');
});
router.get('/get3', function (req, res) {
  res.send('Hello World3 from get3!');
});

export default router;