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

//form submit handler that does ajax post request
    $('#character-form').on('submit', function (e) {
      console.log ('new character created', $('#character-form').serialize());

      $.ajax({
        method:'POST',
        url: '/api/characters',
        data: $('#character-form').serialize(),
        success: postNewCharacter,
        error: function (err) {
          console.log('Error: ' + err);
        }
      });
    });

    $('#Characters').on('click', '.delete-character', function(e) {
      console.log ('clicked delete button to', '/api/characters' + $('.delete-character').attr('data-id'));

      $.ajax({
        method: 'DELETE',
        url: '/api/characters/' + $('.delete-character').attr('data-id'),
        success: deleteCharacterSuccess,
        error: deleteCharacterError
      });


    });
    

});


function renderCharacter(character){

   var listedCharacter =   ` 
          <div class="row character">

            <div class="col-xs-8 col-xs-offset-1">
              <div class="panel panel-default">
                <div class="panel-body">

                  <div class='row'>
                    <div class="col-xs-3 col-xs-6 thumbnail character-art">
                      <img src="${character.image}" alt="character image">
                    </div>

                    <div class="col-xs-6 col-xs-8 pull-right">
                      <ul class="list-group">
                        <li class="list-group-item">
                          <h4 class='inline-header'>Character Name:</h4>
                          <span class='character-name' required>${character.name}</span>
                        </li>
                        <li class="list-group-item">
                          <h4 class='inline-header'>Abilities:</h4>
                          <span class='Abilities' required>${character.abilities.join(', ')}</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                                    <div class='panel-footer'>
                    <button class='btn btn-primary add-song'>Add Power/Ability</button>
                    <button class='.delete-character btn btn-danger pull-right' data-id=${character._id}>Delete Character</button>
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

function postNewCharacter(newData) {
  console.log(newData);

  renderCharacter(newData);
}

function deleteCharacterSuccess (characters) {
  var character = json;
  var characterId = character._id;

  for (var index = o; index < characters.length; index++) {
    if (characters[index]._id === characterId) {
      characters.splice(index, 1);
      break;
    }
  }
  renderCharacter(characters);
}

function deleteCharacterError() {
  console.log('delete character error');
}




