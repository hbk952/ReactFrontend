import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;  //no need to use props.title etc now
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="Not Loaded" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
