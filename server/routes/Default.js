module.exports = function() {

  function index(req, res) {
    res.render('index.jade');
  }

  function html(req, res) {
    console.log(__dirname);
    res.redirect('index.html'); 
  }

  return {
    index: index,
    html: html
  }
}