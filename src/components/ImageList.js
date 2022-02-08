import React from "react";

const ImageList = (props) => {
  return (
    <div>
      {props.images.map(({ id, description, urls }) => {
        return <img src={urls.thumb} alt={description} key={id} />;
      })}
    </div>
  );
};

export default ImageList;
