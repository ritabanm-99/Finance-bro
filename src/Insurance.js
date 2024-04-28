import React, { useState } from 'react';
import styles from './Insurance.module.css';

const Insurance = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Check if user has selected a file
    if (event.target.files && event.target.files.length > 0) {
      // Get the first file in the array
      const file = event.target.files[0];
      // Check if it's a PDF
      if (file.type === "application/pdf") {
        setSelectedFile(file);
      } else {
        alert("Please select a PDF file.");
      }
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Here you would handle the file upload to a server
      // For example, you could use FormData and fetch() or another HTTP client to perform the upload
      console.log('Uploading', selectedFile);
      // Clear the selected file after handling the upload
      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className={styles.insuranceContainer}>
      <h1 className={styles.title}>Insurance</h1>
      <div className={styles.uploadCard}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} className={styles.uploadInput} />
        <button onClick={handleFileUpload} className={styles.uploadButton}>
          Upload PDF
        </button>
        {selectedFile && <p className={styles.fileInfo}>File ready to upload: {selectedFile.name}</p>}
      </div>
    </div>
  );
};


export default Insurance;


