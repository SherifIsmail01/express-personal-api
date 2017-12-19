// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var characterList = [
	{
		name: "Spider-Man",
		abilities: ["Web-Slinger", "Swingin'", "Thwip, Thwip, Pow!"], 
		image: "/images/Spider-Man-Free-Download-PNG.png"
	}, {
		name: "Iron-Man",
		abilities: ["Repulsor Ray", "Uni-Beam", "Billion-Dollar Punch"], 
		image: "/images/Iron-Man-PNG-Image.png"
	}, {
		name: "Captain-America",
		abilities: ["Shield Bash", "Shield Toss", "American Justice"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Dead-Pool",
		abilities: ["Spinning Groin Punch", "Spinny Sword Attack", "Hold Up"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Ultron",
		abilities: ["Encephalo-Ray", "Eradication"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Black-Panther",
		abilities: ["Roundhouse Tactical Strikes", "Panther Strike", "For Wakanda!"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Guillotine",
		abilities: ["La Force d'Ancetres", "Coup de Massue", "Coup de Grace"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Storm",
		abilities: ["Lightning Strike", "Gale", "Tempest"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Winter-Soldier",
		abilities: ["Deuces are wild", "Fist of the Red Army"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Groot",
		abilities: ["Grow limbs into Earth", "I am Groot"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "DareDevil",
		abilities: ["Stick Strike", "Flash Kick", "Deliverance"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}
];

db.Character.remove({}, function(err, characters){
	db.Character.create(characterList, function(err, createdCharacters){
	  if (err){
	    console.log("Error:", err);
	    return;
	  }

	  console.log("all characters: ", createdCharacters)
	  process.exit();
	});
});
