const { Project } = require('../models');

const projectdata = [

];

const seedProjects = () => Project.bulkCreate(projectdata);

module.exports = seedProjects;