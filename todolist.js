// JavaScript File
var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
  //this is the bar that allows you to type up want you want in the todo list   
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);
//this is the delete function.
todo.addEventListener( 'dblclick', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);
//this is what allows the word to change colors
todo.addEventListener( "click", function(evt) {
  var bar = evt.target;
  if (bar.style.backgroundColor === "" ){
    bar.style.backgroundColor = "green";
  } else if(bar.style.backgroundColor ==="green"){
    bar.style.backgroundColor = "red";
  }
});
todo.addEventListener( "mousedown", function(evt){
  var man = evt.target;
  man 
})
form.addEventListener( "submitButton", function(evt){
  
} )