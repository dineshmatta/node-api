module.exports = function(app, db) {
  app.post('/reservation', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};