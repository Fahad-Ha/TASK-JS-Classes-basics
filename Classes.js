/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here

  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  printName() {
    return `${this.firstName} ${this.lastName}`;
  }
  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const person1 = new Person("Fahd", "Ahmad", "Male", 1998);
person1.printName();
const age1 = person1.calculateAge(2023);

const person2 = new Person("Ahmad", "Khalid", "Male", 1990);
person2.printName();
const age2 = person2.calculateAge(2023);

const person3 = new Person("Abdullah", "Nasser", "Male", 1992);
person3.printName();
const age3 = person3.calculateAge(2023);

const ageArray = [age1, age2, age3];
let agesSum = 0;
for (let i = 0; i < ageArray.length; i++) {
  agesSum += ageArray[i];
}

console.log("sum", agesSum);
// console.log("test", test);
/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  ratingArray = [];
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    // this.rating = rating;
  }

  rate(rating) {
    if (rating >= 0 && rating <= 10) this.ratingArray.push(rating);
    return rating;
  }

  averageRating() {
    let ratingTotal = 0;
    for (let i = 0; i < this.ratingArray.length; i++) {
      ratingTotal += this.ratingArray[i];
    }

    return ratingTotal / this.ratingArray.length;
  }
  // averageRating() {
  //   return this.ratingArray.reduce(
  //     (accumlator, currentValue) => accumlator / currentValue
  //   );
  // }
}

const movie1 = new Movie("Test", "120", "Horror");
movie1.rate(9);
movie1.rate(10);
console.log(movie1.ratingArray);
console.log(movie1.averageRating());
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  constructor(firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear);
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    return this.movies;
  }
}

const actor1 = new Actor("fahad", "Ahmad", "Male", 1998);
console.log(actor1.addMovie("Naruto"));
console.log(actor1);
