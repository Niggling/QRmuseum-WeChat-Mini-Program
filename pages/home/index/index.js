// index.js
Page({
  // 其他页面逻辑...

  // 扫码按钮点击事件处理函数
  scanCodeHandler: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res); // 输出扫码结果信息
        // 在这里可以根据扫码结果执行相应的逻辑
      },
      fail: (res) => {
        console.error(res);
      }
    });
  },

  // 点击唐卡按钮事件处理函数
  navigateToClassify: function () {
    // 发送 HTTP 请求到后端
    wx.request({
      url: 'http://localhost:8080/exInformation/queryExInformation?type=1',
      method: 'GET',
      success: (res) => {
        console.log('后端响应：', res.data);
        // 在这里可以根据后端响应执行相应的逻辑
      },
      fail: (error) => {
        console.error('请求失败：', error);
        // 在这里处理请求失败的情况
      }
    });

    // 导航到分类页面
    wx.navigateTo({
      url: '/pages/home/classify/classify',
    });
  },
});
