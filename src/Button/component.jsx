import React from 'react';
import styles from './styles.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(val) {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.value);
    }
  }

  render() {
    const props = this.props;
    const value = props.label ? props.label : props.value;
    return (
      <button className={styles.btn} onClick={this.handleSelect}>{value}</button>
    );
  }
}
