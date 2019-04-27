import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>FIND AWESOME GIF</h2>
        <form onSubmit={this.handleSubmit}>
          {/* onChange: Work when changed the value */}
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Search!!" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    // event: value={this.state.title}
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    // To prevent to go to another page after click submit クリック後、ページの遷移を防ぐ。
    event.preventDefault();

    this.props.search(this.state.title);
    // let's clear the title after click submit
    this.setState({ title: "" });
  };
}
