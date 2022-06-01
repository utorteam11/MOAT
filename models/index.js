const Landlord = require("./Landlord");
const Tenant = require("./Tenant");
const Property = require("./Property");
const Issue = require("./Issue");
const Unit = require("./Unit");
const Comments = require("./Comments");

// insert model associations

// landlord tenant relationship
Landlord.hasMany(Property, {
  foreignKey: "landlord_id",
});

Property.belongsTo(Landlord, {
  foreignKey: "landlord_id",
  onDelete: 'CASCADE'
});

// landlord rental relationship
Property.hasMany(Unit, {
  foreignKey: "property_id",
});

Unit.belongsTo(Property, {
  foreignKey: "property_id",
});

// tenant rental relationship
Unit.hasMany(Tenant, {
  foreignKey: "unit_id",
});

Tenant.belongsTo(Unit, {
  foreignKey: "unit_id",
});

// issue relationships

Unit.hasMany(Issue, {
  foreignKey: "unit_id",
});

Issue.belongsTo(Unit, {
  foreignKey: "unit_id",
});

Comments.belongsTo(Issue, {
  foreignKey: "issue_id",
});

Issue.hasMany(Comments, {
  foreignKey: "issue_id",
});

module.exports = { Landlord, Tenant, Property, Issue, Comments, Unit };
