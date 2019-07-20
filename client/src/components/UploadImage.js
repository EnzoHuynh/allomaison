import React, { useState } from 'react';
import 'bulma';
import imageApi from '../utils/imageApi';

const UploadImage = () => {
  const [path, setPath] = useState('');
  const [id_good, setIDGood] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    //console.log('form data ', formData);

    imageApi
      .upload({ path, id_good })
      .then(result => {
        console.log('>> (onSubmit) file upload result = ', result);
        // access results...
      })
      .catch(function(error) {
        console.log('>> ERROR FILE UPLAOD ', error);
        alert(
          'File upload failed. Please ensure you are uploading a .zip file only'
        );
      });
  };

  const onChange = e => {
    setPath({ file: e.target.files[0] });
    setIDGood(1);
  };

  return (
    <>
      <form onSubmit={onSubmit} method="post" enctype="multipart/form-data">
        <div class="file has-name">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="myImage"
              onChange={onChange}
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
          <button class="button is-primary" type="submit">
            Upload
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadImage;
