import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import createProps from '../createProps';
import style from 'flexboxgrid';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

class Grid extends Component {
  constructor(props){
      super(props);
  }
  render(){
    const containerClass = style[this.props.fluid ? 'container-fluid' : 'container'];
    const className = classNames(this.props.className, containerClass);

    return React.createElement(this.props.tagName || 'div', createProps(propTypes, this.props, className));
  }

}
Grid.propTypes = propTypes;
export default Grid;
