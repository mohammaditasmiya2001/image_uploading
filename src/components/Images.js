import React from "react";
import { firestore, storage } from "../API/firebase";
import "./comps.css";
const Images = ({ images, setAllImages, allImages, setImages }) => {
  const deleteImage = (url, docId) => {
    storage
      .refFromURL(url)
      .delete()
      .then(() => {
        firestore
          .collection("images")
          .doc(docId)
          .delete()
          .then(() => {
            setAllImages(allImages.filter((image) => image.data.url !== url));
            setImages(allImages.filter((image) => image.data.url !== url));
            alert("deletd successfully");
          });
      });
  };
  return (
    <div className="flex justify-center items-center ">
      {images.length < 1 ? (
        <h1 className="text-center my-5">No Images Found</h1>
      ) : (
        images.map((img, key=img.Title) => (
          <div className="card w-[286px] h-[372px]">
            <img src={img.data.url} className="h-[180px] w-[286px] card-img-top" alt="logo"/>
              <div className="card-body">
                <h5 className="card-title">{img.data.Title}</h5>
                <textarea  disabled cols={32} className="card-text h-30">{img.data.desc}</textarea>
                <a href="!#" className="btn btn-primary" onClick={() => deleteImage(img.data.url, img.id)}>Delete</a>
              </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Images;