import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    const style1 = {background: "#f1f1ef"}
    const headlines = {color: "#34421e"}
    const bg = {background: "#34421e"}
    // const boxshadow = {boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)"}
    return (
      <div className="my-3">
        <div
          className="card"
          style={{...style1}}
        >
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-#34421e"
            style={{ left: "88%", zIndex: "1", background: "#34421e", fontWeight: "normal" }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/22_04_2022_10_21_04_854034.jpg?width=920&format=jpeg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 style={{...headlines, fontSize: "19px"}} className="card-title">{title}...</h5>
            <p style={{...headlines, fontSize: "15px"}} className="card-text">{description}...</p>
            <p className="card-text">
              <small className="" style={{opacity: "0.7", fontSize: "12px" }}>
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              style={{...bg}}
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
