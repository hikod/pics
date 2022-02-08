import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  return (
    <div>
      {props.images.map(({ id, description, urls }) => {
        return <img src={urls.regular} alt={description} key={id} />;
      })}
    </div>
  );
};

export default ImageList;
