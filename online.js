 const surnameEl = document.getElementById('surname').value.trim();
    const firstnameEl = document.getElementById('firstname').value.trim();
    const middlenameEl = document.getElementById('middlename').value.trim();
    const birthdateEl = document.getElementById('birthdate').value.trim();
    const gender = document.querySelector('input[name="gender"][checked]');
    const stateEl = document.getElementById('state').value.trim();
    const lgaEl = document.getElementById('lga').value.trim();
    const townEl = document.getElementById('town').value.trim();
    const titleEl = document.getElementById('title').value.trim();
    const pnameEl = document.getElementById('pname').value.trim();
    const occupationEl = document.getElementById('occupation').value.trim();
    const levelEl = document.getElementById('level').value.trim();
    const otherLevelEl = document.getElementById('other-level').value.trim();
    const selfieEl = document.getElementById('selfie').files[0];
    const form = document.getElementById('signup');
// Validate gender
if (!gender);
  // Validate state and LGA
  if (state === 'Select a state' || !lga) 

  // Validate academic level
  if (level === 'Choose your level' || (level === 'other' && !otherLevel))
  // Validate selfie
  if (!selfie || !selfie.type.startsWith('image/'));
// Image preview
const selfieInput = document.getElementById('selfie');
const selfiePreview = document.querySelector('.selfie-preview');

selfieInput.addEventListener('change', (e) => {
  const file = selfieInput.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const imageUrl = e.target.result;
    selfiePreview.innerHTML = `<img src="${imageUrl}" alt="Selfie preview">`;
  };

  reader.readAsDataURL(file);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form is valid, submit it
    if (surname || firstname || middlename || birthdate || gender || state || lga || town || title || pname || !occupation || level || selfie) {
        alert('Online clearance successfully done!');
        window.location.href = 'Home.html';
    } else {
        alert('Please fill in all fields and ensure they are correct before submitting!');
    }
    // Add code to submit the form here
});
});