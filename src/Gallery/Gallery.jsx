import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { UploadcareSimpleAuthSchema, listOfFiles } from "@uploadcare/rest-client";
import { ClipLoader } from "react-spinners";
import HeaderAndNav from "../components/HeaderAndNav";
import "./Gallery.css";

function Gallery() {
  const [imageObject, setImageObject] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Scale Models");
  const [visibleRows, setVisibleRows] = useState(3);

  const IMAGES_PER_ROW = 5;

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
        
        const filteredScaleModels = filterImagesByCategory("Scale Models", result.results);
        setFilteredImages(filteredScaleModels);
        setDisplayedImages(filteredScaleModels.slice(0, visibleRows * IMAGES_PER_ROW));
        
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedImages(filteredImages.slice(0, visibleRows * IMAGES_PER_ROW));
  }, [filteredImages, visibleRows]);

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

  const categoryMapping = {
    "3D Printing": "3dprinting",
    "Scale Models": "scalemodels",
    Manufacturing: "manufacturing",
    "Design/Scan": "designscan",
    "Movie Works": "movie",
    Manprotto: "manprotto",
    Photos: "photos",
  };

  const filterImagesByCategory = (category, images) => {
    if (category === "All") {
      return images;
    } else {
      const filenamePart = categoryMapping[category];
      return images.filter((image) =>
        image.originalFilename.includes(filenamePart)
      );
    }
  };

  const getCategoryImages = (e) => {
    const category = e.target.innerText;
    setSelectedCategory(category);
    setVisibleRows(3);  // Reset to initial 3 rows when changing category
    
    const newFilteredImages = filterImagesByCategory(category, imageObject);
    setFilteredImages(newFilteredImages);
  };

  const handleShowMore = () => {
    setVisibleRows(prevRows => prevRows + 3);
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

        {loading ? (
          <div className="spinner-container">
            <ClipLoader size={50} color={"#007bff"} loading={loading} />
          </div>
        ) : (
          <>
            <div className="image-box">
              <LightGallery
                onInit={() => console.log("lightGallery has been initialized")}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                mobileSettings={{ showCloseButton: true }}
                thumbnail={true}
                galleryId={"nature"}>
                {displayedImages
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
                        alt={`Gallery image ${index + 1}`}
                      />
                    </a>
                  ))}
              </LightGallery>
            </div>
            {filteredImages.length > displayedImages.length && (
              <div className="text-center mt-4 mb-4">
                <button className="btn btn-outline-success show-more-button" onClick={handleShowMore}>
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Gallery;
