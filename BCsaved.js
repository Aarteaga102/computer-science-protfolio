// JavaScript File
var button = document.getElementById("states");
var submitButton = document.getElementById("submitButton");
var textbox = document.getElementById("input");
var start = document.getElementById("begin");
var questlog = document.getElementById("questlog");
var info = document.getElementById("info");

submitButton.addEventListener("click", function(evt) {

        var text = textbox.value;
        questlog.innerHTML += '<div>'+text+'</div>';
        evt.preventDefault();

    }, false);
textbox.addEventListener("submitButton", function(evt) {

});
button.addEventListener("click", myFunction);

function myFunction() {
         
}
start.addEventListener("click", function() {
    Stuff();
    Delete();
});
function Delete(evt){
    var tar = evt.target;
    tar.parentNode.removeChild(tar);
    evt.preventDefault();
}

function Stuff() {
    questlog.innerHTML = "welcome to the world of battle crasher";
    if (confirm("your adventure awaits you do you accept.")) {
        questlog.innerHTML += "You start out with a stone sword and chain armor and a iron shield.";
        questlog.innerHTML += "you walking down a road then you see two paths, one with dark and evil cloud above it named dark path, or a peace road with fruit and beautiful grass named path of light.";
        var path = prompt("which do you choose.");
        if (/dark/.test(path)) {
            questlog.innerHTML = "you choose wrong.";
            questlog.innerHTML = "You battle a huge giant";
            var health = 70;
            var damage = 5;
            var answer = prompt("what do you do. you can run, battle it or do nothing. which do you choose.");
            if (answer == "battle it") {
                questlog.innerHTML = "the giant is ready for battle.";
                while (health > 0) {
                    var rando = Math.round(Math.random() * 50);
                    questlog.innerHTML = "Giant has" + health + "health.";
                    if (rando == 0) {
                        questlog.innerHTML = "The giant has missed.";
                    }
                    if (damage == 5) {
                        health -= 5;
                        questlog.innerHTML = "stone sword does 5 damage.";
                    }
                    else if (answer == "run away from it") {
                        questlog.innerHTML = "you couldn't run away from the giant";
                    }
                }

            }
        }
        else if (/light/.test(path)) {
            questlog.innerHTML = "you choose right you may continue your journey.";
            questlog.innerHTML = "You walk down a long road utill you find a village.";
            var village = prompt("do you go in to the village or continue your journey onward?");
            if (/go.*village/.test(village)) {
                questlog.innerHTML = "You go into the village and see a lot of people.";
                questlog.innerHTML = "you see a group of thief's try to steal all of the villages money from the bank and have hostages inside the bank.";
                var battle = prompt("do you save the towns money and save the people or will you leave the villages knights to get the money back and let them save the people?");
                if (/battle.*theif'?s/.test(battle)) {
                    questlog.innerHTML = "You run as fast as you can to the villages bank.";
                    questlog.innerHTML("you get in to the bank a local warrior is already in there with you.");
                    questlog.innerHTML = "the warrior is wearing a mask, Then you see the warrior battle one of the thief's";
                    var villian = prompt("do you battle the other thief running away or get the thief and battle them both with the mysterious mask warrior?");
                    if (/fight.*with.*warrior/.test(villian)) {
                        questlog.innerHTML = "the warrior is ready to fight with you.";
                        var thief_health = 10;
                        var warrior_health = 25;
                        var your_health = 15;
                        var sword = 2;
                        var level = 1;
                        var warriors_level = 3;
                        var xp_drop = 30;
                        var players_xp_bar = 0;
                        while (thief_health > 0 && your_health >= 0) {
                            questlog.innerHTML = "thief has " + thief_health + " health.";
                            if (sword == 2) {
                                thief_health -= 2;
                                questlog.innerHTML = "stone sword does 2 damage.";
                                var rand = Math.round(Math.random() * 1);
                                if (rand === 0) {
                                    questlog.innerHTML = "the thief missed.";
                                }
                                else if (rand == 1) {
                                    your_health--;
                                    questlog.innerHTML = "the thief has hit you.";
                                }
                                var rand = Math.round(Math.random() * 1);
                                if (rand === 0) {
                                    questlog.innerHTML = "The thief has missed the warrior.";
                                }
                                else if (rand == 1) {
                                    warrior_health--;
                                    questlog.innerHTML = "the warrior has been hit.";
                                }
                                if (thief_health <= 0 && your_health > 0 && warrior_health > 0) {
                                    questlog.innerHTML = "You and the warrior have gotten back the money and save the hostiages.";
                                    questlog.innerHTML = "you got" + xp_drop;
                                    var level_bar_increase = players_xp_bar + xp_drop;
                                    questlog.innerHTML = "your experince has been increased by" + level_bar_increase;


                                }

                            }
                        }
                    }
                    else if (/will.*battle.*alone/.test(villian)) {
                        questlog.innerHTML = "you battle one of the thief's alone";
                    }

                }
                else if (/leave.*knight'?s/.test(battle)) {
                    questlog.innerHTML = "You see the knights try to save the people and get the thief's as well as the money.";
                }
            }
            else if (/continue.*journey/.test(village)) {
                questlog.innerHTML = "you continued your journey onwards along the long road.";
                questlog.innerHTML = "you keep walking until you find a place to rest.";
                questlog.innerHTML = "you find a little town called little root that has a lot of merchants and trader's.";
                var little = prompt("do you go into the town or go and find another place?");
                if (/go.*town/.test(little)) {
                    questlog.innerHTML = "you walk into town and already see a food merchant.";
                }
                else if (/find.*place/.test(little)) {
                    questlog.innerHTML = "you skipped going into little root.";
                    questlog.innerHTML = "you now suffer from hunger which make you hillsonate thing's.";
                    questlog.innerHTML = "You start to see people everywhere and see talk talking animals.";
                    questlog.innerHTML = "you see a talking cow. The cow says to you what a beautiful moon up in the sky to night.";
                    var food = prompt("do you eat the cow you see in front of you or do you try and find another type of animal to kill?"); {
                        if (food == "i will kill this cow for food.") {
                            questlog.innerHTML = "you killed the cow and got beef";
                        }
                        else if (food == "i will find another type of animal to kill for food") {
                            questlog.innerHTML = "you find a chicken who has two heads, duck feet, and sharp teeth.";
                            var eat = prompt("will you eat this odd chicken or keep looking for food"); {
                                if (eat == "i will eat this odd chicken.") {
                                    questlog.innerHTML = "you kill the chicken and eat it";
                                    questlog.innerHTML = "you start to feel better and you start to see things again normaly.";
                                    questlog.innerHTML = "you realize that you at a bunch of instects.";
                                    questlog.innerHTML = "you become really thirst and want water.";
                                    var thirst = prompt("you then remember that you have a bottle of water but it is the last bit of water you have left. Do you drink the water know or drink it in the morning?");
                                    if (thirst == "i will drink the water now.") {
                                        questlog.innerHTML = "You drink the water and then fall asleep.";
                                        questlog.innerHTML = "Two hour later you hear a noise coming from the forest near by.";
                                        var forest = prompt("Do you take your sword and see what is causing this noise or do you ignore it and go back to sleep.");{
                                            if(forest == "go into the woods"){
                                                questlog.innerHTML = "you take your sword and go into the wood with a torch in your hand.";
                                            }else if(forest == "go back to sleep"){
                                                questlog.innerHTML = "you ignore the noise and fall right back to sleep.";
                                                questlog.innerHTML = "the noise comes up again but alouder and closer but you still ignore it.";
                                            }
                                            
                                        }
                                    }
                                    else if (thirst == "i will drink it in the morning") {
                                        questlog.innerHTML = "you decied to go to sleep early and then you start to dream.";
                                        questlog.innerHTML = "you start to dream about a grand adveture that awaits you.";
                                        questlog.innerHTML = "You wake up and see the morning sky. your mouth feels dry so you drinkt he last of the water.";
                                    }
                                }
                                else if (eat == "I will find another animal to eat.") {
                                    questlog.innerHTML = "you vison starts to become blury and then you fall over";
                                    questlog.innerHTML = "you died. Game Over!";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}