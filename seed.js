// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var characters = [
	{
		name: "Spider-Man",
		Abilities: ["Web-Slinger", "Swingin'", "Thwip, Thwip, Pow!"], 
		image: "/images/Spider-Man-Free-Download-PNG.png"
	}, {
		name: "Iron-Man",
		Abilities: ["Repulsor Ray", "Uni-Beam", "Billion-Dollar Punch"], 
		image: "/images/Iron-Man-PNG-Image.png"
	}, {
		name: "Captain-America",
		Abilities: ["Shield Bash", "Shield Toss", "American Justice"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Dead-Pool",
		Abilities: ["Spinning Groin Punch", "Spinny Sword Attack", "Hold Up"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Ultron",
		Abilities: ["Encephalo-Ray", "Eradication"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Black-Panther",
		Abilities: ["Roundhouse Tactical Strikes", "Panther Strike", "For Wakanda!"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Guillotine",
		Abilities: ["La Force d'Ancetres", "Coup de Massue", "Coup de Grace"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Storm",
		Abilities: ["Lightning Strike", "Gale", "Tempest"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Winter-Soldier",
		Abilities: ["Deuces are wild", "Fist of the Red Army"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Groot",
		Abilities: ["Grow limbs into Earth", "I am Groot"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "DareDevil",
		Abilities: ["Stick Strike", "Flash Kick", "Deliverance"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}
];



// db.Character.remove({}, function(err, characters){
  

// 	db.Character.create(characters, function(err, characters){
// 	  if (err){
// 	    return console.log("Error:", err);
// 	  }
// 	  console.log("all characters: ", characters)
// 	  process.exit(); // we're all done! Exit the program.
// 	});
	

// });



