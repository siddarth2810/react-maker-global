import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  UploadcareSimpleAuthSchema,
  listOfFiles,
} from "@uploadcare/rest-client";
import "./Gallery.css";

import { ClipLoader } from "react-spinners";
import HeaderAndNav from "../components/HeaderAndNav";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const [imageObject, setImageObject] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedCategory, setSelectedCategory] = useState("Scale Models");

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
        setLoading(false); // Set loading to false
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false
      }
    };
    fetchData();
  }, []);

  const categories = [
    "All",
    "3D Printing",
    "Scale Models",
    "Manufacturing",
    "Design/Scan",
    "Movie Works",
    "Manprotto",
    "Photos",
  ];

  // Mapping of display names to filename parts
  const categoryMapping = {
    "3D Printing": "3dprinting",
    "Scale Models": "scalemodels",
    Manufacturing: "manufacturing",
    "Design/Scan": "designscan",
    "Movie Works": "movie",
    Manprotto: "manprotto",
    Photos: "photos",
  };

  const getCategoryImages = (e) => {
    const category = e.target.innerText;
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredImages(imageObject); // If the category is "All", show all images
    } else {
      const filenamePart = categoryMapping[category];
      const newFilteredImages = imageObject.filter((image) =>
        image.originalFilename.includes(filenamePart)
      );
      setFilteredImages(newFilteredImages); // Update the filteredImages state
    }
  };

  return (
    <>
      <HeaderAndNav />
      <div className="Gallery-container">
        <div className="Gallery-containercategories-box">
          <ul className="categories-item-box">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={getCategoryImages}
                className={category === selectedCategory ? "selected" : ""}>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {loading ? ( // Conditional rendering based on loading state
          <div className="spinner-container">
            <ClipLoader size={50} color={"#007bff"} loading={loading} />
          </div>
        ) : (
          <div className="image-box">
            <LightGallery
              onInit={() => console.log("lightGallery has been initialized")}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              mobileSettings={{ showCloseButton: true }}
              thumbnail={true}
              galleryId={"nature"}>
              {filteredImages
                .slice()
                .reverse()
                .map((image, index) => (
                  <a
                    key={index}
                    className="gallery-item"
                    data-src={image.originalFileUrl}>
                    <img
                      className="img-responsive"
                      src={image.originalFileUrl}
                    />
                  </a>
                ))}
            </LightGallery>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Gallery;
