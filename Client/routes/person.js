const router = require('express').Router();
const Person = require('../models/Person');

// index
router.get('/', async (req, res) => {
  const persons = await Person.find();
  return res.json(persons);
});

// create
router.post('/', async (req, res) => {
  const  { name, age, approved } = req.body;
  const person = {
    name,
    age,
    approved
  }
  
  try {
    // save person
    await Person.create(person);
    res.status(201).send('Person created');
  } catch (error) {
    console.log(error);
  }
}); 

// show
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await Person.findById
  return res.json(person);
});

// update
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, approved } = req.body;
  // save person
  const person = await Person.findByIdAndUpdate(id, {
    name,
    age,
    approved
  });
  return res.json(person);
});

// delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await Person.findByIdAndDelete(id);
  return res.json(person);
});

module.exports = router;