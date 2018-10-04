const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const AWAITING_APPROVAL = "AWAITING_APPROVAL";
const APPROVED = "APPROVED";

const projectSchema = new Schema({
  name: String,
  link: String,
  repoLink: String,
  tech: String,
  partners: String,
  description: String,
  status: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Project,
  APPROVED,
  AWAITING_APPROVAL
}
