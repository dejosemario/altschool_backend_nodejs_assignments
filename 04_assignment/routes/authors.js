import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is GET /authors endpoint" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "This is POST /authors endpoint" });
});

router.put("/", (req, res) => {
  res.status(200).json({ message: "This is PUT /authors endpoint" });
});

router.delete("/", (req, res) => {
  res.status(200).json({ message: "This is DELETE /authors endpoint" });
});

export default router;
