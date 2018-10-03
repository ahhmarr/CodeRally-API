const { Project } = require('../../models/project');
const { AWAITING_APPROVAL } = require('../../models/project');

const createProject = (query) => {
  const data = Object.assign(query, {status: AWAITING_APPROVAL});
  const project = new Project(data);
  return project.save();
}

module.exports = createProject;