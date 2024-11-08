const fs = require('fs');

async function uploadFile(filePath, fileName) {
  try {
    // Ensure authorization
    await b2.authorize();

    // Start large file upload to get the upload URL
    const uploadUrlResponse = await b2.getUploadUrl({
      bucketId: 'YOUR_BUCKET_ID'
    });

    // Read file content
    const fileContent = fs.readFileSync(filePath);

    // Upload the file to Backblaze
    const uploadResponse = await b2.uploadFile({
      uploadUrl: uploadUrlResponse.data.uploadUrl,
      uploadAuthToken: uploadUrlResponse.data.authorizationToken,
      fileName: fileName,
      data: fileContent
    });

    // File URL for access (example link format)
    const fileUrl = `https://f000.backblazeb2.com/file/YOUR_BUCKET_NAME/${fileName}`;

    console.log(`File uploaded to Backblaze. URL: ${fileUrl}`);

    // Save file metadata to MongoDB
    const fileData = new File({
      fileName: fileName,
      url: fileUrl,
      size: uploadResponse.data.contentLength
    });

    await fileData.save();

    return fileData;
  } catch (error) {
    console.error('Error uploading to Backblaze:', error);
  }
}
