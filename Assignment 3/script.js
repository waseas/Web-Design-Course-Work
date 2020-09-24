//Title constructor function that creates a Title object
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

window.onload = function () {
  var dropDown = document.getElementsByClassName('dropDownTextArea');
  for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].style.display = 'none';
  }

  document.getElementById('button').disabled = true;
  document.getElementById('button').style.backgroundColor = 'gray';
  document.getElementById('button').style.color = 'white';
  document.getElementById('button').style.border = '1px solid gray';

   var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
   for (var rowObject = 0; rowObject < getTableRows.length; rowObject++) {
     for (var columnNumber = 0; columnNumber < getTableRows[rowObject].cells.length; columnNumber++){
       if(columnNumber == 8){
         getTableRows[rowObject].cells[8].style.visibility='hidden';
       }
     }
  }
}

function toggle(getImage) {
  var imageId = getImage.id.slice(5);//1
  imageId = imageId-1;
  var dropDown = document.getElementsByClassName('dropDownTextArea');//3
  
  for (var ddNumber = 0; ddNumber < dropDown.length; ddNumber++) {// 0 to 2
    if (ddNumber == imageId) {
      if (dropDown[ddNumber].style.display == 'none') {
        dropDown[ddNumber].style.display = 'contents';
      } else {
        dropDown[ddNumber].style.display = 'none';
      }
    }
  }
}

function addRow() {
  // Getting tbody of the table 
  var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

  // Adding row in tbody 
  var count = tableRef.rows.length;
  count = count - 1;
  var newRow   = tableRef.insertRow(count);
  count = count-1;
    var newCell;
    var newText;


    newCell  = newRow.insertCell(0);
    // newText  = document.createTextNode('Student '+ count);
    // newCell.appendChild(newText);

    var addCheckbox = document.createElement('input');
    addCheckbox.type = 'checkbox';
    addCheckbox.id = count.toString();
    newCell.appendChild(addCheckbox);
    addCheckbox.onclick = function () {
      getCheckBoxValue();
    }

    newText  = document.createElement("br");
    newCell.appendChild(newText);

    newText  = document.createElement("br");
    newCell.appendChild(newText);

    var addImage = document.createElement('img');
    addImage.src = 'down.png';
    addImage.id= 'img'+ count.toString();
    addImage.style.display = 'block';
    addImage.style.width = '25px';
    newCell.appendChild(addImage);
    addImage.onclick = function () {
      toggle(addImage.this);
    }

    newCell  = newRow.insertCell(1);
    newText  = document.createTextNode('Student '+ count);
    newCell.appendChild(newText);
    
    newCell  = newRow.insertCell(2);
    newText  = document.createTextNode('Teacher '+ count);
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(3);
    newText  = document.createTextNode('Approved');
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(4);
    newText  = document.createTextNode('Fall');
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(5);
    newText  = document.createTextNode('TA');
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(6);
    var num = Math.floor(Math.random() * 90000);
    newText  = document.createTextNode(num.toString());
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(7);
    num = Math.floor(Math.random() * 100);
    newText  = document.createTextNode(num.toString() + "%" );
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(8);
    newText  = document.createTextNode('');
    newCell.appendChild(newText);
    newCell.style.visibility='hidden';
}

function getCheckBoxValue(){
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  var getCheckBox = document.getElementById('myTable').getElementsByTagName('input');

  getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'visible';

  var getCheckBox1 = document.getElementById('myTable').getElementsByTagName('input');
  for (var checkBoxNumber1 = 0; checkBoxNumber1 < getCheckBox1.length; checkBoxNumber1++) {
    if(!getCheckBox1[checkBoxNumber1].checked){
      getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'hidden';
      document.getElementById('button').disabled = true;
      document.getElementById('button').style.backgroundColor = 'gray';
      document.getElementById('button').style.color = 'white';
      document.getElementById('button').style.border = '1px solid gray';
    }
  }
  
  for (var checkBoxNumber = 0; checkBoxNumber < getCheckBox.length; checkBoxNumber++) {
    if (getCheckBox[checkBoxNumber].checked) {
      
      getCheckBox[checkBoxNumber].parentElement.parentElement.style.backgroundColor = "orange";
      document.getElementById('button').disabled = false;
      document.getElementById('button').style.backgroundColor = 'orange';
      document.getElementById('button').style.border = '1px solid orange';

      var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
      getTableRows[0].cells[8].style.visibility='visible';

      var getRow = getCheckBox[checkBoxNumber].parentNode.parentNode;
      getRow.cells[getRow.cells.length - 1].style.visibility = 'visible';
      // document.getElementById('button').style.backgroundColor = 'orange';
      

      if (!document.getElementById('delete' + checkBoxNumber)) {
        var createBtn = document.createElement('button');
        var createBtnName = document.createTextNode('Delete');
        createBtn.id = 'delete' + checkBoxNumber;
        createBtn.appendChild(createBtnName);
      
        getRow.cells[getRow.cells.length - 1].style.visibility = 'visible';
        getRow.cells[getRow.cells.length - 1].appendChild(createBtn);
        createBtn.onclick = function () {
            removeRow(this);
        }
      }
      
    }
    else{
      getCheckBox[checkBoxNumber].parentElement.parentElement.style.backgroundColor = "white";

      var getRow = getCheckBox[checkBoxNumber].parentNode.parentNode;
      getRow.cells[getRow.cells.length - 1].style.visibility = 'hidden';

      if (document.getElementById('delete' + checkBoxNumber)) {
        document.getElementById('delete' + checkBoxNumber).remove();
      }
    }
  }  
}

function removeRow(getRow) {
  getRow.parentNode.parentNode.remove();
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');

  var getCheckBox1 = document.getElementById('myTable').getElementsByTagName('input');
  for (var checkBoxNumber1 = 0; checkBoxNumber1 < getCheckBox1.length; checkBoxNumber1++) {
    if(!getCheckBox1[checkBoxNumber1].checked){
      getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'hidden';
      document.getElementById('button').disabled = true;
      document.getElementById('button').style.backgroundColor = 'gray';
      document.getElementById('button').style.color = 'white';
      document.getElementById('button').style.border = '1px solid gray';
    }
  }

}