import { Router } from "express";
import ShowController from "../controllers/show.controllers.js";

const router = Router()

router.route("/shows")
  .get(ShowController.getAllShows)
  .post(ShowController.addNewShow)

router.route("/shows/:yearCreated")
  .get(ShowController.getAllShowsByYear)

router.route("/shows/:tvShow")
  .patch(ShowController.patchShowByTitle)
  .delete(ShowController.deleteShowByTitle)
export default router
