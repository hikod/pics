import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: "" });
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="ui grid center aligned container segment">
        <div className="sixteen wide column">
          <form className="ui category search" onSubmit={this.handleSubmit}>
            <div className="ui fluid icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search ..."
                value={this.state.search}
                onChange={this.handleChange}
              ></input>
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
