console.log("Sanity Check: JS is working!");


$(document).ready(function(){
// your code

    $.ajax({
    	method: 'GET',
    	url: '/api/characters',
    	success: onSuccess,
    	error: function (err) {
    		console.log (err);
    	}
    });


});

// console.log (characters);





function renderCharacter(character){

   var listedCharacter =   ` 
          <div class="row character" data-character-id="character._id">

            <div class="col-xs-8 col-xs-offset-1">
              <div class="panel panel-default">
                <div class="panel-body">

                  <div class='row'>
                    <div class="col-xs-3 col-xs-6 thumbnail character-art">
                      <img src="${character.image}" alt="character image">
                    </div>

                    <div class="col-xs-6 col-xs-8">
                      <ul class="list-group">
                        <li class="list-group-item">
                          <h4 class='inline-header'>Character Name:</h4>
                          <span class='character-name'>${character.name}</span>
                        </li>
                        <li class="list-group-item">
                          <h4 class='inline-header'>Abilities:</h4>
                          <span class='Abilities'>${character.abilities}</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                                    <div class='panel-footer'>
                    <button class='btn btn-primary add-song'>Add Power/Ability</button>
                  </div>

                </div>

              </div>

            </div>

          </div>`

          $('#Characters').prepend(listedCharacter);
};

function onSuccess(characters) {
  console.log (characters);
  characters.forEach( function(characterObject){

      renderCharacter(characterObject);

  });
};







