const express = require("express");
const {
  loginAdmin,
  getAllCertificates,
  getSingleCertificate,
  updateSingleCertificate,
  deleteSingleCertificate,
  addStudentCredentials,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/addStudents", addStudentCredentials); 
router.get("/certificates", getAllCertificates);
router.get("/certificates/:certificateID", getSingleCertificate);
router.delete("/certificates/:id/delete", deleteSingleCertificate);
router.put("/certificates/:id/edit", updateSingleCertificate);

module.exports = router;
