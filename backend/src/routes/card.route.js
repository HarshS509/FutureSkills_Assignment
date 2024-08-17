import { Router } from "express";

import {
  createCardHandler,
  getCardByIdHandler,
  getCardsHandler,
} from "../controllers/card.controller.js";

const router = Router();

router.route("/").get(getCardsHandler).post(createCardHandler);
router.route("/:title").get(getCardByIdHandler);

export default router;
