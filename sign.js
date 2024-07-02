function singi() {
    let email = document.getElementById('mail').value;
    let password = document.getElementById('pass').value;

    if (email === "ayush@gmail.com" && password === "12345ayush") {
        alert("Welcome back!");
        window.location = "profile.html";
    }else if(email==="ayush@gmail.com"&&password===" ")
    {
        alert("Kindly enter the password.");
    }else{
        alert("Error 404 occured kindly reEnter the ID and Pass.")
    }
}
