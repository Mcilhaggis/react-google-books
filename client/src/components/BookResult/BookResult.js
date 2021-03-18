import React from "react"
function BookResult({ title, authors, description, alt, image, subtitle, handleClick, btnName, viewLink }) {
    return (
        <div className="container-fluid p-4 book-container text-center border mt-3">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <h4>{authors}</h4>
            <div className="row">
                <div className="col-sm-4">
                    <img src={image} alt={alt} className="mt-3"></img>
                </div>
                <div className="col-sm-8 mt-5 bg-light">
                    <a href={viewLink} target="_blank" rel="noopener noreferrer"><button className="float-right btn-dark mt-3 ml-2 mb-1">VIEW</button></a>
                    <button className="float-right float-clear btn-dark mt-3 mb-1" onClick={handleClick}>{btnName}</button>
                    <p className="mt-5">{description ? description : <span>No description available</span>}</p>
                </div>
            </div>
        </div>
    );
}
export default BookResult;