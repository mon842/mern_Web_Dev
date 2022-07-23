let car={
    name:'bmw',
    address:'123 Main Street',
    color:'red',
    
    drive:function()
    {
        console.log('going to drive');
    }
};

// creating constructor

function details(givenName,givenAddress,givenColor,givenSpeed){
    this.name=givenName,
    this.address=givenAddress,
    this.color=givenColor,
    this.speed=givenSpeed
    this.analysis=function()
    {
        console.log(`this is almost ${200-this.speed} slower than f1`)
    }
    this.drive=function()
    {
        console.log(`going to drive ${this.name}`);
    }
};

details.prototype.getan=function(an)
{
    return this.analysis
};
car1=new details('bmw','123 Main Street','red',22);
car2=new details('rolls royal','123 Main Street','white',30);
console.log(car);