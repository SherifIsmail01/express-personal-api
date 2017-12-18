console.log("Sanity Check: JS is working!");


$(document).ready(function(){
// your code

    $.ajax({
    	method: 'GET',
    	url: '/api',
    	success: onSuccess,
    	error: function (err) {
    		console.log (err);
    	}
    });


});

console.log (characters);





function renderCharacter(characters){

   var listedCharacters =   `<div class='row'>
                    <div class="col-xs-3 col-xs-6 thumbnail character-art">
                      <img src="${characters.image}" alt="character image">
                    </div>

                    <div class="col-xs-6 col-xs-8">
                      <ul class="list-group">
                        <li class="list-group-item">
                          <h4 class='inline-header'>Character Name:</h4>
                          <span class='character-name'>${characters.name}</span>
                        </li>
                        <li class="list-group-item">
                          <h4 class='inline-header'>Abilities:</h4>
                          <span class='Abilities'>${characters.abilities}</span>
                        </li>
                      </ul>
                    </div>

                  </div>`

          $('#Characters').prepend(listedCharacters);
};

function onSuccess(json) {
  characters.forEach(function(characters){
      renderCharacter(characters);
  })
  
};







