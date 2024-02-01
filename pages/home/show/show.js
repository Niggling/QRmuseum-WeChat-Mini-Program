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
    authorInfo: {
      name: '启加',
      information: '启加大师（1939年10月20日—2007年12月13日），中国青海省黄南州热贡人，中国工艺美术大师，国家级非物质文化遗产项目热贡艺术代表性传承人。1939年出生在热贡年都乎乡尕沙日村一个有着近500年传承历史的“神画师”家族，是世界上唯一保持着完整的唐卡传承法脉谱系，是构成热贡画派的重要一支。从家族第一代师祖降央贡却青佩开始，历经贡却金巴、罗桑热赛、降央热杰、索南热丹、塔克热赛、旺智坚参、更登隆朵热赛、香曲热赛、格乐、罗藏西热、更藏，“神画师”家族传承至启加已13代、传承近500年，绵延有序， 启加大师是热贡“神画师”家族第十三代传承人，8岁在尕沙日寺院出家为僧，在其叔罗藏西热大师门下学习唐卡绘画，12岁跟随罗藏西热大师到西藏桑耶寺、甘肃拉卜楞寺、青海塔尔寺等藏区各大寺院绘画唐卡。一生中描绘出两千多幅匠心独运、精美绝伦的唐卡艺术珍品留传于世。1987年启加大师受到了时任中共中央总书记胡耀邦的接见并合影留念，总书记还亲笔题写“热贡艺术馆”名。2006年12月经第五届中国工艺美术大师评审工作领导小组批准，授予启加大师中国工艺美术大师荣誉称号。2007年被国家文化部命名为国家级非物质文化遗产项目热贡艺术代表性传承人。 启加大师屡获国内外殊荣和赞誉，其一生绘画的2000多幅精美绝伦、叹为观止的唐卡艺术珍品多被国家级名刹古寺珍藏，并被美国、法国、日本、新加坡及东南亚等国家博物馆和美术馆等收藏机构收藏。',
    },
    scale: 1,
    showPopup: false, // 控制图片浮动层的显示与隐藏
  },
  
  showImagePopup() {
    this.setData({
      showPopup: true,
    });
  },

  hideImagePopup() {
    this.setData({
      showPopup: false,
    });
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
