import Card from "../models/card.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getCardsHandler = asyncHandler(async (req, res) => {
  const cards = await Card.find();

  if (cards.length == 0) {
    throw new ApiError(404, "cards not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, { cards }, "Cards fetched successfully"));
});

export const getCardByIdHandler = asyncHandler(async (req, res) => {
  const { title } = req.params;
  const card = await Card.find({ title });

  if (!card) {
    throw new ApiError(404, "card not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, { card }, "Card fetched successfully"));
});

export const createCardHandler = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    throw new ApiError(400, "title and description are required");
  }
  const newCard = await Card.create({ title, description });

  res
    .status(201)
    .json(new ApiResponse(201, { card: newCard }, "Card created successfully"));
});
