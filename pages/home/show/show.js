// pages/home/show/show.js
Page({
  data: {
    currentTab: 'introduction', // 默认显示介绍标签
    artworkInfo: {
      createTime: '2023年9月3日',
      type: '藏画',
      size: '100厘米×70厘米',
    },
    // 其他数据...
  },
  
  onLoad(options) {
    // 初始化逻辑...
  },

  switchTab(event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
    });
  },

  showQrCode() {
    // 处理分享二维码的逻辑...
  },

  playVoiceIntroduction() {
    // 处理语音介绍的逻辑...
  }


});