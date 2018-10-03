const { Project } = require('../../models/project');

const fetchProjects = (query) => {
  return Project.find(query).limit(10).exec();
}

module.exports = {
  fetchProjects
};