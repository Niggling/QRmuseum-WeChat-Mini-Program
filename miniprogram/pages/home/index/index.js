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
  

  //   // 导航到分类页面
  //   wx.navigateTo({
  //     url: '/pages/home/classify/classify',
  //   }); 
  // },


// 首页的点击事件
  navigateToClassify1: function () {
    const type = 1; // 或者从元素中获取 type
    wx.navigateTo({
      url: '/pages/home/classify/classify?type=' + type
    });
  },

  navigateToClassify2: function () {
    const type = 2; // 或者从元素中获取 type
    wx.navigateTo({
      url: '/pages/home/classify/classify?type=' + type
    });
  }


});
