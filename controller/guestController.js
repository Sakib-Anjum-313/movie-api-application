// get inbox page
function getGuestUser(req, res, next) {
  res.render("regUser");
}

module.exports = {
  getGuestUser,
};
