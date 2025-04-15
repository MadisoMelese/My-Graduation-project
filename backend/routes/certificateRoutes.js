const express = require('express');
const { getCertificateById, generateCertificatePDF } = require('../controllers/certificateController');

const router = express.Router();

// Route for fetching certificate by ID
router.get('/:id', getCertificateById);

// Route for generating PDF of certificate
router.get('/:id/pdf', generateCertificatePDF);

module.exports = router;
