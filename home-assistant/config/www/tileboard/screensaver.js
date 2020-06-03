function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const slideList = [
  {
    bg: 'images/screensaver_pics/0715cbed-3462-48bb-800a-0312431b07c7.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/0ff95572-7e8e-4d4c-bd12-298f35628bf7.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/1227a69c-e133-4e81-862d-ab81e5ddbd2b.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181118_115716.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181122_110524.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181123_161521.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181123_170451.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181123_175210.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181124_091431.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181124_160708.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181127_140651 copy.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20181201_090525.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20190929_140053.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20190929_141503.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191001_115016 (1).jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191002_090906.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191002_122004.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191003_082645.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191003_084844.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191003_111326.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191003_111641.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191003_121659.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191005_080147.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191005_152336.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191007_103918.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191007_111335.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191007_113435.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191010_112647.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191010_112729.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191010_120009.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191011_104853.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/20191012_095831.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/234.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/2384e3ca-08a3-4bf4-93ed-ae5e71193a1f.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/25b5b113-f595-4fc0-ba63-537c48efc6e1.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/334f8490-9d3d-405a-87ca-125810b4bc0c.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/334f8490-9d3d-405a-87ca-125810b4bc0c.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/36f7b5d7-23cd-426c-b840-9f9b3c0b126e.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/39ca44c4-2d37-45d2-b081-52d953dbea88.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/48735a78-4b5a-48f4-a0f5-79e2dd7c2eaa.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/4db8f4bd-a131-4396-a00b-d62a3e46a3ea.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/506e7f44-1984-449c-b53c-677b7e549e33.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/506e7f44-1984-449c-b53c-677b7e549e33.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/53416048-87ae-4825-b824-dcb3df665cc0.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/549b8305-b144-440d-b62b-1763076a36e2.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/579e4aec-cf4f-4db7-8d92-da3811f53ba6.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/5fb06663-fc1e-4b4c-82db-0cef9de60d15.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/61.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/67680663-c1c7-49ff-a81a-bfe29fe22354.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/7015628f-ac06-4f19-ba7a-719a50e711c1.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/70bfde53-6b07-4ec2-91e6-214d417c5841.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/70bfde53-6b07-4ec2-91e6-214d417c5841.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/7572c45b-a155-4d98-ac36-a5af218dfd1f.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/784491f7-13ab-4f30-9bd5-efb22fb90784.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/7be2aada-c54b-4ed9-878e-8a7c6e974be1.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/8265ee71-b5ed-4d11-8ad9-37caa663a680.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/87be3fdb-b68e-4925-ba44-5dd0467c2568.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/8cf24b37-0b66-4dbd-8eb5-2bf576c60886.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/94e0efe6-d11b-4f44-8a42-0a87773113ad.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/a7c3606a-b9bb-4416-bd13-ad3868d78c8a.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/b35aec92-4a13-4f61-a89e-3d84ff7d0846.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/bd9c2d3d-6bd4-4ec6-88d5-430173b63150.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/bdddfcb6-f068-4f4c-abb2-24f789c739a8.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/be7b3228-70f0-47ae-8a2c-ab8d08a9cca9.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/c0d2d8cd-8d7d-41d6-87f2-af3028f3bfb6.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/c5db985d-62c8-439e-8e91-fe2c74f3bdf5.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/ccdcf478-17d8-43f7-808b-412f50f4d070.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/d637e619-0702-4e9d-803d-0ba6a1c2699c.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/d6d0e080-0580-461b-b1cb-0bf36bfbb070.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/de3316e8-f522-4dc9-a087-2db02665fe57.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/ea12b8d4-861a-4dd6-b6e8-ce460f2a282a.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/f1d47cd0-6e11-4a42-924c-8322ce01f236.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/f352dd3e-b97e-4e17-b0d8-228ee748e18a.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/f47ad897-e5ee-4087-8ad1-dcca90af2a6d.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/fa0aff67-bceb-4823-a7c6-9419d278693f.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/fd5b89c3-7d8a-4b96-ba2c-005325d8577a.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/fff3df8a-f22e-4706-983f-ea1a85d500cc.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/F_Ml-3.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/F_Mm-18.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/F_Mp-68.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/F_Mp-74.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/G0023152.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/G0025788.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/G0035801.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/GOPR3145.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0018.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0022.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0070.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0071.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0103.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0105.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0135.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0298.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0354.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0395.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0452.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0486.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0494.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_0496.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1489.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1494.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1519.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1585.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1588.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1629.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1635.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1663.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1795.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1876.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1881.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1931.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1949.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1955.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_1956.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2099.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2128.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2166.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2168.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2203.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2209.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2246 (1).jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2504.jpg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2514.jpg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2563.jpg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2565.jpg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2827.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2828.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_2830.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_3984.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_4376.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_4410.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_4416.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_4853.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_5075.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_5094.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_5102.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_5165.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_5963.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6019.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6485.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6489.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6492.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6502.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6649.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6711.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6722.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_6784.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7018.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7024.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7106.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7403.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7460.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7530.jpeg',
    rightBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7554.jpeg',
    leftTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7655.jpeg',
    rightTop: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  },
  {
    bg: 'images/screensaver_pics/IMG_7814.jpeg',
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }]
  }
]

const screenSaverConfig = {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
  timeout: 10, // after 5 mins of inactive
  slidesTimeout: 10, // 10s for one slide
  styles: { fontSize: '40px' },
  slides: shuffle(slideList)
}
