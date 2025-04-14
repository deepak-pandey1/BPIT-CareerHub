import { Company } from "../model/company.model.js";


// POST: Add company
export const addCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: "Failed to add company", error });
  }
};

// GET: All companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ _id: -1 });
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch companies", error });
  }
};

// DELETE: Delete company by ID
export const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete company", error });
  }
};
