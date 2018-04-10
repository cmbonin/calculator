import React from 'react';
import Button from '../Button/component';
import styles from './styles.scss';

export default class Calulator extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.backspace = this.backspace.bind(this);
    this.state = {
      equation: '',
      total: ''
    }
  }

  calculate(val) {
    const newEquation = `${this.state.equation} ${val}`;
    this.setState({equation: newEquation});
  }

  getTotal() {
    const newEquation = this.state.equation;
    const converted = this.convertToEvalFormat(newEquation);
    const total = eval(converted);
    this.setState({total: total});
  }

  clearDisplay() {
    this.setState({
      total: '',
      equation: ''
    });
  }

  clearDisplay() {
    this.setState({
      total: '',
      equation: ''
    });
  }

  convertToEvalFormat(newEquation) {
    if (!newEquation || typeof newEquation !== 'string') {
      return '';
    }
    let evalFormat = this.trimString(newEquation);
    // remove all nasty chars
    evalFormat = evalFormat.replace(/[^-()\d/*+.]/g, '');
    // remove characters after last number
    evalFormat = evalFormat.replace(/\D+$/g, '');
    return evalFormat;
  }

  trimString(toTrim) {
    if (!toTrim || typeof toTrim !== 'string') {
      return '';
    }
    return toTrim.split(' ').join('');
  }

  backspace() {
    let newEquation = this.state.equation;
    var lastIndex = newEquation.lastIndexOf(" ");
    newEquation = newEquation.substring(0, lastIndex);
    this.setState({equation: newEquation});
  }

  render() {
    const currentOperation = this.trimString(this.state.equation);
    return (
      <div className='content'>
        <div className={styles.grid}>
          <div id='display' className={styles.display}>
            <div className={styles.total}>{this.state.total}</div>
            <div className={styles.equation}>{currentOperation}</div>
          </div>
          <div className={styles.btnEquals} onClick={this.getTotal} onSelect={this.calculate}><Button  value='='/></div>
          <Button value='C' onSelect={this.clearDisplay} />
          <Button value='DEL' onSelect={this.backspace} />
          <Button value="+/-" onSelect={this.calculate}/>
          <Button value='+' onSelect={this.calculate}/>
          <Button value='1' onSelect={this.calculate}/>
          <Button value='2' onSelect={this.calculate}/>
          <Button value='3' onSelect={this.calculate}/>
          <Button value='-' onSelect={this.calculate}/>
          <Button value='4' onSelect={this.calculate}/>
          <Button value='5' onSelect={this.calculate}/>
          <Button value='6' onSelect={this.calculate}/>
          <Button value='*' label='x' onSelect={this.calculate}/>
          <Button value='7' onSelect={this.calculate}/>
          <Button value='8' onSelect={this.calculate}/>
          <Button value='9' onSelect={this.calculate}/>
          <Button value='/' onSelect={this.calculate}/>
          <Button value='0' onSelect={this.calculate}/>
          <Button value='.' onSelect={this.calculate}/>
        </div>
      </div>
    );
  }
}
