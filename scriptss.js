currentSet = 0;

//Sets variables for the flip all button to only affect unflipped cards
let cardIsFlipped0 = 0;
let cardIsFlipped1 = 0;
let cardIsFlipped2 = 0;
let cardIsFlipped3 = 0;
let cardIsFlipped4 = 0;
let cardIsFlipped5 = 0;
let cardIsFlipped6 = 0;
let cardIsFlipped7 = 0;
let cardIsFlipped8 = 0;
let cardIsFlipped9 = 0;
let cardIsFlipped10 = 0;
let cardIsFlipped11 = 0;

//For flipping the booster pack image
function flip0() {
    let element = document.getElementById('myDiv');
    if (cardIsFlipped0 === 0) {
        element.classList.toggle("flipped");
        ++cardIsFlipped0;
    } else {
        element.classList.toggle("flipped");
        cardIsFlipped0 = 1;
    }
}

//When card is clicked, its CSS flipping animation is triggered
function flip1() {
    let element = document.getElementById('myDiv1');
    if (cardIsFlipped1 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped1;
        return;
    } 
    if (cardIsFlipped1 === 1) {
        ++cardIsFlipped1;
        return;
    } 
    if (cardIsFlipped1 === 2) {
        --cardIsFlipped1;
        return;
    }
}

function flip2() {
    let element = document.getElementById('myDiv2');
    if (cardIsFlipped2 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped2;
        return;
    } 
    if (cardIsFlipped2 === 1) {
        ++cardIsFlipped2;
        return;
    } 
    if (cardIsFlipped2 === 2) {
        --cardIsFlipped2;
        return;
    }
}

function flip3() {
    let element = document.getElementById('myDiv3');
    if (cardIsFlipped3 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped3;
        return;
    } 
    if (cardIsFlipped3 === 1) {
        ++cardIsFlipped3;
        return;
    } 
    if (cardIsFlipped3 === 2) {
        --cardIsFlipped3;
        return;
    }
}

function flip4() {
    let element = document.getElementById('myDiv4');
    if (cardIsFlipped4 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped4;
        return;
    } 
    if (cardIsFlipped4 === 1) {
        ++cardIsFlipped4;
        return;
    } 
    if (cardIsFlipped4 === 2) {
        --cardIsFlipped4;
        return;
    }
}

function flip5() {
    let element = document.getElementById('myDiv5');
    if (cardIsFlipped5 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped5;
        return;
    } 
    if (cardIsFlipped5 === 1) {
        ++cardIsFlipped5;
        return;
    } 
    if (cardIsFlipped5 === 2) {
        --cardIsFlipped6;
        return;
    }
}

function flip6() {
    let element = document.getElementById('myDiv6');
    if (cardIsFlipped6 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped6;
        return;
    } 
    if (cardIsFlipped6 === 1) {
        ++cardIsFlipped6;
        return;
    } 
    if (cardIsFlipped6 === 2) {
        --cardIsFlipped6;
        return;
    }
}

function flip7() {
    let element = document.getElementById('myDiv7');
    if (cardIsFlipped7 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped7;
        return;
    } 
    if (cardIsFlipped7 === 1) {
        ++cardIsFlipped7;
        return;
    } 
    if (cardIsFlipped7 === 2) {
        --cardIsFlipped7;
        return;
    }
}

function flip8() {
    let element = document.getElementById('myDiv8');
    if (cardIsFlipped8 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped8;
        return;
    } 
    if (cardIsFlipped8 === 1) {
        ++cardIsFlipped8;
        return;
    } 
    if (cardIsFlipped8 === 2) {
        --cardIsFlipped8;
        return;
    }
}

function flip9() {
    let element = document.getElementById('myDiv9');
    if (cardIsFlipped9 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped9;
        return;
    } 
    if (cardIsFlipped9 === 1) {
        ++cardIsFlipped9;
        return;
    } 
    if (cardIsFlipped9 === 2) {
        --cardIsFlipped9;
        return;
    }   
}

function flip10() {
    let element = document.getElementById('myDiv10');
    if (cardIsFlipped10 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped10;
        return;
    } 
    if (cardIsFlipped10 === 1) {
        ++cardIsFlipped10;
        return;
    } 
    if (cardIsFlipped10 === 2) {
        --cardIsFlipped10;
        return;
    }

}

function flip11() {
    let element = document.getElementById('myDiv11');
    if (cardIsFlipped11 === 0){
        element.classList.toggle("flipped");
        ++cardIsFlipped11;
        return;
    } 
    if (cardIsFlipped11 === 1) {
        ++cardIsFlipped11;
        return;
    } 
    if (cardIsFlipped11 === 2) {
        --cardIsFlipped11;
        return;
    }

}

//flips all cards face up
function flipAll() {
    if (cardIsFlipped1 === 0) {
        flip1();
        }
    if (cardIsFlipped2 === 0) {
        flip2();
        }
    if (cardIsFlipped3 === 0) {
        flip3();
        }
    if (cardIsFlipped4 === 0) {
        flip4();
        }
    if (cardIsFlipped5 === 0) {
        flip5();
        }
    if (cardIsFlipped6 === 0) {
        flip6();
        }
    if (cardIsFlipped7 === 0) {
        flip7();
        }
    if (cardIsFlipped8 === 0) {
        flip8();
        }
    if (cardIsFlipped9 === 0) {
        flip9();
        }
    if (cardIsFlipped10 === 0) {
        flip10();
        }
    if (cardIsFlipped11 === 0) {
        flip11();
        }
}

//Sets up image choices for modal window
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var img1 = document.getElementById("randomCard1");
var img2 = document.getElementById("randomCard2");
var img3 = document.getElementById("randomCard3");
var img4 = document.getElementById("randomCard4");
var img5 = document.getElementById("randomCard5");
var img6 = document.getElementById("randomCard6");
var img7 = document.getElementById("randomCard7");
var img8 = document.getElementById("randomCard8");
var img9 = document.getElementById("randomCard9");
var img10 = document.getElementById("randomCard10");
var img11 = document.getElementById("randomCard11");

