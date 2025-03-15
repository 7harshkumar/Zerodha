const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema"); // ✅ Import schema directly

const HoldingsModel = mongoose.model("Holding", HoldingsSchema); // ✅ Correct Model Definition

module.exports = HoldingsModel; // ✅ Correct Export
