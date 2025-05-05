// backend/model/company.model.js
import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  package: { type: String, required: true },
  img: { type: String, default: "" }, // Optional field for logo
  applylink: { type: String, required: true } // New field added ✅
});

export const Company = mongoose.model("Company", companySchema);
