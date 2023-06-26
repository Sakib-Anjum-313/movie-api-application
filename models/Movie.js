const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
      trim: true,
    },

    regUserEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    moviePic: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },
    actorsName: {
      type: String,
      required: true,
    },
    filmDirectorName: {
      type: String,
      required: true,
    },
    producerName: {
      type: String,
      required: true,
    },
    directorOfPhotographyName: {
      type: String,
      required: true,
    },
    productionDesignerNameName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
