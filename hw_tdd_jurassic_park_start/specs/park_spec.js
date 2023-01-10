const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park("Jurassic Park", 200)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur("triceritops", "herbivore", 35);
    dinosaur3 = new Dinosaur("stegasaurus", "herbivore", 70);

  })

  it('should have a name', function() {
    assert.strictEqual(park.name, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 200)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    assert.strictEqual(park.numberOfDinosaurs(), 2)
    // console.log(park.dinosaurs)
  });

  
  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaurByName("t-rex")
    const expected = [dinosaur2]
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    assert.deepStrictEqual(park.mostVisitors(), dinosaur3)
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
