// JavaScript File
//this is the first picture
var item1 = document.getElementById("item1");
//this is the second picture 
var item2 = document.getElementById("item2");
//this is the third picture 
var item3 = document.getElementById("item3");
//this is the fourth picture 
var item4 = document.getElementById("item4");
//this is the first part of information 
var info1 = document.getElementById("info1");
//this is the second part of information 
var info2 = document.getElementById("info2");
//this is the third part of information
var info3 = document.getElementById("info3");

//This is the for the first picture and allows the abilty so when you click on the picture you get information on the picture
item1.addEventListener("click", function(){
    info1.innerHTML = "This is the t.a.r.d.i.s which stands for Time And Realative Dimension In Space. ";
    info2.innerHTML = "This is the time machine that allows the doctor to travel in time and space.";
    info3.innerHTML = "It is bigger on the inside then it is on the outside";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "This is the doctor the being who flys the tardis to save the human race.";
    info2.innerHTML = "He is the last of his kind which is the race of gallifreyans which are the time lords.";
    info3.innerHTML = "He is consired an outcast by his own people.";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "This is the sonic screwdriver.";
    info2.innerHTML = "The sonic screwdriver is the ultimate tool.";
    info3.innerHTML = "It can almost do anything if it doesn't have any wood at all.";
});
item4.addEventListener("click", function(){
    info1.innerHTML = "This are the doctors companions.";
    info2.innerHTML = "This are the lucky people who get choosen by the doctor to travel with hime through time and space.";
    info3.innerHTML = "They are mainly female but a good handful of his companions were male.";
});
                     