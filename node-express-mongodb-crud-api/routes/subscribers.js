const express = require('express');
const router = express.Router();

const Subscriber = require('../models/subscriber');

router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getSubscriber, async (req, res) => {
  res.json(res.subscriber);
});

router.post('/', async (req, res) => {
  const subs = new Subscriber({
    name: req.body.name,
    channels: req.body.channels,
  });

  try {
    const newSubscriber = await subs.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.channels != null) {
    res.subscriber.channels = req.body.channels;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: 'Subscriber deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// middleware
async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber === null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
