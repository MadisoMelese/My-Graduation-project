const PDFDocument = require('pdfkit');
const Certificate = require('../models/Certificate');

exports.getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateID: req.params.id });

    if (!certificate) {
      console.log("No certificate found");  // Debugging: Log if no certificate is found
      return res.status(404).json({ message: 'Certificate not found' });
    }

    console.log("Certificate data:", certificate);  // Debugging: Log the found certificate data
    res.json(certificate);  // Return JSON here
  } catch (error) {
    console.error("Server error:", error);  // Debugging: Log the server error details
    res.status(500).json({ message: 'Server error' });
  }
};

// Generate PDF certificate
exports.generateCertificatePDF = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateID: req.params.id });

    if (!certificate) {
      return res.status(404).send('Certificate not found');
    }

    const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });
    res.setHeader('Content-Disposition', `attachment; filename="${certificate.studentName}_certificate.pdf"`);
    res.setHeader('Content-Type', 'application/pdf');
    
    doc.pipe(res);

    // Draw background rectangle
    doc.rect(0, 0, doc.page.width, doc.page.height)
    .fill('#f9f9f9')
    .stroke('#4a90e2')
    .lineWidth(8);
 
    // Certificate Header
    doc.fontSize(20)
       .fillColor('#4a90e2')
       .text('Certificate of Achievement', { align: 'center', underline: true })
       .moveDown(0.5);

    // Main Content
    doc.fontSize(14)
       .fillColor('#333')
       .text('This certifies that', { align: 'center' })
       .moveDown(0.5);

    doc.fontSize(24)
       .fillColor('#4a90e2')
       .text(certificate.studentName, { align: 'center' })
       .moveDown(0.5);

    doc.fontSize(14)
       .fillColor('#333')
       .text('has successfully completed the', { align: 'center' })
       .moveDown(0.5);

    doc.fontSize(18)
       .fillColor('#4a90e2')
       .text(certificate.internshipDomain, { align: 'center' })
       .moveDown(0.5);

    doc.fontSize(14)
       .fillColor('#333')
       .text(`Duration: ${new Date(certificate.startDate).toLocaleDateString()} - ${new Date(certificate.endDate).toLocaleDateString()}`, { align: 'center' })
       .moveDown(1);

    doc.fontSize(12)
       .fillColor('#666')
       .text('We commend your dedication and exceptional performance throughout the course. This certificate is a testament to your hard work and commitment.', { align: 'center' })
       .moveDown(1);

    // Signature and Date Section
    doc.fontSize(12)
       .fillColor('#333')
       .text('Signature:', { align: 'center' })
       .moveDown(0.5)
       .text('CertiSys', { align: 'center' }) // Placeholder for signature
       .moveDown(1);

    doc.text('Date of Issue:', { align: 'center' })
       .text(new Date().toLocaleDateString(), { align: 'center' })
       .moveDown(1);

    // Footer
    doc.fontSize(10)
       .fillColor('#777')
       .text('Certified by CertiSys', { align: 'center' })
       .moveDown(1);
   
    // Finalize PDF file
    doc.end();
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
};