img1.onclick = function () {
    if (cardIsFlipped1 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img2.onclick = function () {
if (cardIsFlipped2 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img3.onclick = function () {
if (cardIsFlipped3 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img4.onclick = function () {
if (cardIsFlipped4 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img5.onclick = function () {
if (cardIsFlipped5 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img6.onclick = function () {
if (cardIsFlipped6 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img7.onclick = function () {
if (cardIsFlipped7 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img8.onclick = function () {
if (cardIsFlipped8 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img9.onclick = function () {
if (cardIsFlipped9 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img10.onclick = function () {
if (cardIsFlipped10 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}

img11.onclick = function () {
if (cardIsFlipped11 === 1) {
    modal.style.display="block";
    modalImg.src = this.src;
    return;
    }
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function reset0() {
    const element = document.getElementById('myDiv');
    element.classList.remove("flipped");
    cardIsFlipped0 = 0;
}

function reset1() {
    const element = document.getElementById('myDiv1');
    element.classList.remove("flipped");
    cardIsFlipped1 = 0;
}

function reset2() {
    const element = document.getElementById('myDiv2');
    element.classList.remove("flipped");
    cardIsFlipped2 = 0;
}

function reset3() {
    const element = document.getElementById('myDiv3');
    element.classList.remove("flipped");
    cardIsFlipped3 = 0;
}

function reset4() {
    const element = document.getElementById('myDiv4');
    element.classList.remove("flipped");
    cardIsFlipped4 = 0;
}

function reset5() {
    const element = document.getElementById('myDiv5');
    element.classList.remove("flipped");
    cardIsFlipped5 = 0;
}

function reset6() {
    const element = document.getElementById('myDiv6');
    element.classList.remove("flipped");
    cardIsFlipped6 = 0;
}

function reset7() {
    const element = document.getElementById('myDiv7');
    element.classList.remove("flipped");
    cardIsFlipped7 = 0;
}

function reset8() {
    const element = document.getElementById('myDiv8');
    element.classList.remove("flipped");
    cardIsFlipped8 = 0;
}

function reset9() {
    const element = document.getElementById('myDiv9');
    element.classList.remove("flipped");
    cardIsFlipped9 = 0;
}

function reset10() {
    const element = document.getElementById('myDiv10');
    element.classList.remove("flipped");
    cardIsFlipped10 = 0;
}

function reset11() {
    const element = document.getElementById('myDiv11');
    element.classList.remove("flipped");
    cardIsFlipped11 = 0;
}

function resetAll() {
    reset0();
    reset1();
    reset2();
    reset3();
    reset4();
    reset5();
    reset6();
    reset7();
    reset8();
    reset9();
    reset10();
    reset11();
}

//makes sure everything in an array is unique
function checkForDupes(array) {
  return new Set(array).size !== array.length;
}

//contains [rarity count], [pack order], [odds of an upgrade], [pack fronts], [pack backs], set symbol
//[#commons, uncommons, rares, energies, reverses], [which rarity goes where, 0 common, 1 uncommon, 2 rare, 3 energy, 4 reverse], [card rarity number, odds, .., ..]

//opens a new pack
function newPack() {	
//array of card images
commons = [];
uncommons = [];
rares = [];
energies = [];
reverses = [];

//adds cards to commons array
for (i = 0; i < setConfig[currentSet][0][0]; i++) {
	let numOfCommons = cardList[currentSet][0].length;
    let randomCommon = Math.floor(Math.random()*numOfCommons);	
	commons.push(cardList[currentSet][0][randomCommon]);
	
	if (i+1 == setConfig[currentSet][0][0]) {
		if(checkForDupes(commons)){
			i = -1;
			commons.length = 0;
		}
	}
}

//adds cards to uncommons array
for (i = 0; i < setConfig[currentSet][0][1]; i++) {
	let numOfUncommons = cardList[currentSet][1].length;
    let randomUncommon = Math.floor(Math.random()*numOfUncommons);	
	uncommons.push(cardList[currentSet][1][randomUncommon]);
	
	if (i+1 == setConfig[currentSet][0][1]) {
		if(checkForDupes(uncommons)){
			i = -1;
			uncommons.length = 0;
		}
	}
}

//adds cards to rares array
for (i = 0; i < setConfig[currentSet][0][2]; i++) {
	let numOfRares = cardList[currentSet][2].length;
    let randomRare = Math.floor(Math.random()*numOfRares);	
	rares.push(cardList[currentSet][2][randomRare]);
	
	if (i+1 == setConfig[currentSet][0][2]) {
		if(checkForDupes(rares)){
			i = -1;
			rares.length = 0;
		}
	}
}

//adds cards to energies array
for (i = 0; i < setConfig[currentSet][0][3]; i++) {
	let numOfEnergies = cardList[currentSet][3].length;
    let randomEnergy = Math.floor(Math.random()*numOfEnergies);	
	energies.push(cardList[currentSet][3][randomEnergy]);
	
	if (i+1 == setConfig[currentSet][0][3]) {
		if(checkForDupes(energies)){
			i = -1;
			energies.length = 0;
		}
	}
}

//adds cards to reverses array
for (i = 0; i < setConfig[currentSet][0][4]; i++) {
	let numOfReverses = cardList[currentSet][4].length;
    let randomReverse = Math.floor(Math.random()*numOfReverses);	
	reverses.push(cardList[currentSet][4][randomReverse]);
	
	if (i+1 == setConfig[currentSet][0][4]) {
		if(checkForDupes(reverses)){
			i = -1;
			reverses.length = [0];
		}
	}
}

//has html card ids
cardOrderArray = ['randomCard1', 'randomCard2', 'randomCard3', 'randomCard4', 'randomCard5', 'randomCard6', 'randomCard7', 'randomCard8', 'randomCard9','randomCard10','randomCard11'];
cardRarityArray = ['rarity1', 'rarity2', 'rarity3', 'rarity4', 'rarity5', 'rarity6', 'rarity7', 'rarity8', 'rarity9','rarity10','rarity11'];

//sets rarity arrays to one array
pickedCards = [commons, uncommons, rares, energies, reverses];

//used to say how many of each rarity has been used
common = 0;
uncommon = 0;
rare = 0;
energy = 0;
reverse = 0;
cardRarity = [common, uncommon, rare, energy, reverse];

//baseSet energy swap
if (currentSet == 0) {
	setConfig[currentSet][1] = [0,0,0,0,0,0,0,2,1,1,1];
	
	randNum1 = Math.floor(Math.random()*7);
	randNum2 = Math.floor(Math.random()*7);
	while (randNum1 == randNum2) {
		randNum2 = Math.floor(Math.random()*7);
	}
	setConfig[currentSet][1][randNum1] = 3;
	setConfig[currentSet][1][randNum2] = 3;
}

// adds cards to page
for (i = 0; i < setConfig[currentSet][1].length; i++) {
	if (setConfig[currentSet][2][i] == 0) {	
		if (setConfig[currentSet][1][i] == 0) {
			setSymbol = "rarity_common.png";
		}
		else if (setConfig[currentSet][1][i] == 1) {
			setSymbol = "rarity_uncommon.png";
		}
		else if (setConfig[currentSet][1][i] == 2) {
			setSymbol = "rarity_rare.png";
		}
		else if (setConfig[currentSet][1][i] == 3) {
			setSymbol = "colorless.png";
		}
		else {
		setSymbol = "unown_question_mark.gif";
		}
	}	
	else {
		setSymbol = "unown_question_mark.gif";
	}
	
	//adds set symbol
	document.getElementById(cardRarityArray[i]).src = setSymbol;
	
	//rarity bumps
	if(setConfig[currentSet][2][i] != 0) {
		
		rarityChanceOdds = Math.random();
		rarityChance = 0;
		
		for (j = 0; j < setConfig[currentSet][2][i].length/2; j++) {
			if(setConfig[currentSet][2][i][j*2+1] + rarityChance > rarityChanceOdds){
				let numOfCards = cardList[currentSet][setConfig[currentSet][2][i][j*2]].length;
				let randomCard = Math.floor(Math.random()*numOfCards);
				pickedCards[setConfig[currentSet][1][i]][cardRarity[setConfig[currentSet][1][i]]] = cardList[currentSet][setConfig[currentSet][2][i][j*2]][randomCard];
				j = setConfig[currentSet][2][i].length/2;
			}
			else {
				rarityChance = rarityChance + setConfig[currentSet][2][i][j*2+1];
			}	
		}
	}
	
	//sends cards to the screen
	document.getElementById(cardOrderArray[i]).src = pickedCards[setConfig[currentSet][1][i]][cardRarity[setConfig[currentSet][1][i]]];
	cardRarity[setConfig[currentSet][1][i]] = cardRarity[setConfig[currentSet][1][i]] + 1;
}

randomOdds = Math.floor(Math.random()*setConfig[currentSet][3].length);

for(i = 0; i < setConfig[currentSet][3].length; i++) {
	if (i == randomOdds) {
		document.getElementById("boosterPackFront").src = setConfig[currentSet][3][i];
		document.getElementById("boosterPackBack").src = setConfig[currentSet][4][i];
		i = setConfig[currentSet][3].length;
	}
}

document.getElementById("rarity0").src = setConfig[currentSet][5];

//add cards for 11 card packs
for(i = 0; i < 11; i++) {
	var cardSlot = document.getElementById("myDiv" + (i + 1));
	cardSlot.style.display = 'inline-block';
}

//gets rid of cards for 9 or 10 card packs
for(i = 0; i < 11 - setConfig[currentSet][1].length; i++) {
	var cardSlot = document.getElementById("myDiv" + (11 - i));
	cardSlot.style.display = 'none';
}
}

//Arrays of all card sets
const baseSet = [

	//Commons at index 0
    ['base_set/cs/abra-base-set-bs-43.jpg',
    'base_set/cs/bulbasaur-base-set-bs-44.jpg',
    'base_set/cs/caterpie-base-set-bs-45.jpg',
    'base_set/cs/charmander-base-set-bs-46.jpg',
    'base_set/cs/diglett-base-set-bs-47.jpg',
    'base_set/cs/doduo-base-set-bs-48.jpg',
    'base_set/cs/drowzee-base-set-bs-49.jpg',
    'base_set/cs/gastly-base-set-bs-50.jpg',
    'base_set/cs/koffing-base-set-bs-51.jpg',
    'base_set/cs/machop-base-set-bs-52.jpg',
    'base_set/cs/magnemite-base-set-bs-53.jpg',
    'base_set/cs/metapod-base-set-bs-54.jpg',
    'base_set/cs/nidoran-male-base-set-bs-55.jpg',
    'base_set/cs/onix-base-set-bs-56.jpg',
    'base_set/cs/pidgey-base-set-bs-57.jpg',
    'base_set/cs/pikachu-base-set-bs-58.jpg',
    'base_set/cs/poliwag-base-set-bs-59.jpg',
    'base_set/cs/ponyta-base-set-bs-60.jpg',
    'base_set/cs/rattata-base-set-bs-61.jpg',
    'base_set/cs/sandshrew-base-set-bs-62.jpg',
    'base_set/cs/squirtle-base-set-bs-63.jpg',
    'base_set/cs/starmie-base-set-bs-64.jpg',
    'base_set/cs/staryu-base-set-bs-65.jpg',
    'base_set/cs/tangela-base-set-bs-66.jpg',
    'base_set/cs/voltorb-base-set-bs-67.jpg',
    'base_set/cs/vulpix-base-set-bs-68.jpg',
    'base_set/cs/weedle-base-set-bs-69.jpg',
    'base_set/cs/bill-base-set-bs-91.jpg',
    'base_set/cs/energy-removal-base-set-bs-92.jpg',
    'base_set/cs/gust-of-wind-base-set-bs-93.jpg',
    'base_set/cs/potion-base-set-bs-94.jpg',
    'base_set/cs/switch-base-set-bs-95.jpg'],
	
	//Uncommons at index 1
    ['base_set/ucs/arcanine-base-set-bs-23.jpg',
    'base_set/ucs/charmeleon-base-set-bs-24.jpg',
    'base_set/ucs/dewgong-base-set-bs-25.jpg',
    'base_set/ucs/dratini-base-set-bs-26.jpg',
    'base_set/ucs/farfetchd-base-set-bs-27.jpg',
    'base_set/ucs/growlithe-base-set-bs-28.jpg',
    'base_set/ucs/haunter-base-set-bs-29.jpg',
    'base_set/ucs/ivysaur-base-set-bs-30.jpg',
    'base_set/ucs/jynx-base-set-bs-31.jpg',
    'base_set/ucs/kadabra-base-set-bs-32.jpg',
    'base_set/ucs/kakuna-base-set-bs-33.jpg',
    'base_set/ucs/machoke-base-set-bs-34.jpg',
    'base_set/ucs/magikarp-base-set-bs-35.jpg',
    'base_set/ucs/magmar-base-set-bs-36.jpg',
    'base_set/ucs/nidorino-base-set-bs-37.jpg',
    'base_set/ucs/poliwhirl-base-set-bs-38.jpg',
    'base_set/ucs/porygon-base-set-bs-39.jpg',
    'base_set/ucs/raticate-base-set-bs-40.jpg',
    'base_set/ucs/seel-base-set-bs-41.jpg',
    'base_set/ucs/wartortle-base-set-bs-42.jpg',
    'base_set/ucs/defender-base-set-bs-80.jpg',
    'base_set/ucs/energy-retrieval-base-set-bs-81.jpg',
    'base_set/ucs/full-heal-base-set-bs-82.jpg',
    'base_set/ucs/maintenance-base-set-bs-83.jpg',
    'base_set/ucs/pluspower-base-set-bs-84.jpg',
    'base_set/ucs/pokemon-center-base-set-bs-85.jpg',
    'base_set/ucs/pokemon-flute-base-set-bs-86.jpg',
    'base_set/ucs/pokedex-base-set-bs-87.jpg',
    'base_set/ucs/professor-oak-base-set-bs-88.jpg',
    'base_set/ucs/revive-base-set-bs-89.jpg',
    'base_set/ucs/super-potion-base-set-bs-90.jpg',
    'base_set/ucs/double-colorless-energy-base-set-bs-96.jpg'],
	
	//Rares at index 2
    ['base_set/rs/beedrill-base-set-bs-17.jpg',
    'base_set/rs/dragonair-base-set-bs-18.jpg',
    'base_set/rs/dugtrio-base-set-bs-19.jpg',
    'base_set/rs/electabuzz-base-set-bs-20.jpg',
    'base_set/rs/electrode-base-set-bs-21.jpg',
    'base_set/rs/pidgeotto-base-set-bs-22.jpg',
    'base_set/rs/clefairy-doll-base-set-bs-70.jpg',
    'base_set/rs/computer-search-base-set-bs-71.jpg',
    'base_set/rs/devolution-spray-base-set-bs-72.jpg',
    'base_set/rs/impostor-professor-oak-base-set-bs-73.jpg',
    'base_set/rs/item-finder-base-set-bs-74.jpg',
    'base_set/rs/lass-base-set-bs-75.jpg',
    'base_set/rs/pokemon-breeder-base-set-bs-76.jpg',
    'base_set/rs/pokemon-trader-base-set-bs-77.jpg',
    'base_set/rs/scoop-up-base-set-bs-78.jpg',
    'base_set/rs/super-energy-removal-base-set-bs-79.jpg'],
	
	    //Energy cards at index 3
    ['base_set/energys/fighting-energy-base-set-bs-97.jpg',
    'base_set/energys/fire-energy-base-set-bs-98.jpg',
    'base_set/energys/grass-energy-base-set-bs-99.jpg',
    'base_set/energys/lightning-energy-base-set-bs-100.jpg',
    'base_set/energys/psychic-energy-base-set-bs-101.jpg',
    'base_set/energys/water-energy-base-set-bs-102.jpg'],
	
    //Holos at index 4
    ['base_set/holos/alakazam-base-set-bs-1.jpg',
    'base_set/holos/blastoise-base-set-bs-2.jpg',
    'base_set/holos/chansey-base-set-bs-3.jpg',
    'base_set/holos/charizard-base-set-bs-4.jpg',
    'base_set/holos/clefairy-base-set-bs-5.jpg',
    'base_set/holos/gyarados-base-set-bs-6.jpg',
    'base_set/holos/hitmonchan-base-set-bs-7.jpg',
    'base_set/holos/magneton-base-set-bs-9.jpg',
    'base_set/holos/mewtwo-base-set-bs-10.jpg',
    'base_set/holos/nidoking-base-set-bs-11.jpg',
    'base_set/holos/ninetales-base-set-bs-12.jpg',
    'base_set/holos/poliwrath-base-set-bs-13.jpg',
    'base_set/holos/raichu-base-set-bs-14.jpg',
    'base_set/holos/venusaur-base-set-bs-15.jpg',
    'base_set/holos/zapdos-base-set-bs-16.jpg']
];

const jungle = [

	//Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/bellsprout-jungle-ju-49.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-jungle-ju-50.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-jungle-ju-51.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-jungle-ju-52.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-jungle-ju-53.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-jungle-ju-54.jpg',
    'https://pkmncards.com/wp-content/uploads/mankey-jungle-ju-55.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-jungle-ju-56.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-jungle-ju-57.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-jungle-ju-58.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-jungle-ju-59.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-jungle-ju-60.jpg',
    'https://pkmncards.com/wp-content/uploads/rhyhorn-jungle-ju-61.jpg',
    'https://pkmncards.com/wp-content/uploads/spearow-jungle-ju-62.jpg',
    'https://pkmncards.com/wp-content/uploads/venonat-jungle-ju-63.jpg',
    'https://pkmncards.com/wp-content/uploads/poke-ball-jungle-ju-64.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/butterfree-jungle-ju-33.jpg',
    'https://pkmncards.com/wp-content/uploads/dodrio-jungle-ju-34.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-jungle-ju-35.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-jungle-ju-36.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-jungle-ju-37.jpg',
    'https://pkmncards.com/wp-content/uploads/lickitung-jungle-ju-38.jpg',
    'https://pkmncards.com/wp-content/uploads/marowak-jungle-ju-39.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorina-jungle-ju-40.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-jungle-ju-41.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-jungle-ju-42.jpg',
    'https://pkmncards.com/wp-content/uploads/primeape-jungle-ju-43.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-jungle-ju-44.jpg',
    'https://pkmncards.com/wp-content/uploads/rhydon-jungle-ju-45.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-jungle-ju-46.jpg',
    'https://pkmncards.com/wp-content/uploads/tauros-jungle-ju-47.jpg',
    'https://pkmncards.com/wp-content/uploads/weepinbell-jungle-ju-48.jpg'],
	
	
    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/clefable-jungle-ju-17.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-jungle-ju-18-normal.jpg',
    'https://pkmncards.com/wp-content/uploads/flareon-jungle-ju-19.jpg',
    'https://pkmncards.com/wp-content/uploads/jolteon-jungle-ju-20.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-jungle-ju-21.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-jungle-ju-22.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoqueen-jungle-ju-23.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-jungle-ju-24.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-jungle-ju-25.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-jungle-ju-26.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-jungle-ju-27.jpg',
    'https://pkmncards.com/wp-content/uploads/vaporeon-jungle-ju-28.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-jungle-ju-29.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-jungle-ju-30.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-jungle-ju-31.jpg',
    'https://pkmncards.com/wp-content/uploads/wigglytuff-jungle-ju-32.jpg'],
	
    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/clefable-jungle-ju-1.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-jungle-ju-2.jpg',
    'https://pkmncards.com/wp-content/uploads/flareon-jungle-ju-3.jpg',
    'https://pkmncards.com/wp-content/uploads/jolteon-jungle-ju-4.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-jungle-ju-5.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-jungle-ju-6.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoqueen-jungle-ju-7.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-jungle-ju-8.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-jungle-ju-9.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-jungle-ju-10.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-jungle-ju-11.jpg',
    'https://pkmncards.com/wp-content/uploads/vaporeon-jungle-ju-12.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-jungle-ju-13.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-jungle-ju-14.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-jungle-ju-15.jpg',
    'https://pkmncards.com/wp-content/uploads/wigglytuff-jungle-ju-16.jpg']
];

const fossil = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/ekans-fossil-fo-46.jpg',
    'https://pkmncards.com/wp-content/uploads/geodude-fossil-fo-47.jpg',
    'https://pkmncards.com/wp-content/uploads/grimer-fossil-fo-48.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-fossil-fo-49.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-fossil-fo-50.jpg',
    'https://pkmncards.com/wp-content/uploads/krabby-fossil-fo-51.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-fossil-fo-52.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-fossil-fo-53.jpg',
    'https://pkmncards.com/wp-content/uploads/shellder-fossil-fo-54.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-fossil-fo-55.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacool-fossil-fo-56.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-fossil-fo-57.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-search-fossil-fo-59.jpg',
    'https://pkmncards.com/wp-content/uploads/gambler-fossil-fo-60.jpg',
    'https://pkmncards.com/wp-content/uploads/recycle-fossil-fo-61.jpg',
    'https://pkmncards.com/wp-content/uploads/mysterious-fossil-fossil-fo-62.jpg'],
	
	    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/arbok-fossil-fo-31.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-fossil-fo-32.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-fossil-fo-33.jpg',
    'https://pkmncards.com/wp-content/uploads/golbat-fossil-fo-34.jpg',
    'https://pkmncards.com/wp-content/uploads/golduck-fossil-fo-35.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-fossil-fo-36.jpg',
    'https://pkmncards.com/wp-content/uploads/graveler-fossil-fo-37.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-fossil-fo-38.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-fossil-fo-39.jpg',
    'https://pkmncards.com/wp-content/uploads/omastar-fossil-fo-40.jpg',
    'https://pkmncards.com/wp-content/uploads/sandslash-fossil-fo-41.jpg',
    'https://pkmncards.com/wp-content/uploads/seadra-fossil-fo-42.jpg',
    'https://pkmncards.com/wp-content/uploads/slowbro-fossil-fo-43.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacruel-fossil-fo-44.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-fossil-fo-45.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-fuji-fossil-fo-58.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/aerodactyl-fossil-fo-16.jpg',
    'https://pkmncards.com/wp-content/uploads/articuno-fossil-fo-17.jpg',
    'https://pkmncards.com/wp-content/uploads/ditto-fossil-fo-18.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-fossil-fo-19.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-fossil-fo-20.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-fossil-fo-21.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-fossil-fo-22.jpg',
    'https://pkmncards.com/wp-content/uploads/hypno-fossil-fo-23.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-fossil-fo-24.jpg',
    'https://pkmncards.com/wp-content/uploads/lapras-fossil-fo-25.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-fossil-fo-26.jpg',
    'https://pkmncards.com/wp-content/uploads/moltres-fossil-fo-27.jpg',
    'https://pkmncards.com/wp-content/uploads/muk-fossil-fo-28.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-fossil-fo-29.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-fossil-fo-30.jpg'],

    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/aerodactyl-fossil-fo-1.jpg',
    'https://pkmncards.com/wp-content/uploads/articuno-fossil-fo-2.jpg',
    'https://pkmncards.com/wp-content/uploads/ditto-fossil-fo-3.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-fossil-fo-4.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-fossil-fo-5.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-fossil-fo-6.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-fossil-fo-7.jpg',
    'https://pkmncards.com/wp-content/uploads/hypno-fossil-fo-8.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-fossil-fo-9.jpg',
    'https://pkmncards.com/wp-content/uploads/lapras-fossil-fo-10.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-fossil-fo-11.jpg',
    'https://pkmncards.com/wp-content/uploads/moltres-fossil-fo-12.jpg',
    'https://pkmncards.com/wp-content/uploads/muk-fossil-fo-13.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-fossil-fo-14.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-fossil-fo-15.jpg']
];

const base2 = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/abra-base-set-2-b2-65.jpg',
    'https://pkmncards.com/wp-content/uploads/bellsprout-base-set-2-b2-66.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-base-set-2-b2-67.jpg',
    'https://pkmncards.com/wp-content/uploads/caterpie-base-set-2-b2-68.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-base-set-2-b2-69.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-base-set-2-b2-70.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-base-set-2-b2-71.jpg',
    'https://pkmncards.com/wp-content/uploads/doduo-base-set-2-b2-72.jpg',
    'https://pkmncards.com/wp-content/uploads/drowzee-base-set-2-b2-73.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-base-set-2-b2-74.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-base-set-2-b2-75.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-base-set-2-b2-76.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-base-set-2-b2-77.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-base-set-2-b2-78.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-base-set-2-b2-79.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-base-set-2-b2-80.jpg',
    'https://pkmncards.com/wp-content/uploads/metapod-base-set-2-b2-81.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-base-set-2-b2-82.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-male-base-set-2-b2-83.jpg',
    'https://pkmncards.com/wp-content/uploads/onix-base-set-2-b2-84.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-base-set-2-b2-85.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgey-base-set-2-b2-86.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-base-set-2-b2-87.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-base-set-2-b2-88.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-base-set-2-b2-89.jpg',
    'https://pkmncards.com/wp-content/uploads/rhyhorn-base-set-2-b2-90.jpg',
    'https://pkmncards.com/wp-content/uploads/sandshrew-base-set-2-b2-91.jpg',
    'https://pkmncards.com/wp-content/uploads/spearow-base-set-2-b2-92.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-base-set-2-b2-93.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-base-set-2-b2-94.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-base-set-2-b2-95.jpg',
    'https://pkmncards.com/wp-content/uploads/tangela-base-set-2-b2-96.jpg',
    'https://pkmncards.com/wp-content/uploads/venonat-base-set-2-b2-97.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-base-set-2-b2-98.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-base-set-2-b2-99.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-base-set-2-b2-100.jpg',
    'https://pkmncards.com/wp-content/uploads/bill-base-set-2-b2-118.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-removal-base-set-2-b2-119.jpg',
    'https://pkmncards.com/wp-content/uploads/gust-of-wind-base-set-2-b2-120.jpg',
    'https://pkmncards.com/wp-content/uploads/poke-ball-base-set-2-b2-121.jpg',
    'https://pkmncards.com/wp-content/uploads/potion-base-set-2-b2-122.jpg',
    'https://pkmncards.com/wp-content/uploads/switch-base-set-2-b2-123.jpg'],
    
	//Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/arcanine-base-set-2-b2-33.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-base-set-2-b2-34.jpg',
    'https://pkmncards.com/wp-content/uploads/charmeleon-base-set-2-b2-35.jpg',
    'https://pkmncards.com/wp-content/uploads/dewgong-base-set-2-b2-36.jpg',
    'https://pkmncards.com/wp-content/uploads/dodrio-base-set-2-b2-37.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-base-set-2-b2-38.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-base-set-2-b2-39.jpg',
    'https://pkmncards.com/wp-content/uploads/farfetchd-base-set-2-b2-40.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-base-set-2-b2-41.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-base-set-2-b2-42.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-base-set-2-b2-43.jpg',
    'https://pkmncards.com/wp-content/uploads/ivysaur-base-set-2-b2-44.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-base-set-2-b2-45.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-base-set-2-b2-46.jpg',
    'https://pkmncards.com/wp-content/uploads/kakuna-base-set-2-b2-47.jpg',
    'https://pkmncards.com/wp-content/uploads/lickitung-base-set-2-b2-48.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-base-set-2-b2-49.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-base-set-2-b2-50.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-base-set-2-b2-51.jpg',
    'https://pkmncards.com/wp-content/uploads/marowak-base-set-2-b2-52.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorina-base-set-2-b2-53.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorino-base-set-2-b2-54.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-base-set-2-b2-55.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-base-set-2-b2-56.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-base-set-2-b2-57.jpg',
    'https://pkmncards.com/wp-content/uploads/raticate-base-set-2-b2-58.jpg',
    'https://pkmncards.com/wp-content/uploads/rhydon-base-set-2-b2-59.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-base-set-2-b2-60.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-base-set-2-b2-61.jpg',
    'https://pkmncards.com/wp-content/uploads/tauros-base-set-2-b2-62.jpg',
    'https://pkmncards.com/wp-content/uploads/wartortle-base-set-2-b2-63-w-gold-stamp.jpg',
    'https://pkmncards.com/wp-content/uploads/weepinbell-base-set-2-b2-64.jpg',
    'https://pkmncards.com/wp-content/uploads/defender-base-set-2-b2-109.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-retrieval-base-set-2-b2-110.jpg',
    'https://pkmncards.com/wp-content/uploads/full-heal-base-set-2-b2-111.jpg',
    'https://pkmncards.com/wp-content/uploads/maintenance-base-set-2-b2-112.jpg',
    'https://pkmncards.com/wp-content/uploads/pluspower-base-set-2-b2-113.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-center-base-set-2-b2-114.jpg',
    'https://pkmncards.com/wp-content/uploads/pokedex-base-set-2-b2-115.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-oak-base-set-2-b2-116.jpg',
    'https://pkmncards.com/wp-content/uploads/super-potion-base-set-2-b2-117.jpg',
    'https://pkmncards.com/wp-content/uploads/double-colorless-energy-base-set-2-b2-124.jpg'],
	
    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/beedrill-base-set-2-b2-21.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonair-base-set-2-b2-22.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-base-set-2-b2-23.jpg',
    'https://pkmncards.com/wp-content/uploads/electabuzz-base-set-2-b2-24.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-base-set-2-b2-25.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-base-set-2-b2-26.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-base-set-2-b2-27.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeotto-base-set-2-b2-28.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-base-set-2-b2-29.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-base-set-2-b2-30.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-base-set-2-b2-31.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-base-set-2-b2-32.jpg',
    'https://pkmncards.com/wp-content/uploads/computer-search-base-set-2-b2-101.jpg',
    'https://pkmncards.com/wp-content/uploads/imposter-professor-oak-base-set-2-b2-102.jpg',
    'https://pkmncards.com/wp-content/uploads/item-finder-base-set-2-b2-103.jpg',
    'https://pkmncards.com/wp-content/uploads/lass-base-set-2-b2-104.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-breeder-base-set-2-b2-105.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-trader-base-set-2-b2-106.jpg',
    'https://pkmncards.com/wp-content/uploads/scoop-up-base-set-2-b2-107.jpg',
    'https://pkmncards.com/wp-content/uploads/super-energy-removal-base-set-2-b2-108.jpg'],

    //Energy at index 3
    ['https://pkmncards.com/wp-content/uploads/fighting-energy-base-set-2-b2-125.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-base-set-2-b2-126.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-base-set-2-b2-127.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-base-set-2-b2-128.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-base-set-2-b2-129.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-base-set-2-b2-130.jpg'],
	
    //Holos at index 4
    ['https://pkmncards.com/wp-content/uploads/alakazam-base-set-2-b2-1.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-base-set-2-b2-2.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-base-set-2-b2-3.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-base-set-2-b2-4.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-base-set-2-b2-5.jpg',
    'https://pkmncards.com/wp-content/uploads/clefairy-base-set-2-b2-6.jpg',
    'https://pkmncards.com/wp-content/uploads/gyarados-base-set-2-b2-7.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonchan-base-set-2-b2-8.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-base-set-2-b2-9.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-base-set-2-b2-10.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-base-set-2-b2-11.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoqueen-base-set-2-b2-12.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-base-set-2-b2-13.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-base-set-2-b2-14.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-base-set-2-b2-15.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-base-set-2-b2-16.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-base-set-2-b2-17.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-base-set-2-b2-18.jpg',
    'https://pkmncards.com/wp-content/uploads/wigglytuff-base-set-2-b2-19.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-base-set-2-b2-20.jpg']
];

const teamRocket = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/abra-team-rocket-tr-49.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-team-rocket-tr-50.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-raticate-team-rocket-tr-51.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-team-rocket-tr-52.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-team-rocket-tr-53.jpg',
    'https://pkmncards.com/wp-content/uploads/drowzee-team-rocket-tr-54.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-team-rocket-tr-55.jpg',
    'https://pkmncards.com/wp-content/uploads/ekans-team-rocket-tr-56.jpg',
    'https://pkmncards.com/wp-content/uploads/grimer-team-rocket-tr-57.jpg',
    'https://pkmncards.com/wp-content/uploads/koffing-team-rocket-tr-58.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-team-rocket-tr-59.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-team-rocket-tr-60.jpg',
    'https://pkmncards.com/wp-content/uploads/mankey-team-rocket-tr-61.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-team-rocket-tr-62.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-team-rocket-tr-63.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-team-rocket-tr-64.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-team-rocket-tr-65.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-team-rocket-tr-66.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-team-rocket-tr-67.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-team-rocket-tr-68.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-team-rocket-tr-69.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-team-rocket-tr-70.jpg',
    'https://pkmncards.com/wp-content/uploads/goop-gas-attack-team-rocket-tr-78.jpg',
    'https://pkmncards.com/wp-content/uploads/sleep-team-rocket-tr-79.jpg'],
	
    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/dark-charmeleon-team-rocket-tr-32.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-dragonair-team-rocket-tr-33.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-electrode-team-rocket-tr-34.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-flareon-team-rocket-tr-35.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-gloom-team-rocket-tr-36.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-golduck-team-rocket-tr-37.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-jolteon-team-rocket-tr-38.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-kadabra-team-rocket-tr-39.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-machoke-team-rocket-tr-40.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-muk-team-rocket-tr-41.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-persian-team-rocket-tr-42.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-primeape-team-rocket-tr-43.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-rapidash-team-rocket-tr-44.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-vaporeon-team-rocket-tr-45.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-wartortle-team-rocket-tr-46.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-team-rocket-tr-47.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon-team-rocket-tr-48.jpg',
    'https://pkmncards.com/wp-content/uploads/the-bosss-way-team-rocket-tr-73.jpg',
    'https://pkmncards.com/wp-content/uploads/challenge-team-rocket-tr-74.jpg',
    'https://pkmncards.com/wp-content/uploads/digger-team-rocket-tr-75.jpg',
    'https://pkmncards.com/wp-content/uploads/imposter-oaks-revenge-team-rocket-tr-76.jpg',
    'https://pkmncards.com/wp-content/uploads/nightly-garbage-run-team-rocket-tr-77.jpg',
    'https://pkmncards.com/wp-content/uploads/full-heal-energy-team-rocket-tr-81.jpg',
    'https://pkmncards.com/wp-content/uploads/potion-energy-team-rocket-tr-82.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/dark-alakazam-team-rocket-tr-18.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-arbok-team-rocket-tr-19.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-blastoise-team-rocket-tr-20.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-charizard-team-rocket-tr-21.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-dragonite-team-rocket-tr-22.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-dugtrio-team-rocket-tr-23.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-golbat-team-rocket-tr-24.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-gyarados-team-rocket-tr-25.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-hypno-team-rocket-tr-26.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-machamp-team-rocket-tr-27.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-magneton-team-rocket-tr-28.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-slowbro-team-rocket-tr-29.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-vileplume-team-rocket-tr-30.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-weezing-team-rocket-tr-31.jpg',
    'https://pkmncards.com/wp-content/uploads/here-comes-team-rocket-team-rocket-tr-71.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-sneak-attack-team-rocket-tr-72.jpg',
    'https://pkmncards.com/wp-content/uploads/rainbow-energy-team-rocket-tr-80.jpg'],

    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/dark-alakazam-team-rocket-tr-1.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-arbok-team-rocket-tr-2.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-blastoise-team-rocket-tr-3.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-charizard-team-rocket-tr-4.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-dragonite-team-rocket-tr-5.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-dugtrio-team-rocket-tr-6.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-golbat-team-rocket-tr-7.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-gyarados-team-rocket-tr-8.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-hypno-team-rocket-tr-9.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-machamp-team-rocket-tr-10.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-magneton-team-rocket-tr-11.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-slowbro-team-rocket-tr-12.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-vileplume-team-rocket-tr-13.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-weezing-team-rocket-tr-14.jpg',
    'https://pkmncards.com/wp-content/uploads/here-comes-team-rocket-team-rocket-tr-15.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-sneak-attack-team-rocket-tr-16.jpg',
    'https://pkmncards.com/wp-content/uploads/rainbow-energy-team-rocket-tr-17.jpg'],
	
	//Secrets at index 4
	['https://pkmncards.com/wp-content/uploads/dark-raichu-team-rocket-tr-83.jpg']
];

const gymHeroes = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/blaines-charmander-gym-heroes-61.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-growlithe-gym-heroes-62.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-ponyta-gym-heroes-63.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-tauros-gym-heroes-64.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-vulpix-gym-heroes-65.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-geodude-gym-heroes-66.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-mankey-gym-heroes-67.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-mankey-gym-heroes-68.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-onix-gym-heroes-69.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-rhyhorn-gym-heroes-70.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-sandshrew-gym-heroes-71.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-sandshrew-gym-heroes-72.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-vulpix-gym-heroes-73.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-zubat-gym-heroes-74.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-bellsprout-gym-heroes-75.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-bellsprout-gym-heroes-76.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-exeggcute-gym-heroes-77.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-oddish-gym-heroes-78.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-tangela-gym-heroes-79.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-magnemite-gym-heroes-80.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-pikachu-gym-heroes-81.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-rattata-gym-heroes-82.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-spearow-gym-heroes-83.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-voltorb-gym-heroes-84.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-goldeen-gym-heroes-85.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-horsea-gym-heroes-86.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-poliwag-gym-heroes-87.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-seel-gym-heroes-88.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-shellder-gym-heroes-89.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-staryu-gym-heroes-90.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-abra-gym-heroes-91.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-drowzee-gym-heroes-92.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gastly-gym-heroes-93.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-mr.-mime-gym-heroes-94.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-slowpoke-gym-heroes-95.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-venonat-gym-heroes-96.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-gamble-gym-heroes-121.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-flow-gym-heroes-122.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-duel-gym-heroes-123.jpg',
    'https://pkmncards.com/wp-content/uploads/narrow-gym-gym-heroes-124.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gaze-gym-heroes-125.jpg',
    'https://pkmncards.com/wp-content/uploads/trash-exchange-gym-heroes-126.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/blaines-growlithe-gym-heroes-35.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-kangaskhan-gym-heroes-36.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-magmar-gym-heroes-37.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-geodude-gym-heroes-38.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-golbat-gym-heroes-39.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-graveler-gym-heroes-40.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-lickitung-gym-heroes-41.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-dratini-gym-heroes-42.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-exeggcute-gym-heroes-43.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-exeggutor-gym-heroes-44.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-gloom-gym-heroes-45.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-gloom-gym-heroes-46.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-oddish-gym-heroes-47.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-weepinbell-gym-heroes-48.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-weepinbell-gym-heroes-49.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-magnemite-gym-heroes-50.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-raticate-gym-heroes-51.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-spearow-gym-heroes-52.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-poliwhirl-gym-heroes-53.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-psyduck-gym-heroes-54.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-seaking-gym-heroes-55.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-starmie-gym-heroes-56.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-tentacool-gym-heroes-57.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-haunter-gym-heroes-58.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-jynx-gym-heroes-59.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-slowbro-gym-heroes-60.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-last-resort-gym-heroes-105.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-training-method-gym-heroes-106.jpg',
    'https://pkmncards.com/wp-content/uploads/celadon-city-gym-gym-heroes-107.jpg',
    'https://pkmncards.com/wp-content/uploads/cerulean-city-gym-gym-heroes-108.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-maids-gym-heroes-109.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-perfume-gym-heroes-110.jpg',
    'https://pkmncards.com/wp-content/uploads/good-manners-gym-heroes-111.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-treaty-gym-heroes-112.jpg',
    'https://pkmncards.com/wp-content/uploads/minion-of-team-rocket-gym-heroes-113.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-wrath-gym-heroes-114.jpg',
    'https://pkmncards.com/wp-content/uploads/pewter-city-gym-gym-heroes-115.jpg',
    'https://pkmncards.com/wp-content/uploads/recall-gym-heroes-116.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-esp-gym-heroes-117.jpg',
    'https://pkmncards.com/wp-content/uploads/secret-mission-gym-heroes-118.jpg',
    'https://pkmncards.com/wp-content/uploads/tickling-machine-gym-heroes-119.jpg',
    'https://pkmncards.com/wp-content/uploads/vermilion-city-gym-gym-heroes-120.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/brocks-golem-gym-heroes-20.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-onix-gym-heroes-21.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-rhyhorn-gym-heroes-22.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-sandslash-gym-heroes-23.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-zubat-gym-heroes-24.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-clefairy-gym-heroes-25.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-victreebel-gym-heroes-26.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-electabuzz-gym-heroes-27.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-raichu-gym-heroes-28.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-cloyster-gym-heroes-29.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-goldeen-gym-heroes-30.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-poliwrath-gym-heroes-31.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-tentacool-gym-heroes-32.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-snorlax-gym-heroes-33.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-venomoth-gym-heroes-34.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-quiz-1-gym-heroes-97.jpg',
    'https://pkmncards.com/wp-content/uploads/brock-gym-heroes-98.jpg',
    'https://pkmncards.com/wp-content/uploads/charity-gym-heroes-99.jpg',
    'https://pkmncards.com/wp-content/uploads/erika-gym-heroes-100.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surge-gym-heroes-101.jpg',
    'https://pkmncards.com/wp-content/uploads/misty-gym-heroes-102.jpg',
    'https://pkmncards.com/wp-content/uploads/no-removal-gym-gym-heroes-103.jpg',
    'https://pkmncards.com/wp-content/uploads/the-rockets-training-gym-gym-heroes-104.jpg'],

    //Energy at index 3
    ['https://pkmncards.com/wp-content/uploads/fighting-energy-gym-heroes-127.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-gym-heroes-128.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-gym-heroes-129.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-gym-heroes-130.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-gym-heroes-131.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-gym-heroes-132.jpg'],

    //Holos at index 4
    ['https://pkmncards.com/wp-content/uploads/blaines-moltres-gym-heroes-1.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-rhydon-gym-heroes-2.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-clefable-gym-heroes-3.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-dragonair-gym-heroes-4.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-vileplume-gym-heroes-5.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-electabuzz-gym-heroes-6.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-fearow-gym-heroes-7.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-magneton-gym-heroes-8.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-seadra-gym-heroes-9.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-tentacruel-gym-heroes-10.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-hitmonchan-gym-heroes-11.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-moltres-gym-heroes-12.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-scyther-gym-heroes-13.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gengar-gym-heroes-14.jpg',
    'https://pkmncards.com/wp-content/uploads/brock-gym-heroes-15.jpg',
    'https://pkmncards.com/wp-content/uploads/erika-gym-heroes-16.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surge-gym-heroes-17.jpg',
    'https://pkmncards.com/wp-content/uploads/misty-gym-heroes-18.jpg',
    'https://pkmncards.com/wp-content/uploads/the-rockets-trap-gym-heroes-19.jpg']
];

const gymChallenge = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/blaines-charmander-gym-challenge-60.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-doduo-gym-challenge-61.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-growlithe-gym-challenge-62.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-mankey-gym-challenge-63.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-ponyta-gym-challenge-64.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-rhyhorn-gym-challenge-65.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-vulpix-gym-challenge-66.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-diglett-gym-challenge-67.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-geodude-gym-challenge-68.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-jigglypuff-gym-challenge-69.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-oddish-gym-challenge-70.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-paras-gym-challenge-71.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-machop-gym-challenge-72.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-magikarp-gym-challenge-73.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-meowth-gym-challenge-74.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidoran-female-gym-challenge-75.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidoran-male-gym-challenge-76.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-ekans-gym-challenge-77.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-grimer-gym-challenge-78.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-koffing-gym-challenge-79.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-pidgey-gym-challenge-80.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-tangela-gym-challenge-81.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-weedle-gym-challenge-82.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-zubat-gym-challenge-83.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-pikachu-gym-challenge-84.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-rattata-gym-challenge-85.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-voltorb-gym-challenge-86.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-horsea-gym-challenge-87.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-magikarp-gym-challenge-88.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-poliwag-gym-challenge-89.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-psyduck-gym-challenge-90.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-seel-gym-challenge-91.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-staryu-gym-challenge-92.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-abra-gym-challenge-93.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-abra-gym-challenge-94.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-drowzee-gym-challenge-95.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gastly-gym-challenge-96.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gastly-gym-challenge-97.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-porygon-gym-challenge-98.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-psyduck-gym-challenge-99.jpg',
    'https://pkmncards.com/wp-content/uploads/fervor-gym-challenge-124.jpg',
    'https://pkmncards.com/wp-content/uploads/transparent-walls-gym-challenge-125.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-point-gym-challenge-126.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/blaines-charmeleon-gym-challenge-31.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-dodrio-gym-challenge-32.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-rapidash-gym-challenge-33.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-graveler-gym-challenge-34.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-primeape-gym-challenge-35.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-sandslash-gym-challenge-36.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-vulpix-gym-challenge-37.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-bellsprout-gym-challenge-38.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-bulbasaur-gym-challenge-39.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-clefairy-gym-challenge-40.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-ivysaur-gym-challenge-41.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-machoke-gym-challenge-42.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-meowth-gym-challenge-43.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidorina-gym-challenge-44.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidorino-gym-challenge-45.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-golbat-gym-challenge-46.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-kakuna-gym-challenge-47.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-koffing-gym-challenge-48.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-pidgey-gym-challenge-49.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-weezing-gym-challenge-50.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-eevee-gym-challenge-51.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-electrode-gym-challenge-52.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-raticate-gym-challenge-53.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-dewgong-gym-challenge-54.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-haunter-gym-challenge-55.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-hypno-gym-challenge-56.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-jynx-gym-challenge-57.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-kadabra-gym-challenge-58.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-mr.-mime-gym-challenge-59.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-quiz-2-gym-challenge-111.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-quiz-3-gym-challenge-112.jpg',
    'https://pkmncards.com/wp-content/uploads/cinnabar-city-gym-gym-challenge-113.jpg',
    'https://pkmncards.com/wp-content/uploads/fuchsia-city-gym-gym-challenge-114.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-ninja-trick-gym-challenge-115.jpg',
    'https://pkmncards.com/wp-content/uploads/master-ball-gym-challenge-116.jpg',
    'https://pkmncards.com/wp-content/uploads/max-revive-gym-challenge-117.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-tears-gym-challenge-118.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-minefield-gym-gym-challenge-119.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-secret-experiment-gym-challenge-120.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-psychic-control-gym-challenge-121.jpg',
    'https://pkmncards.com/wp-content/uploads/saffron-city-gym-gym-challenge-122.jpg',
    'https://pkmncards.com/wp-content/uploads/viridian-city-gym-gym-challenge-123.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/blaines-ninetales-gym-challenge-21.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-dugtrio-gym-challenge-22.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidoqueen-gym-challenge-23.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-pinsir-gym-challenge-24.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-arbok-gym-challenge-25.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-muk-gym-challenge-26.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-pidgeotto-gym-challenge-27.jpg',
    'https://pkmncards.com/wp-content/uploads/lit.-surges-jolteon-gym-challenge-28.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-gengar-gym-challenge-29.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-golduck-gym-challenge-30.jpg',
    'https://pkmncards.com/wp-content/uploads/blaine-gym-challenge-100.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-protection-gym-challenge-101.jpg',
    'https://pkmncards.com/wp-content/uploads/chaos-gym-gym-challenge-102.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-kindness-gym-challenge-103.jpg',
    'https://pkmncards.com/wp-content/uploads/giovanni-gym-challenge-104.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-last-resort-gym-challenge-105.jpg',
    'https://pkmncards.com/wp-content/uploads/koga-gym-challenge-106.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-secret-plan-gym-challenge-107.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-wish-gym-challenge-108.jpg',
    'https://pkmncards.com/wp-content/uploads/resistance-gym-gym-challenge-109.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrina-gym-challenge-110.jpg'],

    //Energy at index 3
    ['https://pkmncards.com/wp-content/uploads/fighting-energy-gym-challenge-127.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-gym-challenge-128.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-gym-challenge-129.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-gym-challenge-130.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-gym-challenge-131.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-gym-challenge-132.jpg'],

    //Holos at index 4
    ['https://pkmncards.com/wp-content/uploads/blaines-arcanine-gym-challenge-1.jpg',
    'https://pkmncards.com/wp-content/uploads/blaines-charizard-gym-challenge-2.jpg',
    'https://pkmncards.com/wp-content/uploads/brocks-ninetales-gym-challenge-3.jpg',
    'https://pkmncards.com/wp-content/uploads/erikas-venusaur-gym-challenge-4.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-gyarados-gym-challenge-5.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-machamp-gym-challenge-6.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-nidoking-gym-challenge-7.jpg',
    'https://pkmncards.com/wp-content/uploads/giovannis-persian-gym-challenge-8.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-beedrill-gym-challenge-9.jpg',
    'https://pkmncards.com/wp-content/uploads/kogas-ditto-gym-challenge-10.jpg',
    'https://pkmncards.com/wp-content/uploads/lt.-surges-raichu-gym-challenge-11.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-golduck-gym-challenge-12.jpg',
    'https://pkmncards.com/wp-content/uploads/mistys-gyarados-gym-challenge-13.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-mewtwo-gym-challenge-14.jpg',
    'https://pkmncards.com/wp-content/uploads/rockets-zapdos-gym-challenge-15.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrinas-alakazam-gym-challenge-16.jpg',
    'https://pkmncards.com/wp-content/uploads/blaine-gym-challenge-17.jpg',
    'https://pkmncards.com/wp-content/uploads/giovanni-gym-challenge-18.jpg',
    'https://pkmncards.com/wp-content/uploads/koga-gym-challenge-19.jpg',
    'https://pkmncards.com/wp-content/uploads/sabrina-gym-challenge-20.jpg']
];

const neoGenesis = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/chikorita-neo-genesis-53.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-neo-genesis-54.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-neo-genesis-55.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-neo-genesis-56.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-neo-genesis-57.jpg',
    'https://pkmncards.com/wp-content/uploads/girafarig-neo-genesis-58.jpg',
    'https://pkmncards.com/wp-content/uploads/gligar-neo-genesis-59.jpg',
    'https://pkmncards.com/wp-content/uploads/hoothoot-neo-genesis-60.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-neo-genesis-61.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-neo-genesis-62.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-neo-genesis-63.jpg',
    'https://pkmncards.com/wp-content/uploads/mantine-neo-genesis-64.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-neo-genesis-65.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-neo-genesis-66.jpg',
    'https://pkmncards.com/wp-content/uploads/natu-neo-genesis-67.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-neo-genesis-68.jpg',
    'https://pkmncards.com/wp-content/uploads/onix-neo-genesis-69.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-neo-genesis-70.jpg',
    'https://pkmncards.com/wp-content/uploads/sentret-neo-genesis-71.jpg',
    'https://pkmncards.com/wp-content/uploads/shuckle-neo-genesis-72.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-neo-genesis-73.jpg',
    'https://pkmncards.com/wp-content/uploads/snubbull-neo-genesis-74.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-neo-genesis-75.jpg',
    'https://pkmncards.com/wp-content/uploads/stantler-neo-genesis-76.jpg',
    'https://pkmncards.com/wp-content/uploads/sudowoodo-neo-genesis-77.jpg',
    'https://pkmncards.com/wp-content/uploads/sunkern-neo-genesis-78.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-neo-genesis-79.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-neo-genesis-80.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-neo-genesis-81.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-neo-genesis-82.jpg',
    'https://pkmncards.com/wp-content/uploads/berry-neo-genesis-99.jpg',
    'https://pkmncards.com/wp-content/uploads/double-gust-neo-genesis-100.jpg',
    'https://pkmncards.com/wp-content/uploads/moo-moo-milk-neo-genesis-101.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-march-neo-genesis-102.jpg',
    'https://pkmncards.com/wp-content/uploads/super-rod-neo-genesis-103.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/aipom-neo-genesis-26.jpg',
    'https://pkmncards.com/wp-content/uploads/ariados-neo-genesis-27.jpg',
    'https://pkmncards.com/wp-content/uploads/bayleef-neo-genesis-28.jpg',
    'https://pkmncards.com/wp-content/uploads/bayleef-neo-genesis-29.jpg',
    'https://pkmncards.com/wp-content/uploads/clefairy-neo-genesis-30.jpg',
    'https://pkmncards.com/wp-content/uploads/croconaw-neo-genesis-31.jpg',
    'https://pkmncards.com/wp-content/uploads/croconaw-neo-genesis-32.jpg',
    'https://pkmncards.com/wp-content/uploads/electabuzz-neo-genesis-33.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-neo-genesis-34.jpg',
    'https://pkmncards.com/wp-content/uploads/furret-neo-genesis-35.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-neo-genesis-36.jpg',
    'https://pkmncards.com/wp-content/uploads/granbull-neo-genesis-37.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-neo-genesis-38.jpg',
    'https://pkmncards.com/wp-content/uploads/ledian-neo-genesis-39.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-neo-genesis-40.jpg',
    'https://pkmncards.com/wp-content/uploads/miltank-neo-genesis-41.jpg',
    'https://pkmncards.com/wp-content/uploads/noctowl-neo-genesis-42.jpg',
    'https://pkmncards.com/wp-content/uploads/phanpy-neo-genesis-43.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-neo-genesis-44.jpg',
    'https://pkmncards.com/wp-content/uploads/quagsire-neo-genesis-45.jpg',
    'https://pkmncards.com/wp-content/uploads/quilava-neo-genesis-46.jpg',
    'https://pkmncards.com/wp-content/uploads/quilava-neo-genesis-47.jpg',
    'https://pkmncards.com/wp-content/uploads/seadra-neo-genesis-48.jpg',
    'https://pkmncards.com/wp-content/uploads/skiploom-neo-genesis-49.jpg',
    'https://pkmncards.com/wp-content/uploads/sunflora-neo-genesis-50.jpg',
    'https://pkmncards.com/wp-content/uploads/togepi-neo-genesis-51.jpg',
    'https://pkmncards.com/wp-content/uploads/xatu-neo-genesis-52.jpg',
    'https://pkmncards.com/wp-content/uploads/bills-teleporter-neo-genesis-91.jpg',
    'https://pkmncards.com/wp-content/uploads/card-flip-game-neo-genesis-92.jpg',
    'https://pkmncards.com/wp-content/uploads/gold-berry-neo-genesis-93.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-berry-neo-genesis-94.jpg',
    'https://pkmncards.com/wp-content/uploads/new-pokedex-neo-genesis-95.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-elm-neo-genesis-96.jpg',
    'https://pkmncards.com/wp-content/uploads/sprout-tower-neo-genesis-97.jpg',
    'https://pkmncards.com/wp-content/uploads/super-scoop-up-neo-genesis-98.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/cleffa-neo-genesis-20.jpg',
    'https://pkmncards.com/wp-content/uploads/donphan-neo-genesis-21.jpg',
    'https://pkmncards.com/wp-content/uploads/elekid-neo-genesis-22.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-neo-genesis-23.jpg',
    'https://pkmncards.com/wp-content/uploads/murkrow-neo-genesis-24.jpg',
    'https://pkmncards.com/wp-content/uploads/sneasel-neo-genesis-25.jpg',
    'https://pkmncards.com/wp-content/uploads/arcade-game-neo-genesis-83.jpg',
    'https://pkmncards.com/wp-content/uploads/ecogym-neo-genesis-84.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-charge-neo-genesis-85.jpg',
    'https://pkmncards.com/wp-content/uploads/focus-band-neo-genesis-86.jpg',
    'https://pkmncards.com/wp-content/uploads/mary-neo-genesis-87.jpg',
    'https://pkmncards.com/wp-content/uploads/pokegear-neo-genesis-88.jpg',
    'https://pkmncards.com/wp-content/uploads/super-energy-retrieval-neo-genesis-89.jpg',
    'https://pkmncards.com/wp-content/uploads/time-capsule-neo-genesis-90.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-neo-genesis-104.jpg',
    'https://pkmncards.com/wp-content/uploads/recycle-energy-neo-genesis-105.jpg'],

    //Energy at index 3
    ['https://pkmncards.com/wp-content/uploads/fighting-energy-neo-genesis-106.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-neo-genesis-107.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-neo-genesis-108.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-neo-genesis-109.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-neo-genesis-110.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-neo-genesis-111.jpg'],

    //Holos at index 4
    ['https://pkmncards.com/wp-content/uploads/ampharos-neo-genesis-1.jpg',
    'https://pkmncards.com/wp-content/uploads/azumarill-neo-genesis-2.jpg',
    'https://pkmncards.com/wp-content/uploads/bellossom-neo-genesis-3.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-neo-genesis-4.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-neo-genesis-5.jpg',
    'https://pkmncards.com/wp-content/uploads/heracross-neo-genesis-6.jpg',
    'https://pkmncards.com/wp-content/uploads/jumpluff-neo-genesis-7.jpg',
    'https://pkmncards.com/wp-content/uploads/kingdra-neo-genesis-8.jpg',
    'https://pkmncards.com/wp-content/uploads/lugia-neo-genesis-9.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-neo-genesis-10.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-neo-genesis-11.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-neo-genesis-12.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-neo-genesis-13.jpg',
    'https://pkmncards.com/wp-content/uploads/slowking-neo-genesis-14.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-neo-genesis-15.jpg',
    'https://pkmncards.com/wp-content/uploads/togetic-neo-genesis-16.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-neo-genesis-17.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-neo-genesis-18.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-neo-genesis-19.jpg']
];

