function start() {
    let email = document.getElementById('mail').value;

    if (email === 'ayush@gmail.com') {
        alert('You can sign in using the button available in the right corner.');
    } else if (email === "") {
        alert('Kindly enter the ID.');
    } else {
        alert('Invalid email. Please enter the correct ID.');
    }
}
function sign(){
    window.location="sign in.html";
}
