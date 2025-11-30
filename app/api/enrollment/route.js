import BoxSDK from 'box-node-sdk';
import { NextResponse } from 'next/server';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import { Readable } from 'stream';

/**
 * Box.com API Integration for Health Insurance Enrollment
 * 
 * This endpoint handles health insurance enrollment submissions and uploads them to Box.com
 * as PDFs that can be accessed in the admin/office portal.
 */

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const enrollmentData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      dateOfBirth: formData.get('dateOfBirth'),
      ssn: formData.get('ssn'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      zipCode: formData.get('zipCode'),
      planType: formData.get('planType'),
      coverageStartDate: formData.get('coverageStartDate'),
      dependents: formData.get('dependents'),
      healthConditions: formData.get('healthConditions'),
      medications: formData.get('medications'),
      signature: formData.get('signature'), // Base64 signature image
      submittedAt: new Date().toISOString()
    };

    // Get document files
    const idDocument = formData.get('idDocument');
    const incomeDocument = formData.get('incomeDocument');
    const additionalDocuments = formData.get('additionalDocuments');
    
    // Check if Box credentials are configured
    const boxClientId = process.env.BOX_CLIENT_ID;
    const boxClientSecret = process.env.BOX_CLIENT_SECRET;
    const boxPrivateKeyPath = process.env.BOX_PRIVATE_KEY_PATH || './box-private-key.pem';
    const boxPublicKeyId = process.env.BOX_PUBLIC_KEY_ID;
    const boxEnterpriseId = process.env.BOX_ENTERPRISE_ID;
    const boxEnrollmentFolderId = process.env.BOX_ENROLLMENT_FOLDER_ID || process.env.BOX_APPLICATIONS_FOLDER_ID;

    if (!boxClientId || !boxClientSecret || !boxPublicKeyId || !boxEnterpriseId || !boxEnrollmentFolderId) {
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

    // Generate PDF from enrollment data
    const pdfBuffer = await generateEnrollmentPDF(enrollmentData, idDocument, incomeDocument, additionalDocuments);

    // Upload PDF to Box
    const fileName = `Enrollment_${enrollmentData.firstName}_${enrollmentData.lastName}_${Date.now()}.pdf`;
    
    const uploadResponse = await client.files.uploadFile(
      boxEnrollmentFolderId,
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
      message: 'Enrollment submitted successfully',
      fileId: uploadResponse.entries[0].id,
      fileName: fileName,
      sharedLink: sharedLink.shared_link.url,
      boxUrl: `https://app.box.com/file/${uploadResponse.entries[0].id}`
    });

  } catch (error) {
    console.error('Error submitting enrollment to Box:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to submit enrollment' 
      },
      { status: 500 }
    );
  }
}

/**
 * Generate PDF from enrollment data
 */
async function generateEnrollmentPDF(enrollmentData, idDocument, incomeDocument, additionalDocuments) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const chunks = [];

    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    doc.on('error', reject);

  // Header
  doc.fontSize(20).text('Health Insurance Enrollment Application', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Submitted: ${new Date(enrollmentData.submittedAt).toLocaleString()}`, { align: 'center' });
  doc.moveDown(2);

  // Personal Information
  doc.fontSize(16).text('Personal Information', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(`Name: ${enrollmentData.firstName} ${enrollmentData.lastName}`);
  doc.text(`Email: ${enrollmentData.email}`);
  doc.text(`Phone: ${enrollmentData.phone}`);
  doc.text(`Date of Birth: ${enrollmentData.dateOfBirth}`);
  doc.text(`SSN: ${enrollmentData.ssn}`);
  doc.moveDown();
  doc.text('Address:');
  doc.text(`${enrollmentData.address}`, { indent: 20 });
  doc.text(`${enrollmentData.city}, ${enrollmentData.state} ${enrollmentData.zipCode}`, { indent: 20 });
  doc.moveDown();

  // Coverage Information
  doc.fontSize(16).text('Coverage Information', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  doc.text(`Plan Type: ${enrollmentData.planType}`);
  doc.text(`Coverage Start Date: ${enrollmentData.coverageStartDate}`);
  if (enrollmentData.dependents) {
    doc.moveDown();
    doc.text('Dependents:');
    doc.text(enrollmentData.dependents, { indent: 20 });
  }
  doc.moveDown();

  // Health Information
  if (enrollmentData.healthConditions || enrollmentData.medications) {
    doc.fontSize(16).text('Health Information', { underline: true });
    doc.moveDown(0.5);
    doc.fontSize(12);
    if (enrollmentData.healthConditions) {
      doc.text('Health Conditions:');
      doc.text(enrollmentData.healthConditions, { indent: 20 });
      doc.moveDown();
    }
    if (enrollmentData.medications) {
      doc.text('Current Medications:');
      doc.text(enrollmentData.medications, { indent: 20 });
      doc.moveDown();
    }
  }

  // Documents
  doc.fontSize(16).text('Documents Submitted', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(12);
  if (idDocument) {
    doc.text(`✓ Government-Issued ID: ${idDocument.name || 'Uploaded'}`);
  }
  if (incomeDocument) {
    doc.text(`✓ Proof of Income: ${incomeDocument.name || 'Uploaded'}`);
  }
  if (additionalDocuments) {
    doc.text(`✓ Additional Documents: ${additionalDocuments.name || 'Uploaded'}`);
  }
  doc.moveDown();

  // Signature
  if (enrollmentData.signature) {
    doc.fontSize(16).text('Digital Signature', { underline: true });
    doc.moveDown(0.5);
    try {
      const signatureBuffer = Buffer.from(enrollmentData.signature.split(',')[1] || enrollmentData.signature, 'base64');
      doc.image(signatureBuffer, {
        fit: [200, 100],
        align: 'left'
      });
      doc.moveDown();
      doc.fontSize(10).text(`Signed by: ${enrollmentData.firstName} ${enrollmentData.lastName}`, { align: 'left' });
      doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: 'left' });
    } catch (error) {
      doc.text('Signature included (image processing error)', { indent: 20 });
    }
  }

    doc.end();
  });
}

