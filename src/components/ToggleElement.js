import React, { Component } from 'react';

class ToggleElement extends Component {
  
  componentWillMount () {
    this.setState( { isChecked: this.props.isChecked } );
  }

  render() {
    return (
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="switch--tog"></span>
        </label>
      </div>
    )
  }
}

export default ToggleElement;