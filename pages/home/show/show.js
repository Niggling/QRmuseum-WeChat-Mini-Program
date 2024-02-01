// pages/home/show/show.js
Page({
  data: {
    currentTab: 'introduction',
    artworkInfo: {
      name: '唐卡示例',
      createTime: '2023-09-03',
      type: '藏画',
      size: '100cm×70cm',
      information: '这里是一大段介绍，这里是一大段介绍，这里是一大段介绍，这里是一大段介绍，这里是一大段介绍，这里是一大段介绍。',
    },
    scale: 1,
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
  },

  onScroll(e) {
    const { scrollTop } = e.detail;
    const scale = 1 - 0.005 * scrollTop;
    this.setData({
      scale: scale < 0.7 ? 0.7 : scale,
    });
  },
});
