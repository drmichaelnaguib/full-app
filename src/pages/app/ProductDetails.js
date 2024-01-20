import { useEffect, useState } from "react";
import { sendRequest } from "../../services/api-service";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getProductImages } from "../../services/product-service";

const ProductDetails = () => {
  const params = useParams();
  const [productData, setProductData] = useState({
    name: "",
    info: "",
    pics: "",
  });

  useEffect(() => {
    sendRequest(`products/${params.productId}.json`, "GET").then((res) => {
      if (res) {
        setProductData(res);
      }
    });
  }, []);

  return (
    <div>
      <h1>details of {productData.name}</h1>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {getProductImages(productData).map((picUrl) => {
            return (
              <SwiperSlide>
                <img src={picUrl} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>{productData.info}</div>
    </div>
  );
};
export default ProductDetails;
