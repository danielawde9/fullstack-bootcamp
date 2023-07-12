let grades = [];

function addGrade() {
  let gradeInput = document.getElementById("gradeInput");
  let grade = parseInt(gradeInput.value);
  if (!isNaN(grade) && grade <= 100) {
    grades.push(grade);
    let gradesTable = document.getElementById("gradesTable");
    let row = `<tr>
            <td>${grades.length}</td>
            <td>${grade}</td>
            <td>${determineGrade(grade)}</td>
        </tr>`;
    gradesTable.innerHTML += row;
    gradeInput.value = "";
  } else {
    alert("Please enter a valid grade from 0 to 100.");
    gradeInput.value = "";
  }
}

function calculateAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

function determineGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function calculateAndDisplay() {
  let averageGrade = calculateAverage(grades);
  document.getElementById("averageGrade").innerText = isNaN(averageGrade)
    ? "No grades entered"
    : averageGrade.toFixed(2);
}
