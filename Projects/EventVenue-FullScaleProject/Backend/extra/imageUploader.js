const cloudinary = require('../config/cloudinary');

exports.imageUploader = async (req) => {
  const b64 = Buffer.from(req.file.buffer).toString('base64');
  let file = 'data:' + req.file.mimetype + ';base64,' + b64;

  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });
  return res?.url;
};
