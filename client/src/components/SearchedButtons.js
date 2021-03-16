import React from "react"

function SavedButtons({ handleDelete }) {
    return (
        <div className="col-sm-9 mt-5">

            <button className="float-right btn-dark m-1">VIEW</button>
            <button className="float-right btn-dark m-1" onClick={handleDelete}>DELETE</button>
        </div>

    );
}

export default SavedButtons;
