let button=document.getElementById("submit-btn");

button.addEventListener('click',(event)=>{
    event.preventDefault();
    let name=document.getElementById("input1").value;
    let age=document.getElementById("input2").value;
    let dob=document.getElementById("input3").value;
    let email=document.getElementById("input4").value;
    let namepara=document.getElementById("name");
    let agepara=document.getElementById("age");
    let datepara=document.getElementById("date");
    let emailpara=document.getElementById("email");

    namepara.textContent=`Name: ${name}`;
    agepara.textContent=`Age: ${age}`;
    datepara.textContent=`Date of birth: ${dob}`;
    emailpara.textContent=`Email Id: ${email}`;

});


