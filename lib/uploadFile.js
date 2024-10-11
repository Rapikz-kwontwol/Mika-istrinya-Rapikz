// FIXED uploadFile.js FOR ESM   

import fetch from 'node-fetch';
import FormData from 'form-data';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload ephemeral file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async (buffer) => {
  const { ext } = await fileTypeFromBuffer(buffer) || {};
  const form = new FormData();
  form.append('file', buffer, `tmp.${ext}`);
  const res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  });
  const json = await res.json();
  if (!json.success) throw json;
  return json.link;
};

/**
 * Upload file to https://catbox.moe
 * @returns {string|null|(string|null)[]}
 */
const api = async (buffer) => {
  let { ext } = await fileTypeFromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });

  let data = await res.text();
  return data;
};

/**
 * Upload file to https://file.btch.rf.gd
 * @returns {string|null|(string|null)[]}
 */
const api2 = async (buffer) => {
  let { ext } = await fileTypeFromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);
  let res = await fetch("https://file.btch.rf.gd/api/upload.php", {
    method: "post",
    body: bodyForm,
  });
  let data = await res.json();
  let resultUrl = data.result ? data.result.url : '';
  return resultUrl;
};

/**
 * Upload file to multiple services
 * @param {Buffer} inp File Buffer
 * @returns {string|null|(string|null)[]}
 */
export default async function uploadFile(inp) {
  let err = false;
  for (const upload of [api, api2, fileIO]) {
    try {
      return await upload(inp);
    } catch (e) {
      err = e;
    }
  }
  if (err) throw err;
}