const neoDiscovery = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/fossil-egg-neo-discovery-72.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-neo-discovery-71.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-neo-discovery-70.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-o-neo-discovery-69.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-i-neo-discovery-68.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-e-neo-discovery-67.jpg',
    'https://pkmncards.com/wp-content/uploads/tyrogue-neo-discovery-66.jpg',
    'https://pkmncards.com/wp-content/uploads/teddiursa-neo-discovery-65.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-neo-discovery-64.jpg',
    'https://pkmncards.com/wp-content/uploads/sentret-neo-discovery-63.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-neo-discovery-62.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-neo-discovery-61.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-neo-discovery-60.jpg',
    'https://pkmncards.com/wp-content/uploads/natu-neo-discovery-59.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-neo-discovery-58.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-neo-discovery-57.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-neo-discovery-56.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-neo-discovery-55.jpg',
    'https://pkmncards.com/wp-content/uploads/dunsparce-neo-discovery-54.jpg',
    'https://pkmncards.com/wp-content/uploads/caterpie-neo-discovery-53.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/energy-ark-neo-discovery-75.jpg',
    'https://pkmncards.com/wp-content/uploads/ruin-wall-neo-discovery-74.jpg',
    'https://pkmncards.com/wp-content/uploads/hyper-devolution-spray-neo-discovery-73.jpg',
    'https://pkmncards.com/wp-content/uploads/xatu-neo-discovery-52.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-u-neo-discovery-51.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-n-neo-discovery-50.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-m-neo-discovery-49.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-f-neo-discovery-48.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-d-neo-discovery-47.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-neo-discovery-46.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-neo-discovery-45.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-neo-discovery-44.jpg',
    'https://pkmncards.com/wp-content/uploads/omastar-neo-discovery-43.jpg',
    'https://pkmncards.com/wp-content/uploads/metapod-neo-discovery-42.jpg',
    'https://pkmncards.com/wp-content/uploads/kakuna-neo-discovery-41.jpg',
    'https://pkmncards.com/wp-content/uploads/igglybuff-neo-discovery-40.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-neo-discovery-39.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-neo-discovery-38.jpg',
    'https://pkmncards.com/wp-content/uploads/corsola-neo-discovery-37.jpg'],
        
    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/yanma-neo-discovery-36.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-neo-discovery-35.jpg',
    'https://pkmncards.com/wp-content/uploads/ursaring-neo-discovery-34.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-a-neo-discovery-33.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-neo-discovery-32.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-neo-discovery-31.jpg',
    'https://pkmncards.com/wp-content/uploads/smeargle-neo-discovery-30.jpg',
    'https://pkmncards.com/wp-content/uploads/scizor-neo-discovery-29.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-neo-discovery-28.jpg',
    'https://pkmncards.com/wp-content/uploads/politoed-neo-discovery-27.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-neo-discovery-26.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-neo-discovery-25.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-neo-discovery-24.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-neo-discovery-23.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmontop-neo-discovery-22.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-neo-discovery-21.jpg',
    'https://pkmncards.com/wp-content/uploads/espeon-neo-discovery-20.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-neo-discovery-19.jpg',
    'https://pkmncards.com/wp-content/uploads/beedrill-neo-discovery-18.jpg'],

    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/yanma-neo-discovery-17.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-neo-discovery-16.jpg',
    'https://pkmncards.com/wp-content/uploads/ursaring-neo-discovery-15.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-a-neo-discovery-14.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-neo-discovery-13.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-neo-discovery-12.jpg',
    'https://pkmncards.com/wp-content/uploads/smeargle-neo-discovery-11.jpg',
    'https://pkmncards.com/wp-content/uploads/scizor-neo-discovery-10.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-neo-discovery-9.jpg',
    'https://pkmncards.com/wp-content/uploads/politoed-neo-discovery-8.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-neo-discovery-7.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-neo-discovery-6.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-neo-discovery-5.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-neo-discovery-4.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmontop-neo-discovery-3.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-neo-discovery-2.jpg',
    'https://pkmncards.com/wp-content/uploads/espeon-neo-discovery-1.jpg']
];

const neoRevelation = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/old-rod-neo-revelation-64.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-neo-revelation-59.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-k-neo-revelation-58.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-neo-revelation-57.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-neo-revelation-56.jpg',
    'https://pkmncards.com/wp-content/uploads/snubbull-neo-revelation-55.jpg',
    'https://pkmncards.com/wp-content/uploads/smoochum-neo-revelation-54.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-neo-revelation-53.jpg',
    'https://pkmncards.com/wp-content/uploads/skiploom-neo-revelation-52.jpg',
    'https://pkmncards.com/wp-content/uploads/shuckle-neo-revelation-51.jpg',
    'https://pkmncards.com/wp-content/uploads/remoraid-neo-revelation-50.jpg',
    'https://pkmncards.com/wp-content/uploads/qwilfish-neo-revelation-49.jpg',
    'https://pkmncards.com/wp-content/uploads/quagsire-neo-revelation-48.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-neo-revelation-47.jpg',
    'https://pkmncards.com/wp-content/uploads/murkrow-neo-revelation-46.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-neo-revelation-45.jpg',
    'https://pkmncards.com/wp-content/uploads/geodude-neo-revelation-44.jpg',
    'https://pkmncards.com/wp-content/uploads/farfetchd-neo-revelation-43.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-neo-revelation-42.jpg',
    'https://pkmncards.com/wp-content/uploads/aipom-neo-revelation-41.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/rockets-hideout-neo-revelation-63.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-breeder-fields-neo-revelation-62.jpg',
    'https://pkmncards.com/wp-content/uploads/healing-field-neo-revelation-61.jpg',
    'https://pkmncards.com/wp-content/uploads/balloon-berry-neo-revelation-60.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-y-neo-revelation-40.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-b-neo-revelation-39.jpg',
    'https://pkmncards.com/wp-content/uploads/stantler-neo-revelation-38.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-neo-revelation-37.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-neo-revelation-36.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-neo-revelation-35.jpg',
    'https://pkmncards.com/wp-content/uploads/octillery-neo-revelation-34.jpg',
    'https://pkmncards.com/wp-content/uploads/magcargo-neo-revelation-33.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-neo-revelation-32.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-neo-revelation-31.jpg',
    'https://pkmncards.com/wp-content/uploads/graveler-neo-revelation-30.jpg',
    'https://pkmncards.com/wp-content/uploads/golbat-neo-revelation-29.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-neo-revelation-28.jpg'],
    
    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/suicune-neo-revelation-27.jpg',
    'https://pkmncards.com/wp-content/uploads/sudowoodo-neo-revelation-26.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-neo-revelation-25.jpg',
    'https://pkmncards.com/wp-content/uploads/sneasel-neo-revelation-24.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-neo-revelation-23.jpg',
    'https://pkmncards.com/wp-content/uploads/raikou-neo-revelation-22.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-neo-revelation-21.jpg',
    'https://pkmncards.com/wp-content/uploads/lugia-neo-revelation-20.jpg',
    'https://pkmncards.com/wp-content/uploads/kingdra-neo-revelation-19.jpg',
    'https://pkmncards.com/wp-content/uploads/ho-oh-neo-revelation-18.jpg',
    'https://pkmncards.com/wp-content/uploads/entei-neo-revelation-17.jpg',
    'https://pkmncards.com/wp-content/uploads/celebi-neo-revelation-16.jpg',
    'https://pkmncards.com/wp-content/uploads/aerodactyl-neo-revelation-15.jpg'],

    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/suicune-neo-revelation-14.jpg',
    'https://pkmncards.com/wp-content/uploads/raikou-neo-revelation-13.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon2-neo-revelation-12.jpg',
    'https://pkmncards.com/wp-content/uploads/misdreavus-neo-revelation-11.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-neo-revelation-10.jpg',
    'https://pkmncards.com/wp-content/uploads/jumpluff-neo-revelation-9.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-neo-revelation-8.jpg',
    'https://pkmncards.com/wp-content/uploads/ho-oh-neo-revelation-7.jpg',
    'https://pkmncards.com/wp-content/uploads/entei-neo-revelation-6.jpg',
    'https://pkmncards.com/wp-content/uploads/delibird-neo-revelation-5.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-neo-revelation-4.jpg',
    'https://pkmncards.com/wp-content/uploads/celebi-neo-revelation-3.jpg',
    'https://pkmncards.com/wp-content/uploads/blissey-neo-revelation-2.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-neo-revelation-1.jpg'],
	
	//Shinies at index 4
	['https://pkmncards.com/wp-content/uploads/shining-magikarp-neo-revelation-66.jpg',
	'https://pkmncards.com/wp-content/uploads/shining-gyarados-neo-revelation-65.jpg']
];

const neoDestiny = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/mail-from-bill-neo-destiny-105.jpg',
    'https://pkmncards.com/wp-content/uploads/heal-powder-neo-destiny-104.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-neo-destiny-91.jpg',
    'https://pkmncards.com/wp-content/uploads/venonat-neo-destiny-90.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-v-neo-destiny-89.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-t-neo-destiny-88.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-s-neo-destiny-87.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-l-neo-destiny-86.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-neo-destiny-85.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-neo-destiny-84.jpg',
    'https://pkmncards.com/wp-content/uploads/sunkern-neo-destiny-83.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-neo-destiny-82.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-neo-destiny-81.jpg',
    'https://pkmncards.com/wp-content/uploads/remoraid-neo-destiny-80.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-neo-destiny-79.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon-neo-destiny-78.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-neo-destiny-77.jpg',
    'https://pkmncards.com/wp-content/uploads/phanpy-neo-destiny-76.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-neo-destiny-75.jpg',
    'https://pkmncards.com/wp-content/uploads/mantine-neo-destiny-74.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-neo-destiny-73.jpg',
    'https://pkmncards.com/wp-content/uploads/light-sunflora-neo-destiny-72.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-neo-destiny-71.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-neo-destiny-70.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonchan-neo-destiny-69.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-neo-destiny-68.jpg',
    'https://pkmncards.com/wp-content/uploads/gligar-neo-destiny-67.jpg',
    'https://pkmncards.com/wp-content/uploads/girafarig-neo-destiny-66.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-neo-destiny-65.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-neo-destiny-64.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-neo-destiny-63.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-octillery-neo-destiny-62.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-neo-destiny-61.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/team-rockets-evil-deeds-neo-destiny-103.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-personality-test-neo-destiny-102.jpg',
    'https://pkmncards.com/wp-content/uploads/magnifier-neo-destiny-101.jpg',
    'https://pkmncards.com/wp-content/uploads/lucky-stadium-neo-destiny-100.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-stadium-neo-destiny-99.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-amplifier-neo-destiny-98.jpg',
    'https://pkmncards.com/wp-content/uploads/counterattack-claws-neo-destiny-97.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-z-neo-destiny-60.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-q-neo-destiny-59.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-p-neo-destiny-58.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-c-neo-destiny-57.jpg',
    'https://pkmncards.com/wp-content/uploads/togepi-neo-destiny-56.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-neo-destiny-55.jpg',
    'https://pkmncards.com/wp-content/uploads/light-wigglytuff-neo-destiny-54.jpg',
    'https://pkmncards.com/wp-content/uploads/light-venomoth-neo-destiny-53.jpg',
    'https://pkmncards.com/wp-content/uploads/light-vaporeon-neo-destiny-52.jpg',
    'https://pkmncards.com/wp-content/uploads/light-slowbro-neo-destiny-51.jpg',
    'https://pkmncards.com/wp-content/uploads/light-ninetales-neo-destiny-50.jpg',
    'https://pkmncards.com/wp-content/uploads/light-machoke-neo-destiny-49.jpg',
    'https://pkmncards.com/wp-content/uploads/light-jolteon-neo-destiny-48.jpg',
    'https://pkmncards.com/wp-content/uploads/light-golduck-neo-destiny-47.jpg',
    'https://pkmncards.com/wp-content/uploads/light-flareon-neo-destiny-46.jpg',
    'https://pkmncards.com/wp-content/uploads/light-dewgong-neo-destiny-45.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-neo-destiny-44.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-neo-destiny-43.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-neo-destiny-42.jpg',
    'https://pkmncards.com/wp-content/uploads/heracross-neo-destiny-41.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-wigglytuff-neo-destiny-40.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-quilava-neo-destiny-39.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-pupitar-neo-destiny-38.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-omanyte-neo-destiny-37.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-haunter-neo-destiny-36.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-forretress-neo-destiny-35.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-flaaffy-neo-destiny-34.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-exeggcutor-neo-destiny-33.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-croconaw-neo-destiny-32.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-neo-destiny-31.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/though-wave-machine-neo-destiny-96.jpg',
    'https://pkmncards.com/wp-content/uploads/radio-tower-neo-destiny-95.jpg',
    'https://pkmncards.com/wp-content/uploads/impostor-professor-oaks-invention-neo-destiny-94.jpg',
    'https://pkmncards.com/wp-content/uploads/exp.all-neo-destiny-93.jpg',
    'https://pkmncards.com/wp-content/uploads/broken-ground-gym-neo-destiny-92.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-x-neo-destiny-30.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-w-neo-destiny-29.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-h-neo-destiny-28.jpg',
    'https://pkmncards.com/wp-content/uploads/unown-g-neo-destiny-27.jpg',
    'https://pkmncards.com/wp-content/uploads/light-piloswine-neo-destiny-26.jpg',
    'https://pkmncards.com/wp-content/uploads/light-machamp-neo-destiny-25.jpg',
    'https://pkmncards.com/wp-content/uploads/light-ledian-neo-destiny-24.jpg',
    'https://pkmncards.com/wp-content/uploads/light-lanturn-neo-destiny-23.jpg',
    'https://pkmncards.com/wp-content/uploads/light-dragonair-neo-destiny-22.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-ursaring-neo-destiny-21.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-slowking-neo-destiny-20.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-omastar-neo-destiny-19.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-magcargo-neo-destiny-18.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-ariados-neo-destiny-17.jpg'],

    //Holos at index 3
    ['https://pkmncards.com/wp-content/uploads/miracle-energy-neo-destiny-16.jpg',
    'https://pkmncards.com/wp-content/uploads/light-togetic-neo-destiny-15.jpg',
    'https://pkmncards.com/wp-content/uploads/light-dragonite-neo-destiny-14.jpg',
    'https://pkmncards.com/wp-content/uploads/light-azumarill-neo-destiny-13.jpg',
    'https://pkmncards.com/wp-content/uploads/light-arcanine-neo-destiny-12.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-tyranitar-neo-destiny-11.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-typhlosion-neo-destiny-10.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-scizor-neo-destiny-9.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-porygon2-neo-destiny-8.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-houndoom-neo-destiny-7.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-gengar-neo-destiny-6.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-feraligatr-neo-destiny-5.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-espeon-neo-destiny-4.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-donphan-neo-destiny-3.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-crobat-neo-destiny-2.jpg',
    'https://pkmncards.com/wp-content/uploads/dark-ampharos-neo-destiny-1.jpg'],

    //Shinies at index 4
    ['https://pkmncards.com/wp-content/uploads/shining-tyranitar-neo-destiny-113.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-steelix-neo-destiny-112.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-raichu-neo-destiny-111.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-noctowl-neo-destiny-110.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-mewtwo-neo-destiny-109.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-kabutops-neo-destiny-108.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-charizard-neo-destiny-107.jpg',
    'https://pkmncards.com/wp-content/uploads/shining-celebi-neo-destiny-106.jpg']
];

