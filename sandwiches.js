/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 let currentCount = 0
 let retries = 0
 var countStudents = function(students, sandwiches) {
     //students = [1,1,0,0]
     //sandwiches = [0,1,0,1]
     retries = students.length;
     if(currentCount <= retries && retries > 0) {
         if(students[0] === sandwiches[0]) {
             //student has eaten, remove student and sandwich
             console.log('student ate')
             currentCount = 0
             students.shift()
             sandwiches.shift()
             countStudents(students, sandwiches)
         } else {
             //student has not eaten move to back of line
             currentCount++
             let currentStudent = students.shift()
             countStudents([...students, currentStudent], sandwiches)
         }
     }
     return students.length
 };

 countStudents([1,1,0,0], [0,1,0,1])