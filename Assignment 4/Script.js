function validateFirstName(){
    var fName = document.getElementById("firstName").value;
    if(fName != ""){
        document.getElementById("firstName").style.color = "black";
        document.getElementById('firstName').style.border = '1px solid gray';
        document.getElementById("firstNameError").style.visibility="hidden";
    }
    else{
        document.getElementById('firstName').style.border = '1px solid red';
        document.getElementById("firstNameError").style.visibility="visible";
        document.getElementById('firstNameError').style.color = 'red';
        document.getElementById("firstNameError").innerHTML = "First Name cannot be empty.";
    }
}

function validateLastName(){
    var lName = document.getElementById("lastName").value;
    if(lName != ""){
        document.getElementById("lastName").style.color = "black";
        document.getElementById('lastName').style.border = '1px solid gray';
        document.getElementById("lastNameError").style.visibility="hidden";
    }
    else{
        document.getElementById('lastName').style.border = '1px solid red';
        document.getElementById("lastNameError").style.visibility="visible";
        document.getElementById("lastNameError").style.color = "red";
        document.getElementById("lastNameError").innerHTML = "Last Name cannot be empty.";
    }
}





function validateEmail(){
    var email = document.getElementById("emailId").value;   
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(email != ""){
        if(emailPattern.test(email)){
            document.getElementById("emailId").style.color = "black";
            document.getElementById('emailId').style.border = '1px solid gray';
            document.getElementById("emailError").style.visibility="hidden";
        }
        else{
            document.getElementById('emailId').style.border = '1px solid red';
            document.getElementById("emailError").style.visibility="visible";
            document.getElementById("emailError").style.color = "red";
            document.getElementById("emailError").innerHTML = "Please enter valid email address.";
        }
    }
    else{
        document.getElementById('emailId').style.border = '1px solid red';
        document.getElementById("emailError").style.visibility="visible";
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerHTML = "Email Id cannot be empty.";
    } 
}

