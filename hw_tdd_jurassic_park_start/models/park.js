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

Park.prototype.dinosaursOfSpecies = function(dinosaur) {
    let dinosaursOfSpecies = []
    for (currentDinosaur of this.dinosaurs){
        if(currentDinosaur.species === dinosaur){
            dinosaursOfSpecies.push(currentDinosaur)
        }
    }
    return dinosaursOfSpecies

}

Park.prototype.totalVisitorsPerDay = function() {
    let dailyTotal = 0
    for (currentDinosaur of this.dinosaurs){
        dailyTotal += currentDinosaur.guestsAttractedPerDay
    }
    return dailyTotal
}

Park.prototype.totalVisitorsPerYear = function() {
    let dailyTotal = 0
    for (currentDinosaur of this.dinosaurs){
        dailyTotal += currentDinosaur.guestsAttractedPerDay
    }
    let anualTotal = dailyTotal * 365
    return anualTotal
}

Park.prototype.totalRevenuePerYear = function() {
    anualRevenue = this.totalVisitorsPerYear() * this.ticketPrice

    return anualRevenue
}


module.exports = Park

