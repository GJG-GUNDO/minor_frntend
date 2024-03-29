import React from "react";
import Style from "./SliderCard.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const SliderCard = () => {
  return (
    <div>
      <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
          <motion.div className={Style.sliderCard_box_img}>
            <Image
              className={Style.sliderCard_box_img_img}
              src={images.creatorbackground10}
              alt="slider profile"
              width={500}
              height={300}
              objectFit="cover"
            />
          </motion.div>
          <div className={Style.sliderCard_box_title}>
            <p>NFT Video #1245</p>
            <div className={Style.sliderCard_box_title_like}>
              {/* <LikeProfile /> */}
              <small>1 of 100</small>
            </div>
          </div>

          <div className={Style.sliderCard_box_price}>
            <div className={Style.sliderCard_box_price_box}>
              <small>Current Bid</small>
              <p>1.000 ETH</p>
            </div>

            <div className={Style.sliderCard_box_price_time}>
              <small>Remaining Time</small>
              <p>3h : 15m: 20s</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SliderCard;
