const Person = require('../../models/Person');
// index
async function index(req, res) {
  const persons = await Person.find();
  return res.json(persons);
};

// create
async function create(req, res) {
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
}; 

// show
async function show(req, res) {
  const { id } = req.params;
  const person = await Person.findById(id);
  return res.json(person);
};

// update
async function update(req, res) {
  const { id } = req.params;
  const { name, age, approved } = req.body;
  // save person
  const person = await Person.findByIdAndUpdate(id, {
    name,
    age,
    approved
  });
  return res.json(person);
};

// destroy
async function destroy(req, res) {
  const { id } = req.params;
  const person = await Person.findByIdAndDelete(id);
  return res.json(person);
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};