const expedition = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/abra-expedition-ex-93.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-94.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-95.jpg',
    'https://pkmncards.com/wp-content/uploads/caterpie-expedition-ex-96.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-97.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-98.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-99.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-100.jpg',
    'https://pkmncards.com/wp-content/uploads/clefairy-expedition-ex-101.jpg',
    'https://pkmncards.com/wp-content/uploads/corsola-expedition-ex-102.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-expedition-ex-103.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-104.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-105.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-expedition-ex-106.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-expedition-ex-107.jpg',
    'https://pkmncards.com/wp-content/uploads/ekans-expedition-ex-108.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-expedition-ex-109.jpg',
    'https://pkmncards.com/wp-content/uploads/geodude-expedition-ex-110.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-expedition-ex-111.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-expedition-ex-112.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-expedition-ex-113.jpg',
    'https://pkmncards.com/wp-content/uploads/koffing-expedition-ex-114.jpg',
    'https://pkmncards.com/wp-content/uploads/krabby-expedition-ex-115.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-expedition-ex-116.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-expedition-ex-117.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-expedition-ex-118.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-expedition-ex-119.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-expedition-ex-120.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-expedition-ex-121.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-expedition-ex-122.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgey-expedition-ex-123.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-expedition-ex-124.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-expedition-ex-125.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-expedition-ex-126.jpg',
    'https://pkmncards.com/wp-content/uploads/qwilfish-expedition-ex-127.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-expedition-ex-128.jpg',
    'https://pkmncards.com/wp-content/uploads/shellder-expedition-ex-129.jpg',
    'https://pkmncards.com/wp-content/uploads/spearow-expedition-ex-130.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-131.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-132.jpg',
    'https://pkmncards.com/wp-content/uploads/tauros-expedition-ex-133.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-134.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-135.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-expedition-ex-136.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-search-expedition-ex-153.jpg',
    'https://pkmncards.com/wp-content/uploads/full-heal-expedition-ex-154.jpg',
    'https://pkmncards.com/wp-content/uploads/moo-moo-milk-expedition-ex-155.jpg',
    'https://pkmncards.com/wp-content/uploads/potion-expedition-ex-156.jpg',
    'https://pkmncards.com/wp-content/uploads/switch-expedition-ex-157.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/bayleef-expedition-ex-71.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-expedition-ex-72.jpg',
    'https://pkmncards.com/wp-content/uploads/charmeleon-expedition-ex-73.jpg',
    'https://pkmncards.com/wp-content/uploads/croconaw-expedition-ex-74.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonair-expedition-ex-75.jpg',
    'https://pkmncards.com/wp-content/uploads/electabuzz-expedition-ex-76.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-expedition-ex-77.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-expedition-ex-78.jpg',
    'https://pkmncards.com/wp-content/uploads/graveler-expedition-ex-79.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-expedition-ex-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-expedition-ex-81.jpg',
    'https://pkmncards.com/wp-content/uploads/ivysaur-expedition-ex-82.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-expedition-ex-83.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-expedition-ex-84.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-expedition-ex-85.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-expedition-ex-86.jpg',
    'https://pkmncards.com/wp-content/uploads/metapod-expedition-ex-87.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeotto-expedition-ex-88.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-expedition-ex-89.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-expedition-ex-90.jpg',
    'https://pkmncards.com/wp-content/uploads/quilava-expedition-ex-91.jpg',
    'https://pkmncards.com/wp-content/uploads/wartortle-expedition-ex-92.jpg',
    'https://pkmncards.com/wp-content/uploads/bills-maintenance-expedition-ex-137.jpg',
    'https://pkmncards.com/wp-content/uploads/copycat-expedition-ex-138.jpg',
    'https://pkmncards.com/wp-content/uploads/dual-ball-expedition-ex-139.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-removal-2-expedition-ex-140.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-restore-expedition-ex-141.jpg',
    'https://pkmncards.com/wp-content/uploads/marys-impulse-expedition-ex-142.jpg',
    'https://pkmncards.com/wp-content/uploads/master-ball-expedition-ex-143.jpg',
    'https://pkmncards.com/wp-content/uploads/multi-technical-machine-01-expedition-ex-144.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-nurse-expedition-ex-145.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-reversal-expedition-ex-146.jpg',
    'https://pkmncards.com/wp-content/uploads/power-charge-expedition-ex-147.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-elms-training-method-expedition-ex-148.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-oaks-research-expedition-ex-149.jpg',
    'https://pkmncards.com/wp-content/uploads/strength-charm-expedition-ex-150.jpg',
    'https://pkmncards.com/wp-content/uploads/super-scoop-up-expedition-ex-151.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-point-expedition-ex-152.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-33.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-34.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-35.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-36.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-37.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-38.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-39.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-40.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-41.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-42.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-43.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-44.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-45.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-46.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-47.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-48.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-49.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-50.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-52.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-53.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-54.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-55.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-56.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-57.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-58.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-59.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-60.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-61.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-62.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-63.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-64.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-65.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-66.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-67.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-68.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-69.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-70.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-expedition-ex-158.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-expedition-ex-159.jpg'],

	//Energies at index 3
	[],
	
	//Reverse Holos at index 4
	['https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-1.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-2.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-3.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-4.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-5.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-6.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-7.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-8.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-9.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-10.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-11.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-12.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-13.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-14.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-15.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-16.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-17.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-18.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-19.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-20.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-21.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-22.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-23.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-24.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-25.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-26.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-27.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-28.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-29.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-30.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-31.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-32.jpg',
	'https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-33.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-34.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-35.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-36.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-37.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-38.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-39.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-40.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-41.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-42.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-43.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-44.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-45.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-46.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-47.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-48.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-49.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-50.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-52.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-53.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-54.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-55.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-56.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-57.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-58.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-59.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-60.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-61.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-62.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-63.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-64.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-65.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-66.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-67.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-68.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-69.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-70.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-expedition-ex-158.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-expedition-ex-159.jpg',
	'https://pkmncards.com/wp-content/uploads/bayleef-expedition-ex-71.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-expedition-ex-72.jpg',
    'https://pkmncards.com/wp-content/uploads/charmeleon-expedition-ex-73.jpg',
    'https://pkmncards.com/wp-content/uploads/croconaw-expedition-ex-74.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonair-expedition-ex-75.jpg',
    'https://pkmncards.com/wp-content/uploads/electabuzz-expedition-ex-76.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-expedition-ex-77.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-expedition-ex-78.jpg',
    'https://pkmncards.com/wp-content/uploads/graveler-expedition-ex-79.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-expedition-ex-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonlee-expedition-ex-81.jpg',
    'https://pkmncards.com/wp-content/uploads/ivysaur-expedition-ex-82.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-expedition-ex-83.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-expedition-ex-84.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-expedition-ex-85.jpg',
    'https://pkmncards.com/wp-content/uploads/magmar-expedition-ex-86.jpg',
    'https://pkmncards.com/wp-content/uploads/metapod-expedition-ex-87.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeotto-expedition-ex-88.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-expedition-ex-89.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-expedition-ex-90.jpg',
    'https://pkmncards.com/wp-content/uploads/quilava-expedition-ex-91.jpg',
    'https://pkmncards.com/wp-content/uploads/wartortle-expedition-ex-92.jpg',
    'https://pkmncards.com/wp-content/uploads/bills-maintenance-expedition-ex-137.jpg',
    'https://pkmncards.com/wp-content/uploads/copycat-expedition-ex-138.jpg',
    'https://pkmncards.com/wp-content/uploads/dual-ball-expedition-ex-139.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-removal-2-expedition-ex-140.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-restore-expedition-ex-141.jpg',
    'https://pkmncards.com/wp-content/uploads/marys-impulse-expedition-ex-142.jpg',
    'https://pkmncards.com/wp-content/uploads/master-ball-expedition-ex-143.jpg',
    'https://pkmncards.com/wp-content/uploads/multi-technical-machine-01-expedition-ex-144.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-nurse-expedition-ex-145.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-reversal-expedition-ex-146.jpg',
    'https://pkmncards.com/wp-content/uploads/power-charge-expedition-ex-147.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-elms-training-method-expedition-ex-148.jpg',
    'https://pkmncards.com/wp-content/uploads/professor-oaks-research-expedition-ex-149.jpg',
    'https://pkmncards.com/wp-content/uploads/strength-charm-expedition-ex-150.jpg',
    'https://pkmncards.com/wp-content/uploads/super-scoop-up-expedition-ex-151.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-point-expedition-ex-152.jpg',
	'https://pkmncards.com/wp-content/uploads/abra-expedition-ex-93.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-94.jpg',
    'https://pkmncards.com/wp-content/uploads/bulbasaur-expedition-ex-95.jpg',
    'https://pkmncards.com/wp-content/uploads/caterpie-expedition-ex-96.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-97.jpg',
    'https://pkmncards.com/wp-content/uploads/charmander-expedition-ex-98.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-99.jpg',
    'https://pkmncards.com/wp-content/uploads/chikorita-expedition-ex-100.jpg',
    'https://pkmncards.com/wp-content/uploads/clefairy-expedition-ex-101.jpg',
    'https://pkmncards.com/wp-content/uploads/corsola-expedition-ex-102.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-expedition-ex-103.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-104.jpg',
    'https://pkmncards.com/wp-content/uploads/cyndaquil-expedition-ex-105.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-expedition-ex-106.jpg',
    'https://pkmncards.com/wp-content/uploads/dratini-expedition-ex-107.jpg',
    'https://pkmncards.com/wp-content/uploads/ekans-expedition-ex-108.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-expedition-ex-109.jpg',
    'https://pkmncards.com/wp-content/uploads/geodude-expedition-ex-110.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-expedition-ex-111.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-expedition-ex-112.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-expedition-ex-113.jpg',
    'https://pkmncards.com/wp-content/uploads/koffing-expedition-ex-114.jpg',
    'https://pkmncards.com/wp-content/uploads/krabby-expedition-ex-115.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-expedition-ex-116.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-expedition-ex-117.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-expedition-ex-118.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-expedition-ex-119.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-expedition-ex-120.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-expedition-ex-121.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-expedition-ex-122.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgey-expedition-ex-123.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-expedition-ex-124.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-expedition-ex-125.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-expedition-ex-126.jpg',
    'https://pkmncards.com/wp-content/uploads/qwilfish-expedition-ex-127.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-expedition-ex-128.jpg',
    'https://pkmncards.com/wp-content/uploads/shellder-expedition-ex-129.jpg',
    'https://pkmncards.com/wp-content/uploads/spearow-expedition-ex-130.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-131.jpg',
    'https://pkmncards.com/wp-content/uploads/squirtle-expedition-ex-132.jpg',
    'https://pkmncards.com/wp-content/uploads/tauros-expedition-ex-133.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-134.jpg',
    'https://pkmncards.com/wp-content/uploads/totodile-expedition-ex-135.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-expedition-ex-136.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-search-expedition-ex-153.jpg',
    'https://pkmncards.com/wp-content/uploads/full-heal-expedition-ex-154.jpg',
    'https://pkmncards.com/wp-content/uploads/moo-moo-milk-expedition-ex-155.jpg',
    'https://pkmncards.com/wp-content/uploads/potion-expedition-ex-156.jpg',
    'https://pkmncards.com/wp-content/uploads/switch-expedition-ex-157.jpg'],	
	
    //Holos at index 5
    ['https://pkmncards.com/wp-content/uploads/alakazam-expedition-ex-1.jpg',
    'https://pkmncards.com/wp-content/uploads/ampharos-expedition-ex-2.jpg',
    'https://pkmncards.com/wp-content/uploads/arbok-expedition-ex-3.jpg',
    'https://pkmncards.com/wp-content/uploads/blastoise-expedition-ex-4.jpg',
    'https://pkmncards.com/wp-content/uploads/butterfree-expedition-ex-5.jpg',
    'https://pkmncards.com/wp-content/uploads/charizard-expedition-ex-6.jpg',
    'https://pkmncards.com/wp-content/uploads/clefable-expedition-ex-7.jpg',
    'https://pkmncards.com/wp-content/uploads/cloyster-expedition-ex-8.jpg',
    'https://pkmncards.com/wp-content/uploads/dragonite-expedition-ex-9.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-expedition-ex-10.jpg',
    'https://pkmncards.com/wp-content/uploads/fearow-expedition-ex-11.jpg',
    'https://pkmncards.com/wp-content/uploads/feraligatr-expedition-ex-12.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-expedition-ex-13.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-expedition-ex-14.jpg',
    'https://pkmncards.com/wp-content/uploads/kingler-expedition-ex-15.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-expedition-ex-16.jpg',
    'https://pkmncards.com/wp-content/uploads/magby-expedition-ex-17.jpg',
    'https://pkmncards.com/wp-content/uploads/meganium-expedition-ex-18.jpg',
    'https://pkmncards.com/wp-content/uploads/mew-expedition-ex-19.jpg',
    'https://pkmncards.com/wp-content/uploads/mewtwo-expedition-ex-20.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-expedition-ex-21.jpg',
    'https://pkmncards.com/wp-content/uploads/pichu-expedition-ex-22.jpg',
    'https://pkmncards.com/wp-content/uploads/pidgeot-expedition-ex-23.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-expedition-ex-24.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-expedition-ex-25.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-expedition-ex-26.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-expedition-ex-27.jpg',
    'https://pkmncards.com/wp-content/uploads/typhlosion-expedition-ex-28.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-expedition-ex-29.jpg',
    'https://pkmncards.com/wp-content/uploads/venusaur-expedition-ex-30.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-expedition-ex-31.jpg',
    'https://pkmncards.com/wp-content/uploads/weezing-expedition-ex-32.jpg']
];

const aquapolis = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/aipom-aquapolis-aq-67.jpg',
    'https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-68.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-aquapolis-aq-69.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-70.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-71.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-aquapolis-aq-72.jpg',
    'https://pkmncards.com/wp-content/uploads/doduo-aquapolis-aq-73.jpg',
    'https://pkmncards.com/wp-content/uploads/drowzee-aquapolis-aq-74.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-aquapolis-aq-75.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-76.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-77.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-aquapolis-aq-78.jpg',
    'https://pkmncards.com/wp-content/uploads/grimer-aquapolis-aq-79.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonchan-aquapolis-aq-81.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmontop-aquapolis-aq-82.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-aquapolis-aq-83.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-84.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-85.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-86.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-87.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-aquapolis-aq-88.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-aquapolis-aq-89.jpg',
    'https://pkmncards.com/wp-content/uploads/lickitung-aquapolis-aq-90.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-91.jpg',
    'https://pkmncards.com/wp-content/uploads/mankey-aquapolis-aq-92.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-aquapolis-aq-93.jpg',
    'https://pkmncards.com/wp-content/uploads/miltank-aquapolis-aq-94.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-aquapolis-aq-95.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-male-aquapolis-aq-96.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-aquapolis-aq-97.jpg',
    'https://pkmncards.com/wp-content/uploads/onix-aquapolis-aq-98.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-aquapolis-aq-99.jpg',
    'https://pkmncards.com/wp-content/uploads/phanpy-aquapolis-aq-100.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-aquapolis-aq-101.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-aquapolis-aq-102.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon-aquapolis-aq-103.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-aquapolis-aq-104.jpg',
    'https://pkmncards.com/wp-content/uploads/remoraid-aquapolis-aq-105.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-106.jpg',
    'https://pkmncards.com/wp-content/uploads/sentret-aquapolis-aq-107.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-aquapolis-aq-108.jpg',
    'https://pkmncards.com/wp-content/uploads/smeargle-aquapolis-aq-109.jpg',
    'https://pkmncards.com/wp-content/uploads/sneasel-aquapolis-aq-110.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-111.jpg',
    'https://pkmncards.com/wp-content/uploads/tangela-aquapolis-aq-112.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacool-aquapolis-aq-113.jpg',
    'https://pkmncards.com/wp-content/uploads/togepi-aquapolis-aq-114.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-115.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-aquapolis-aq-116.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-117.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-45.jpg',
    'https://pkmncards.com/wp-content/uploads/dodrio-aquapolis-aq-46.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-aquapolis-aq-47.jpg',
    'https://pkmncards.com/wp-content/uploads/furret-aquapolis-aq-48.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-aquapolis-aq-49.jpg',
    'https://pkmncards.com/wp-content/uploads/golduck-aquapolis-aq-50.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-52.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-aquapolis-aq-53.jpg',
    'https://pkmncards.com/wp-content/uploads/marowak-aquapolis-aq-54.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorino-aquapolis-aq-55.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-aquapolis-aq-56.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-57.jpg',
    'https://pkmncards.com/wp-content/uploads/seadra-aquapolis-aq-58.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-aquapolis-aq-59.jpg',
    'https://pkmncards.com/wp-content/uploads/skiploom-aquapolis-aq-60.jpg',
    'https://pkmncards.com/wp-content/uploads/smoochum-aquapolis-aq-61.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-62.jpg',
    'https://pkmncards.com/wp-content/uploads/tyrogue-aquapolis-aq-63.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-64.jpg',
    'https://pkmncards.com/wp-content/uploads/weepinbell-aquapolis-aq-65.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-66.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-cube-01-aquapolis-aq-119.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-switch-aquapolis-aq-120.jpg',
    'https://pkmncards.com/wp-content/uploads/fighting-cube-01-aquapolis-aq-121.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-cube-01-aquapolis-aq-122.jpg',
    'https://pkmncards.com/wp-content/uploads/forest-guardian-aquapolis-aq-123.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-cube-01-aquapolis-aq-124.jpg',
    'https://pkmncards.com/wp-content/uploads/healing-berry-aquapolis-aq-125.jpg',
    'https://pkmncards.com/wp-content/uploads/juggler-aquapolis-aq-126.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-cube-01-aquapolis-aq-127.jpg',
    'https://pkmncards.com/wp-content/uploads/memory-berry-aquapolis-aq-128.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-cube-01-aquapolis-aq-129.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-fan-club-aquapolis-aq-130.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-park-aquapolis-aq-131.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-cube-01-aquapolis-aq-132.jpg',
    'https://pkmncards.com/wp-content/uploads/seer-aquapolis-aq-133.jpg',
    'https://pkmncards.com/wp-content/uploads/super-energy-removal-2-aquapolis-aq-134.jpg',
    'https://pkmncards.com/wp-content/uploads/time-shard-aquapolis-aq-135.jpg',
    'https://pkmncards.com/wp-content/uploads/town-volunteers-aquapolis-aq-136.jpg',
    'https://pkmncards.com/wp-content/uploads/traveling-salesman-aquapolis-aq-137.jpg',
    'https://pkmncards.com/wp-content/uploads/undersea-ruins-aquapolis-aq-138.jpg',
    'https://pkmncards.com/wp-content/uploads/power-plant-aquapolis-aq-139.jpg',
    'https://pkmncards.com/wp-content/uploads/water-cube-01-aquapolis-aq-140.jpg',
    'https://pkmncards.com/wp-content/uploads/weakness-guard-aquapolis-aq-141.jpg',
    'https://pkmncards.com/wp-content/uploads/boost-energy-aquapolis-aq-145.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-energy-aquapolis-aq-146.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-energy-aquapolis-aq-147.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/ampharos-aquapolis-aq-1.jpg',
    'https://pkmncards.com/wp-content/uploads/arcanine-aquapolis-aq-2.jpg',
    'https://pkmncards.com/wp-content/uploads/ariados-aquapolis-aq-3.jpg',
    'https://pkmncards.com/wp-content/uploads/azumarill-aquapolis-aq-4.jpg',
    'https://pkmncards.com/wp-content/uploads/bellossom-aquapolis-aq-5.jpg',
    'https://pkmncards.com/wp-content/uploads/blissey-aquapolis-aq-6.jpg',
    'https://pkmncards.com/wp-content/uploads/donphan-aquapolis-aq-7.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-aquapolis-aq-8.jpg',
    'https://pkmncards.com/wp-content/uploads/elekid-aquapolis-aq-9.jpg',
    'https://pkmncards.com/wp-content/uploads/entei-aquapolis-aq-10.jpg',
    'https://pkmncards.com/wp-content/uploads/espeon-aquapolis-aq-11.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-12.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-13.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-14.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-15.jpg',
    'https://pkmncards.com/wp-content/uploads/hypno-aquapolis-aq-16.jpg',
    'https://pkmncards.com/wp-content/uploads/jumpluff-aquapolis-aq-17.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-aquapolis-aq-18.jpg',
    'https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-19.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-20.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-21.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-aquapolis-aq-22.jpg',
    'https://pkmncards.com/wp-content/uploads/muk-aquapolis-aq-23.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-24.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-aquapolis-aq-25.jpg',
    'https://pkmncards.com/wp-content/uploads/octillery-aquapolis-aq-26.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-aquapolis-aq-27.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon2-aquapolis-aq-28.jpg',
    'https://pkmncards.com/wp-content/uploads/primeape-aquapolis-aq-29.jpg',
    'https://pkmncards.com/wp-content/uploads/quagsire-aquapolis-aq-30.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-aquapolis-aq-31.jpg',
    'https://pkmncards.com/wp-content/uploads/scizor-aquapolis-aq-32.jpg',
    'https://pkmncards.com/wp-content/uploads/slowbro-aquapolis-aq-33.jpg',
    'https://pkmncards.com/wp-content/uploads/slowking-aquapolis-aq-34.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-aquapolis-aq-35.jpg',
    'https://pkmncards.com/wp-content/uploads/sudowoodo-aquapolis-aq-36.jpg',
    'https://pkmncards.com/wp-content/uploads/suicune-aquapolis-aq-37.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacruel-aquapolis-aq-38.jpg',
    'https://pkmncards.com/wp-content/uploads/togetic-aquapolis-aq-39.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-aquapolis-aq-40.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-aquapolis-aq-41.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-aquapolis-aq-42.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-aquapolis-aq-43.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-aquapolis-aq-44.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-forest-aquapolis-aq-118.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-aquapolis-aq-142.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-aquapolis-aq-143.jpg',
    'https://pkmncards.com/wp-content/uploads/rainbow-energy-aquapolis-aq-144.jpg'],

	//Energies at index 3
	[],
	
	//Reverse Holos at index 4
	['https://pkmncards.com/wp-content/uploads/ampharos-aquapolis-aq-1.jpg',
    'https://pkmncards.com/wp-content/uploads/arcanine-aquapolis-aq-2.jpg',
    'https://pkmncards.com/wp-content/uploads/ariados-aquapolis-aq-3.jpg',
    'https://pkmncards.com/wp-content/uploads/azumarill-aquapolis-aq-4.jpg',
    'https://pkmncards.com/wp-content/uploads/bellossom-aquapolis-aq-5.jpg',
    'https://pkmncards.com/wp-content/uploads/blissey-aquapolis-aq-6.jpg',
    'https://pkmncards.com/wp-content/uploads/donphan-aquapolis-aq-7.jpg',
    'https://pkmncards.com/wp-content/uploads/electrode-aquapolis-aq-8.jpg',
    'https://pkmncards.com/wp-content/uploads/elekid-aquapolis-aq-9.jpg',
    'https://pkmncards.com/wp-content/uploads/entei-aquapolis-aq-10.jpg',
    'https://pkmncards.com/wp-content/uploads/espeon-aquapolis-aq-11.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-12.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggutor-aquapolis-aq-13.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-14.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-aquapolis-aq-15.jpg',
    'https://pkmncards.com/wp-content/uploads/hypno-aquapolis-aq-16.jpg',
    'https://pkmncards.com/wp-content/uploads/jumpluff-aquapolis-aq-17.jpg',
    'https://pkmncards.com/wp-content/uploads/jynx-aquapolis-aq-18.jpg',
    'https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-19.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-20.jpg',
    'https://pkmncards.com/wp-content/uploads/lanturn-aquapolis-aq-21.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-aquapolis-aq-22.jpg',
    'https://pkmncards.com/wp-content/uploads/muk-aquapolis-aq-23.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-24.jpg',
    'https://pkmncards.com/wp-content/uploads/ninetales-aquapolis-aq-25.jpg',
    'https://pkmncards.com/wp-content/uploads/octillery-aquapolis-aq-26.jpg',
    'https://pkmncards.com/wp-content/uploads/parasect-aquapolis-aq-27.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon2-aquapolis-aq-28.jpg',
    'https://pkmncards.com/wp-content/uploads/primeape-aquapolis-aq-29.jpg',
    'https://pkmncards.com/wp-content/uploads/quagsire-aquapolis-aq-30.jpg',
    'https://pkmncards.com/wp-content/uploads/rapidash-aquapolis-aq-31.jpg',
    'https://pkmncards.com/wp-content/uploads/scizor-aquapolis-aq-32.jpg',
    'https://pkmncards.com/wp-content/uploads/slowbro-aquapolis-aq-33.jpg',
    'https://pkmncards.com/wp-content/uploads/slowking-aquapolis-aq-34.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-aquapolis-aq-35.jpg',
    'https://pkmncards.com/wp-content/uploads/sudowoodo-aquapolis-aq-36.jpg',
    'https://pkmncards.com/wp-content/uploads/suicune-aquapolis-aq-37.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacruel-aquapolis-aq-38.jpg',
    'https://pkmncards.com/wp-content/uploads/togetic-aquapolis-aq-39.jpg',
    'https://pkmncards.com/wp-content/uploads/tyranitar-aquapolis-aq-40.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-aquapolis-aq-41.jpg',
    'https://pkmncards.com/wp-content/uploads/victreebel-aquapolis-aq-42.jpg',
    'https://pkmncards.com/wp-content/uploads/vileplume-aquapolis-aq-43.jpg',
    'https://pkmncards.com/wp-content/uploads/zapdos-aquapolis-aq-44.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-forest-aquapolis-aq-118.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-energy-aquapolis-aq-142.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-energy-aquapolis-aq-143.jpg',
    'https://pkmncards.com/wp-content/uploads/rainbow-energy-aquapolis-aq-144.jpg',
	'https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-45.jpg',
    'https://pkmncards.com/wp-content/uploads/dodrio-aquapolis-aq-46.jpg',
    'https://pkmncards.com/wp-content/uploads/flaaffy-aquapolis-aq-47.jpg',
    'https://pkmncards.com/wp-content/uploads/furret-aquapolis-aq-48.jpg',
    'https://pkmncards.com/wp-content/uploads/gloom-aquapolis-aq-49.jpg',
    'https://pkmncards.com/wp-content/uploads/golduck-aquapolis-aq-50.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-51.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-52.jpg',
    'https://pkmncards.com/wp-content/uploads/marill-aquapolis-aq-53.jpg',
    'https://pkmncards.com/wp-content/uploads/marowak-aquapolis-aq-54.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorino-aquapolis-aq-55.jpg',
    'https://pkmncards.com/wp-content/uploads/pupitar-aquapolis-aq-56.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-57.jpg',
    'https://pkmncards.com/wp-content/uploads/seadra-aquapolis-aq-58.jpg',
    'https://pkmncards.com/wp-content/uploads/seaking-aquapolis-aq-59.jpg',
    'https://pkmncards.com/wp-content/uploads/skiploom-aquapolis-aq-60.jpg',
    'https://pkmncards.com/wp-content/uploads/smoochum-aquapolis-aq-61.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-62.jpg',
    'https://pkmncards.com/wp-content/uploads/tyrogue-aquapolis-aq-63.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-64.jpg',
    'https://pkmncards.com/wp-content/uploads/weepinbell-aquapolis-aq-65.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-66.jpg',
    'https://pkmncards.com/wp-content/uploads/darkness-cube-01-aquapolis-aq-119.jpg',
    'https://pkmncards.com/wp-content/uploads/energy-switch-aquapolis-aq-120.jpg',
    'https://pkmncards.com/wp-content/uploads/fighting-cube-01-aquapolis-aq-121.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-cube-01-aquapolis-aq-122.jpg',
    'https://pkmncards.com/wp-content/uploads/forest-guardian-aquapolis-aq-123.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-cube-01-aquapolis-aq-124.jpg',
    'https://pkmncards.com/wp-content/uploads/healing-berry-aquapolis-aq-125.jpg',
    'https://pkmncards.com/wp-content/uploads/juggler-aquapolis-aq-126.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-cube-01-aquapolis-aq-127.jpg',
    'https://pkmncards.com/wp-content/uploads/memory-berry-aquapolis-aq-128.jpg',
    'https://pkmncards.com/wp-content/uploads/metal-cube-01-aquapolis-aq-129.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-fan-club-aquapolis-aq-130.jpg',
    'https://pkmncards.com/wp-content/uploads/pokemon-park-aquapolis-aq-131.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-cube-01-aquapolis-aq-132.jpg',
    'https://pkmncards.com/wp-content/uploads/seer-aquapolis-aq-133.jpg',
    'https://pkmncards.com/wp-content/uploads/super-energy-removal-2-aquapolis-aq-134.jpg',
    'https://pkmncards.com/wp-content/uploads/time-shard-aquapolis-aq-135.jpg',
    'https://pkmncards.com/wp-content/uploads/town-volunteers-aquapolis-aq-136.jpg',
    'https://pkmncards.com/wp-content/uploads/traveling-salesman-aquapolis-aq-137.jpg',
    'https://pkmncards.com/wp-content/uploads/undersea-ruins-aquapolis-aq-138.jpg',
    'https://pkmncards.com/wp-content/uploads/power-plant-aquapolis-aq-139.jpg',
    'https://pkmncards.com/wp-content/uploads/water-cube-01-aquapolis-aq-140.jpg',
    'https://pkmncards.com/wp-content/uploads/weakness-guard-aquapolis-aq-141.jpg',
    'https://pkmncards.com/wp-content/uploads/boost-energy-aquapolis-aq-145.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-energy-aquapolis-aq-146.jpg',
    'https://pkmncards.com/wp-content/uploads/warp-energy-aquapolis-aq-147.jpg',
	'https://pkmncards.com/wp-content/uploads/aipom-aquapolis-aq-67.jpg',
    'https://pkmncards.com/wp-content/uploads/bellsprout-aquapolis-aq-68.jpg',
    'https://pkmncards.com/wp-content/uploads/chansey-aquapolis-aq-69.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-70.jpg',
    'https://pkmncards.com/wp-content/uploads/chinchou-aquapolis-aq-71.jpg',
    'https://pkmncards.com/wp-content/uploads/cubone-aquapolis-aq-72.jpg',
    'https://pkmncards.com/wp-content/uploads/doduo-aquapolis-aq-73.jpg',
    'https://pkmncards.com/wp-content/uploads/drowzee-aquapolis-aq-74.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-aquapolis-aq-75.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-76.jpg',
    'https://pkmncards.com/wp-content/uploads/exeggcute-aquapolis-aq-77.jpg',
    'https://pkmncards.com/wp-content/uploads/goldeen-aquapolis-aq-78.jpg',
    'https://pkmncards.com/wp-content/uploads/grimer-aquapolis-aq-79.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-aquapolis-aq-80.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmonchan-aquapolis-aq-81.jpg',
    'https://pkmncards.com/wp-content/uploads/hitmontop-aquapolis-aq-82.jpg',
    'https://pkmncards.com/wp-content/uploads/hoppip-aquapolis-aq-83.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-84.jpg',
    'https://pkmncards.com/wp-content/uploads/horsea-aquapolis-aq-85.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-86.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-aquapolis-aq-87.jpg',
    'https://pkmncards.com/wp-content/uploads/kangaskhan-aquapolis-aq-88.jpg',
    'https://pkmncards.com/wp-content/uploads/larvitar-aquapolis-aq-89.jpg',
    'https://pkmncards.com/wp-content/uploads/lickitung-aquapolis-aq-90.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-aquapolis-aq-91.jpg',
    'https://pkmncards.com/wp-content/uploads/mankey-aquapolis-aq-92.jpg',
    'https://pkmncards.com/wp-content/uploads/mareep-aquapolis-aq-93.jpg',
    'https://pkmncards.com/wp-content/uploads/miltank-aquapolis-aq-94.jpg',
    'https://pkmncards.com/wp-content/uploads/mr.-mime-aquapolis-aq-95.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-male-aquapolis-aq-96.jpg',
    'https://pkmncards.com/wp-content/uploads/oddish-aquapolis-aq-97.jpg',
    'https://pkmncards.com/wp-content/uploads/onix-aquapolis-aq-98.jpg',
    'https://pkmncards.com/wp-content/uploads/paras-aquapolis-aq-99.jpg',
    'https://pkmncards.com/wp-content/uploads/phanpy-aquapolis-aq-100.jpg',
    'https://pkmncards.com/wp-content/uploads/pinsir-aquapolis-aq-101.jpg',
    'https://pkmncards.com/wp-content/uploads/ponyta-aquapolis-aq-102.jpg',
    'https://pkmncards.com/wp-content/uploads/porygon-aquapolis-aq-103.jpg',
    'https://pkmncards.com/wp-content/uploads/psyduck-aquapolis-aq-104.jpg',
    'https://pkmncards.com/wp-content/uploads/remoraid-aquapolis-aq-105.jpg',
    'https://pkmncards.com/wp-content/uploads/scyther-aquapolis-aq-106.jpg',
    'https://pkmncards.com/wp-content/uploads/sentret-aquapolis-aq-107.jpg',
    'https://pkmncards.com/wp-content/uploads/slowpoke-aquapolis-aq-108.jpg',
    'https://pkmncards.com/wp-content/uploads/smeargle-aquapolis-aq-109.jpg',
    'https://pkmncards.com/wp-content/uploads/sneasel-aquapolis-aq-110.jpg',
    'https://pkmncards.com/wp-content/uploads/spinarak-aquapolis-aq-111.jpg',
    'https://pkmncards.com/wp-content/uploads/tangela-aquapolis-aq-112.jpg',
    'https://pkmncards.com/wp-content/uploads/tentacool-aquapolis-aq-113.jpg',
    'https://pkmncards.com/wp-content/uploads/togepi-aquapolis-aq-114.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-aquapolis-aq-115.jpg',
    'https://pkmncards.com/wp-content/uploads/vulpix-aquapolis-aq-116.jpg',
    'https://pkmncards.com/wp-content/uploads/wooper-aquapolis-aq-117.jpg'],
	
    //Holos at index 5
    ['https://pkmncards.com/wp-content/uploads/h01-ampharos-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h02-arcanaine-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h03-ariados-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h04-azumarill-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h05-bellossom-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h06-blissey-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h07-electrode-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h08-entei-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h09-espeon-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h10-exeggutor-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h11-houndoom-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h12-hypno-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h13-jumpluff-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h14-kingdra-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h15-lanturn-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h16-magneton-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h17-muk-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h18-nidoking-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h19-ninetales-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h20-octillery-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h21-scizor-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h22-slowking-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h23-steelix-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h24-sudowoodo-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h25-suicune-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h26-tentacruel-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h27-togetic-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h28-tyranitar-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h29-umbreon-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h30-victreebel-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h31-vileplume-expedition.jpg',
    'https://pkmncards.com/wp-content/uploads/h32-zapdos-expedition.jpg'],

	//Secret Rares at index 6
	['https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-148.jpg',
    'https://pkmncards.com/wp-content/uploads/lugia-aquapolis-aq-149.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-150.jpg'],

];

