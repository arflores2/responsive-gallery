module.exports = function() {

  function index(req, res) {
    res.render('index.jade');
  }

  function transition(req, res) {
    res.render('transition.jade');
  }

  return {
    index: index,
    transition: transition
  }
}