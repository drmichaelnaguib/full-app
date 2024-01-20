const getFirstProductImg = (product) => {
  // 3shan law 7awelna n access el zero index beta3 el array eli rage3 men split w howa tele3 empty hayedrab error so:
  return product.pics.split(",,").length > 0 ? product.pics.split(",,")[0] : "";
};

const getProductImages = (product) => {
  return product.pics.split(",,");
};

export { getFirstProductImg, getProductImages };
