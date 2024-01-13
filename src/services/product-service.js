const getFirstProductImg = (product) => {
  return product.pics.split(",,").length > 0 ? product.pics.split(",,")[0] : "";
};

const getProductImages = (product) => {
  return product.pics.split(",,");
};

export { getFirstProductImg, getProductImages };
