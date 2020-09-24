function getData(){
    var newPerson = JSON.parse(localStorage.getItem('newPerson'));
    console.log(newPerson);
    var content = "";
    content += "<tr><td>" + newPerson.title + "<td>" + newPerson.firstName + "</td><td>" + newPerson.lastName + "</td>" + "<td>" + newPerson.emailID + "</td><td>" + newPerson.phoneNumber + "</td><td>" + newPerson.zipCode + "</td><td>" + newPerson.favCuisine + "</td><td>" + newPerson.check  + "</td><td>" + newPerson.comments + "</td></tr>";
    var userTable = document.getElementById("userTable");
    userTable.tBodies[0].innerHTML += content;
}

function goBack(){
    window.location.href = 'Form.html';
}