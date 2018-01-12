import React, { Component } from 'react';

class Loading extends Component {
  constructor() {
    super();

    this.state = { dots: "." };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        dots: this.state.dots.length === 3 ? "" : this.state.dots + "."
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">
        Cargando{this.state.dots}
      </div>
    );
  }
}
export default Loading;