const skyridge = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/abra-skyridge-sk-46.jpg',
    'https://pkmncards.com/wp-content/uploads/buried-fossil-skyridge-sk-47.jpg',
    'https://pkmncards.com/wp-content/uploads/cleffa-skyridge-sk-48.jpg',
    'https://pkmncards.com/wp-content/uploads/delibird-skyridge-sk-49.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-skyridge-sk-50.jpg',
    'https://pkmncards.com/wp-content/uploads/ditto-skyridge-sk-51.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-skyridge-sk-52.jpg',
    'https://pkmncards.com/wp-content/uploads/dunsparce-skyridge-sk-53.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-skyridge-sk-54.jpg',
    'https://pkmncards.com/wp-content/uploads/farfetchd-skyridge-sk-55.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-skyridge-sk-56.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-skyridge-sk-57.jpg',
    'https://pkmncards.com/wp-content/uploads/girafarig-skyridge-sk-58.jpg',
    'https://pkmncards.com/wp-content/uploads/gligar-skyridge-sk-59.jpg',
    'https://pkmncards.com/wp-content/uploads/golbat-skyridge-sk-60.jpg',
    'https://pkmncards.com/wp-content/uploads/granbull-skyridge-sk-61.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-skyridge-sk-62.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-skyridge-sk-63.jpg',
    'https://pkmncards.com/wp-content/uploads/heracross-skyridge-sk-64.jpg',
    'https://pkmncards.com/wp-content/uploads/hoothoot-skyridge-sk-65.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-skyridge-sk-66.jpg',
    'https://pkmncards.com/wp-content/uploads/igglybuff-skyridge-sk-67.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-skyridge-sk-68.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-skyridge-sk-69.jpg',
    'https://pkmncards.com/wp-content/uploads/kakuna-skyridge-sk-70.jpg',
    'https://pkmncards.com/wp-content/uploads/lapras-skyridge-sk-71.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-72.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-73.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-skyridge-sk-74.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-skyridge-sk-75.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-skyridge-sk-76.jpg',
    'https://pkmncards.com/wp-content/uploads/mantine-skyridge-sk-77.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-skyridge-sk-78.jpg',
    'https://pkmncards.com/wp-content/uploads/murkrow-skyridge-sk-79.jpg',
    'https://pkmncards.com/wp-content/uploads/natu-skyridge-sk-80.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-81.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-82.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorina-skyridge-sk-83.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-skyridge-sk-84.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-85.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-86.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-skyridge-sk-87.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-skyridge-sk-88.jpg',
    'https://pkmncards.com/wp-content/uploads/raticate-skyridge-sk-89.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-skyridge-sk-90.jpg',
    'https://pkmncards.com/wp-content/uploads/rhyhorn-skyridge-sk-91.jpg',
    'https://pkmncards.com/wp-content/uploads/sandshrew-skyridge-sk-92.jpg',
    'https://pkmncards.com/wp-content/uploads/sandslash-skyridge-sk-93.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-94.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-95.jpg',
    'https://pkmncards.com/wp-content/uploads/shuckle-skyridge-sk-96.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-skyridge-sk-97.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-98.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-99.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-skyridge-sk-100.jpg',
    'https://pkmncards.com/wp-content/uploads/snubbull-skyridge-sk-101.jpg',
    'https://pkmncards.com/wp-content/uploads/stantler-skyridge-sk-102.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-103.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-104.jpg',
    'https://pkmncards.com/wp-content/uploads/sunflora-skyridge-sk-105.jpg',
    'https://pkmncards.com/wp-content/uploads/sunkern-skyridge-sk-106.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-107.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-108.jpg',
    'https://pkmncards.com/wp-content/uploads/teddiursa-skyridge-sk-109.jpg',
    'https://pkmncards.com/wp-content/uploads/ursaring-skyridge-sk-110.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-111.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-112.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-skyridge-sk-113.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-114.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-115.jpg',
    'https://pkmncards.com/wp-content/uploads/yanma-skyridge-sk-116.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-117.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-118.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/electrode-skyridge-sk-36.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-skyridge-sk-37.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-skyridge-sk-38.jpg',
    'https://pkmncards.com/wp-content/uploads/misdreavus-skyridge-sk-39.jpg',
    'https://pkmncards.com/wp-content/uploads/noctowl-skyridge-sk-40.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-skyridge-sk-41.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-skyridge-sk-42.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-43.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-44.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-skyridge-sk-45.jpg',
    'https://pkmncards.com/wp-content/uploads/ancient-ruins-skyridge-sk-119.jpg',
    'https://pkmncards.com/wp-content/uploads/relic-hunter-skyridge-sk-120.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-maker-skyridge-sk-121.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-shard-skyridge-sk-122.jpg',
    'https://pkmncards.com/wp-content/uploads/desert-shaman-skyridge-sk-123.jpg',
    'https://pkmncards.com/wp-content/uploads/fast-ball-skyridge-sk-124.jpg',
    'https://pkmncards.com/wp-content/uploads/fisherman-skyridge-sk-125.jpg',
    'https://pkmncards.com/wp-content/uploads/friend-ball-skyridge-sk-126.jpg',
    'https://pkmncards.com/wp-content/uploads/hyper-potion-skyridge-sk-127.jpg',
    'https://pkmncards.com/wp-content/uploads/lure-ball-skyridge-sk-128.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-alpha-skyridge-sk-129.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-beta-skyridge-sk-130.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-gamma-skyridge-sk-131.jpg',
    'https://pkmncards.com/wp-content/uploads/mirage-stadium-skyridge-sk-132.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-alpha-skyridge-sk-133.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-beta-skyridge-sk-134.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-gamma-skyridge-sk-135.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-delta-skyridge-sk-136.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-zone-skyridge-sk-137.jpg',
    'https://pkmncards.com/wp-content/uploads/oracle-skyridge-sk-138.jpg',
    'https://pkmncards.com/wp-content/uploads/star-piece-skyridge-sk-139.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-expedition-skyridge-sk-140.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-lake-skyridge-sk-141.jpg',
    'https://pkmncards.com/wp-content/uploads/bounce-energy-skyridge-sk-142.jpg',
    'https://pkmncards.com/wp-content/uploads/cyclone-energy-skyridge-sk-143.jpg',
    'https://pkmncards.com/wp-content/uploads/retro-energy-skyridge-sk-144.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/aerodactyl-skyridge-sk-1.jpg',
    'https://pkmncards.com/wp-content/uploads/alakazam-skyridge-sk-2.jpg',
    'https://pkmncards.com/wp-content/uploads/arcanine-skyridge-sk-3.jpg',
    'https://pkmncards.com/wp-content/uploads/articuno-skyridge-sk-4.jpg',
    'https://pkmncards.com/wp-content/uploads/beedrill-skyridge-sk-5.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-skyridge-sk-6.jpg',
    'https://pkmncards.com/wp-content/uploads/dewgong-skyridge-sk-7.jpg',
    'https://pkmncards.com/wp-content/uploads/flareon-skyridge-sk-8.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-skyridge-sk-9.jpg',
    'https://pkmncards.com/wp-content/uploads/gengar-skyridge-sk-10.jpg',
    'https://pkmncards.com/wp-content/uploads/gyarados-skyridge-sk-11.jpg',
    'https://pkmncards.com/wp-content/uploads/houndoom-skyridge-sk-12.jpg',
    'https://pkmncards.com/wp-content/uploads/jolteon-skyridge-sk-13.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-skyridge-sk-14.jpg',
    'https://pkmncards.com/wp-content/uploads/ledian-skyridge-sk-15.jpg',
    'https://pkmncards.com/wp-content/uploads/machamp-skyridge-sk-16.jpg',
    'https://pkmncards.com/wp-content/uploads/magcargo-skyridge-sk-17.jpg',
    'https://pkmncards.com/wp-content/uploads/magcargo-skyridge-sk-18.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-skyridge-sk-19.jpg',
    'https://pkmncards.com/wp-content/uploads/magneton-skyridge-sk-20.jpg',
    'https://pkmncards.com/wp-content/uploads/moltres-skyridge-sk-21.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoqueen-skyridge-sk-22.jpg',
    'https://pkmncards.com/wp-content/uploads/omastar-skyridge-sk-23.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-24.jpg',
    'https://pkmncards.com/wp-content/uploads/politoed-skyridge-sk-25.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwrath-skyridge-sk-26.jpg',
    'https://pkmncards.com/wp-content/uploads/raichu-skyridge-sk-27.jpg',
    'https://pkmncards.com/wp-content/uploads/raikou-skyridge-sk-28.jpg',
    'https://pkmncards.com/wp-content/uploads/rhydon-skyridge-sk-29.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-30.jpg',
    'https://pkmncards.com/wp-content/uploads/steelix-skyridge-sk-31.jpg',
    'https://pkmncards.com/wp-content/uploads/umbreon-skyridge-sk-32.jpg',
    'https://pkmncards.com/wp-content/uploads/vaporeon-skyridge-sk-33.jpg',
    'https://pkmncards.com/wp-content/uploads/wigglytuff-skyridge-sk-34.jpg',
    'https://pkmncards.com/wp-content/uploads/xatu-skyridge-sk-35.jpg'],

	//Energies at index 3
	[],
	
	//Reverse Holos at index 4
	['https://pkmncards.com/wp-content/uploads/abra-skyridge-sk-46.jpg',
    'https://pkmncards.com/wp-content/uploads/buried-fossil-skyridge-sk-47.jpg',
    'https://pkmncards.com/wp-content/uploads/cleffa-skyridge-sk-48.jpg',
    'https://pkmncards.com/wp-content/uploads/delibird-skyridge-sk-49.jpg',
    'https://pkmncards.com/wp-content/uploads/diglett-skyridge-sk-50.jpg',
    'https://pkmncards.com/wp-content/uploads/ditto-skyridge-sk-51.jpg',
    'https://pkmncards.com/wp-content/uploads/dugtrio-skyridge-sk-52.jpg',
    'https://pkmncards.com/wp-content/uploads/dunsparce-skyridge-sk-53.jpg',
    'https://pkmncards.com/wp-content/uploads/eevee-skyridge-sk-54.jpg',
    'https://pkmncards.com/wp-content/uploads/farfetchd-skyridge-sk-55.jpg',
    'https://pkmncards.com/wp-content/uploads/forretress-skyridge-sk-56.jpg',
    'https://pkmncards.com/wp-content/uploads/gastly-skyridge-sk-57.jpg',
    'https://pkmncards.com/wp-content/uploads/girafarig-skyridge-sk-58.jpg',
    'https://pkmncards.com/wp-content/uploads/gligar-skyridge-sk-59.jpg',
    'https://pkmncards.com/wp-content/uploads/golbat-skyridge-sk-60.jpg',
    'https://pkmncards.com/wp-content/uploads/granbull-skyridge-sk-61.jpg',
    'https://pkmncards.com/wp-content/uploads/growlithe-skyridge-sk-62.jpg',
    'https://pkmncards.com/wp-content/uploads/haunter-skyridge-sk-63.jpg',
    'https://pkmncards.com/wp-content/uploads/heracross-skyridge-sk-64.jpg',
    'https://pkmncards.com/wp-content/uploads/hoothoot-skyridge-sk-65.jpg',
    'https://pkmncards.com/wp-content/uploads/houndour-skyridge-sk-66.jpg',
    'https://pkmncards.com/wp-content/uploads/igglybuff-skyridge-sk-67.jpg',
    'https://pkmncards.com/wp-content/uploads/jigglypuff-skyridge-sk-68.jpg',
    'https://pkmncards.com/wp-content/uploads/kadabra-skyridge-sk-69.jpg',
    'https://pkmncards.com/wp-content/uploads/kakuna-skyridge-sk-70.jpg',
    'https://pkmncards.com/wp-content/uploads/lapras-skyridge-sk-71.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-72.jpg',
    'https://pkmncards.com/wp-content/uploads/ledyba-skyridge-sk-73.jpg',
    'https://pkmncards.com/wp-content/uploads/machop-skyridge-sk-74.jpg',
    'https://pkmncards.com/wp-content/uploads/magikarp-skyridge-sk-75.jpg',
    'https://pkmncards.com/wp-content/uploads/magnemite-skyridge-sk-76.jpg',
    'https://pkmncards.com/wp-content/uploads/mantine-skyridge-sk-77.jpg',
    'https://pkmncards.com/wp-content/uploads/meowth-skyridge-sk-78.jpg',
    'https://pkmncards.com/wp-content/uploads/murkrow-skyridge-sk-79.jpg',
    'https://pkmncards.com/wp-content/uploads/natu-skyridge-sk-80.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-81.jpg',
    'https://pkmncards.com/wp-content/uploads/nidoran-female-skyridge-sk-82.jpg',
    'https://pkmncards.com/wp-content/uploads/nidorina-skyridge-sk-83.jpg',
    'https://pkmncards.com/wp-content/uploads/pikachu-skyridge-sk-84.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-85.jpg',
    'https://pkmncards.com/wp-content/uploads/pineco-skyridge-sk-86.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwag-skyridge-sk-87.jpg',
    'https://pkmncards.com/wp-content/uploads/poliwhirl-skyridge-sk-88.jpg',
    'https://pkmncards.com/wp-content/uploads/raticate-skyridge-sk-89.jpg',
    'https://pkmncards.com/wp-content/uploads/rattata-skyridge-sk-90.jpg',
    'https://pkmncards.com/wp-content/uploads/rhyhorn-skyridge-sk-91.jpg',
    'https://pkmncards.com/wp-content/uploads/sandshrew-skyridge-sk-92.jpg',
    'https://pkmncards.com/wp-content/uploads/sandslash-skyridge-sk-93.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-94.jpg',
    'https://pkmncards.com/wp-content/uploads/seel-skyridge-sk-95.jpg',
    'https://pkmncards.com/wp-content/uploads/shuckle-skyridge-sk-96.jpg',
    'https://pkmncards.com/wp-content/uploads/skarmory-skyridge-sk-97.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-98.jpg',
    'https://pkmncards.com/wp-content/uploads/slugma-skyridge-sk-99.jpg',
    'https://pkmncards.com/wp-content/uploads/snorlax-skyridge-sk-100.jpg',
    'https://pkmncards.com/wp-content/uploads/snubbull-skyridge-sk-101.jpg',
    'https://pkmncards.com/wp-content/uploads/stantler-skyridge-sk-102.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-103.jpg',
    'https://pkmncards.com/wp-content/uploads/staryu-skyridge-sk-104.jpg',
    'https://pkmncards.com/wp-content/uploads/sunflora-skyridge-sk-105.jpg',
    'https://pkmncards.com/wp-content/uploads/sunkern-skyridge-sk-106.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-107.jpg',
    'https://pkmncards.com/wp-content/uploads/swinub-skyridge-sk-108.jpg',
    'https://pkmncards.com/wp-content/uploads/teddiursa-skyridge-sk-109.jpg',
    'https://pkmncards.com/wp-content/uploads/ursaring-skyridge-sk-110.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-111.jpg',
    'https://pkmncards.com/wp-content/uploads/venomoth-skyridge-sk-112.jpg',
    'https://pkmncards.com/wp-content/uploads/voltorb-skyridge-sk-113.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-114.jpg',
    'https://pkmncards.com/wp-content/uploads/weedle-skyridge-sk-115.jpg',
    'https://pkmncards.com/wp-content/uploads/yanma-skyridge-sk-116.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-117.jpg',
    'https://pkmncards.com/wp-content/uploads/zubat-skyridge-sk-118.jpg',
	'https://pkmncards.com/wp-content/uploads/electrode-skyridge-sk-36.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-skyridge-sk-37.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-skyridge-sk-38.jpg',
    'https://pkmncards.com/wp-content/uploads/misdreavus-skyridge-sk-39.jpg',
    'https://pkmncards.com/wp-content/uploads/noctowl-skyridge-sk-40.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-skyridge-sk-41.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-skyridge-sk-42.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-43.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-44.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-skyridge-sk-45.jpg',
    'https://pkmncards.com/wp-content/uploads/ancient-ruins-skyridge-sk-119.jpg',
    'https://pkmncards.com/wp-content/uploads/relic-hunter-skyridge-sk-120.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-maker-skyridge-sk-121.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-shard-skyridge-sk-122.jpg',
    'https://pkmncards.com/wp-content/uploads/desert-shaman-skyridge-sk-123.jpg',
    'https://pkmncards.com/wp-content/uploads/fast-ball-skyridge-sk-124.jpg',
    'https://pkmncards.com/wp-content/uploads/fisherman-skyridge-sk-125.jpg',
    'https://pkmncards.com/wp-content/uploads/friend-ball-skyridge-sk-126.jpg',
    'https://pkmncards.com/wp-content/uploads/hyper-potion-skyridge-sk-127.jpg',
    'https://pkmncards.com/wp-content/uploads/lure-ball-skyridge-sk-128.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-alpha-skyridge-sk-129.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-beta-skyridge-sk-130.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-gamma-skyridge-sk-131.jpg',
    'https://pkmncards.com/wp-content/uploads/mirage-stadium-skyridge-sk-132.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-alpha-skyridge-sk-133.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-beta-skyridge-sk-134.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-gamma-skyridge-sk-135.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-delta-skyridge-sk-136.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-zone-skyridge-sk-137.jpg',
    'https://pkmncards.com/wp-content/uploads/oracle-skyridge-sk-138.jpg',
    'https://pkmncards.com/wp-content/uploads/star-piece-skyridge-sk-139.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-expedition-skyridge-sk-140.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-lake-skyridge-sk-141.jpg',
    'https://pkmncards.com/wp-content/uploads/bounce-energy-skyridge-sk-142.jpg',
    'https://pkmncards.com/wp-content/uploads/cyclone-energy-skyridge-sk-143.jpg',
    'https://pkmncards.com/wp-content/uploads/retro-energy-skyridge-sk-144.jpg',
	'https://pkmncards.com/wp-content/uploads/electrode-skyridge-sk-36.jpg',
    'https://pkmncards.com/wp-content/uploads/kabuto-skyridge-sk-37.jpg',
    'https://pkmncards.com/wp-content/uploads/machoke-skyridge-sk-38.jpg',
    'https://pkmncards.com/wp-content/uploads/misdreavus-skyridge-sk-39.jpg',
    'https://pkmncards.com/wp-content/uploads/noctowl-skyridge-sk-40.jpg',
    'https://pkmncards.com/wp-content/uploads/omanyte-skyridge-sk-41.jpg',
    'https://pkmncards.com/wp-content/uploads/persian-skyridge-sk-42.jpg',
    'https://pkmncards.com/wp-content/uploads/piloswine-skyridge-sk-43.jpg',
    'https://pkmncards.com/wp-content/uploads/starmie-skyridge-sk-44.jpg',
    'https://pkmncards.com/wp-content/uploads/wobbuffet-skyridge-sk-45.jpg',
    'https://pkmncards.com/wp-content/uploads/ancient-ruins-skyridge-sk-119.jpg',
    'https://pkmncards.com/wp-content/uploads/relic-hunter-skyridge-sk-120.jpg',
    'https://pkmncards.com/wp-content/uploads/apricorn-maker-skyridge-sk-121.jpg',
    'https://pkmncards.com/wp-content/uploads/crystal-shard-skyridge-sk-122.jpg',
    'https://pkmncards.com/wp-content/uploads/desert-shaman-skyridge-sk-123.jpg',
    'https://pkmncards.com/wp-content/uploads/fast-ball-skyridge-sk-124.jpg',
    'https://pkmncards.com/wp-content/uploads/fisherman-skyridge-sk-125.jpg',
    'https://pkmncards.com/wp-content/uploads/friend-ball-skyridge-sk-126.jpg',
    'https://pkmncards.com/wp-content/uploads/hyper-potion-skyridge-sk-127.jpg',
    'https://pkmncards.com/wp-content/uploads/lure-ball-skyridge-sk-128.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-alpha-skyridge-sk-129.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-beta-skyridge-sk-130.jpg',
    'https://pkmncards.com/wp-content/uploads/miracle-sphere-gamma-skyridge-sk-131.jpg',
    'https://pkmncards.com/wp-content/uploads/mirage-stadium-skyridge-sk-132.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-alpha-skyridge-sk-133.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-beta-skyridge-sk-134.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-gamma-skyridge-sk-135.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-plate-delta-skyridge-sk-136.jpg',
    'https://pkmncards.com/wp-content/uploads/mystery-zone-skyridge-sk-137.jpg',
    'https://pkmncards.com/wp-content/uploads/oracle-skyridge-sk-138.jpg',
    'https://pkmncards.com/wp-content/uploads/star-piece-skyridge-sk-139.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-expedition-skyridge-sk-140.jpg',
    'https://pkmncards.com/wp-content/uploads/underground-lake-skyridge-sk-141.jpg',
    'https://pkmncards.com/wp-content/uploads/bounce-energy-skyridge-sk-142.jpg',
    'https://pkmncards.com/wp-content/uploads/cyclone-energy-skyridge-sk-143.jpg',
    'https://pkmncards.com/wp-content/uploads/retro-energy-skyridge-sk-144.jpg',
	'https://pkmncards.com/wp-content/uploads/charizard-skyridge-sk-146.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-skyridge-sk-147.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-skyridge-sk-148.jpg',
    'https://pkmncards.com/wp-content/uploads/ho-oh-skyridge-sk-149.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-skyridge-sk-150.jpg',
    'https://pkmncards.com/wp-content/uploads/celebi-skyridge-sk-145.jpg'],

	//Holos at index 5
    ['https://pkmncards.com/wp-content/uploads/h01.jpg',
    'https://pkmncards.com/wp-content/uploads/h02.jpg',
    'https://pkmncards.com/wp-content/uploads/h03.jpg',
    'https://pkmncards.com/wp-content/uploads/h04.jpg',
    'https://pkmncards.com/wp-content/uploads/h05.jpg',
    'https://pkmncards.com/wp-content/uploads/h06.jpg',
    'https://pkmncards.com/wp-content/uploads/h07.jpg',
    'https://pkmncards.com/wp-content/uploads/h08.jpg',
    'https://pkmncards.com/wp-content/uploads/h09.jpg',
    'https://pkmncards.com/wp-content/uploads/h10.jpg',
    'https://pkmncards.com/wp-content/uploads/h11.jpg',
    'https://pkmncards.com/wp-content/uploads/h12.jpg',
    'https://pkmncards.com/wp-content/uploads/h13.jpg',
    'https://pkmncards.com/wp-content/uploads/h14.jpg',
    'https://pkmncards.com/wp-content/uploads/h15.jpg',
    'https://pkmncards.com/wp-content/uploads/h16.jpg',
    'https://pkmncards.com/wp-content/uploads/h17.jpg',
    'https://pkmncards.com/wp-content/uploads/h18.jpg',
    'https://pkmncards.com/wp-content/uploads/h19.jpg',
    'https://pkmncards.com/wp-content/uploads/h20.jpg',
    'https://pkmncards.com/wp-content/uploads/h21.jpg',
    'https://pkmncards.com/wp-content/uploads/h22.jpg',
    'https://pkmncards.com/wp-content/uploads/h23.jpg',
    'https://pkmncards.com/wp-content/uploads/h24.jpg',
    'https://pkmncards.com/wp-content/uploads/h25.jpg',
    'https://pkmncards.com/wp-content/uploads/h26.jpg',
    'https://pkmncards.com/wp-content/uploads/h27.jpg',
    'https://pkmncards.com/wp-content/uploads/h28.jpg',
    'https://pkmncards.com/wp-content/uploads/h29.jpg',
    'https://pkmncards.com/wp-content/uploads/h30.jpg',
    'https://pkmncards.com/wp-content/uploads/h31.jpg',
    'https://pkmncards.com/wp-content/uploads/h32.jpg'],

    //crystals at index 6
    ['https://pkmncards.com/wp-content/uploads/charizard-skyridge-sk-146.jpg',
    'https://pkmncards.com/wp-content/uploads/crobat-skyridge-sk-147.jpg',
    'https://pkmncards.com/wp-content/uploads/golem-skyridge-sk-148.jpg',
    'https://pkmncards.com/wp-content/uploads/ho-oh-skyridge-sk-149.jpg',
    'https://pkmncards.com/wp-content/uploads/kabutops-skyridge-sk-150.jpg',
    'https://pkmncards.com/wp-content/uploads/celebi-skyridge-sk-145.jpg']
];

