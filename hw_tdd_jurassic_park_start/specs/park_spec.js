const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4

  beforeEach(function () {
    park = new Park("Jurassic Park", 200)
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50)
    dinosaur2 = new Dinosaur("triceritops", "herbivore", 35)
    dinosaur3 = new Dinosaur("stegasaurus", "herbivore", 70)
    dinosaur4 = new Dinosaur("stegasaurus", "herbivore", 45)

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
    assert.deepStrictEqual(park.dinosaurs, [dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    assert.deepStrictEqual(park.mostVisitors(), dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.ofSpecies("stegasaurus"), [dinosaur3, dinosaur4]);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.totalVisitors(), 200);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.totalVisitorsYear(), 73000);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.totalRevenue(), 14600000);
  });

});
