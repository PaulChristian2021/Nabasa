import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.onFormSubmit} className={props.formClassName}>
      {props.children}
      <div className="flex flexCenter margin15 width100">
        <input
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          className={props.className}
          placeholder={props.placeholder}
        />
        <button className="padding10 noBorder salmonBg whiteFont">
        <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
