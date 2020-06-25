 // Q1. make a string out of an array
 const fruits = ['apple', 'banana', 'orange'];
 const fruitsString = fruits.toString();
 console.log(fruitsString);
 console.log(fruits.join());

 // Q2. make an array out of a string
 const fruits2 = '🍎, 🥝, 🍌, 🍒';
 const fruitsArray = fruits2.split(",");
 console.log(fruitsArray);

 // Q3. make this array look like this: [5, 4, 3, 2, 1]
 const array = [1, 2, 3, 4, 5];
 const arrayReverse = array.reverse();
 console.log(arrayReverse);

 // Q4. make new array without the first two elements
 const array2 = [1, 2, 3, 4, 5];
 const array3 = array2.slice(2, 5);
 console.log(array3);


 class Student {
     constructor(name, age, enrolled, score) {
         this.name = name;
         this.age = age;
         this.enrolled = enrolled;
         this.score = score;
     }
 }
 const students = [
     new Student('A', 29, true, 45),
     new Student('B', 28, false, 80),
     new Student('C', 30, true, 90),
     new Student('D', 40, false, 66),
     new Student('E', 18, true, 88),
 ];
 // Q5. find a student with the score 90
 const student90 = students.filter(student => student.score === 90);
 console.log(student90[0].name);

 // Q6. make an array of enrolled students
 let enrolledArray = [];
 const enrolledStudents = students.filter(student => student.enrolled === true).forEach(e => enrolledArray.push(e
     .name));
 console.log(enrolledArray);

 // Q7. make an array containing only the students' scores
 // result should be: [45, 80, 90, 66, 88]
 let scoresArray = [];
 students.forEach(student => scoresArray.push(student.score));
 console.log(scoresArray);
 // Q8. check if there is a student with the score lower than 50
 let lowScoreStudents = students.filter(student => student.score < 50);
 console.log(lowScoreStudents, 1);

 if (lowScoreStudents == false) {
     console.log("There is no student with the score lower than 50");
 } else {
     console.log("There are students with the score lower than 50");
 }

 // Q9. compute students' average score
 // const scoreSum = scoresArray.forEach(score => score);
 let scoreSum = 0;
 for (let i = 0; i < scoresArray.length; i++) {
     scoreSum += scoresArray[i];
 }
 const averageScore = scoreSum / students.length;
 console.log(averageScore);

 // Q10. make a string containing all the scores
 // result should be: '45, 80, 90, 66, 88'
 const scoresString = scoresArray.join();
 console.log(scoresString);

 // Bonus! do Q10 sorted in ascending order
 // result should be: '45, 66, 80, 88, 90'
 console.log(scoresArray.sort().join());