const Park = function (name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.numberOfDinosaurs = function () {
    return this.dinosaurs.length;
}

Park.prototype.removeDinosaurByName = function (dino) {
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species === dino){
        
            const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
            this.dinosaurs.splice(indexOfDinosaur, 1)}
        
    }
}

Park.prototype.mostVisitors = function() {
    let visitorCounter = 0
    let mostVisited = []
    for (dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay >= visitorCounter){
            mostVisited = dinosaur
            visitorCounter = dinosaur.guestsAttractedPerDay}
        }
    return mostVisited
    
}

module.exports = Park

