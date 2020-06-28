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
 console.log(arrayReverse); //기존 배열도 reverse 시키고, return 까지 함.
 console.log(array);

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
 //My answer
 const student90 = students.filter(student => student.score === 90);
 console.log(student90[0].name);
 //Ellie T's answer
 const result = students.find((student) => student.score === 90);
 console.log(result);
 //  find 함수는 배열 원소에 대해서 주어진 함수연산을 하다가 함수가 true를 반환하면 find함수도 같이 종료됩니다. find함수로 조건에 만족하는 원소를 반환하지 못하는 경우 undefined 를 반환합니다.
 // filter 함수는 각각 배열의 원소에 대해서 전달받은 함수의 결과가 true를 반환한 원소들로만 "배열"을 만듭니다.

 // Q6. make an array of enrolled students
 //My answer
 let enrolledArray = [];
 const enrolledStudents = students.filter(student => student.enrolled === true).forEach(e => enrolledArray.push(e
     .name));
 console.log(enrolledArray);
 //Ellie T's answer(훨씬 짧다!enrolledStudents 변수자체도 array임 filter덕에).따라서 굳이 빈 어레이 만들어서 push할 필요도 없었음.
 const result2 = students.filter(student => student.enrolled);


 // Q7. make an array containing only the students' scores
 // result should be: [45, 80, 90, 66, 88]
 //My answer
 const scoresArray = [];
 students.forEach(student => scoresArray.push(student.score));
 console.log(scoresArray);

 //Ellie T's answer
 //forEach : 요소마다 콜백 실행
 //map이용. forEach + 새로운 배열 return
 const result3 = students.map(student => student.score);
 console.log(result3);


 // Q8. check if there is a student with the score lower than 50
 //My answer
 const lowScoreStudents = students.filter(student => student.score < 50);
 console.log(lowScoreStudents, 1);

 if (lowScoreStudents == false) {
     console.log("There is no student with the score lower than 50");
 } else {
     console.log("There are students with the score lower than 50");
 }

 //Ellie T's answer
 //1. some 이용.(배열에 해당하는(true인) 값이 하나라도 있다면 => true)
 const result4 = students.some(student => student.score < 50);
 console.log(result4);
 //2. every 이용(배열 내 모든 값이 true => true)
 const result5 = students.every(student => student.score < 50);
 console.log(!result5);

 // Q9. compute students' average score
 //My answer
 let scoreSum = 0;
 for (let i = 0; i < scoresArray.length; i++) {
     scoreSum += scoresArray[i];
 }
 const averageScore = scoreSum / students.length;
 console.log(averageScore);

 //Ellie T's answer
 //reduce 사용(배열 내 모든 요소에 콜백실행하여 시작점부터 누적된 값을 리턴), initial value 설정가능
 //prev : 콜백에서 return한 값이 전달됨
 //current : 배열 요소 순차적으로 current에 전달됨. 
 const result6 = students.reduce((prev, current) => prev + current.score, 0);
 console.log(result6 / students.length);

 // Q10. make a string containing all the scores
 // result should be: '45, 80, 90, 66, 88'
 const scoresString = scoresArray.join();
 console.log(scoresString);

 // Bonus! do Q10 sorted in ascending order
 // result should be: '45, 66, 80, 88, 90'
 //My answer
 console.log(scoresArray.sort().join());

 //Ellie T's answer
 const result7 = students
     .map(student => student.score)
     .sort((a, b) => b - a)
     .join();