
import React, { useState ,useEffect} from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState(null);
  const objectUrl = files ? URL.createObjectURL(files) : null;

  const handleFiles = (e) => {
    const selectedFiles = e.target.files[0];
    setFiles(selectedFiles);
    setFiles(selectedFiles.multiple.show);
    console.log(selectedFiles);
  };

  useEffect(() => {
    return () => {
      if (files) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [files, objectUrl]);

  return (
    <div className='container mt-5 w-50 shadow'>
      <input
        type="file"
        placeholder='Upload something'
        accept='image/*'
        multiple
        onChange={handleFiles}
        className='form-control'
      />
      {files && (
        <img
          src={objectUrl}
          alt="Uploaded Image"
          className='mt-5 w-100'
        />
      )}
    </div>
  );
};
export default FileUpload;
