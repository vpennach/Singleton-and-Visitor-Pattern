var CarVisitor = function()
{
    var visit = function(carVariable)
    {
        if(car.seats > 2)
        {
            console.log('this is clearly a car for old people');
        }
        else
        {
            console.log('My bet is this car has at least 2 cylinders');
        }

    }
}

var TruckVisitor = function()
{
    var visit = function(truckVariable)
    {
        if(truckVar.towPackage)
        {
            console.log('we need to buy a boat')
        }
    }
}

var MonsterTruckVisitor = function()
{
    var visit = function(monsterTruckVariable)
    {
        if(monsterTruckVar.looksLikeADragon)
        {
            console.log('that is a badass monster truck')
        }
        else
        {
            console.log('loser')
        }


    }
}

var carVariable = function()
{
    var seats = 5;
    var doors = 4;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}
var truckVariable = function()
{
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}
var monsterTruckVariable = function()
{
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject)
    {
        visitorObject.visit(this);
    }
}

var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());