const exRS = [	
	
	//commons at index 0
	['https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-49.jpg',
	'https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-50.jpg',
	'https://pkmncards.com/wp-content/uploads/carvanha-ruby-sapphire-rs-51.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-52.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-53.jpg',
	'https://pkmncards.com/wp-content/uploads/koffing-ruby-sapphire-rs-54.jpg',
	'https://pkmncards.com/wp-content/uploads/goldeen-ruby-sapphire-rs-55.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-56.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-57.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-58.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-ruby-sapphire-rs-59.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-ruby-sapphire-rs-60.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-ruby-sapphire-rs-61.jpg',
	'https://pkmncards.com/wp-content/uploads/phanpy-ruby-sapphire-rs-62.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-63.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-64.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-65.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-66.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-67.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-68.jpg',
	'https://pkmncards.com/wp-content/uploads/shroomish-ruby-sapphire-rs-69.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-70.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-71.jpg',
	'https://pkmncards.com/wp-content/uploads/taillow-ruby-sapphire-rs-72.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-ruby-sapphire-rs-73.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-ruby-sapphire-rs-74.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-ruby-sapphire-rs-75.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-ruby-sapphire-rs-76.jpg',
	'https://pkmncards.com/wp-content/uploads/wingull-ruby-sapphire-rs-77.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-ruby-sapphire-rs-78.jpg',
	'https://pkmncards.com/wp-content/uploads/zigzagoon-ruby-sapphire-rs-79.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-search-ruby-sapphire-rs-90.jpg',
	'https://pkmncards.com/wp-content/uploads/potion-ruby-sapphire-rs-91.jpg',
	'https://pkmncards.com/wp-content/uploads/switch-ruby-sapphire-rs-92.jpg'],
		
	//uncommons at index 1
	['https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-25.jpg',
	'https://pkmncards.com/wp-content/uploads/cascoon-ruby-sapphire-rs-26.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-ruby-sapphire-rs-27.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-ruby-sapphire-rs-28.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-ruby-sapphire-rs-29.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-30.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-ruby-sapphire-rs-31.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-ruby-sapphire-rs-32.jpg',
	'https://pkmncards.com/wp-content/uploads/hariyama-ruby-sapphire-rs-33.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-ruby-sapphire-rs-34.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-ruby-sapphire-rs-35.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-ruby-sapphire-rs-36.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-ruby-sapphire-rs-37.jpg',
	'https://pkmncards.com/wp-content/uploads/linoone-ruby-sapphire-rs-38.jpg',
	'https://pkmncards.com/wp-content/uploads/manectric-ruby-sapphire-rs-39.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-ruby-sapphire-rs-40.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-ruby-sapphire-rs-41.jpg',
	'https://pkmncards.com/wp-content/uploads/mightyena-ruby-sapphire-rs-42.jpg',
	'https://pkmncards.com/wp-content/uploads/silcoon-ruby-sapphire-rs-43.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-44.jpg',
	'https://pkmncards.com/wp-content/uploads/slakoth-ruby-sapphire-rs-45.jpg',
	'https://pkmncards.com/wp-content/uploads/swellow-ruby-sapphire-rs-46.jpg',
	'https://pkmncards.com/wp-content/uploads/vigoroth-ruby-sapphire-rs-47.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-ruby-sapphire-rs-48.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-removal-2-ruby-sapphire-rs-80.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-restore-ruby-sapphire-rs-81.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-switch-ruby-sapphire-rs-82.jpg',
	'https://pkmncards.com/wp-content/uploads/lady-outing-ruby-sapphire-rs-83.jpg',
	'https://pkmncards.com/wp-content/uploads/lum-berry-ruby-sapphire-rs-84.jpg',
	'https://pkmncards.com/wp-content/uploads/oran-berry-ruby-sapphire-rs-85.jpg',
	'https://pkmncards.com/wp-content/uploads/poke-ball-ruby-sapphire-rs-86.jpg',
	'https://pkmncards.com/wp-content/uploads/pokemon-reversal-ruby-sapphire-rs-87.jpg',
	'https://pkmncards.com/wp-content/uploads/pokenav-ruby-sapphire-rs-88.jpg',
	'https://pkmncards.com/wp-content/uploads/professor-birch-ruby-sapphire-rs-89.jpg'],
	
	//rares at index 2
	['https://pkmncards.com/wp-content/uploads/blaziken-ruby-sapphire-rs-15.jpg',
	'https://pkmncards.com/wp-content/uploads/breloom-ruby-sapphire-rs-16.jpg',
	'https://pkmncards.com/wp-content/uploads/donphan-ruby-sapphire-rs-17.jpg',
	'https://pkmncards.com/wp-content/uploads/nosepass-ruby-sapphire-rs-18.jpg',
	'https://pkmncards.com/wp-content/uploads/pelipper-ruby-sapphire-rs-19.jpg',
	'https://pkmncards.com/wp-content/uploads/sceptile-ruby-sapphire-rs-20.jpg',
	'https://pkmncards.com/wp-content/uploads/en_US-RS-021-seaking.jpg',
	'https://pkmncards.com/wp-content/uploads/sharpedo-ruby-sapphire-rs-22.jpg',
	'https://pkmncards.com/wp-content/uploads/swampert-ruby-sapphire-rs-23.jpg',
	'https://pkmncards.com/wp-content/uploads/weezing-ruby-sapphire-rs-24.jpg',
	'https://pkmncards.com/wp-content/uploads/darkness-energy-ruby-sapphire-rs-93.jpg',
	'https://pkmncards.com/wp-content/uploads/metal-energy-ruby-sapphire-rs-94.jpg',
	'https://pkmncards.com/wp-content/uploads/rainbow-energy-ruby-sapphire-rs-95.jpg'],

	//energies at index 3
	['https://pkmncards.com/wp-content/uploads/grass-energy-ruby-sapphire-rs-104.jpg',
	'https://pkmncards.com/wp-content/uploads/fighting-energy-ruby-sapphire-rs-105.jpg',
	'https://pkmncards.com/wp-content/uploads/water-energy-ruby-sapphire-rs-106.jpg',
	'https://pkmncards.com/wp-content/uploads/psychic-energy-ruby-sapphire-rs-107.jpg',
	'https://pkmncards.com/wp-content/uploads/fire-energy-ruby-sapphire-rs-108.jpg',
	'https://pkmncards.com/wp-content/uploads/lightning-energy-ruby-sapphire-rs-109.jpg'],
	
	//reverses at index 4
	['https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-49.jpg',
	'https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-50.jpg',
	'https://pkmncards.com/wp-content/uploads/carvanha-ruby-sapphire-rs-51.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-52.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-53.jpg',
	'https://pkmncards.com/wp-content/uploads/koffing-ruby-sapphire-rs-54.jpg',
	'https://pkmncards.com/wp-content/uploads/goldeen-ruby-sapphire-rs-55.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-56.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-57.jpg',
	'https://pkmncards.com/wp-content/uploads/makuhita-ruby-sapphire-rs-58.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-ruby-sapphire-rs-59.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-ruby-sapphire-rs-60.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-ruby-sapphire-rs-61.jpg',
	'https://pkmncards.com/wp-content/uploads/phanpy-ruby-sapphire-rs-62.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-63.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-64.jpg',
	'https://pkmncards.com/wp-content/uploads/poochyena-ruby-sapphire-rs-65.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-66.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-67.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-ruby-sapphire-rs-68.jpg',
	'https://pkmncards.com/wp-content/uploads/shroomish-ruby-sapphire-rs-69.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-70.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-71.jpg',
	'https://pkmncards.com/wp-content/uploads/taillow-ruby-sapphire-rs-72.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-ruby-sapphire-rs-73.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-ruby-sapphire-rs-74.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-ruby-sapphire-rs-75.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-ruby-sapphire-rs-76.jpg',
	'https://pkmncards.com/wp-content/uploads/wingull-ruby-sapphire-rs-77.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-ruby-sapphire-rs-78.jpg',
	'https://pkmncards.com/wp-content/uploads/zigzagoon-ruby-sapphire-rs-79.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-search-ruby-sapphire-rs-90.jpg',
	'https://pkmncards.com/wp-content/uploads/potion-ruby-sapphire-rs-91.jpg',
	'https://pkmncards.com/wp-content/uploads/switch-ruby-sapphire-rs-92.jpg',
	'https://pkmncards.com/wp-content/uploads/aron-ruby-sapphire-rs-25.jpg',
	'https://pkmncards.com/wp-content/uploads/cascoon-ruby-sapphire-rs-26.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-ruby-sapphire-rs-27.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-ruby-sapphire-rs-28.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-ruby-sapphire-rs-29.jpg',
	'https://pkmncards.com/wp-content/uploads/electrike-ruby-sapphire-rs-30.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-ruby-sapphire-rs-31.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-ruby-sapphire-rs-32.jpg',
	'https://pkmncards.com/wp-content/uploads/hariyama-ruby-sapphire-rs-33.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-ruby-sapphire-rs-34.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-ruby-sapphire-rs-35.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-ruby-sapphire-rs-36.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-ruby-sapphire-rs-37.jpg',
	'https://pkmncards.com/wp-content/uploads/linoone-ruby-sapphire-rs-38.jpg',
	'https://pkmncards.com/wp-content/uploads/manectric-ruby-sapphire-rs-39.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-ruby-sapphire-rs-40.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-ruby-sapphire-rs-41.jpg',
	'https://pkmncards.com/wp-content/uploads/mightyena-ruby-sapphire-rs-42.jpg',
	'https://pkmncards.com/wp-content/uploads/silcoon-ruby-sapphire-rs-43.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-ruby-sapphire-rs-44.jpg',
	'https://pkmncards.com/wp-content/uploads/slakoth-ruby-sapphire-rs-45.jpg',
	'https://pkmncards.com/wp-content/uploads/swellow-ruby-sapphire-rs-46.jpg',
	'https://pkmncards.com/wp-content/uploads/vigoroth-ruby-sapphire-rs-47.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-ruby-sapphire-rs-48.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-removal-2-ruby-sapphire-rs-80.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-restore-ruby-sapphire-rs-81.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-switch-ruby-sapphire-rs-82.jpg',
	'https://pkmncards.com/wp-content/uploads/lady-outing-ruby-sapphire-rs-83.jpg',
	'https://pkmncards.com/wp-content/uploads/lum-berry-ruby-sapphire-rs-84.jpg',
	'https://pkmncards.com/wp-content/uploads/oran-berry-ruby-sapphire-rs-85.jpg',
	'https://pkmncards.com/wp-content/uploads/poke-ball-ruby-sapphire-rs-86.jpg',
	'https://pkmncards.com/wp-content/uploads/pokemon-reversal-ruby-sapphire-rs-87.jpg',
	'https://pkmncards.com/wp-content/uploads/pokenav-ruby-sapphire-rs-88.jpg',
	'https://pkmncards.com/wp-content/uploads/professor-birch-ruby-sapphire-rs-89.jpg',
	'https://pkmncards.com/wp-content/uploads/blaziken-ruby-sapphire-rs-15.jpg',
	'https://pkmncards.com/wp-content/uploads/breloom-ruby-sapphire-rs-16.jpg',
	'https://pkmncards.com/wp-content/uploads/donphan-ruby-sapphire-rs-17.jpg',
	'https://pkmncards.com/wp-content/uploads/nosepass-ruby-sapphire-rs-18.jpg',
	'https://pkmncards.com/wp-content/uploads/pelipper-ruby-sapphire-rs-19.jpg',
	'https://pkmncards.com/wp-content/uploads/sceptile-ruby-sapphire-rs-20.jpg',
	'https://pkmncards.com/wp-content/uploads/en_US-RS-021-seaking.jpg',
	'https://pkmncards.com/wp-content/uploads/sharpedo-ruby-sapphire-rs-22.jpg',
	'https://pkmncards.com/wp-content/uploads/swampert-ruby-sapphire-rs-23.jpg',
	'https://pkmncards.com/wp-content/uploads/weezing-ruby-sapphire-rs-24.jpg',
	'https://pkmncards.com/wp-content/uploads/darkness-energy-ruby-sapphire-rs-93.jpg',
	'https://pkmncards.com/wp-content/uploads/metal-energy-ruby-sapphire-rs-94.jpg',
	'https://pkmncards.com/wp-content/uploads/rainbow-energy-ruby-sapphire-rs-95.jpg',
	'https://pkmncards.com/wp-content/uploads/grass-energy-ruby-sapphire-rs-104.jpg',
	'https://pkmncards.com/wp-content/uploads/fighting-energy-ruby-sapphire-rs-105.jpg',
	'https://pkmncards.com/wp-content/uploads/water-energy-ruby-sapphire-rs-106.jpg',
	'https://pkmncards.com/wp-content/uploads/psychic-energy-ruby-sapphire-rs-107.jpg',
	'https://pkmncards.com/wp-content/uploads/fire-energy-ruby-sapphire-rs-108.jpg',
	'https://pkmncards.com/wp-content/uploads/lightning-energy-ruby-sapphire-rs-109.jpg',
	'https://pkmncards.com/wp-content/uploads/aggron-ruby-sapphire-rs-1.jpg',
	'https://pkmncards.com/wp-content/uploads/beautifly-ruby-sapphire-rs-2.jpg',
	'https://pkmncards.com/wp-content/uploads/blaziken-ruby-sapphire-rs-3.jpg',
	'https://pkmncards.com/wp-content/uploads/camerupt-ruby-sapphire-rs-4.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-ruby-sapphire-rs-5.jpg',
	'https://pkmncards.com/wp-content/uploads/dustox-ruby-sapphire-rs-6.jpg',
	'https://pkmncards.com/wp-content/uploads/gardevoir-ruby-sapphire-rs-7.jpg',
	'https://pkmncards.com/wp-content/uploads/hariyama-ruby-sapphire-rs-8.jpg',
	'https://pkmncards.com/wp-content/uploads/manectric-ruby-sapphire-rs-9.jpg',
	'https://pkmncards.com/wp-content/uploads/mightyena-ruby-sapphire-rs-10.jpg',
	'https://pkmncards.com/wp-content/uploads/sceptile-ruby-sapphire-rs-11.jpg',
	'https://pkmncards.com/wp-content/uploads/slaking-ruby-sapphire-rs-12.jpg',
	'https://pkmncards.com/wp-content/uploads/swampert-ruby-sapphire-rs-13.jpg',
	'https://pkmncards.com/wp-content/uploads/wailord-ruby-sapphire-rs-14.jpg'],
	
	//holos at index 5
	['https://pkmncards.com/wp-content/uploads/aggron-ruby-sapphire-rs-1.jpg',
	'https://pkmncards.com/wp-content/uploads/beautifly-ruby-sapphire-rs-2.jpg',
	'https://pkmncards.com/wp-content/uploads/blaziken-ruby-sapphire-rs-3.jpg',
	'https://pkmncards.com/wp-content/uploads/camerupt-ruby-sapphire-rs-4.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-ruby-sapphire-rs-5.jpg',
	'https://pkmncards.com/wp-content/uploads/dustox-ruby-sapphire-rs-6.jpg',
	'https://pkmncards.com/wp-content/uploads/gardevoir-ruby-sapphire-rs-7.jpg',
	'https://pkmncards.com/wp-content/uploads/hariyama-ruby-sapphire-rs-8.jpg',
	'https://pkmncards.com/wp-content/uploads/manectric-ruby-sapphire-rs-9.jpg',
	'https://pkmncards.com/wp-content/uploads/mightyena-ruby-sapphire-rs-10.jpg',
	'https://pkmncards.com/wp-content/uploads/sceptile-ruby-sapphire-rs-11.jpg',
	'https://pkmncards.com/wp-content/uploads/slaking-ruby-sapphire-rs-12.jpg',
	'https://pkmncards.com/wp-content/uploads/swampert-ruby-sapphire-rs-13.jpg',
	'https://pkmncards.com/wp-content/uploads/wailord-ruby-sapphire-rs-14.jpg'],

	//exs at index 6
	['https://pkmncards.com/wp-content/uploads/chansey-ex-ruby-sapphire-rs-96.jpg',
	'https://pkmncards.com/wp-content/uploads/electabuzz-ex-ruby-sapphire-rs-97.jpg',
	'https://pkmncards.com/wp-content/uploads/hitmonchan-ex-ruby-sapphire-rs-98.jpg',
	'https://pkmncards.com/wp-content/uploads/lapras-ex-ruby-sapphire-rs-99.jpg',
	'https://pkmncards.com/wp-content/uploads/magmar-ex-ruby-sapphire-rs-100.jpg',
	'https://pkmncards.com/wp-content/uploads/mewtwo-ex-ruby-sapphire-rs-101.jpg',
	'https://pkmncards.com/wp-content/uploads/scyther-ex-ruby-sapphire-rs-102.jpg',
	'https://pkmncards.com/wp-content/uploads/sneasel-ex-ruby-sapphire-rs-103.jpg']
];

const sandstorm = [
		
	//commons at index 0
	['https://pkmncards.com/wp-content/uploads/aron-sandstorm-ss-56.jpg',
	'https://pkmncards.com/wp-content/uploads/cacnea-sandstorm-ss-57.jpg',
	'https://pkmncards.com/wp-content/uploads/cacnea-sandstorm-ss-58.jpg',
	'https://pkmncards.com/wp-content/uploads/cyndaquil-sandstorm-ss-59.jpg',
	'https://pkmncards.com/wp-content/uploads/dunsparce-sandstorm-ss-60.jpg',
	'https://pkmncards.com/wp-content/uploads/duskull-sandstorm-ss-61.jpg',
	'https://pkmncards.com/wp-content/uploads/duskull-sandstorm-ss-62.jpg',
	'https://pkmncards.com/wp-content/uploads/eevee-sandstorm-ss-63.jpg',
	'https://pkmncards.com/wp-content/uploads/ekans-sandstorm-ss-64.jpg',
	'https://pkmncards.com/wp-content/uploads/growlithe-sandstorm-ss-65.jpg',
	'https://pkmncards.com/wp-content/uploads/lotad-sandstorm-ss-66.jpg',
	'https://pkmncards.com/wp-content/uploads/lotad-sandstorm-ss-67.jpg',
	'https://pkmncards.com/wp-content/uploads/marill-sandstorm-ss-68.jpg',
	'https://pkmncards.com/wp-content/uploads/natu-sandstorm-ss-69.jpg',
	'https://pkmncards.com/wp-content/uploads/omanyte-sandstorm-ss-70.jpg',
	'https://pkmncards.com/wp-content/uploads/onix-sandstorm-ss-71.jpg',
	'https://pkmncards.com/wp-content/uploads/pikachu-sandstorm-ss-72.jpg',
	'https://pkmncards.com/wp-content/uploads/psyduck-sandstorm-ss-73.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-sandstorm-ss-74.jpg',
	'https://pkmncards.com/wp-content/uploads/sandshrew-sandstorm-ss-75.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-sandstorm-ss-76.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-sandstorm-ss-77.jpg',
	'https://pkmncards.com/wp-content/uploads/shroomish-sandstorm-ss-78.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-sandstorm-ss-79.jpg',
	'https://pkmncards.com/wp-content/uploads/slakoth-sandstorm-ss-80.jpg',
	'https://pkmncards.com/wp-content/uploads/spearow-sandstorm-ss-81.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-sandstorm-ss-82.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-sandstorm-ss-83.jpg',
	'https://pkmncards.com/wp-content/uploads/wingull-sandstorm-ss-84.jpg',
	'https://pkmncards.com/wp-content/uploads/zigzagoon-sandstorm-ss-85.jpg',
	'https://pkmncards.com/wp-content/uploads/claw-fossil-sandstorm-ss-90.jpg',
	'https://pkmncards.com/wp-content/uploads/mysterious-fossil-sandstorm-ss-91.jpg',
	'https://pkmncards.com/wp-content/uploads/root-fossil-sandstorm-ss-92.jpg'],
	
	//uncommons at index 1
	['https://pkmncards.com/wp-content/uploads/anorith-sandstorm-ss-27.jpg',
	'https://pkmncards.com/wp-content/uploads/anorith-sandstorm-ss-28.jpg',
	'https://pkmncards.com/wp-content/uploads/arbok-sandstorm-ss-29.jpg',
	'https://pkmncards.com/wp-content/uploads/azumarill-sandstorm-ss-30.jpg',
	'https://pkmncards.com/wp-content/uploads/azurill-sandstorm-ss-31.jpg',
	'https://pkmncards.com/wp-content/uploads/baltoy-sandstorm-ss-32.jpg',
	'https://pkmncards.com/wp-content/uploads/breloom-sandstorm-ss-33.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-sandstorm-ss-34.jpg',
	'https://pkmncards.com/wp-content/uploads/electabuzz-sandstorm-ss-35.jpg',
	'https://pkmncards.com/wp-content/uploads/elekid-sandstorm-ss-36.jpg',
	'https://pkmncards.com/wp-content/uploads/fearow-sandstorm-ss-37.jpg',
	'https://pkmncards.com/wp-content/uploads/illumise-sandstorm-ss-38.jpg',
	'https://pkmncards.com/wp-content/uploads/kabuto-sandstorm-ss-39.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-sandstorm-ss-40.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-sandstorm-ss-41.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-sandstorm-ss-42.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-sandstorm-ss-43.jpg',
	'https://pkmncards.com/wp-content/uploads/linoone-sandstorm-ss-44.jpg',
	'https://pkmncards.com/wp-content/uploads/lombre-sandstorm-ss-45.jpg',
	'https://pkmncards.com/wp-content/uploads/lombre-sandstorm-ss-46.jpg',
	'https://pkmncards.com/wp-content/uploads/murkrow-sandstorm-ss-47.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-sandstorm-ss-48.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-sandstorm-ss-49.jpg',
	'https://pkmncards.com/wp-content/uploads/pelipper-sandstorm-ss-50.jpg',
	'https://pkmncards.com/wp-content/uploads/quilava-sandstorm-ss-51.jpg',
	'https://pkmncards.com/wp-content/uploads/vigoroth-sandstorm-ss-52.jpg',
	'https://pkmncards.com/wp-content/uploads/volbeat-sandstorm-ss-53.jpg',
	'https://pkmncards.com/wp-content/uploads/wynaut-sandstorm-ss-54.jpg',
	'https://pkmncards.com/wp-content/uploads/xatu-sandstorm-ss-55.jpg',
	'https://pkmncards.com/wp-content/uploads/double-full-heal-sandstorm-ss-86.jpg',
	'https://pkmncards.com/wp-content/uploads/lanettes-net-search-sandstorm-ss-87.jpg',
	'https://pkmncards.com/wp-content/uploads/rare-candy-sandstorm-ss-88.jpg',
	'https://pkmncards.com/wp-content/uploads/wallys-training-sandstorm-ss-89.jpg'],
	
	//rares at index 2
	['https://pkmncards.com/wp-content/uploads/arcanine-sandstorm-ss-15.jpg',
	'https://pkmncards.com/wp-content/uploads/espeon-sandstorm-ss-16.jpg',
	'https://pkmncards.com/wp-content/uploads/golduck-sandstorm-ss-17.jpg',
	'https://pkmncards.com/wp-content/uploads/kecleon-sandstorm-ss-18.jpg',
	'https://pkmncards.com/wp-content/uploads/omastar-sandstorm-ss-19.jpg',
	'https://pkmncards.com/wp-content/uploads/pichu-sandstorm-ss-20.jpg',
	'https://pkmncards.com/wp-content/uploads/sandslash-sandstorm-ss-21.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-sandstorm-ss-22.jpg',
	'https://pkmncards.com/wp-content/uploads/steelix-sandstorm-ss-23.jpg',
	'https://pkmncards.com/wp-content/uploads/umbreon-sandstorm-ss-24.jpg',
	'https://pkmncards.com/wp-content/uploads/vaporeon-sandstorm-ss-25.jpg',
	'https://pkmncards.com/wp-content/uploads/wobbuffet-sandstorm-ss-26.jpg',
	'https://pkmncards.com/wp-content/uploads/multi-energy-sandstorm-ss-93.jpg'],
	
	//energies at index 3
	[],
	
	//reverses at index 4
	['https://pkmncards.com/wp-content/uploads/aron-sandstorm-ss-56.jpg',
	'https://pkmncards.com/wp-content/uploads/cacnea-sandstorm-ss-57.jpg',
	'https://pkmncards.com/wp-content/uploads/cacnea-sandstorm-ss-58.jpg',
	'https://pkmncards.com/wp-content/uploads/cyndaquil-sandstorm-ss-59.jpg',
	'https://pkmncards.com/wp-content/uploads/dunsparce-sandstorm-ss-60.jpg',
	'https://pkmncards.com/wp-content/uploads/duskull-sandstorm-ss-61.jpg',
	'https://pkmncards.com/wp-content/uploads/duskull-sandstorm-ss-62.jpg',
	'https://pkmncards.com/wp-content/uploads/eevee-sandstorm-ss-63.jpg',
	'https://pkmncards.com/wp-content/uploads/ekans-sandstorm-ss-64.jpg',
	'https://pkmncards.com/wp-content/uploads/growlithe-sandstorm-ss-65.jpg',
	'https://pkmncards.com/wp-content/uploads/lotad-sandstorm-ss-66.jpg',
	'https://pkmncards.com/wp-content/uploads/lotad-sandstorm-ss-67.jpg',
	'https://pkmncards.com/wp-content/uploads/marill-sandstorm-ss-68.jpg',
	'https://pkmncards.com/wp-content/uploads/natu-sandstorm-ss-69.jpg',
	'https://pkmncards.com/wp-content/uploads/omanyte-sandstorm-ss-70.jpg',
	'https://pkmncards.com/wp-content/uploads/onix-sandstorm-ss-71.jpg',
	'https://pkmncards.com/wp-content/uploads/pikachu-sandstorm-ss-72.jpg',
	'https://pkmncards.com/wp-content/uploads/psyduck-sandstorm-ss-73.jpg',
	'https://pkmncards.com/wp-content/uploads/ralts-sandstorm-ss-74.jpg',
	'https://pkmncards.com/wp-content/uploads/sandshrew-sandstorm-ss-75.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-sandstorm-ss-76.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-sandstorm-ss-77.jpg',
	'https://pkmncards.com/wp-content/uploads/shroomish-sandstorm-ss-78.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-sandstorm-ss-79.jpg',
	'https://pkmncards.com/wp-content/uploads/slakoth-sandstorm-ss-80.jpg',
	'https://pkmncards.com/wp-content/uploads/spearow-sandstorm-ss-81.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-sandstorm-ss-82.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-sandstorm-ss-83.jpg',
	'https://pkmncards.com/wp-content/uploads/wingull-sandstorm-ss-84.jpg',
	'https://pkmncards.com/wp-content/uploads/zigzagoon-sandstorm-ss-85.jpg',
	'https://pkmncards.com/wp-content/uploads/claw-fossil-sandstorm-ss-90.jpg',
	'https://pkmncards.com/wp-content/uploads/mysterious-fossil-sandstorm-ss-91.jpg',
	'https://pkmncards.com/wp-content/uploads/root-fossil-sandstorm-ss-92.jpg',
	'https://pkmncards.com/wp-content/uploads/anorith-sandstorm-ss-27.jpg',
	'https://pkmncards.com/wp-content/uploads/anorith-sandstorm-ss-28.jpg',
	'https://pkmncards.com/wp-content/uploads/arbok-sandstorm-ss-29.jpg',
	'https://pkmncards.com/wp-content/uploads/azumarill-sandstorm-ss-30.jpg',
	'https://pkmncards.com/wp-content/uploads/azurill-sandstorm-ss-31.jpg',
	'https://pkmncards.com/wp-content/uploads/baltoy-sandstorm-ss-32.jpg',
	'https://pkmncards.com/wp-content/uploads/breloom-sandstorm-ss-33.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-sandstorm-ss-34.jpg',
	'https://pkmncards.com/wp-content/uploads/electabuzz-sandstorm-ss-35.jpg',
	'https://pkmncards.com/wp-content/uploads/elekid-sandstorm-ss-36.jpg',
	'https://pkmncards.com/wp-content/uploads/fearow-sandstorm-ss-37.jpg',
	'https://pkmncards.com/wp-content/uploads/illumise-sandstorm-ss-38.jpg',
	'https://pkmncards.com/wp-content/uploads/kabuto-sandstorm-ss-39.jpg',
	'https://pkmncards.com/wp-content/uploads/kirlia-sandstorm-ss-40.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-sandstorm-ss-41.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-sandstorm-ss-42.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-sandstorm-ss-43.jpg',
	'https://pkmncards.com/wp-content/uploads/linoone-sandstorm-ss-44.jpg',
	'https://pkmncards.com/wp-content/uploads/lombre-sandstorm-ss-45.jpg',
	'https://pkmncards.com/wp-content/uploads/lombre-sandstorm-ss-46.jpg',
	'https://pkmncards.com/wp-content/uploads/murkrow-sandstorm-ss-47.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-sandstorm-ss-48.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-sandstorm-ss-49.jpg',
	'https://pkmncards.com/wp-content/uploads/pelipper-sandstorm-ss-50.jpg',
	'https://pkmncards.com/wp-content/uploads/quilava-sandstorm-ss-51.jpg',
	'https://pkmncards.com/wp-content/uploads/vigoroth-sandstorm-ss-52.jpg',
	'https://pkmncards.com/wp-content/uploads/volbeat-sandstorm-ss-53.jpg',
	'https://pkmncards.com/wp-content/uploads/wynaut-sandstorm-ss-54.jpg',
	'https://pkmncards.com/wp-content/uploads/xatu-sandstorm-ss-55.jpg',
	'https://pkmncards.com/wp-content/uploads/double-full-heal-sandstorm-ss-86.jpg',
	'https://pkmncards.com/wp-content/uploads/lanettes-net-search-sandstorm-ss-87.jpg',
	'https://pkmncards.com/wp-content/uploads/rare-candy-sandstorm-ss-88.jpg',
	'https://pkmncards.com/wp-content/uploads/wallys-training-sandstorm-ss-89.jpg',
	'https://pkmncards.com/wp-content/uploads/arcanine-sandstorm-ss-15.jpg',
	'https://pkmncards.com/wp-content/uploads/espeon-sandstorm-ss-16.jpg',
	'https://pkmncards.com/wp-content/uploads/golduck-sandstorm-ss-17.jpg',
	'https://pkmncards.com/wp-content/uploads/kecleon-sandstorm-ss-18.jpg',
	'https://pkmncards.com/wp-content/uploads/omastar-sandstorm-ss-19.jpg',
	'https://pkmncards.com/wp-content/uploads/pichu-sandstorm-ss-20.jpg',
	'https://pkmncards.com/wp-content/uploads/sandslash-sandstorm-ss-21.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-sandstorm-ss-22.jpg',
	'https://pkmncards.com/wp-content/uploads/steelix-sandstorm-ss-23.jpg',
	'https://pkmncards.com/wp-content/uploads/umbreon-sandstorm-ss-24.jpg',
	'https://pkmncards.com/wp-content/uploads/vaporeon-sandstorm-ss-25.jpg',
	'https://pkmncards.com/wp-content/uploads/wobbuffet-sandstorm-ss-26.jpg',
	'https://pkmncards.com/wp-content/uploads/multi-energy-sandstorm-ss-93.jpg',
	'https://pkmncards.com/wp-content/uploads/armaldo-sandstorm-ss-1.jpg',
	'https://pkmncards.com/wp-content/uploads/cacturne-sandstorm-ss-2.jpg',
	'https://pkmncards.com/wp-content/uploads/cradily-sandstorm-ss-3.jpg',
	'https://pkmncards.com/wp-content/uploads/dusclops-sandstorm-ss-4.jpg',
	'https://pkmncards.com/wp-content/uploads/flareon-sandstorm-ss-5.jpg',
	'https://pkmncards.com/wp-content/uploads/jolteon-sandstorm-ss-6.jpg',
	'https://pkmncards.com/wp-content/uploads/ludicolo-sandstorm-ss-7.jpg',
	'https://pkmncards.com/wp-content/uploads/lunatone-sandstorm-ss-8.jpg',
	'https://pkmncards.com/wp-content/uploads/mawile-sandstorm-ss-9.jpg',
	'https://pkmncards.com/wp-content/uploads/sableye-sandstorm-ss-10.jpg',
	'https://pkmncards.com/wp-content/uploads/seviper-sandstorm-ss-11.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-sandstorm-ss-12.jpg',
	'https://pkmncards.com/wp-content/uploads/solrock-sandstorm-ss-13.jpg',
	'https://pkmncards.com/wp-content/uploads/zangoose-sandstorm-ss-14.jpg'],
	
	//holos at index 5
	['https://pkmncards.com/wp-content/uploads/armaldo-sandstorm-ss-1.jpg',
	'https://pkmncards.com/wp-content/uploads/cacturne-sandstorm-ss-2.jpg',
	'https://pkmncards.com/wp-content/uploads/cradily-sandstorm-ss-3.jpg',
	'https://pkmncards.com/wp-content/uploads/dusclops-sandstorm-ss-4.jpg',
	'https://pkmncards.com/wp-content/uploads/flareon-sandstorm-ss-5.jpg',
	'https://pkmncards.com/wp-content/uploads/jolteon-sandstorm-ss-6.jpg',
	'https://pkmncards.com/wp-content/uploads/ludicolo-sandstorm-ss-7.jpg',
	'https://pkmncards.com/wp-content/uploads/lunatone-sandstorm-ss-8.jpg',
	'https://pkmncards.com/wp-content/uploads/mawile-sandstorm-ss-9.jpg',
	'https://pkmncards.com/wp-content/uploads/sableye-sandstorm-ss-10.jpg',
	'https://pkmncards.com/wp-content/uploads/seviper-sandstorm-ss-11.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-sandstorm-ss-12.jpg',
	'https://pkmncards.com/wp-content/uploads/solrock-sandstorm-ss-13.jpg',
	'https://pkmncards.com/wp-content/uploads/zangoose-sandstorm-ss-14.jpg'],

	//exs at index 6
	['https://pkmncards.com/wp-content/uploads/aerodactyl-ex-sandstorm-ss-94.jpg',
	'https://pkmncards.com/wp-content/uploads/aggron-ex-sandstorm-ss-95.jpg',
	'https://pkmncards.com/wp-content/uploads/gardevoir-ex-sandstorm-ss-96.jpg',
	'https://pkmncards.com/wp-content/uploads/kabutops-ex-sandstorm-ss-97.jpg',
	'https://pkmncards.com/wp-content/uploads/raichu-ex-sandstorm-ss-98.jpg',
	'https://pkmncards.com/wp-content/uploads/typhlosion-ex-sandstorm-ss-99.jpg',
	'https://pkmncards.com/wp-content/uploads/wailord-ex-sandstorm-ss-100.jpg']
];

