import React, {Component} from 'react'
import Shape from "./Shape.js"

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
      shapeCount: 0 ,
      indShapeCount: 0,
    };
  };

  render () {
    return (

      <div className = "container">

        <div className = "navbar">
          <div>Selected: </div>
          <div>{this.state.selectedShape}</div>
        </div>

        <div className= "shape-list">
          <Shape shape="square" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="circle" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="triangle" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="trapezium" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="oval" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="triangle_down" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
          <Shape shape="star" selectShape={this.selectShape} count={this.count} indCount={this.indCount}/>
        </div>

        <div className= "footer">
          <div> shape count: </div>
          <div>{this.state.shapeCount}</div>
          <div>{this.state.selectedShape}</div>
          <div>was selected</div>
          <div>{this.state.indShapeCount}</div>
        </div>

      </div>
    )
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName
    })
  }

  count = () => {
    this.setState({
      shapeCount: this.state.shapeCount + 1
    })
  }

  // currently working on .... 
  indCount = () => {
    // if((this.state.selectedShape === 'square') && (this.state.indShapeCount !== 0)) {
    //   this.setState({
    //     indShapeCount: 0,
    //     indShapeCount: this.state.selectedShape = this.state.indShapeCount + 1
    //   })
    // }
    // if((this.state.selectedShape === 'circle') && (this.state.indShapeCount !== 0)) {
    //   this.setState({
    //     indShapeCount: 0,
    //     indShapeCount: this.state.selectedShape = this.state.indShapeCount + 1
    //   })
    // }

  }


}

export default Selector;