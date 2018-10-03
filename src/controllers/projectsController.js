const { logger, approvalKey } = require("../../lib/config");
const {fetchProjects} = require("../services/projects/fetchProjects");
const createProject = require("../services/projects/createProject");
const { APPROVED, AWAITING_APPROVAL } = require('../models/project');
const {sendApprovalEmail} = require('../services/projects/sendApprovalEmail');
const {Project} = require('../models/project');

const getProjects = async (req, res) => {
  try {
    const projects = await fetchProjects({status: APPROVED});
    res.status(200).send(projects);
  } catch (e) {
    logger.error('Failed to get projects', e);
    res.status(500).send(e);
  }
};

const postProject = async (req, res) => {
  try {
    const query = Object.assign(req.body, {status: AWAITING_APPROVAL});
    const {id} = await createProject(query);
    await sendApprovalEmail({id, ...query});
    res.status(201).send();
  } catch (e) {
    logger.error('Failed to create project', e);
    res.status(500).send(e);
  }
};

const approveProject = async (req, res) => {
  if(req.query.approvalKey !== approvalKey) {
    res.status(403).send('Invalid approval key');
  }
  try {
    const {id} = req.params;
    const project = await Project.findById(id);
    project.status = APPROVED;
    await project.save();
    res.status(200).send("Approved!");
  } catch (e) {
    logger.error('Failed to approve project', e);
    res.status(500).send(e);
  }
};

module.exports.getProjects = getProjects;
module.exports.postProject = postProject;
module.exports.approveProject = approveProject;