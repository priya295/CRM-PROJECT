const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  packageNo: { type: String, required: true },
  numOfProjects: { type: Number, default: 0 }, // Allow unlimited projects if left blank
  numOfUsers: { type: Number, default: 0 }, // Allow unlimited users if left blank
  storageUnit: { type: Number, default: 0 }, // Default to 0 if unlimited storage
  storageUnitType: { type: String, enum: ['MB', 'GB'], default: 'MB' }, // Storage unit type
  planType: { type: String, enum: ['Paid', 'Free'], required: true },
  tenure: { type: String, required: true },
  months: { type: Number, default: 0 }, // Default to 0 if unlimited months
  description: { type: String, required: true },
  modules: [{ type: String }] // List of selected modules
}, { collection: 'Packages' }); // Specify custom collection name here

module.exports = mongoose.model('Packages', packageSchema);
