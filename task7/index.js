var baseElement   =  document.getElementById;
var isSubmit = false;
if(!isSubmit){
function onSubmit(event){
  event.preventDefault();
  console.log("cool")
  var firstName      = document.getElementById("first_name").value;
  var lastName      = document.getElementById("last_name").value;
  var batch         = document.getElementById("batch").value;
  var department    = document.getElementById("department").value;
  var container     = document.getElementById("container");
  var table         = document.createElement("TABLE");
  container.insertAdjacentElement("beforeend", table);
  var row1  = table.insertRow(0);
  console.log(row1);
  row1.innerHTML = "<th> Fisrt Name </th> <th> Last Name Name </th><th> Batch </th> <th>Deparment </th> "
  var row = table.insertRow(1);
  var col1 = row.insertCell(0);
  var header = table.createTHead();
  var col2 = row.insertCell(1);
  var col3 = row.insertCell(2);
  var col4 = row.insertCell(3);
  col1.innerText = firstName;
  col2.innerText = lastName;
  col3.innerText =batch;
  col4.innerText = department
  isSubmit =true;

}
}
var form = document.getElementById("form");
var btn =  document.getElementById("btn");
btn.addEventListener("submit", onSubmit, false);
form.addEventListener("submit", onSubmit, false);