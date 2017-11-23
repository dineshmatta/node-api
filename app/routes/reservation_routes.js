var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/reservation/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('reservations').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/reservation', (req, res) => {
	const reservation = {
		name: req.body.name, 
		hotelName: req.body.hotelName, 
		arrivalDate: req.body.arrivalDate, 
		departureDate: req.body.departureDate 
	};
    db.collection('reservations').insert(reservation, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/reservations', (req, res) => {
	// Get the documents collection
	const collection = db.collection('reservations');
		// Find some documents
	collection.find({}).toArray(function(err, items) {
		if (err) {
	        res.send({'error':'An error has occurred'});
	    } else {
	        res.send(items);
	    }
	});
  });
};