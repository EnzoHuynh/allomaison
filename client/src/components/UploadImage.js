import React, { useState } from 'react';
import * as multer from 'multer';
//import { Label, Control, Input, Button, Columns, Column, Title } from 'bulma';
import 'bulma';

const UploadImage = () => {
  const [path, setPath] = useState('');

  return (
    <>
      <form method="POST" enctype="multipart/form-data">
        <div class="file has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
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
          <button class="button is-primary">Upload'</button>
        </div>
      </form>
    </>
  );

  console.log(path);
};

export default UploadImage;
