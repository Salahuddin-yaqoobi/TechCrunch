import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description , imageUrl , newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://i.insider.com/66bb69f5955b01c3294e0843?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn-m btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
