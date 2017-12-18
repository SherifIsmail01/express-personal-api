var db = require('../models');


function index(req, res) {
	db.Character.find(function(err, allCharacters){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
		res.json(allCharacters);
	});
}


function create(req, res) {

}

// GET /api/characters/:characterId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/characters/:characterId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/character/:characterId
function update(req, res) {
  // find one character by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};



