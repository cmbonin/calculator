import React from 'react';
import styles from './styles.scss';

export default class Calulator extends React.Component {
  render() {
    console.log(styles)
    return (
      <div className="content">
        <div className={styles.grid}>
          <div id="display" className="display"></div>
          <button id="btn-equals" className={styles.btnEquals}>=</button>
          <button id="btn-plus" className="btn-plus">+</button>
          <button id="btn-minus" className="btn-minus">-</button>
          <button id="btn-times" className="btn-times">x</button>
          <button id="btn-divide" className="btn-divide"></button>
          <button id="btn-clear" className="btn-clear">C</button>
          <button id="btn-del" className="btn-del">DEL</button>
          <button id="btn-zero" className="btn-zero">0</button>
          <button id="btn-one" className="btn-one">1</button>
          <button id="btn-two" className="btn-two">2</button>
          <button id="btn-three" className="btn-three">3</button>
          <button id="btn-four" className="btn-four">4</button>
          <button id="btn-five" className="btn-five">5</button>
          <button id="btn-six" className="btn-six">6</button>
          <button id="btn-seven" className="btn-seven">7</button>
          <button id="btn-eight" className="btn-eight">8</button>
          <button id="btn-nine" className="btn-nine">9</button>
          <button id="btn-dot" className="btn-dot">.</button>
          <button id="btn-pos-neg" className="btn-pos-neg">+/-</button>
        </div>
      </div>
    );
  }
}
