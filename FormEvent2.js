// document.querySelector('#myInput').addEventListener('change',(event) => {
//     alert(`Input change to: ${event.target.value}`);
// });

// document.querySelector('#myForm').addEventListener('sumit',(event) => {
//     event.preventDefault();
//     alert("form Submitted!");
// });

document.querySelector('#myInput').addEventListener('blur', () =>{
    
    console.log('input field focused! ');
    
});

// document.querySelector('form').addEventListener('submit',(event) => {
//     event.preventDefault();
//     console.log("Form submitted");

//     em=document.querySelector("#email").
//     value;
//     pw=document.querySelector("#password")
//     .value;

//     alert("Email: " + em);
//     alert("Password: "+ pw);

    
// });

// document.querySelector('form').addEventListener('sumbit',(event) => {
//     event.preventDefault();
//     console.log("Sum"+(num1+num2));

//     em=document.querySelector("#num1").
//     value;
//     pw=document.querySelector("#num2")
//     .value;

//     alert("num1+num2 " + (em+pw));
    

    
// });