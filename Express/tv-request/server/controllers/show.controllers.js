import tvShows from "../models/tv.models.js"
const shows = tvShows

const ShowController = {
  getAllShows: (req, res) => {
    res.json(shows)
  },
  getAllShowsByYear: (req, res) => {
    console.log(req.params)
    const showsByYear = shows.filter(show => show.yearCreated == req.params.yearCreated)
    res.json(showsByYear)
  },
  deleteShowByTitle: (req, res) => {
    const title = req.params.tvShow
    const index = shows.findIndex(show => show.tvShow == title)
    shows.splice(index, 1)
    res.json(shows)
  },
  patchShowByTitle: (req, res) => {
    const title = req.params.tvShow
    shows.forEach((show, index) => {
      if (show.tvShow == title) {
        show.starring = req.body.starring
      }
    })
    const updatedShow = shows.find(show => show.tvShow == title)
    res.json(updatedShow)

  },
  addNewShow: (req, res) => {
    console.log(req.body)
    let { tvShow, yearCreated, starring, genre } = req.body
    const createNewShow = (tvShow, yearCreated, starring, genre) => {
      const newShow = {
        "tvShow": tvShow,
        "yearCreated": yearCreated,
        "genre": genre,
        "starring": starring
      }
      return newShow
    }
    const newShow = createNewShow(tvShow, yearCreated, starring, genre)
    shows.push(newShow)
    res.json(newShow)
  }
}

export default ShowController
