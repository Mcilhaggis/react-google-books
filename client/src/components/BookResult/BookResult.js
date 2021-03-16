import React from "react"

function BookResult({ title, authors, description, alt, image, subtitle, handleClick, btnName, viewLink }) {
    return (
        <div className="container-fluid p-5 book-container">
            <div className="row">
                <div className="col-sm-3">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <h4>{authors}</h4>
                    <img src={image} alt={alt}></img>
                </div>
                <div className="col-sm-9 mt-5">
                    <a href={viewLink} target="_blank" rel="noopener noreferrer"><button className="float-right btn-dark m-1">VIEW</button></a>
                    <button className="float-right btn-dark m-1" onClick={handleClick}>{btnName}</button>
                    <p className="mt-5">{description}</p>
                </div>
            </div>
        </div>

    );
}

export default BookResult;
