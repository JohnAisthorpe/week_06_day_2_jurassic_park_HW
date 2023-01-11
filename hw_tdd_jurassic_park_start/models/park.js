const Park = function (name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.numberOfDinosaurs = function() {
    return this.dinosaurs.length;
}

Park.prototype.removeDinosaurByName = function(dinosaur) {
    for (currentDinosaur of this.dinosaurs){
        if (currentDinosaur.species === dinosaur){
        
            const indexOfDinosaur = this.dinosaurs.indexOf(currentDinosaur)
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

Park.prototype.ofSpecies = function(species) {
    let speciesList = [];
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            speciesList.push(dinosaur);
        }
    }
    return speciesList;
}

Park.prototype.totalVisitors = function() {
    let total = 0;
    for (dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
        }
    
    return total;
}

Park.prototype.totalVisitorsYear = function() {
    let totalPerDay = this.totalVisitors() ;
    let totalPerYear = totalPerDay * 365;
    return totalPerYear;
}

Park.prototype.totalRevenue = function(species) {
    let totalVisitorsPerYear = this.totalVisitorsYear();
    let totalRev = totalVisitorsPerYear * 200;
    return totalRev;
}

module.exports = Park