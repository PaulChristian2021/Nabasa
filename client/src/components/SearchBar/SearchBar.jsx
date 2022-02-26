import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.onFormSubmit} className={`${props.formClassName} flex flexCenter width100`}>
      {props.children}
      <div className="flex flexCenter margin15 width100">
        <input
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          className={`${props.className} padding10 noBorder width100 maxWidth400 darkHover`}
          placeholder={props.placeholder}
          ref={props.ref}
        />
        <button className="padding10 noBorder salmonBg whiteFont">
        <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
