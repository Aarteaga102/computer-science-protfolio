// JavaScript File
var button = document.getElementById("states");
var submitButton = document.getElementById("submitButton");
var textbox = document.getElementById("input");
var start = document.getElementById("begin");
var questlog = document.getElementById("questlog");
var info = document.getElementById("info");
var place = "beginScreen";

submitButton.addEventListener("click", function(evt){
    var text = textbox.value;
    questlog.innerHTML += '<div>' + text + '</div>';
    textbox.value = "";
    if (place === "start" && text === "yes"){
        place = "starting";
        questlog.innerHTML += "You start out with a stone sword and chain armor and a iron shield.";
        questlog.innerHTML += "you walking down a road then you see two paths, one with dark and evil cloud above it named dark path, or a peace road with fruit and beautiful grass named path of light.";
    
    }
    if (place === "starting"){
        if(/dark/.test(text)) {
            place = "dark"; 
            questlog.innerHTML += "you choose wrong.<br>";
            questlog.innerHTML += "You battle a huge giant<br>";
            questlog.innerHTML += "what do you do. you can run, battle it or do nothing. which do you choose.<br>";
            
        }
        if(/light/.test(textbox)){
            place = "village";
            questlog.innerHTML += "you choose right you may continue your journey.<br>";
            questlog.innerHTML += "You walk down a long road utill you find a village.<br>";
            questlog.innerHTML += "do you go in to the village or continue your journey onward?<br>"; 
        }else{
            questlog.innerHTML += "that doesn't exist try again<br>";
        }
    }
    
    if(place === "dark"){
        if(textbox === "battle it"){
             var health = 70;
            var damage = 5;
               questlog.innerHTML += "the giant is ready for battle.<br>";
                while (health > 0) {
                    var rando = Math.round(Math.random() * 50);
                    questlog.innerHTML += "Giant has" + health + "health.";
                    if (rando === 0) {
                        questlog.innerHTML += "The giant has missed.<br>";
                    }
                    if (damage == 5) {
                        health -= 5;
                        questlog.innerHTML += "stone sword does 5 damage.<br>";
                    }
                }
            }else if (text === "run away"){
                 questlog.innerHTML += "you couldn't run away from the giant<br>";
            }else{
                questlog.innerHTML += "that choice doesn't exist try again.<br>";
            }
        }
        if(place === "village"){
            if(/go.*village/.test(text)){ 
                place = "robbers";
             questlog.innerHTML += "You go into the village and see a lot of people.<br>";
                questlog.innerHTML += "you see a group of thief's try to steal all of the villages money from the bank and have hostages inside the bank.<br>";
                questlog.innerHTML += "do you save the towns money and save the people or will you leave the villages knights to get the money back and let them save the people?<br>";
        }else if(/continue.*journey/.test(text)){
            place = "next";
             questlog.innerHTML += "you continued your journey onwards along the long road.<br>";
                questlog.innerHTML += "you keep walking until you find a place to rest.<br>";
                questlog.innerHTML += "you find a little town called little root that has a lot of merchants and trader's.<br>";
                questlog.innerHTML += "do you go into the town or go and find another place?<br>";
        }else{
            questlog.innerHTML += "that choice doesn't exist try again.<br>";
        }
    }
    if(place === "robbers"){
        if(/battle.*theif'?s/.test(text)){
             place = "battle";
           questlog.innerHTML = "You run as fast as you can to the villages bank.<br>";
                    questlog.innerHTML += "you get in to the bank a local warrior is already in there with you.<br>";
                    questlog.innerHTML += "the warrior is wearing a mask, Then you see the warrior battle one of the thief's.<br>";
                    questlog.innerHTML += "do you battle the other thief running away or get the thief and battle them both with the mysterious mask warrior?<br>";   
        }else if(/leave.*knight'?s/.test(text)){
            place = "lazy";
              questlog.innerHTML += "You see the knights try to save the people and get the thief's as well as the money.<br>";
        }else{
            questlog.innerHTML += "that choice doesn't exist try again.<br>";
        }
    }
    if(place === "next"){
        if(/go.*town/.test(text)){
            place = "merchant";
            questlog.innerHTML += "you walk into town and already see a food merchant.<br>";
        }else if(/find.*place/.test(text)){
            place = "idiot";
             questlog.innerHTML += "you skipped going into little root.<br>";
                    questlog.innerHTML += "you now suffer from hunger which make you hillsonate thing's.<br>";
                    questlog.innerHTML += "You start to see people everywhere and see talk talking animals.<br>";
                    questlog.innerHTML += "you see a talking cow. The cow says to you what a beautiful moon up in the sky to night.<br>";
                    questlog.innerHTML += "do you eat the cow you see in front of you or do you try and find another type of animal to kill?<br>";
        }else{
            questlog.innerHTML += "that choice doesn't exist try again.<br>";
        }
    }
    if(place === "battle"){
        if(/fight.*with.*warrior/.test(text)){
            place = "join";
              questlog.innerHTML = "the warrior is ready to fight with you.<br>";
                        var thief_health = 10;
                        var warrior_health = 25;
                        var your_health = 15;
                        var sword = 2;
                        var level = 1;
                        var warriors_level = 3;
                        var xp_drop = 30;
                        var players_xp_bar = 0;
                        while (thief_health > 0 && your_health >= 0) {
                            questlog.innerHTML += "thief has " + thief_health + " health.";
                            if (sword == 2) {
                                thief_health -= 2;
                                questlog.innerHTML += "stone sword does 2 damage.<br>";
                                var rand = Math.round(Math.random() * 1);
                                if (rand === 0) {
                                    questlog.innerHTML += "the thief missed.<br>";
                                }
                                else if (rand === 1) {
                                    your_health--;
                                    questlog.innerHTML += "the thief has hit you.<br>";
                                }
                                var rand = Math.round(Math.random() * 1);
                                if (rand === 0) {
                                    questlog.innerHTML += "The thief has missed the warrior.<br>";
                                }
                                else if (rand == 1) {
                                    warrior_health--;
                                    questlog.innerHTML += "the warrior has been hit.<br>";
                                }
                                if (thief_health <= 0 && your_health > 0 && warrior_health > 0) {
                                    questlog.innerHTML += "You and the warrior have gotten back the money and save the hostiages.<br>";
                                    questlog.innerHTML += "you got" + xp_drop;
                                    var level_bar_increase = players_xp_bar + xp_drop;
                                    questlog.innerHTML += "your experince has been increased by" + level_bar_increase;
                                }
                            }
                        }
                        questlog.innerHTML += "the warrior comes up to you.<br>";
                        questlog.innerHTML += "Warrior:You took out this thugs pretty well.<br>";
                        questlog.innerHTML += "the warrior takes off helmet to show that she is a women.<br>";
                        questlog.innerHTML += "Warrior:My name is emily and i like your spunk kid. if you would let me i was wondering if i could join you on your adveture?<br>"; 
        }else if(/will.*battle.*alone/.test(text)){
             questlog.innerHTML += "you battle one of the thief's alone<br>";
        }else{
            questlog.innerHTML += "that choice doesn't exist try again.<br>";
        }
    } 
    if(place === "idiot"){
        if(text === "i will kill this cow for food."){
              questlog.innerHTML += "you killed the cow and got beef.<br>";
        }else if(text === "i will find another type of animal to kill for food"){
            place = "weird";
            questlog.innerHTML += "you find a chicken who has two heads, duck feet, and sharp teeth.<br>";
            questlog.innerHTML += "will you eat this odd chicken or keep looking for food.<br>";
        }else{
            questlog.innerHTML += "that choice doesn't exist try again.<br>";
        }
        if(place === "weird"){
            if(text === "i will eat this odd chicken."){
                place = "water";
                            questlog.innerHTML = "you kill the chicken and eat it.<br>";
                            questlog.innerHTML += "you start to feel better and you start to see things again normaly.<br>";
                            questlog.innerHTML += "you realize that you at a bunch of instects.<br>";
                            questlog.innerHTML += "you become really thirst and want water.<br>";
                            questlog.innerHTML += "you then remember that you have a bottle of water but it is the last bit of water you have left. Do you drink the water know or drink it in the morning?<br>";
            }else if(text === "i will find another animal"){
                questlog.innerHTML += "your vision starts to become hazy and blury<br>";
                questlog.innerHTML += "you fall over and die. Game Over.<br>";
            }else{
                questlog.innerHTML += "that choice doesn't exist try again.<br>";
            }
        }
        if(place === "water"){
            if(text === "i will drink the water now."){
                place = "noise";
                 questlog.innerHTML += "You drink the water and then fall asleep.<br>";
                 questlog.innerHTML += "Two hour later you hear a noise coming from the forest near by.<br>";
                 questlog.innerHTML += "Do you take your sword and see what is causing this noise or do you ignore it and go back to sleep.<br>";
            }else if(text ==="i will drink it in the morning"){
                questlog.innerHTML = "you decied to go to sleep early and then you start to dream.<br>";
                                questlog.innerHTML = "you start to dream about a grand adveture that awaits you.<br>";
                                questlog.innerHTML = "You wake up and see the morning sky. your mouth feels dry so you drinkt he last of the water.<br>"; 
            }else{
                questlog.innerHTML += "that choice doesn't exist try again.<br>"; 
            }
        }
        if(place === "noise"){
            if(text === "go into the woods"){
            
                place = "beast";
                questlog.innerHTML += "you take your sword and go into the wood with a torch in your hand.<br>"; 
                questlog.innerHTML += "the sound gets louder and you look around to see if he was near you yet.<br>";
                questlog.innerHTML += "you see a wolf come at you. The wolf groans at you. Do you fight the wolf or run away.<br>";
            }else if(text === "go back to sleep"){
                place = "run";
                 questlog.innerHTML += "you ignore the noise and fall right back to sleep.<br>";
                 questlog.innerHTML += "the noise comes up again but alouder and closer but you still ignore it.<br>";
            }else{
                 questlog.innerHTML += "that choice doesn't exist try again.<br>";
            }
            if(place === "beast"){
                if(text === "fight the beast"){
                    questlog.innerHTML += "You prepare your sword to fight.<br>";
                    var wolf_health = 45;
                }else if(place === "run"){
                    place = "bite";
                    questlog.innerHTML += "you try to run away from the wolf.<br>";
                    questlog.innerHTML += "But the wolf jumps at you and bites your leg.<br>";
                    questlog.innerHTML += "do you kick the wolf from your leg tearing some flesh off off or shake it off also causing some loss in flesh but less?<br>";
                }else{
                    questlog.innerHTML += "that choice doesn't exist try again.<br>";
                }
            }
            if(place === "bite"){
                if(text === "kick the wolf off"){
                    place = "blood_loss";
                    questlog.innerHTML += "you kick off the wolf falls over and gets back up with some of your flesh in your mouth, runs away back into the forest.<br>";
                    questlog.innerHTML += "you start to become light head and fall over breathing heavily.";
                    
                }else if(text === "shake the wolf off"){
                    place = "werewolf";
                    //the werewolf joins the party.
                    questlog.innerHTML += "You shake the wolf around a while.<br>";
                    questlog.innerHTML += "the wolf's eyes start to lessen in rage and look more human like.<br>";
                    questlog.innerHTML += "The wolf stops biting your leg and transforms in to a werewolf.<br>";
                    questlog.innerHTML += "he stands up and talks to you.";
                    questlog.innerHTML += "werewolf:I am so sorry for biting your leg. I let the animal inside me get to wild. i am sorry for everthing that has happened.<br>";
                    questlog.innerHTML += "do you forgive the warewolf, or do you ";
                }
            }
        }
    }
    evt.preventDefault();

}, false);
textbox.addEventListener("submitButton", function(evt) {
   
});
button.addEventListener("click", myFunction);

function myFunction() {

}
start.addEventListener("click", function() {
    Stuff();
    start.style.display = "none";
});


function Stuff() {
    questlog.innerHTML += "welcome to the world of battle crashers! <br>";
    questlog.innerHTML += "your adventure awaits you do you accept. <br>";
    place = "start";

}