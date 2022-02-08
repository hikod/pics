import React from "react";
class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui grid center aligned container segment">
        <div className="sixteen wide column">
          <div className="ui category search">
            <div className="ui fluid icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search ..."
              ></input>
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
