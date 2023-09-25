    // Домашка 17

    function calcSquare (a, b) {
        // return console.log((a + b)* 2)
        
    }
    

    function square (a) {
        return (a * a)
         
    };
    // console.log(square())

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (i = 0; i < arr.length; i++ ) {
    // console.log(arr[i] * 2)
  }

  // Homework 20
  //part 1 start
  const myJob = {
    ocupation: 'bartender',
    expirience: 10,
    favCocktail: 'french75',
    mixology: true
  }

  const myHobbi = {
    hobbidirection: 'dogs',
    favBreed: 'pitbull',
    haveDog: true,
  }

  const myEduc = {
    educationName: "frontend",
    classes: 48,
    exams: true
  }

 let GiyosAka = {
    smart: true,
    age: 28,
    hair: 'short',
    badHuman: false
  }

  const tehnikumSchool = {
    adress: 'Afrosiyob-2',
    directions: 'development',
  }

  //part 1 end
  //part 2 start

  console.log(myJob.ocupation)
  console.log(myJob.expirience)
  console.log(myJob.favCocktail)
  console.log(myJob.mixology)

  for (key in myHobbi) {
    console.log (myHobbi[key])
  }

   const GiyosAkaJSON = JSON.stringify(GiyosAka);
   console.log(GiyosAkaJSON)
   const objFromGiyosAkaJSON = JSON.parse(GiyosAkaJSON);
   console.log(objFromGiyosAkaJSON);
//part 2 end

//part 3 start

const lifeAspects = [
  {
    aspect: "work",
    position: "Software Engineer",
    company: "Tech Solutions",
    location: "New York",
    yearsExperience: 3
  },
  {
    aspect: "education",
    degree: "Bachelor's in Computer Science",
    university: "State University",
    graduationYear: 2019
  },
  {
    aspect: "hobby",
    hobbyName: "Painting",
    style: "Abstract",
    medium: "Acrylic",
    timeSpent: "Weekends"
  },
  {
    aspect: "fitness",
    activity: "Running",
    frequency: "Daily",
    distance: "5km",
    goals: "Marathon"
  },
  {
    aspect: "travel",
    destinations: ["Paris", "Barcelona", "Tokyo"],
    favorite: "Tokyo",
    nextDestination: "Cape Town"
  }
];

const keys = [];
const values = [];
const keyValuePair = [];

for (const obj of lifeAspects) {
  for (const key in obj) {
    keys.push(key);
    values.push(obj[key]);
    keyValuePair.push({ key: key, value: obj[key] });
  }
}

console.log("Список ключей:", keys);
console.log("Список значений:", values);
console.log("Ключи и значения вместе:", keyValuePair);
//part 3 end





