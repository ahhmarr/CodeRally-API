const { Project } = require('../../models/project');

const fetchProjects = (query) => {
  return Project.find(query).limit(10).exec();
}

const fetchProject = (query) => {
  return Project.findOne(query);
}

module.exports = {
  fetchProjects,
  fetchProject
};