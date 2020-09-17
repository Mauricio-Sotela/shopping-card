import React from "react";

const FilterBar = (props) => {
  return (
   <React.Fragment>
        <div className="myBtnContainer ">
          <button className="btn active" onClick={props.all}>
            Show all
          </button>
          <button className="btn" onClick={props.nuts}>
            Nuts
          </button>
          <button className="btn" onClick={props.fruits}>
            Fruits
          </button>
          <button className="btn" onClick={props.vegetables}>
            Vegetables
          </button>
          <button className="btn" onClick={props.clothes}>
            Clothes
          </button>
        <h3>{props.title}</h3>

        </div>
   </React.Fragment>
  );
};

export default FilterBar;
