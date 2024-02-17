const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

exports.main = async (event, context) => {
  const id = event.id; // 从事件参数中获取传递过来的 ID
  // 拼接 ID 到指定的 path 后面
  const path = 'pages/home/show/show' + '?id=' + id;
  // 获取小程序二维码的 buffer
  const resp = await cloud.openapi.wxacode.get({
    path: path
  });
  const { buffer } = resp;
  // 将图片上传云存储空间
  const upload = await cloud.uploadFile({
    cloudPath: 'code.png',
    fileContent: buffer
  });
  
  return upload.fileID;
};
