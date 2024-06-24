const rating = document.getElementById('rating').value;
const feedback = document.getElementById('feedback').value.trim();
const likedMost = document.getElementById('liked-most').value.trim();
const likedLeast = document.getElementById('liked-least').value.trim();
const suggestions = document.getElementById('suggestions').value.trim();
const form = document.getElementById('comment');
// Validate rating
if (!rating);
//validate feedback
if (!feedback);
//validate like most
if (!likedMost);
//validate like least
if (!likedLeast);
//validate suggestions
if (!suggestions);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form is valid, submit it
    if (rating || feedback || likedMost || likedLeast || suggestions) {
        alert('feedback submitted successfully. Thanks for sharing your experience!');
    }  else {
        alert('feedback submitted successfully. Thanks for sharing your experience!');
        window.location.href = 'Home.html';
    }
    // Add code to submit the form here
});