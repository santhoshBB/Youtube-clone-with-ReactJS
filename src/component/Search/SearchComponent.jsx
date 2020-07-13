import React, { Component, Fragment } from "react";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ term: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.FromHeaderProps(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="inp"
          value={this.state.term}
          onChange={this.onChange}
        />

        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default SearchComponent;
