const seedComments = require("./comment-seeds");
const seedIssues = require("./issue-seeds");
const seedLandlords = require("./landlord-seeds");
const seedProperties = require("./property-seeds");
const seedTenants = require("./tenant-seeds");
const seedUnits = require("./unit-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
//   await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

//   await sequelize.sync({ force: true });
//   console.log("\n----- DATABASE SYNCED -----\n");
await seedLandlords();
console.log("\n----- landlords SEEDED -----\n");

await seedProperties();
console.log("\n----- Properties  SEEDED -----\n");

await seedUnits();
console.log("\n----- Units  SEEDED -----\n");  

await seedTenants();
  console.log("\n----- Tenants  SEEDED -----\n");

await seedIssues();
console.log("\n----- Issues SEEDED -----\n");

await seedComments();
  console.log("\n----- Comments SEEDED -----\n");

  process.exit(0);
};

seedAll();
