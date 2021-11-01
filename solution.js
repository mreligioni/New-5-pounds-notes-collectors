function getNewNotes(salary,bills){
    let sum = 0;
    for (let i = 0; i < bills.length; i++){
      sum += bills[i];
    }
    let disposableIncome = salary - sum;
    let exactNumber = disposableIncome / 5;
    let poundsNumber = Math.floor(exactNumber);
    return poundsNumber;
  }