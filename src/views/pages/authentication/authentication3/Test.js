import React, { useState } from 'react';
import axios from 'axios';
const FileUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [genericFile, setGenericFile] = useState(null);
  const handleFileChange = async (event, fileType) => {
    const file = event.target.files[0];
    if (fileType === 'video') {
      // Check video file size (max 500mb)
      setVideoFile(file);
    } else if (fileType === 'generic') {
      // Check generic file size (max 3gb)
      setGenericFile(file);
    }
  };
  const handleUpload = async () => {
    try {
      if (videoFile.size > 5 * 1024 * 1024 || genericFile.size > 0.5 * 1024 * 1024 * 1024) {
        alert('File size exceeds the limit. Upload aborted.');
        return;
      }
      const apiUrl = 'https://backend.cornucopia-ai.com/api/products/sign-url';
      // Prepare payload
      const payload = {
        files: []
      };
      if (videoFile) {
        payload.files.push({
          fileName: videoFile.name,
          fileType: videoFile.type
        });
      }
      if (genericFile) {
        payload.files.push({
          fileName: genericFile.name,
          fileType: genericFile.type
        });
      }
      console.log('payload', payload);
      // Get pre-signed URLs
      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response, 'Urls api result');
      const signedUrls = response.data;
      // Upload files to S3
      const uploadPromises = signedUrls.map(async (signedUrl, index) => {
        let file;
        if (index == 0) file = videoFile;
        if (index === 1) file = genericFile;
        console.log(file, 'file');
        // Check file size again before upload
        const res = await axios.put(signedUrl.url, file, {
          headers: {
            'Content-Type': file.fileType
          }
        });
        console.log(res);
      });
      const responseFinal = await Promise.all(uploadPromises);
      console.log(responseFinal);
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error('Error during file upload', error);
      alert('Error during file upload');
    }
  };
  return (
    <div>
      <div>
        <p>Video File:</p>
        <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, 'video')} />
      </div>
      <div>
        <p>Generic File:</p>
        <input type="file" onChange={(e) => handleFileChange(e, 'generic')} />
      </div>
      <button onClick={handleUpload}>Upload Files</button>
      {videoFile && (
        <div>
          <p>Selected Video File: {videoFile.name}</p>
        </div>
      )}
      {genericFile && (
        <div>
          <p>Selected Generic File: {genericFile.name}</p>
        </div>
      )}
    </div>
  );
};
export default FileUpload;
