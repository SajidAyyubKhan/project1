let department = '';
let academicYear = '';
let semester = '';
let subject = '';

function nextButton() {
  if (department==='' || academicYear === '' || semester === '' || subject === '') {
    alert('Please fill the information first');
  } else {
    alert(`${department}, ${academicYear}, ${semester}, ${subject}`);
  }
}

function selection() {
  department = document.querySelector('#select-department').value;
  academicYear = document.querySelector('#select-academic-year').value;
  semester = document.querySelector('#select-semester').value;
  subject = document.querySelector('#select-subject').value;
}