import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  deleteNotification,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = express.Router();

//private route
router.get("/", getNotifications);
router.post("/:notificationId", protectRoute, deleteNotification);

export default router;
