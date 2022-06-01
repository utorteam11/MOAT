const { Issue } = require('../models');

const issueData = [
  {
    issue_title: 'Toilet Not working',
    issue_text: 'Tenant reported toilet not working',
    status: "Open",
    unit_id: 1,
  },
  {
    issue_title: 'Hydro Not working',
    issue_text: 'Tenant reported water not flowing',
    status: "Open",
    unit_id: 2,
  },
];

const seedIssues = () => Issue.bulkCreate(issueData);

module.exports = seedIssues;