const exDragon = [
		
	//commons at index 0
	['https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-49.jpg',
	'https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-50.jpg',
	'https://pkmncards.com/wp-content/uploads/barboach-dragon-dr-51.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-52.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-53.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-54.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-dragon-dr-55.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-dragon-dr-56.jpg',
	'https://pkmncards.com/wp-content/uploads/grimer-dragon-dr-57.jpg',
	'https://pkmncards.com/wp-content/uploads/horsea-dragon-dr-58.jpg',
	'https://pkmncards.com/wp-content/uploads/houndour-dragon-dr-59.jpg',
	'https://pkmncards.com/wp-content/uploads/magikarp-dragon-dr-60.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-61.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-62.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-63.jpg',
	'https://pkmncards.com/wp-content/uploads/mareep-dragon-dr-64.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-dragon-dr-65.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-66.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-67.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-68.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-dragon-dr-69.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-dragon-dr-70.jpg',
	'https://pkmncards.com/wp-content/uploads/pineco-dragon-dr-71.jpg',
	'https://pkmncards.com/wp-content/uploads/slugma-dragon-dr-72.jpg',
	'https://pkmncards.com/wp-content/uploads/spoink-dragon-dr-73.jpg',
	'https://pkmncards.com/wp-content/uploads/spoink-dragon-dr-74.jpg',
	'https://pkmncards.com/wp-content/uploads/swablu-dragon-dr-75.jpg',
	'https://pkmncards.com/wp-content/uploads/taillow-dragon-dr-76.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-dragon-dr-77.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-dragon-dr-78.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-dragon-dr-79.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-dragon-dr-80.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-dragon-dr-81.jpg'],
	
	//uncommons at index 1
	['https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-23.jpg',
	'https://pkmncards.com/wp-content/uploads/camerupt-dragon-dr-24.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-dragon-dr-25.jpg',
	'https://pkmncards.com/wp-content/uploads/dratini-dragon-dr-26.jpg',
	'https://pkmncards.com/wp-content/uploads/flaaffy-dragon-dr-27.jpg',
	'https://pkmncards.com/wp-content/uploads/forretress-dragon-dr-28.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-dragon-dr-29.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-dragon-dr-30.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-dragon-dr-31.jpg',
	'https://pkmncards.com/wp-content/uploads/gyarados-dragon-dr-32.jpg',
	'https://pkmncards.com/wp-content/uploads/horsea-dragon-dr-33.jpg',
	'https://pkmncards.com/wp-content/uploads/houndoom-dragon-dr-34.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-dragon-dr-35.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-dragon-dr-36.jpg',
	'https://pkmncards.com/wp-content/uploads/meditite-dragon-dr-37.jpg',
	'https://pkmncards.com/wp-content/uploads/ninjask-dragon-dr-38.jpg',
	'https://pkmncards.com/wp-content/uploads/seadra-dragon-dr-39.jpg',
	'https://pkmncards.com/wp-content/uploads/seadra-dragon-dr-40.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-41.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-42.jpg',
	'https://pkmncards.com/wp-content/uploads/shuppet-dragon-dr-43.jpg',
	'https://pkmncards.com/wp-content/uploads/snorunt-dragon-dr-44.jpg',
	'https://pkmncards.com/wp-content/uploads/swellow-dragon-dr-45.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-46.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-47.jpg',
	'https://pkmncards.com/wp-content/uploads/whiscash-dragon-dr-48.jpg',
	'https://pkmncards.com/wp-content/uploads/balloon-berry-dragon-dr-82.jpg',
	'https://pkmncards.com/wp-content/uploads/buffer-piece-dragon-dr-83.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-recycle-system-dragon-dr-84.jpg',
	'https://pkmncards.com/wp-content/uploads/high-pressure-system-dragon-dr-85.jpg',
	'https://pkmncards.com/wp-content/uploads/low-pressure-system-dragon-dr-86.jpg',
	'https://pkmncards.com/wp-content/uploads/mr.-brineys-compassion-dragon-dr-87.jpg',
	'https://pkmncards.com/wp-content/uploads/tv-reporter-dragon-dr-88.jpg'],
	
	//rares at index 2
	['https://pkmncards.com/wp-content/uploads/crawdaunt-dragon-dr-13.jpg',
	'https://pkmncards.com/wp-content/uploads/dragonair-dragon-dr-14.jpg',
	'https://pkmncards.com/wp-content/uploads/flygon-dragon-dr-15.jpg',
	'https://pkmncards.com/wp-content/uploads/girafarig-dragon-dr-16.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-dragon-dr-17.jpg',
	'https://pkmncards.com/wp-content/uploads/ninjask-dragon-dr-18.jpg',
	'https://pkmncards.com/wp-content/uploads/salamence-dragon-dr-19.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-20.jpg',
	'https://pkmncards.com/wp-content/uploads/skarmory-dragon-dr-21.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-22.jpg'],

	//energies at index 3
	[],
	
	//reverses at index 4
	['https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-49.jpg',
	'https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-50.jpg',
	'https://pkmncards.com/wp-content/uploads/barboach-dragon-dr-51.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-52.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-53.jpg',
	'https://pkmncards.com/wp-content/uploads/corphish-dragon-dr-54.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-dragon-dr-55.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-dragon-dr-56.jpg',
	'https://pkmncards.com/wp-content/uploads/grimer-dragon-dr-57.jpg',
	'https://pkmncards.com/wp-content/uploads/horsea-dragon-dr-58.jpg',
	'https://pkmncards.com/wp-content/uploads/houndour-dragon-dr-59.jpg',
	'https://pkmncards.com/wp-content/uploads/magikarp-dragon-dr-60.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-61.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-62.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-dragon-dr-63.jpg',
	'https://pkmncards.com/wp-content/uploads/mareep-dragon-dr-64.jpg',
	'https://pkmncards.com/wp-content/uploads/mudkip-dragon-dr-65.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-66.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-67.jpg',
	'https://pkmncards.com/wp-content/uploads/nincada-dragon-dr-68.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-dragon-dr-69.jpg',
	'https://pkmncards.com/wp-content/uploads/numel-dragon-dr-70.jpg',
	'https://pkmncards.com/wp-content/uploads/pineco-dragon-dr-71.jpg',
	'https://pkmncards.com/wp-content/uploads/slugma-dragon-dr-72.jpg',
	'https://pkmncards.com/wp-content/uploads/spoink-dragon-dr-73.jpg',
	'https://pkmncards.com/wp-content/uploads/spoink-dragon-dr-74.jpg',
	'https://pkmncards.com/wp-content/uploads/swablu-dragon-dr-75.jpg',
	'https://pkmncards.com/wp-content/uploads/taillow-dragon-dr-76.jpg',
	'https://pkmncards.com/wp-content/uploads/torchic-dragon-dr-77.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-dragon-dr-78.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-dragon-dr-79.jpg',
	'https://pkmncards.com/wp-content/uploads/treecko-dragon-dr-80.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-dragon-dr-81.jpg',
	'https://pkmncards.com/wp-content/uploads/bagon-dragon-dr-23.jpg',
	'https://pkmncards.com/wp-content/uploads/camerupt-dragon-dr-24.jpg',
	'https://pkmncards.com/wp-content/uploads/combusken-dragon-dr-25.jpg',
	'https://pkmncards.com/wp-content/uploads/dratini-dragon-dr-26.jpg',
	'https://pkmncards.com/wp-content/uploads/flaaffy-dragon-dr-27.jpg',
	'https://pkmncards.com/wp-content/uploads/forretress-dragon-dr-28.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-dragon-dr-29.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-dragon-dr-30.jpg',
	'https://pkmncards.com/wp-content/uploads/grovyle-dragon-dr-31.jpg',
	'https://pkmncards.com/wp-content/uploads/gyarados-dragon-dr-32.jpg',
	'https://pkmncards.com/wp-content/uploads/horsea-dragon-dr-33.jpg',
	'https://pkmncards.com/wp-content/uploads/houndoom-dragon-dr-34.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-dragon-dr-35.jpg',
	'https://pkmncards.com/wp-content/uploads/marshtomp-dragon-dr-36.jpg',
	'https://pkmncards.com/wp-content/uploads/meditite-dragon-dr-37.jpg',
	'https://pkmncards.com/wp-content/uploads/ninjask-dragon-dr-38.jpg',
	'https://pkmncards.com/wp-content/uploads/seadra-dragon-dr-39.jpg',
	'https://pkmncards.com/wp-content/uploads/seadra-dragon-dr-40.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-41.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-42.jpg',
	'https://pkmncards.com/wp-content/uploads/shuppet-dragon-dr-43.jpg',
	'https://pkmncards.com/wp-content/uploads/snorunt-dragon-dr-44.jpg',
	'https://pkmncards.com/wp-content/uploads/swellow-dragon-dr-45.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-46.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-47.jpg',
	'https://pkmncards.com/wp-content/uploads/whiscash-dragon-dr-48.jpg',
	'https://pkmncards.com/wp-content/uploads/balloon-berry-dragon-dr-82.jpg',
	'https://pkmncards.com/wp-content/uploads/buffer-piece-dragon-dr-83.jpg',
	'https://pkmncards.com/wp-content/uploads/energy-recycle-system-dragon-dr-84.jpg',
	'https://pkmncards.com/wp-content/uploads/high-pressure-system-dragon-dr-85.jpg',
	'https://pkmncards.com/wp-content/uploads/low-pressure-system-dragon-dr-86.jpg',
	'https://pkmncards.com/wp-content/uploads/mr.-brineys-compassion-dragon-dr-87.jpg',
	'https://pkmncards.com/wp-content/uploads/tv-reporter-dragon-dr-88.jpg',
	'https://pkmncards.com/wp-content/uploads/crawdaunt-dragon-dr-13.jpg',
	'https://pkmncards.com/wp-content/uploads/dragonair-dragon-dr-14.jpg',
	'https://pkmncards.com/wp-content/uploads/flygon-dragon-dr-15.jpg',
	'https://pkmncards.com/wp-content/uploads/girafarig-dragon-dr-16.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-dragon-dr-17.jpg',
	'https://pkmncards.com/wp-content/uploads/ninjask-dragon-dr-18.jpg',
	'https://pkmncards.com/wp-content/uploads/salamence-dragon-dr-19.jpg',
	'https://pkmncards.com/wp-content/uploads/shelgon-dragon-dr-20.jpg',
	'https://pkmncards.com/wp-content/uploads/skarmory-dragon-dr-21.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-dragon-dr-22.jpg',
	'https://pkmncards.com/wp-content/uploads/absol-dragon-dr-1.jpg',
	'https://pkmncards.com/wp-content/uploads/altaria-dragon-dr-2.jpg',
	'https://pkmncards.com/wp-content/uploads/crawdaunt-dragon-dr-3.jpg',
	'https://pkmncards.com/wp-content/uploads/flygon-dragon-dr-4.jpg',
	'https://pkmncards.com/wp-content/uploads/golem-dragon-dr-5.jpg',
	'https://pkmncards.com/wp-content/uploads/grumpig-dragon-dr-6.jpg',
	'https://pkmncards.com/wp-content/uploads/minun-dragon-dr-7.jpg',
	'https://pkmncards.com/wp-content/uploads/plusle-dragon-dr-8.jpg',
	'https://pkmncards.com/wp-content/uploads/roselia-dragon-dr-9.jpg',
	'https://pkmncards.com/wp-content/uploads/salamence-dragon-dr-10.jpg',
	'https://pkmncards.com/wp-content/uploads/shedinja-dragon-dr-11.jpg',
	'https://pkmncards.com/wp-content/uploads/torkoal-dragon-dr-12.jpg'],

	//holos at index 5
	['https://pkmncards.com/wp-content/uploads/absol-dragon-dr-1.jpg',
	'https://pkmncards.com/wp-content/uploads/altaria-dragon-dr-2.jpg',
	'https://pkmncards.com/wp-content/uploads/crawdaunt-dragon-dr-3.jpg',
	'https://pkmncards.com/wp-content/uploads/flygon-dragon-dr-4.jpg',
	'https://pkmncards.com/wp-content/uploads/golem-dragon-dr-5.jpg',
	'https://pkmncards.com/wp-content/uploads/grumpig-dragon-dr-6.jpg',
	'https://pkmncards.com/wp-content/uploads/minun-dragon-dr-7.jpg',
	'https://pkmncards.com/wp-content/uploads/plusle-dragon-dr-8.jpg',
	'https://pkmncards.com/wp-content/uploads/roselia-dragon-dr-9.jpg',
	'https://pkmncards.com/wp-content/uploads/salamence-dragon-dr-10.jpg',
	'https://pkmncards.com/wp-content/uploads/shedinja-dragon-dr-11.jpg',
	'https://pkmncards.com/wp-content/uploads/torkoal-dragon-dr-12.jpg'],

	//exs at index 6
	['https://pkmncards.com/wp-content/uploads/ampharos-ex-dragon-dr-89.jpg',
	'https://pkmncards.com/wp-content/uploads/dragonite-ex-dragon-dr-90.jpg',
	'https://pkmncards.com/wp-content/uploads/golem-ex-dragon-dr-91.jpg',
	'https://pkmncards.com/wp-content/uploads/kingdra-ex-dragon-dr-92.jpg',
	'https://pkmncards.com/wp-content/uploads/latias-ex-dragon-dr-93.jpg',
	'https://pkmncards.com/wp-content/uploads/latios-ex-dragon-dr-94.jpg',
	'https://pkmncards.com/wp-content/uploads/magcargo-ex-dragon-dr-95.jpg',
	'https://pkmncards.com/wp-content/uploads/muk-ex-dragon-dr-96.jpg',
	'https://pkmncards.com/wp-content/uploads/rayquaza-ex-dragon-dr-97.jpg'],

	//secret rares at index 7
	['https://pkmncards.com/wp-content/uploads/charmander-dragon-dr-98.jpg',
	'https://pkmncards.com/wp-content/uploads/charmeleon-dragon-dr-99.jpg',
	'https://pkmncards.com/wp-content/uploads/charizard-dragon-dr-100.jpg']
];

const teamMagmaVsTeamAqua = [
	
	//commons at index 0
	['https://pkmncards.com/wp-content/uploads/bulbasaur-team-magma-vs-team-aqua-ma-39.jpg',
	'https://pkmncards.com/wp-content/uploads/cubone-team-magma-vs-team-aqua-ma-40.jpg',
	'https://pkmncards.com/wp-content/uploads/jigglypuff-team-magma-vs-team-aqua-ma-41.jpg',
	'https://pkmncards.com/wp-content/uploads/meowth-team-magma-vs-team-aqua-ma-42.jpg',
	'https://pkmncards.com/wp-content/uploads/pikachu-team-magma-vs-team-aqua-ma-43.jpg',
	'https://pkmncards.com/wp-content/uploads/psyduck-team-magma-vs-team-aqua-ma-44.jpg',
	'https://pkmncards.com/wp-content/uploads/slowpoke-team-magma-vs-team-aqua-ma-45.jpg',
	'https://pkmncards.com/wp-content/uploads/squirtle-team-magma-vs-team-aqua-ma-46.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-47.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-48.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-chinchou-team-magma-vs-team-aqua-ma-49.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-50.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-51.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-52.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-53.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-poochyena-team-magma-vs-team-aqua-ma-54.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-poochyena-team-magma-vs-team-aqua-ma-55.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-spheal-team-magma-vs-team-aqua-ma-56.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-spheal-team-magma-vs-team-aqua-ma-57.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aron-team-magma-vs-team-aqua-ma-58.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aron-team-magma-vs-team-aqua-ma-59.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-60.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-61.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-62.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-63.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-numel-team-magma-vs-team-aqua-ma-64.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-poochyena-team-magma-vs-team-aqua-ma-65.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-poochyena-team-magma-vs-team-aqua-ma-66.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-67.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-68.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-schemer-team-magma-vs-team-aqua-ma-69.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-schemer-team-magma-vs-team-aqua-ma-70.jpg'],
	
	//uncommons at index 1
	['https://pkmncards.com/wp-content/uploads/team-aquas-cacnea-team-magma-vs-team-aqua-ma-24.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-25.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-26.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-27.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-lanturn-team-magma-vs-team-aqua-ma-28.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-manectric-team-magma-vs-team-aqua-ma-29.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-mightyena-team-magma-vs-team-aqua-ma-30.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sealeo-team-magma-vs-team-aqua-ma-31.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-32.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-claydol-team-magma-vs-team-aqua-ma-33.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndoom-team-magma-vs-team-aqua-ma-34.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-35.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-lairon-team-magma-vs-team-aqua-ma-36.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-mightyena-team-magma-vs-team-aqua-ma-37.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-38.jpg',
	'https://pkmncards.com/wp-content/uploads/archie-team-magma-vs-team-aqua-ma-71.jpg',
	'https://pkmncards.com/wp-content/uploads/dual-ball-team-magma-vs-team-aqua-ma-72.jpg',
	'https://pkmncards.com/wp-content/uploads/maxie-team-magma-vs-team-aqua-ma-73.jpg',
	'https://pkmncards.com/wp-content/uploads/strength-charm-team-magma-vs-team-aqua-ma-74.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-ball-team-magma-vs-team-aqua-ma-75.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-belt-team-magma-vs-team-aqua-ma-76.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-conspirator-team-magma-vs-team-aqua-ma-77.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-hideout-team-magma-vs-team-aqua-ma-78.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-technical-machine-01-team-magma-vs-team-aqua-ma-79.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-ball-team-magma-vs-team-aqua-ma-80.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-belt-team-magma-vs-team-aqua-ma-81.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-conspirator-team-magma-vs-team-aqua-ma-82.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-hideout-team-magma-vs-team-aqua-ma-83.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-technical-machine-01-team-magma-vs-team-aqua-ma-84.jpg',
	'https://pkmncards.com/wp-content/uploads/warp-point-team-magma-vs-team-aqua-ma-85.jpg',
	'https://pkmncards.com/wp-content/uploads/aqua-energy-team-magma-vs-team-aqua-ma-86.jpg',
	'https://pkmncards.com/wp-content/uploads/magma-energy-team-magma-vs-team-aqua-ma-87.jpg'],
	
	//rares at index 2
	['https://pkmncards.com/wp-content/uploads/raichu-team-magma-vs-team-aqua-ma-13.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-crawdaunt-team-magma-vs-team-aqua-ma-14.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-mightyena-team-magma-vs-team-aqua-ma-15.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sealeo-team-magma-vs-team-aqua-ma-16.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-seviper-team-magma-vs-team-aqua-ma-17.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sharpedo-team-magma-vs-team-aqua-ma-18.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-camerupt-team-magma-vs-team-aqua-ma-19.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-lairon-team-magma-vs-team-aqua-ma-20.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-mightyena-team-magma-vs-team-aqua-ma-21.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhydon-team-magma-vs-team-aqua-ma-22.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-zangoose-team-magma-vs-team-aqua-ma-23.jpg',
	'https://pkmncards.com/wp-content/uploads/double-rainbow-energy-team-magma-vs-team-aqua-ma-88.jpg'],
	
	//energies at index 3
	[],
	
	//reverses at index 4
	['https://pkmncards.com/wp-content/uploads/bulbasaur-team-magma-vs-team-aqua-ma-39.jpg',
	'https://pkmncards.com/wp-content/uploads/cubone-team-magma-vs-team-aqua-ma-40.jpg',
	'https://pkmncards.com/wp-content/uploads/jigglypuff-team-magma-vs-team-aqua-ma-41.jpg',
	'https://pkmncards.com/wp-content/uploads/meowth-team-magma-vs-team-aqua-ma-42.jpg',
	'https://pkmncards.com/wp-content/uploads/pikachu-team-magma-vs-team-aqua-ma-43.jpg',
	'https://pkmncards.com/wp-content/uploads/psyduck-team-magma-vs-team-aqua-ma-44.jpg',
	'https://pkmncards.com/wp-content/uploads/slowpoke-team-magma-vs-team-aqua-ma-45.jpg',
	'https://pkmncards.com/wp-content/uploads/squirtle-team-magma-vs-team-aqua-ma-46.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-47.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-48.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-chinchou-team-magma-vs-team-aqua-ma-49.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-50.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-51.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-52.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-53.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-poochyena-team-magma-vs-team-aqua-ma-54.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-poochyena-team-magma-vs-team-aqua-ma-55.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-spheal-team-magma-vs-team-aqua-ma-56.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-spheal-team-magma-vs-team-aqua-ma-57.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aron-team-magma-vs-team-aqua-ma-58.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aron-team-magma-vs-team-aqua-ma-59.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-60.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-61.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-62.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-63.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-numel-team-magma-vs-team-aqua-ma-64.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-poochyena-team-magma-vs-team-aqua-ma-65.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-poochyena-team-magma-vs-team-aqua-ma-66.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-67.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-68.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-schemer-team-magma-vs-team-aqua-ma-69.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-schemer-team-magma-vs-team-aqua-ma-70.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-cacnea-team-magma-vs-team-aqua-ma-24.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-carvanha-team-magma-vs-team-aqua-ma-25.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-corphish-team-magma-vs-team-aqua-ma-26.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-electrike-team-magma-vs-team-aqua-ma-27.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-lanturn-team-magma-vs-team-aqua-ma-28.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-manectric-team-magma-vs-team-aqua-ma-29.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-mightyena-team-magma-vs-team-aqua-ma-30.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sealeo-team-magma-vs-team-aqua-ma-31.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-baltoy-team-magma-vs-team-aqua-ma-32.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-claydol-team-magma-vs-team-aqua-ma-33.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndoom-team-magma-vs-team-aqua-ma-34.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndour-team-magma-vs-team-aqua-ma-35.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-lairon-team-magma-vs-team-aqua-ma-36.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-mightyena-team-magma-vs-team-aqua-ma-37.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhyhorn-team-magma-vs-team-aqua-ma-38.jpg',
	'https://pkmncards.com/wp-content/uploads/archie-team-magma-vs-team-aqua-ma-71.jpg',
	'https://pkmncards.com/wp-content/uploads/dual-ball-team-magma-vs-team-aqua-ma-72.jpg',
	'https://pkmncards.com/wp-content/uploads/maxie-team-magma-vs-team-aqua-ma-73.jpg',
	'https://pkmncards.com/wp-content/uploads/strength-charm-team-magma-vs-team-aqua-ma-74.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-ball-team-magma-vs-team-aqua-ma-75.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-belt-team-magma-vs-team-aqua-ma-76.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-conspirator-team-magma-vs-team-aqua-ma-77.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-hideout-team-magma-vs-team-aqua-ma-78.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aqua-technical-machine-01-team-magma-vs-team-aqua-ma-79.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-ball-team-magma-vs-team-aqua-ma-80.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-belt-team-magma-vs-team-aqua-ma-81.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-conspirator-team-magma-vs-team-aqua-ma-82.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-hideout-team-magma-vs-team-aqua-ma-83.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magma-technical-machine-01-team-magma-vs-team-aqua-ma-84.jpg',
	'https://pkmncards.com/wp-content/uploads/warp-point-team-magma-vs-team-aqua-ma-85.jpg',
	'https://pkmncards.com/wp-content/uploads/aqua-energy-team-magma-vs-team-aqua-ma-86.jpg',
	'https://pkmncards.com/wp-content/uploads/magma-energy-team-magma-vs-team-aqua-ma-87.jpg',
	'https://pkmncards.com/wp-content/uploads/raichu-team-magma-vs-team-aqua-ma-13.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-crawdaunt-team-magma-vs-team-aqua-ma-14.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-mightyena-team-magma-vs-team-aqua-ma-15.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sealeo-team-magma-vs-team-aqua-ma-16.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-seviper-team-magma-vs-team-aqua-ma-17.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sharpedo-team-magma-vs-team-aqua-ma-18.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-camerupt-team-magma-vs-team-aqua-ma-19.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-lairon-team-magma-vs-team-aqua-ma-20.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-mightyena-team-magma-vs-team-aqua-ma-21.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhydon-team-magma-vs-team-aqua-ma-22.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-zangoose-team-magma-vs-team-aqua-ma-23.jpg',
	'https://pkmncards.com/wp-content/uploads/double-rainbow-energy-team-magma-vs-team-aqua-ma-88.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-cacturne-team-magma-vs-team-aqua-ma-1.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-crawdaunt-team-magma-vs-team-aqua-ma-2.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-kyogre-team-magma-vs-team-aqua-ma-3.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-manectric-team-magma-vs-team-aqua-ma-4.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sharpedo-team-magma-vs-team-aqua-ma-5.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-walrein-team-magma-vs-team-aqua-ma-6.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aggron-team-magma-vs-team-aqua-ma-7.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-claydol-team-magma-vs-team-aqua-ma-8.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-groudon-team-magma-vs-team-aqua-ma-9.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndoom-team-magma-vs-team-aqua-ma-10.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhydon-team-magma-vs-team-aqua-ma-11.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-torkoal-team-magma-vs-team-aqua-ma-12.jpg'],

	//holos at index 5
	['https://pkmncards.com/wp-content/uploads/team-aquas-cacturne-team-magma-vs-team-aqua-ma-1.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-crawdaunt-team-magma-vs-team-aqua-ma-2.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-kyogre-team-magma-vs-team-aqua-ma-3.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-manectric-team-magma-vs-team-aqua-ma-4.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-sharpedo-team-magma-vs-team-aqua-ma-5.jpg',
	'https://pkmncards.com/wp-content/uploads/team-aquas-walrein-team-magma-vs-team-aqua-ma-6.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-aggron-team-magma-vs-team-aqua-ma-7.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-claydol-team-magma-vs-team-aqua-ma-8.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-groudon-team-magma-vs-team-aqua-ma-9.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-houndoom-team-magma-vs-team-aqua-ma-10.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-rhydon-team-magma-vs-team-aqua-ma-11.jpg',
	'https://pkmncards.com/wp-content/uploads/team-magmas-torkoal-team-magma-vs-team-aqua-ma-12.jpg'],

	//exs at index 6
	['https://pkmncards.com/wp-content/uploads/blaziken-ex-team-magma-vs-team-aqua-ma-89.jpg',
	'https://pkmncards.com/wp-content/uploads/cradily-ex-team-magma-vs-team-aqua-ma-90.jpg',
	'https://pkmncards.com/wp-content/uploads/entei-ex-team-magma-vs-team-aqua-ma-91.jpg',
	'https://pkmncards.com/wp-content/uploads/raikou-ex-team-magma-vs-team-aqua-ma-92.jpg',
	'https://pkmncards.com/wp-content/uploads/sceptile-ex-team-magma-vs-team-aqua-ma-93.jpg',
	'https://pkmncards.com/wp-content/uploads/suicune-ex-team-magma-vs-team-aqua-ma-94.jpg',
	'https://pkmncards.com/wp-content/uploads/swampert-ex-team-magma-vs-team-aqua-ma-95.jpg'],

	//secret rares at index 7
	['https://pkmncards.com/wp-content/uploads/absol-team-magma-vs-team-aqua-ma-96.jpg',
	'https://pkmncards.com/wp-content/uploads/jirachi-team-magma-vs-team-aqua-ma-97.jpg']
];

