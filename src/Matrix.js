import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
Matrix.defaultProps = {
    values: new Array(10).fill(new Array(10).fill("#F00")),
  };

