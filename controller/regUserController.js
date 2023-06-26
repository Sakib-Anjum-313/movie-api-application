// external import


// internal imports
const Movie = require("../models/Movie");

// get regUser page
function getRegUser(req, res, next) {
  res.render("regUser");
}


// add Movie
async function addMovie(req, res, next) {
  let newMovie;

  if (req.files && req.files.length > 0) {
    newMovie = new Movie({
      ...req.body,
      avatar: req.files[0].filename,
    });
  } 

  // save Movie or send error
  try {
    const result = await newMovie.save();
    res.status(200).json({
      message: "Movie was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

module.exports = {
  getRegUser,
  addMovie,
};
