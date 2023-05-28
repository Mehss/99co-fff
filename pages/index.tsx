import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import reactStringReplace from "react-string-replace";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ProductDescriptionStringReplacer from "../components/ProductDescriptionStringReplacer";
import styles from '../styles/Home.module.css';
import "swiper/css";
import "swiper/css/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductInfo } from "../types/types";

const store = {
  url: "./mock-api.json"
};

interface CardComponentPageProps {
  productData: ProductInfo;
}

export const CardComponentPage = ({productData}) => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true)
  useEffect(() => {setIsDescriptionVisible(false)}, [])

  if (!productData) return null
  
  return (
    <div 
      style={{
        boxShadow: '1px 2px 9px #555555',
        margin: '4em',
        maxWidth: '544px',
      }}
    > 
      <div className="position-relative" onMouseEnter={() => setIsNavVisible(true)} onMouseLeave={() => setIsNavVisible(false)}> 
        <img className={styles.launchingSoonIcon} src={'/launching-soon.png'} />
        <Swiper 
          navigation={isNavVisible} 
          modules={[Navigation]} 
          autoHeight
          centeredSlides
          style={{
            '--swiper-navigation-color': "#fff",
            maxWidth: 544,
            maxHeight: 300,
          }}
        >
          {productData.pic.map((img, index) => 
            <SwiperSlide 
              key={img+index}
              style={{
                height:300,
                backgroundColor: 'lightgray',
                justifyContent:'center',
              }}
              className="d d-flex"
            >
              <img 
                style={{
                  height:'100%',
                  maxWidth: '100%',
                  objectFit:'cover',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                src={img} 
                alt={`image-${index} of ${productData.title}`} 
                className="center"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="mainContent px-3 py-3">
        <div className="d-flex flex-dir-row px-2 justify-content-between" >
          <div>
            <div className="d-flex flex-dir-row my-2" >
              <img src={'/building-icon.svg'} className="mx-2" />
              <div>
                <h5 className={`${styles.fontBold} my-1 mx-1`} > {productData.title} </h5>
                <h6 className={`${styles.fontMedium} my-1 mx-1 text-black-50`} > {productData.address}</h6>
              </div>
            </div>
            <b className={`${styles.fontMedium} my-1`} style={{textAlign: "left"}}> {productData.project_type} · {productData.year} · {productData.ownership_type} </b>
            <p className={`${styles.fontMedium} my-1`} style={{textAlign: "left"}}> {productData.availabilities_label} </p>
          </div>
          <div style={{alignItems: 'end'}} className="d-none d-sm-block my-2">
            <h5 className={`${styles.fontBold} my-1 mx-1`} style={{fontFamily: 'fontBold', textAlign: "right"}} > 
              ${productData.psf_min.toLocaleString()} - ${productData.psf_max.toLocaleString()} psf
            </h5>
            <h6 className={`${styles.fontMedium} my-1 mx-1 text-black-50`} style={{textAlign: "right"}} >{productData.subprice_label}</h6>
          </div>
        </div>
        <div className="d-flex flex-dir-row my-2 d-sm-none align-items-center">
          <h5 className={`${styles.fontBold} mx-1 align-text-center`} > ${productData.psf_min.toLocaleString()} - ${productData.psf_max.toLocaleString()} psf</h5>
          <h6 className={`${styles.fontMedium} mx-2 text-black-50 align-text-center`} >{productData.subprice_label}</h6>
        </div>
        { !isDescriptionVisible &&
          <div style={{alignItems: 'end'}} className="pa-3">
            <p className={`text-primary ${styles.fontDemibold}`} style={{textAlign: "right"}} onClick={() => setIsDescriptionVisible(true)}>See Description</p>
          </div>
        }
        { isDescriptionVisible &&
          <div style={{textAlign: "left"}} className="px-2">
            {
              reactStringReplace(productData.description, /(\d{4} \d{4}|\d{8}|\n\n)/g, (match, i) => (
                <ProductDescriptionStringReplacer key={match + i} string={match} i={i} />
              ))            
            }
            <p className={`text-primary ${styles.fontDemibold}`} style={{textAlign: "right"}} onClick={() => setIsDescriptionVisible(false)}>Hide Description</p>
          </div>
        }
      </div>
    </div>
  );
};

export default CardComponentPage;

export const getServerSideProps: GetServerSideProps<CardComponentPageProps> = async () => {
  const productData: ProductInfo = await require('../public'+store.url.substring(1))
  return {
    props: {productData: productData}
  }
}