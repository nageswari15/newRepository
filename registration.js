// document.getElementById('signupBtn').addEventListener('click', function () {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Display the collected data in the console
//     console.log(`Username: ${username}`);
//     console.log(`Email: ${email}`);
//     console.log(`Password: ${password}`);

//     // Optionally, display the data on the page
//     alert(`Collected Data:\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
// });


const form=document.querySelector("form")
form.addEventListener("submit", function(event) {
   
    uname=document.querySelector('#username').value
    passwrd=document.querySelector('#password').value
   email=document.querySelector('#email').value

    alert(uname)
    alert(email)
    alert(passwrd)
});