const legendMaker = [

    //Commons at index 0
    ['https://pkmncards.com/wp-content/uploads/aron-legend-maker-lm-48.jpg',
	'https://pkmncards.com/wp-content/uploads/bellsprout-legend-maker-lm-49.jpg',
	'https://pkmncards.com/wp-content/uploads/chinchou-legend-maker-lm-50.jpg',
	'https://pkmncards.com/wp-content/uploads/clamperl-legend-maker-lm-51.jpg',
	'https://pkmncards.com/wp-content/uploads/gastly-legend-maker-lm-52.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-legend-maker-lm-53.jpg',
	'https://pkmncards.com/wp-content/uploads/grimer-legend-maker-lm-54.jpg',
	'https://pkmncards.com/wp-content/uploads/growlithe-legend-maker-lm-55.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-legend-maker-lm-56.jpg',
	'https://pkmncards.com/wp-content/uploads/machop-legend-maker-lm-57.jpg',
	'https://pkmncards.com/wp-content/uploads/magby-legend-maker-lm-58.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-legend-maker-lm-59.jpg',
	'https://pkmncards.com/wp-content/uploads/omanyte-legend-maker-lm-60.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-legend-maker-lm-61.jpg',
	'https://pkmncards.com/wp-content/uploads/sentret-legend-maker-lm-62.jpg',
	'https://pkmncards.com/wp-content/uploads/shuppet-legend-maker-lm-63.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-legend-maker-lm-64.jpg',
	'https://pkmncards.com/wp-content/uploads/spheal-legend-maker-lm-65.jpg',
	'https://pkmncards.com/wp-content/uploads/tentacool-legend-maker-lm-66.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-legend-maker-lm-67.jpg',
	'https://pkmncards.com/wp-content/uploads/voltorb-legend-maker-lm-68.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-legend-maker-lm-69.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-legend-maker-lm-70.jpg',
	'https://pkmncards.com/wp-content/uploads/wynaut-legend-maker-lm-71.jpg',
	'https://pkmncards.com/wp-content/uploads/claw-fossil-legend-maker-lm-78.jpg',
	'https://pkmncards.com/wp-content/uploads/mysterious-fossil-legend-maker-lm-79.jpg',
	'https://pkmncards.com/wp-content/uploads/root-fossil-legend-maker-lm-80.jpg'],

    //Uncommons at index 1
    ['https://pkmncards.com/wp-content/uploads/anorith-legend-maker-lm-29.jpg',
	'https://pkmncards.com/wp-content/uploads/cascoon-legend-maker-lm-30.jpg',
	'https://pkmncards.com/wp-content/uploads/dunsparce-legend-maker-lm-31.jpg',
	'https://pkmncards.com/wp-content/uploads/electrode-legend-maker-lm-32.jpg',
	'https://pkmncards.com/wp-content/uploads/furret-legend-maker-lm-33.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-legend-maker-lm-34.jpg',
	'https://pkmncards.com/wp-content/uploads/haunter-legend-maker-lm-35.jpg',
	'https://pkmncards.com/wp-content/uploads/kabuto-legend-maker-lm-36.jpg',
	'https://pkmncards.com/wp-content/uploads/kecleon-legend-maker-lm-37.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-legend-maker-lm-38.jpg',
	'https://pkmncards.com/wp-content/uploads/machoke-legend-maker-lm-39.jpg',
	'https://pkmncards.com/wp-content/uploads/misdreavus-legend-maker-lm-40.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-legend-maker-lm-41.jpg',
	'https://pkmncards.com/wp-content/uploads/roselia-legend-maker-lm-42.jpg',
	'https://pkmncards.com/wp-content/uploads/sealeo-legend-maker-lm-43.jpg',
	'https://pkmncards.com/wp-content/uploads/tangela-legend-maker-lm-44.jpg',
	'https://pkmncards.com/wp-content/uploads/tentacruel-legend-maker-lm-45.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-legend-maker-lm-46.jpg',
	'https://pkmncards.com/wp-content/uploads/weepinbell-legend-maker-lm-47.jpg',
	'https://pkmncards.com/wp-content/uploads/cursed-stone-legend-maker-lm-72.jpg',
	'https://pkmncards.com/wp-content/uploads/fieldworker-legend-maker-lm-73.jpg',
	'https://pkmncards.com/wp-content/uploads/full-flame-legend-maker-lm-74.jpg',
	'https://pkmncards.com/wp-content/uploads/giant-stump-legend-maker-lm-75.jpg',
	'https://pkmncards.com/wp-content/uploads/power-tree-legend-maker-lm-76.jpg',
	'https://pkmncards.com/wp-content/uploads/strange-cave-legend-maker-lm-77.jpg',
	'https://pkmncards.com/wp-content/uploads/react-energy-legend-maker-lm-82.jpg'],

    //Rares at index 2
    ['https://pkmncards.com/wp-content/uploads/absol-legend-maker-lm-15.jpg',
	'https://pkmncards.com/wp-content/uploads/girafarig-legend-maker-lm-16.jpg',
	'https://pkmncards.com/wp-content/uploads/gorebyss-legend-maker-lm-17.jpg',
	'https://pkmncards.com/wp-content/uploads/huntail-legend-maker-lm-18.jpg',
	'https://pkmncards.com/wp-content/uploads/lanturn-legend-maker-lm-19.jpg',
	'https://pkmncards.com/wp-content/uploads/lanturn-legend-maker-lm-20.jpg',
	'https://pkmncards.com/wp-content/uploads/magmar-legend-maker-lm-21.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-legend-maker-lm-22.jpg',
	'https://pkmncards.com/wp-content/uploads/omastar-legend-maker-lm-23.jpg',
	'https://pkmncards.com/wp-content/uploads/pinsir-legend-maker-lm-24.jpg',
	'https://pkmncards.com/wp-content/uploads/solrock-legend-maker-lm-25.jpg',
	'https://pkmncards.com/wp-content/uploads/spinda-legend-maker-lm-26.jpg',
	'https://pkmncards.com/wp-content/uploads/torkoal-legend-maker-lm-27.jpg',
	'https://pkmncards.com/wp-content/uploads/wobbuffet-legend-maker-lm-28.jpg',
	'https://pkmncards.com/wp-content/uploads/rainbow-energy-legend-maker-lm-81.jpg'],
	
	//energies at index 3
	[],
	
	//reverses at index 4
	['https://pkmncards.com/wp-content/uploads/aron-legend-maker-lm-48.jpg',
	'https://pkmncards.com/wp-content/uploads/bellsprout-legend-maker-lm-49.jpg',
	'https://pkmncards.com/wp-content/uploads/chinchou-legend-maker-lm-50.jpg',
	'https://pkmncards.com/wp-content/uploads/clamperl-legend-maker-lm-51.jpg',
	'https://pkmncards.com/wp-content/uploads/gastly-legend-maker-lm-52.jpg',
	'https://pkmncards.com/wp-content/uploads/geodude-legend-maker-lm-53.jpg',
	'https://pkmncards.com/wp-content/uploads/grimer-legend-maker-lm-54.jpg',
	'https://pkmncards.com/wp-content/uploads/growlithe-legend-maker-lm-55.jpg',
	'https://pkmncards.com/wp-content/uploads/lileep-legend-maker-lm-56.jpg',
	'https://pkmncards.com/wp-content/uploads/machop-legend-maker-lm-57.jpg',
	'https://pkmncards.com/wp-content/uploads/magby-legend-maker-lm-58.jpg',
	'https://pkmncards.com/wp-content/uploads/magnemite-legend-maker-lm-59.jpg',
	'https://pkmncards.com/wp-content/uploads/omanyte-legend-maker-lm-60.jpg',
	'https://pkmncards.com/wp-content/uploads/seedot-legend-maker-lm-61.jpg',
	'https://pkmncards.com/wp-content/uploads/sentret-legend-maker-lm-62.jpg',
	'https://pkmncards.com/wp-content/uploads/shuppet-legend-maker-lm-63.jpg',
	'https://pkmncards.com/wp-content/uploads/skitty-legend-maker-lm-64.jpg',
	'https://pkmncards.com/wp-content/uploads/spheal-legend-maker-lm-65.jpg',
	'https://pkmncards.com/wp-content/uploads/tentacool-legend-maker-lm-66.jpg',
	'https://pkmncards.com/wp-content/uploads/trapinch-legend-maker-lm-67.jpg',
	'https://pkmncards.com/wp-content/uploads/voltorb-legend-maker-lm-68.jpg',
	'https://pkmncards.com/wp-content/uploads/wailmer-legend-maker-lm-69.jpg',
	'https://pkmncards.com/wp-content/uploads/wurmple-legend-maker-lm-70.jpg',
	'https://pkmncards.com/wp-content/uploads/wynaut-legend-maker-lm-71.jpg',
	'https://pkmncards.com/wp-content/uploads/claw-fossil-legend-maker-lm-78.jpg',
	'https://pkmncards.com/wp-content/uploads/mysterious-fossil-legend-maker-lm-79.jpg',
	'https://pkmncards.com/wp-content/uploads/root-fossil-legend-maker-lm-80.jpg',
	'https://pkmncards.com/wp-content/uploads/anorith-legend-maker-lm-29.jpg',
	'https://pkmncards.com/wp-content/uploads/cascoon-legend-maker-lm-30.jpg',
	'https://pkmncards.com/wp-content/uploads/dunsparce-legend-maker-lm-31.jpg',
	'https://pkmncards.com/wp-content/uploads/electrode-legend-maker-lm-32.jpg',
	'https://pkmncards.com/wp-content/uploads/furret-legend-maker-lm-33.jpg',
	'https://pkmncards.com/wp-content/uploads/graveler-legend-maker-lm-34.jpg',
	'https://pkmncards.com/wp-content/uploads/haunter-legend-maker-lm-35.jpg',
	'https://pkmncards.com/wp-content/uploads/kabuto-legend-maker-lm-36.jpg',
	'https://pkmncards.com/wp-content/uploads/kecleon-legend-maker-lm-37.jpg',
	'https://pkmncards.com/wp-content/uploads/lairon-legend-maker-lm-38.jpg',
	'https://pkmncards.com/wp-content/uploads/machoke-legend-maker-lm-39.jpg',
	'https://pkmncards.com/wp-content/uploads/misdreavus-legend-maker-lm-40.jpg',
	'https://pkmncards.com/wp-content/uploads/nuzleaf-legend-maker-lm-41.jpg',
	'https://pkmncards.com/wp-content/uploads/roselia-legend-maker-lm-42.jpg',
	'https://pkmncards.com/wp-content/uploads/sealeo-legend-maker-lm-43.jpg',
	'https://pkmncards.com/wp-content/uploads/tangela-legend-maker-lm-44.jpg',
	'https://pkmncards.com/wp-content/uploads/tentacruel-legend-maker-lm-45.jpg',
	'https://pkmncards.com/wp-content/uploads/vibrava-legend-maker-lm-46.jpg',
	'https://pkmncards.com/wp-content/uploads/weepinbell-legend-maker-lm-47.jpg',
	'https://pkmncards.com/wp-content/uploads/cursed-stone-legend-maker-lm-72.jpg',
	'https://pkmncards.com/wp-content/uploads/fieldworker-legend-maker-lm-73.jpg',
	'https://pkmncards.com/wp-content/uploads/full-flame-legend-maker-lm-74.jpg',
	'https://pkmncards.com/wp-content/uploads/giant-stump-legend-maker-lm-75.jpg',
	'https://pkmncards.com/wp-content/uploads/power-tree-legend-maker-lm-76.jpg',
	'https://pkmncards.com/wp-content/uploads/strange-cave-legend-maker-lm-77.jpg',
	'https://pkmncards.com/wp-content/uploads/react-energy-legend-maker-lm-82.jpg',
	'https://pkmncards.com/wp-content/uploads/absol-legend-maker-lm-15.jpg',
	'https://pkmncards.com/wp-content/uploads/girafarig-legend-maker-lm-16.jpg',
	'https://pkmncards.com/wp-content/uploads/gorebyss-legend-maker-lm-17.jpg',
	'https://pkmncards.com/wp-content/uploads/huntail-legend-maker-lm-18.jpg',
	'https://pkmncards.com/wp-content/uploads/lanturn-legend-maker-lm-19.jpg',
	'https://pkmncards.com/wp-content/uploads/lanturn-legend-maker-lm-20.jpg',
	'https://pkmncards.com/wp-content/uploads/magmar-legend-maker-lm-21.jpg',
	'https://pkmncards.com/wp-content/uploads/magneton-legend-maker-lm-22.jpg',
	'https://pkmncards.com/wp-content/uploads/omastar-legend-maker-lm-23.jpg',
	'https://pkmncards.com/wp-content/uploads/pinsir-legend-maker-lm-24.jpg',
	'https://pkmncards.com/wp-content/uploads/solrock-legend-maker-lm-25.jpg',
	'https://pkmncards.com/wp-content/uploads/spinda-legend-maker-lm-26.jpg',
	'https://pkmncards.com/wp-content/uploads/torkoal-legend-maker-lm-27.jpg',
	'https://pkmncards.com/wp-content/uploads/wobbuffet-legend-maker-lm-28.jpg',
	'https://pkmncards.com/wp-content/uploads/rainbow-energy-legend-maker-lm-81.jpg',
	'https://pkmncards.com/wp-content/uploads/aerodactyl-legend-maker-lm-1.jpg',
	'https://pkmncards.com/wp-content/uploads/aggron-legend-maker-lm-2.jpg',
	'https://pkmncards.com/wp-content/uploads/cradily-legend-maker-lm-3.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-legend-maker-lm-4.jpg',
	'https://pkmncards.com/wp-content/uploads/gengar-legend-maker-lm-5.jpg',
	'https://pkmncards.com/wp-content/uploads/golem-legend-maker-lm-6.jpg',
	'https://pkmncards.com/wp-content/uploads/kabutops-legend-maker-lm-7.jpg',
	'https://pkmncards.com/wp-content/uploads/lapras-legend-maker-lm-8.jpg',
	'https://pkmncards.com/wp-content/uploads/machamp-legend-maker-lm-9.jpg',
	'https://pkmncards.com/wp-content/uploads/mew-legend-maker-lm-10.jpg',
	'https://pkmncards.com/wp-content/uploads/muk-legend-maker-lm-11.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-legend-maker-lm-12.jpg',
	'https://pkmncards.com/wp-content/uploads/victreebel-legend-maker-lm-13.jpg',
	'https://pkmncards.com/wp-content/uploads/wailord-legend-maker-lm-14.jpg'],

    //Holos at index 5
    ['https://pkmncards.com/wp-content/uploads/aerodactyl-legend-maker-lm-1.jpg',
	'https://pkmncards.com/wp-content/uploads/aggron-legend-maker-lm-2.jpg',
	'https://pkmncards.com/wp-content/uploads/cradily-legend-maker-lm-3.jpg',
	'https://pkmncards.com/wp-content/uploads/delcatty-legend-maker-lm-4.jpg',
	'https://pkmncards.com/wp-content/uploads/gengar-legend-maker-lm-5.jpg',
	'https://pkmncards.com/wp-content/uploads/golem-legend-maker-lm-6.jpg',
	'https://pkmncards.com/wp-content/uploads/kabutops-legend-maker-lm-7.jpg',
	'https://pkmncards.com/wp-content/uploads/lapras-legend-maker-lm-8.jpg',
	'https://pkmncards.com/wp-content/uploads/machamp-legend-maker-lm-9.jpg',
	'https://pkmncards.com/wp-content/uploads/mew-legend-maker-lm-10.jpg',
	'https://pkmncards.com/wp-content/uploads/muk-legend-maker-lm-11.jpg',
	'https://pkmncards.com/wp-content/uploads/shiftry-legend-maker-lm-12.jpg',
	'https://pkmncards.com/wp-content/uploads/victreebel-legend-maker-lm-13.jpg',
	'https://pkmncards.com/wp-content/uploads/wailord-legend-maker-lm-14.jpg'],
	
	//EX's at index 6
	['https://pkmncards.com/wp-content/uploads/arcanine-ex-legend-maker-lm-83.jpg',
	'https://pkmncards.com/wp-content/uploads/armaldo-ex-legend-maker-lm-84.jpg',
	'https://pkmncards.com/wp-content/uploads/banette-ex-legend-maker-lm-85.jpg',
	'https://pkmncards.com/wp-content/uploads/dustox-ex-legend-maker-lm-86.jpg',
	'https://pkmncards.com/wp-content/uploads/flygon-ex-legend-maker-lm-87.jpg',
	'https://pkmncards.com/wp-content/uploads/mew-ex-legend-maker-lm-88.jpg',
	'https://pkmncards.com/wp-content/uploads/walrein-ex-legend-maker-lm-89.jpg'],
	
    //gold stars at index 7
    ['https://pkmncards.com/wp-content/uploads/regice-star-legend-maker-lm-90.jpg',
	'https://pkmncards.com/wp-content/uploads/regirock-star-legend-maker-lm-91.jpg',
	'https://pkmncards.com/wp-content/uploads/registeel-star-legend-maker-lm-92.jpg']
];

const setName = [
	//commons at index 0
	[],

	//uncommons at index 1
	[],

	//rares at index 2
	[],
	
	//energies at index 3
	['https://pkmncards.com/wp-content/uploads/fighting-energy-base-set-bs-97.jpg',
    'https://pkmncards.com/wp-content/uploads/fire-energy-base-set-bs-98.jpg',
    'https://pkmncards.com/wp-content/uploads/grass-energy-base-set-bs-99.jpg',
    'https://pkmncards.com/wp-content/uploads/lightning-energy-base-set-bs-100.jpg',
    'https://pkmncards.com/wp-content/uploads/psychic-energy-base-set-bs-101.jpg',
    'https://pkmncards.com/wp-content/uploads/water-energy-base-set-bs-102.jpg'],
	
	//reverses at index 4
	[],
	
	//higher rarities at index 5+
	[]
];

const cardList = [baseSet, jungle, fossil, base2, teamRocket, gymHeroes, gymChallenge, neoGenesis, neoDiscovery, neoRevelation, neoDestiny, expedition, aquapolis, skyridge, exRS, sandstorm, exDragon, teamMagmaVsTeamAqua, legendMaker];

const setConfig = [
[[5,3,1,2,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[4,1/3],[0],[0],[0]], ["1stcharizard.jpg","1stvenusaur.jpg","1stblastoise.jpg"], ["basesetback1.jpg","basesetback2.jpg","basesetback3.jpg"], "empty.png"],
[[7,3,1,0,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[3,1/3],[0],[0],[0]], ["jungle1.jpg","jungle2.jpg","jungle3.jpg"], ["jungleback.jpg","jungleback.jpg","jungleback.jpg"], "jungle-pokemon-set-symbol.png"],
[[7,3,1,0,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[3,1/3],[0],[0],[0]], ["fossil1.jpg","fossil2.jpg","fossil3.jpg"], ["fossilback.jpg","fossilback.jpg","fossilback.jpg"], "fossil-pokemon-set-symbol.png"],
[[5,3,1,2,0], [1,1,1,0,0,0,0,0,2,3,3], [[0],[0],[0],[0],[0],[0],[0],[0],[4,1/3],[0],[0]], ["baseset2_1.jpg","baseset2_2.jpg","baseset2_3.jpg","baseset2_4.jpg"], ["base2back1.jpg","base2back2.jpg","base2back3.jpg","base2back4.jpg"], "base-set-2-pokemon-set-symbol.png"],
[[7,3,1,0,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[3,1/3,4,1/54],[0],[0],[0]], ["teamrocket1.jpg","teamrocket2.jpg","teamrocket3.jpg","teamrocket4.jpg"], ["teamrocketback.jpg","teamrocketback.jpg","teamrocketback.jpg","teamrocketback.jpg"], "team-rocket-pokemon-set-symbol.png"],
[[6,3,1,1,0], [0,0,0,0,0,0,2,1,1,1,3], [[0],[0],[0],[0],[0],[0],[4,1/3],[0],[0],[0],[0]], ["gymheroes1.jpg","gymheroes2.jpg","gymheroes3.jpg","gymheroes4.jpg"], ["gymheroesback.jpg","gymheroesback.jpg","gymheroesback.jpg","gymheroesback.jpg"], "gym-heroes-pokemon-set-symbol.png"],
[[6,3,1,1,0], [0,0,0,0,0,0,2,1,1,1,3], [[0],[0],[0],[0],[0],[0],[4,1/3],[0],[0],[0],[0]], ["gymchallenge1.jpg","gymchallenge2.jpg","gymchallenge3.jpg","gymchallenge4.jpg"], ["gymchallengeback.jpg","gymchallengeback.jpg","gymchallengeback.jpg","gymchallengeback.jpg"], "gym-challenge-pokemon-set-symbol.png"],
[[6,3,1,1,0], [3,2,1,1,1,0,0,0,0,0,0], [[0],[4,1/3],[0],[0],[0],[0],[0],[0],[0],[0],[0]], ["neogenesis1.jpg","neogenesis2.jpg","neogenesis3.jpg","neogenesis4.jpg"], ["neogenesisback1.jpg","neogenesisback2.jpg","neogenesisback1.jpg","neogenesisback2.jpg"], "neo-genesis-pokemon-set-symbol.png"],
[[7,3,1,0,0], [1,1,1,2,0,0,0,0,0,0,0], [[0],[0],[0],[3,1/3],[0],[0],[0],[0],[0],[0],[0]], ["neodiscovery1.jpg","neodiscovery2.jpg","neodiscovery3.jpg","neodiscovery4.jpg"], ["neodiscoveryback.jpg","neodiscoveryback.jpg","neodiscoveryback.jpg","neodiscoveryback.jpg"], "neo-discovery-pokemon-set-symbol.png"],
[[7,3,1,0,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[3,1/3,4,1/18],[0],[0],[0]], ["neorevelation1.jpg","neorevelation2.jpg","neorevelation3.jpg","neorevelation4.jpg"], ["neorevelationback.jpg","neorevelationback.jpg","neorevelationback.jpg","neorevelationback.jpg"], "neo-revelation-pokemon-set-symbol.png"],
[[7,3,1,0,0], [0,0,0,0,0,0,0,2,1,1,1], [[0],[0],[0],[0],[0],[0],[0],[3,1/3,4,1/12],[0],[0],[0]], ["neodestiny1.jpg","neodestiny2.jpg","neodestiny3.jpg","neodestiny4.jpg"], ["neodestinyback1.jpg","neodestinyback2.jpg","neodestinyback3.jpg","neodestinyback4.jpg"], "neo-destiny-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,4,2,1,1], [[0],[0],[0],[0],[5,1/3],[0],[0],[0],[0]], ["expeditionbase1.jpg","expeditionbase2.jpg","expeditionbase3.jpg","expeditionbase4.jpg"], ["expeditionbaseback.jpg","expeditionbaseback.jpg","expeditionbaseback.jpg","expeditionbaseback.jpg"], "expedition-base-set-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,4,2,1,1], [[0],[0],[0],[0],[5,1/3,6,1/18],[0],[0],[0],[0]], ["aquapolis1.jpg","aquapolis2.jpg","aquapolis3.jpg","aquapolis4.jpg"], ["aquapolisback.jpg","aquapolisback.jpg","aquapolisback.jpg","aquapolisback.jpg"], "aquapolis-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,4,2,1,1], [[0],[0],[0],[0],[5,1/3,6,1/36],[0],[0],[0],[0]], ["skyridge1.jpg","skyridge2.jpg","skyridge3.jpg","skyridge4.jpg"], ["skyridgeback.jpg","skyridgeback.jpg","skyridgeback.jpg","skyridgeback.jpg"], "skyridge-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,1,1,4,2], [[0],[0],[0],[0],[5,1/6,6,1/6,3,1/3],[0],[0],[0],[0]], ["rubyandsapphire1.jpg","rubyandsapphire2.jpg","rubyandsapphire3.jpg","rubyandsapphire4.jpg"], ["rubyandsapphireback.jpg","rubyandsapphireback.jpg","rubyandsapphireback.jpg","rubyandsapphireback.jpg"], "ruby-and-sapphire-pokemon-set-symbol.jpg"],
[[5,2,1,0,1], [0,0,0,0,0,1,1,4,2], [[0],[0],[0],[0],[5,1/6,6,1/6],[0],[0],[0],[0]], ["sandstorm1.jpg","sandstorm2.jpg","sandstorm3.jpg","sandstorm4.jpg"], ["sandstormback.jpg","sandstormback.jpg","sandstormback.jpg","sandstormback.jpg"], "ex-sandstorm-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,1,1,4,2], [[0],[0],[0],[0],[0],[0],[5,5/36,6,1/6,7,1/36],[0],[0]], ["exdragon1.jpg","exdragon2.jpg","exdragon3.jpg","exdragon4.jpg"], ["exdragonback1.jpg","exdragonback1.jpg","exdragonback2.jpg","exdragonback2.jpg"], "ex-dragon-pokemon-set-symbol.png"],
[[5,2,1,0,1], [0,0,0,0,0,4,2,1,1], [[0],[0],[0],[0],[0],[0],[5,1/4,6,1/12,7,1/108],[0],[0]], ["magmaaqua1.jpg","magmaaqua2.jpg","magmaaqua3.jpg","magmaaqua4.jpg"], ["magmaaquaback1.jpg","magmaaquaback2.jpg","magmaaquaback3.jpg","magmaaquaback4.jpg"], "ex-team-magma-vs-team-aqua-set-symbol.jpg"],
[[5,2,1,0,1], [0,0,0,0,0,4,2,1,1], [[0],[0],[0],[0],[0],[0],[5,1/4,6,1/18,7,1/72],[0],[0]], ["legendmaker1.jpg","legendmaker2.jpg","legendmaker3.jpg","legendmaker4.jpg"], ["legendmakerback1.jpg","legendmakerback2.jpg","legendmakerback3.jpg","legendmakerback4.jpg"], "ex-legend-maker-pokemon-set-symbol.png"]
];

//checks or unchecks boxes when button is clicked
function check() {
	var chk = document.getElementById("check" + (currentSet + 1));
	chk.checked = (chk.checked) ? false : true ;
}

function checkChecked() {
	for (i = 0; i < setConfig.length; i++) {
		var chk = document.getElementById("check" + (i + 1));
		if (!chk.checked) {
			return false;
		}
	}
	return true;
}

function checkAll() {
	if(checkChecked()) {
		for (i = 0; i < setConfig.length; i++) {
			var chk = document.getElementById("check" + (i + 1));
			chk.checked = false;
		}
	}
	else {
		for (i = 0; i < setConfig.length; i++) {
			var chk = document.getElementById("check" + (i + 1));
			chk.checked = true;
		}
	}
}

//opens a random pack from selected packs
function randomPack() {
	packs = [];
	
	for(i = 0; i < setConfig.length; i++) {
		var chk = document.getElementById("check" + (i + 1));
		if(chk.checked){
			packs.push(i);
		}
	}
	packChance = Math.floor(Math.random()*packs.length);
	currentSet = packs[packChance];
	newPack();
}


















