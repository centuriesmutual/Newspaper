import BoxSDK from 'box-node-sdk';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Box.com API Integration for Job Applications
 * 
 * This endpoint handles job application submissions and uploads them to Box.com
 * as PDFs that can be accessed in the admin/office portal.
 */

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const applicationData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      position: formData.get('position'),
      experience: formData.get('experience'),
      education: formData.get('education'),
      coverLetter: formData.get('coverLetter'),
      portfolio: formData.get('portfolio'),
      availability: formData.get('availability'),
      salary: formData.get('salary'),
      references: formData.get('references'),
      signature: formData.get('signature'), // Base64 signature image
      submittedAt: new Date().toISOString()
    };

    // Get resume file
    const resumeFile = formData.get('resume');
    
    // Check if Box credentials are configured
    const boxClientId = process.env.BOX_CLIENT_ID;
    const boxClientSecret = process.env.BOX_CLIENT_SECRET;
    const boxPrivateKeyPath = process.env.BOX_PRIVATE_KEY_PATH || './box-private-key.pem';
    const boxPublicKeyId = process.env.BOX_PUBLIC_KEY_ID;
    const boxEnterpriseId = process.env.BOX_ENTERPRISE_ID;
    const boxApplicationsFolderId = process.env.BOX_APPLICATIONS_FOLDER_ID;

    if (!boxClientId || !boxClientSecret || !boxPublicKeyId || !boxEnterpriseId || !boxApplicationsFolderId) {
      console.error('Box.com credentials not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Box.com integration not configured. Please set up environment variables.' 
        },
        { status: 500 }
      );
    }

    // Initialize Box SDK
    const sdk = new BoxSDK({
      clientID: boxClientId,
      clientSecret: boxClientSecret,
      appAuth: {
        keyID: boxPublicKeyId,
        privateKey: () => {
          try {
            // Try to read from file path
            if (fs.existsSync(boxPrivateKeyPath)) {
              return fs.readFileSync(boxPrivateKeyPath, 'utf8');
            }
            // Try to read from environment variable directly
            if (process.env.BOX_PRIVATE_KEY) {
              return process.env.BOX_PRIVATE_KEY;
            }
            throw new Error('Private key not found');
          } catch (error) {
            console.error('Error reading Box private key:', error);
            throw error;
          }
        },
        passphrase: process.env.BOX_PASSPHRASE || ''
      }
    });

    // Get service account client
    const client = sdk.getAppAuthClient('enterprise', boxEnterpriseId);

    // Generate PDF from application data
    const PDFDocument = require('pdfkit');
    const pdfBuffer = await generateApplicationPDF(applicationData, resumeFile);

    // Upload PDF to Box
    const fileName = `Application_${applicationData.firstName}_${applicationData.lastName}_${Date.now()}.pdf`;
    
    const uploadResponse = await client.files.uploadFile(
      boxApplicationsFolderId,
      fileName,
      Buffer.from(pdfBuffer)
    );

    // Create a shared link for admin access
    const sharedLink = await client.files.createSharedLink(uploadResponse.entries[0].id, {
      access: 'open',
      permissions: {
        can_download: true,
        can_preview: true
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      fileId: uploadResponse.entries[0].id,
      fileName: fileName,
      sharedLink: sharedLink.shared_link.url,
      boxUrl: `https://app.box.com/file/${uploadResponse.entries[0].id}`
    });

  } catch (error) {
    console.error('Error submitting application to Box:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to submit application' 
      },
      { status: 500 }
    );
  }
}

/**
 * Generate PDF from application data
 */
async function generateApplicationPDF(applicationData, resumeFile) {
  const PDFDocument = require('pdfkit');
  const doc = new PDFDocument({ margin: 50 });
  const chunks = [];

  doc.on('data', chunk => chunks.push(chunk));
  doc.on('end', () => {});

  // Header
  doc.fontSize(20).text('Job Application', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Submitted: ${new Date(applicationData.submittedAt).toLocaleString()}`, { align: 'center' });
  doc.moveDown(2);

  // Personal Information
  doc.fontSize(16).text('Personal Information', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(`Name: ${applicationData.firstName} ${applicationData.lastName}`);
  doc.text(`Email: ${applicationData.email}`);
  doc.text(`Phone: ${applicationData.phone}`);
  doc.moveDown();

  // Position Information
  doc.fontSize(16).text('Position Information', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(`Position Applied For: ${applicationData.position}`);
  doc.text(`Years of Experience: ${applicationData.experience}`);
  doc.moveDown();
  doc.text('Education Background:');
  doc.text(applicationData.education, { indent: 20 });
  doc.moveDown();

  // Cover Letter
  doc.fontSize(16).text('Cover Letter', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(applicationData.coverLetter, { indent: 20 });
  doc.moveDown();

  // Additional Information
  doc.fontSize(16).text('Additional Information', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(`Availability: ${applicationData.availability}`);
  if (applicationData.salary) {
    doc.text(`Salary Expectations: ${applicationData.salary}`);
  }
  if (applicationData.portfolio) {
    doc.text(`Portfolio: ${applicationData.portfolio}`);
  }
  if (applicationData.references) {
    doc.moveDown();
    doc.text('Professional References:');
    doc.text(applicationData.references, { indent: 20 });
  }
  doc.moveDown();

  // Signature
  if (applicationData.signature) {
    doc.fontSize(16).text('Digital Signature', { underline: true });
    doc.moveDown(0.5);
    try {
      const signatureBuffer = Buffer.from(applicationData.signature.split(',')[1] || applicationData.signature, 'base64');
      doc.image(signatureBuffer, {
        fit: [200, 100],
        align: 'left'
      });
      doc.moveDown();
      doc.fontSize(10).text(`Signed by: ${applicationData.firstName} ${applicationData.lastName}`, { align: 'left' });
      doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: 'left' });
    } catch (error) {
      doc.text('Signature included (image processing error)', { indent: 20 });
    }
  }

  doc.end();

  // Wait for PDF to be generated
  return new Promise((resolve, reject) => {
    doc.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    doc.on('error', reject);
  });
}

