import express from 'express';
import Firearm from '../models/firearmModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'get all guns'});
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'get specific gun'});
});

router.post('/', async (req, res) => {
    const {name} = req.body;


    try {
        const gun = await Firearm.create({ name });
        res.status(200).json(gun);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a gun'});
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'rename a gun'});
});

export default router;