const express = require("express");
const projectsController = require("./projectsController");
const projectsValidator = require("./validators/projects");

const router = express.Router();

router.get(
  "/projects",
  projectsValidator.getProjects,
  projectsController.getProjects
);

router.post(
  "/projects",
  projectsValidator.postProject,
  projectsController.postProject
);

router.post(
  "/approve/:id",
  projectsController.approveProject
);

router.get("/ping", (req, res) => res.status(200).send());

module.exports = router;