import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';
import createProps from '../createProps';
import style from 'flexboxgrid';

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

const propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

function getClassNames(props) {
  const modificators = [style.row];

  for (let i = 0; i < modificatorKeys.length; ++i) {
    const key = modificatorKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(style[`${key}-${value}`]);
    }
  }

  if (props.reverse) {
    modificators.push(style.reverse);
  }

  return classNames(props.className, modificators);
}

class Row extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return React.createElement(this.props.tagName || 'div', createProps(propTypes, this.props, getClassNames(this.props)));
  }
}

Row.propTypes = propTypes;
export default Row;
