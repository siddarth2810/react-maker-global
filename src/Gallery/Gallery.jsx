import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import React, { useEffect, useState } from "react";
import {
  UploadcareSimpleAuthSchema,
  listOfFiles,
} from "@uploadcare/rest-client";
import "./Gallery.css";

import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const [imageObject, setImageObject] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
          publicKey: "7d77ffcfdaf49c16ae0f",
          secretKey: "13e342e4005e038787d9",
        });

        const result = await listOfFiles(
          {},
          { authSchema: uploadcareSimpleAuthSchema }
        );
        setImageObject(result.results);
        setFilteredImages(result.results); // Initially, filteredImages is the same as imageObject
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const categories = ["architecture", "scalemodels", "All", "Transportation"];

  const getCategoryImages = (e) => {
    const category = e.target.innerText;
    if (category == "All") {
      setFilteredImages(imageObject); // If the category is "All", show all images

      return;
    } else {
      const newFilteredImages = imageObject.filter((image) =>
        image.originalFilename.includes(category)
      );
      setFilteredImages(newFilteredImages); // Update the filteredImages state
    }
  };

  return (
    <>
      <HeaderAndNav />
      <div className="Gallery-container">
        <div className="Gallery-containercategories-box">
          <h1>Categories</h1>
          <ul className="categories-item-box">
            {categories.map((category, index) => (
              <li key={index} onClick={getCategoryImages}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="image-box container-fluid">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            thumbnail={true}
            galleryId={"nature"}>
            {filteredImages
              .slice()
              .reverse()
              .map((image, index) => (
                <a
                  key={index}
                  className="gallery__item"
                  data-src={image.originalFileUrl}>
                  <img
                    className="img-responsive"
                    src={image.originalFileUrl}
                    alt={`Image ${image.originalFilename}`}
                  />
                </a>
              ))}
          </LightGallery>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
