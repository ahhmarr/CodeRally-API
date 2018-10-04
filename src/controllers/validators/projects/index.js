const { celebrate, Joi } = require("celebrate");

const getProjects = celebrate({
  query: {
    name: Joi.string(),
  },
});
const getProjectByName = celebrate({
  params: {
    name: Joi.string().required(),
  },
});
const postProject = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    tech: Joi.string().required(),
    link: Joi.string().uri({scheme: ['https']}),
    repoLink: Joi.string().regex(/^((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:\/\-~]+)(\.git)(\/)?$/).required(),
    partners: Joi.string().required(),
  }),
});

module.exports.getProjects = getProjects;
module.exports.getProjectByName = getProjectByName;
module.exports.postProject = postProject;