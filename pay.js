function wait() {
    setTimeout(function() {
        alert("Your Payment of 99 is received.");
        confirm("Thankyou for buying our subscription now you will have an access to the latest tv movies and shows");
        window.location="profile.html";
    }, 10000);
}
document.getElementById('btn').onclick = Wait;