function validatePhoneNumber(){
    var phoneNum = document.getElementById("phoneNumber").value;   
    var phoneNumberPattern = /(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    
    if(phoneNum != ""){
        if(phoneNumberPattern.test(phoneNum)){
            document.getElementById("phoneNumber").style.color = "black";
            document.getElementById('phoneNumber').style.border = '1px solid gray';
            document.getElementById("phoneNumberError").style.visibility="hidden";
        }
        else{
            document.getElementById('phoneNumber').style.border = '1px solid red';
            document.getElementById("phoneNumberError").style.visibility="visible";
            document.getElementById("phoneNumberError").style.color = "red";
            document.getElementById("phoneNumberError").innerHTML = "Please enter valid phone number.";
        }
    }
    else{
        document.getElementById('phoneNumber').style.border = '1px solid red';
        document.getElementById("phoneNumberError").style.visibility="visible";
        document.getElementById("phoneNumberError").style.color = "red";
        document.getElementById("phoneNumberError").innerHTML = "Phone Number cannot be empty.";
    } 
}

function validateZipCode(){
    var zipCode = document.getElementById("zipcode").value;   
    var zipCodePattern = /^\d{6}$/;
    
    if(zipCode != ""){
        if(zipCodePattern.test(zipCode)){
            document.getElementById("zipcode").style.color = "black";
            document.getElementById('zipcode').style.border = '1px solid gray';
            document.getElementById("zipCodeError").style.visibility="hidden";
        }
        else{
            document.getElementById('zipcode').style.border = '1px solid red';
            document.getElementById("zipCodeError").style.visibility="visible";
            document.getElementById("zipCodeError").style.color = "red";
            document.getElementById("zipCodeError").innerHTML = "Please enter valid zip code.";
        }
    }
    else{
        document.getElementById('zipcode').style.border = '1px solid red';
        document.getElementById("zipCodeError").style.visibility="visible";
        document.getElementById("zipCodeError").style.color = "red";
        document.getElementById("zipCodeError").innerHTML = "Zip code cannot be empty.";
    } 
}

function selectFavoriteCuisine() {
    var getCuisine = document.getElementById("favoriteCuisine").value;
    if (getCuisine != "") {
        document.getElementById('details').innerHTML = "";
        document.getElementById('details').style.display = "block";
        document.getElementById('details').style.marginLeft = '9em';
        document.getElementById('details').style.display = 'flex';
        if (getCuisine == 'american') {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.value = "hamburger";
            newCheckbox.id = "hamburger";
            newCheckbox.onclick = function () {
                showText('hamburger');
            }
            document.getElementById("details").appendChild(newCheckbox);
            var labelNew = document.createElement('label');
            var textNode = document.createTextNode('Hamburger');
            labelNew.appendChild(textNode);
            labelNew.style.float = 'none';
            labelNew.style.width = 'auto';
            document.getElementById("details").appendChild(labelNew);
        } 
        else if (getCuisine == 'mexican') {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.value = "chilaquiles";
            newCheckbox.id = "chilaquiles";
            newCheckbox.onclick = function () {
                showText('chilaquiles');
            }
            document.getElementById("details").appendChild(newCheckbox);
            var labelNew = document.createElement('label');
            var textNode = document.createTextNode('Chilaquiles');
            labelNew.appendChild(textNode);
            labelNew.style.float = 'none';
            labelNew.style.width = 'auto';
            document.getElementById("details").appendChild(labelNew);
        } 
        else if (getCuisine == 'chinese') {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.value = "dumpling";
            newCheckbox.id = "dumpling";
            newCheckbox.onclick = function () {
                showText('dumpling');
            }
            document.getElementById("details").appendChild(newCheckbox);
            var labelNew = document.createElement('label');
            var textNode = document.createTextNode('Dumpling');
            labelNew.appendChild(textNode);
            labelNew.style.float = 'none';
            labelNew.style.width = 'auto';
            document.getElementById("details").appendChild(labelNew);
        }
        else if (getCuisine == 'indian') {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.value = "butterChicken";
            newCheckbox.id = "butterChicken";
            newCheckbox.onclick = function () {
                showText('butterChicken');
            }
            document.getElementById("details").appendChild(newCheckbox);
            var labelNew = document.createElement('label');
            var textNode = document.createTextNode('Butter Chicken');
            labelNew.appendChild(textNode);
            labelNew.style.float = 'none';
            labelNew.style.width = 'auto';
            document.getElementById("details").appendChild(labelNew);
        }
    }
}

function showText(value) {
    if (document.getElementById(value).checked) {
        var asterik = document.createElement('label');
        var asterikNode = document.createTextNode('*');
        asterik.appendChild(asterikNode);
        asterik.style.color = 'red';
        asterik.style.paddingLeft = '10px';
        asterik.style.width = 'auto';
        document.getElementById("details").appendChild(asterik);

        var newTxtBox = document.createElement('input');
        newTxtBox.type = 'text';
        newTxtBox.id = value + 'Txt';
        newTxtBoxValue = value;
        newTxtBox.name = value + 'Txt';
        newTxtBox.value = "";
        newTxtBox.className = "required";
        //   newTxtBox.pseudoStyle("after","content"," *").pseudoStyle("after","color","red");
        newTxtBox.setAttribute("required", "");
        newTxtBox.required = true;
        document.getElementById("details").appendChild(newTxtBox);
        showRequiredText(value);
        newTxtBox.onkeyup = function () {
            showRequiredText(value);
        }
    }
    else {
        document.getElementById("mandatory" + value).remove();
        document.getElementById(value + "Txt").remove();
    }
}

function showRequiredText(value) {
    if (document.getElementById(value + 'Txt').value == '') {
        if (!document.getElementById("mandatory" + value)) {
            var mandatoryLabel = document.createElement('label');
            var mandatoryTxt = document.createTextNode('Field is mandatory!');
            mandatoryLabel.style.color = 'red';
            mandatoryLabel.style.paddingLeft = '10px';
            mandatoryLabel.id = 'mandatory' + value;
            mandatoryLabel.appendChild(mandatoryTxt);
            document.getElementById("details").appendChild(mandatoryLabel);
        }
    } else {
        if (document.getElementById("mandatory" + value)) {
            document.getElementById("mandatory" + value).remove();
        }
    }
}

function submitForm(){

    var radios = document.getElementsByName("title");
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var emailID = document.getElementById("emailId").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var zipCode = document.getElementById("zipCode").value;
    var checkboxes = document.getElementsByName("source");
    var comments = document.getElementById("comments").value;
    var favCuisine = "";

    if (favCuisine != "") {
        favCuisine = document.getElementById(newTxtBoxValue + 'Txt').value;
    }

    if (newTxtBoxValue) {
        if (document.getElementById(newTxtBoxValue).checked) {

            if (document.getElementById(newTxtBoxValue + 'Txt').value.trim() == "") {
                flag = false;
            }
        }
    }

    for (var radio = 0; i < radios.length; radio++) {
        if (radios[radio].checked) {
            var title = radios[radio].value;
        }
    }

    var sourceText = "";
    for (var checkBox = 0; j < checkboxes.length; checkBox++) {
        if (checkboxes[checkBox].checked) {
            sourceText += checkboxes[checkBox].value + ",";
        }
    }
    sourceText = sourceText.slice(0, sourceText.length - 1);

    var newPerson = new Form(title, fname, lname, emailID, phoneNumber, zipCode, favCuisine, sourceText, comments);
    localStorage.setItem('newPerson', JSON.stringify(newPerson));
    document.forms[0].reset();
    window.location.href = 'Table.html';

    // var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // var rowCount   = tableRef.rows.length;
    // var newRow = tableRef.insertRow(rowCount);
    // newCell  = newRow.insertCell(1);
    // newText  = document.createAttribute("fname").value;
    // newCell.appendChild(newText);
}

