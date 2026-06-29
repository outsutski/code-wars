function lineupStudents(students){
  let arr = students.split(' ')
  
  return arr.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length
    }
    
    return b.localeCompare(a);
  });
}