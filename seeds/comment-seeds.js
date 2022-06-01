const { Comments } = require('../models');

const commentData = [
  {
    comment_text: 'Toilet broken down not fixed yet',
    issue_id: 1
  },
  {
    comment_text: 'Toilet still not fixed',
    issue_id: 1
  },
  {
    comment_text: 'Please fix asap',
    issue_id: 1
  },
  {
    comment_text: 'water pipe broken not fixed ',
    issue_id: 2
  },
  {
    comment_text: 'Why are you taking so long?',
    issue_id: 2
  },
];

const seedCategories = () => Comments.bulkCreate(commentData);

module.exports = seedCategories;