// pages/home/classify/classify.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    exList: [] // 存储后端返回的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type; // 获取传递的参数
    // 在这里可以根据 type 向后端请求数据并进行相应的处理
    this.getExTypeList(type);
  },

  goToHomePage() {
    wx.navigateTo({
      url: '/pages/home/index/index',
    });
  },

  onTapMaitreyaCard(event) {
    const index = event.currentTarget.dataset.index; // 获取当前点击的卡片在列表中的索引
    const id = this.data.exList.data[index].id; // 获取对应卡片的id
    wx.navigateTo({
      url: '/pages/home/show/show?id=' + id
    });
  },
  
  

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

  // 其他生命周期函数和方法保持不变

  getExTypeList: function (type) {
    // 构建请求的URL，将参数type动态添加到URL中
    const url = 'http://localhost:8080/exInformation/queryExInformation?type=' + type;

    // 发送 HTTP 请求到后端
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        console.log('后端响应：', res.data);
        // 在这里更新页面的数据
        this.setData({
          exList: res.data // 更新页面数据
        });
        // console.log("打印exList");
        // console.log(this.data.exList);

      },
      fail: (error) => {
        console.error('请求失败：', error);
        // 在这里处理请求失败的情况
      }
    });
  },

})
