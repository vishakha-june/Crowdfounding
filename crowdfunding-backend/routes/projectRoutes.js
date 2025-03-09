const express = require("express");
const Project = require("../models/Project");
const authMiddleware = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
    const { title, description, goalAmount } = req.body;
    const image = req.file ? req.file.filename : null;
  
    const newProject = await Project.create({
      title,
      description,
      goalAmount,
      creator: req.userId,
      image,
    });
  
    res.status(201).json(newProject);
  });

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { title, description, goalAmount } = req.body;
  const newProject = await Project.create({ title, description, goalAmount, creator: req.userId });

  res.status(201).json(newProject);
});

router.get("/", async (req, res) => {
  const projects = await Project.find().populate("creator", "name");
  res.json(projects);
});

router.post("/fund/:id", authMiddleware, async (req, res) => {
  const { amount } = req.body;
  const project = await Project.findById(req.params.id);

  if (!project) return res.status(404).json({ error: "Project not found" });

  project.raisedAmount += amount;
  project.backers.push(req.userId);
  await project.save();

  res.json({ message: "Funding successful", project });
});

module.exports = router;
