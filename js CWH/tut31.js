// constructor 
//inheritance

class employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
      return `I'm ${this.name} , I am coding for past ${this.experience} years and my division is ${this.division}`;
  }
  joining() {
        return `I started my journey in ${2022-this.experience}`;
  }
  static add(a,b)
  {
      return a+b;
  }
}
class programmer extends employee{
    constructor(givenName, givenExperience, givenDivision,language,github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    codingLanguage() {
        if (this.language=="Python" || this.language=="JavaScript") {
            console.log(`he is ${this.name}`);
        }
        else{
            console.log(`he is not ${this.name}`);
        }
    }

}

// sayak=new employee("Sayak",5,"development");//sayak is the object 
// console.log(sayak.joining());

// console.log(employee.add(2,3));// you can use static method without creating a object
Sayak2=new programmer("sayak",5,"development","Python","mon842");
console.log(Sayak2.joining());