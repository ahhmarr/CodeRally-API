const { celebrate, Joi } = require("celebrate");

const getProjects = celebrate({
  query: {
    name: Joi.string(),
  },
});
const postProject = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    tech: Joi.string().required(),
    link: Joi.string().uri({scheme: ['https']}).required(),
    partners: Joi.string().required(),
  }),
});

module.exports.getProjects = getProjects;
module.exports.postProject = postProject;