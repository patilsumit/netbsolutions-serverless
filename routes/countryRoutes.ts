import { Router } from "express";
import CountryController from "../controllers/CountryController";

const router = Router();

//Routes
router.get("/countries", CountryController.getAllContries);
router.get("/countries/:countryName/:endDate/view", CountryController.getAllContriesByName);

export default router;
