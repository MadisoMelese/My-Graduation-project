const multer = require("multer");
const path = require("path");
const Admin = require("../models/Admin");
const Student = require("../models/Student");
const Certificate = require("../models/Certificate"); // Assuming you have a Certificate model
const XLSX = require("xlsx");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /xlsx|xls/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Excel files only!");
  },
}).single("file");

// Login admin function
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Upload file function
const uploadFile = (req, res) => {
  // Ensure the admin is authenticated
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Proceed with file upload
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded." });
      }

      try {
        const workbook = XLSX.readFile(req.file.path);
        const sheetNameList = workbook.SheetNames;
        const data = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheetNameList[0]]
        );

        for (const record of data) {
          const student = new Student({
            certificateID: record.certificateID,
            studentName: record.studentName,
            internshipDomain: record.internshipDomain,
            startDate: record.startDate,
            endDate: record.endDate,
          });
          await student.save();
        }
        res
          .status(200)
          .json({ message: "File uploaded and data processed successfully." });
      } catch (error) {
        res.status(500).json({ message: "Error processing file." });
      }
    });
  });
};

// admin control all student credentials

const getAllCertificates = async (req, res) => {
  try {
    const certificate = await Certificate.find();
    if (!certificate || certificate.length === 0) {
      return res.status(404).json({ message: "No certificate found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// get single student certificate
const getSingleCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({
      certificateID: req.params.certificateID,
    });
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// update single student certificate

const updateSingleCertificate = async (req, res) => {
  try {
    const { certificateID, studentName, internshipDomain, startDate, endDate } =
      req.body;
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      { certificateID, studentName, internshipDomain, startDate, endDate },
      { new: true }
    );
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// delete single student certificate
const deleteSingleCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// add student credentials

const addStudentCredentials = async (req, res) => {
  try {
    const { certificateID, studentName, internshipDomain, startDate, endDate } =
      req.body;
    // Validate required fields
    if (
      !certificateID ||
      !studentName ||
      !internshipDomain ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if certificateID already exists
    const certificateId = await Certificate.findOne({ certificateID });

    if (certificateId) {
      console.error("Certificate ID already exists:");
      return res
        .status(400)
        .json({
          message: `Certificate with ID ${certificateID} already exists`,
        });
    }
    const student = new Certificate({
      certificateID,
      studentName,
      internshipDomain,
      startDate,
      endDate,
    });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  loginAdmin,
  uploadFile,
  getAllCertificates,
  getSingleCertificate,
  updateSingleCertificate,
  deleteSingleCertificate,
  addStudentCredentials,
};
