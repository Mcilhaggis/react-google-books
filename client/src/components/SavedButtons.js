import React from "react"

function SavedButtons({ handleSave }) {
    return (
        <div className="col-sm-9 mt-5">

            <button className="float-right btn-dark m-1">VIEW</button>
            <button className="float-right btn-dark m-1" onClick={handleSave}>SAVE</button>
        </div>

    );
}

export default SavedButtons;
