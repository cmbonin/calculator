import React from 'react';
import styles from './styles.scss';

export default class Calulator extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className={styles.grid}>
          <div id='display' className={styles.display}></div>
          <button id='btn-equals' className={`${styles.btnEquals} btn`}>=</button>
          <button id='btn-clear' className='btn'>C</button>
          <button id='btn-del' className='btn'>DEL</button>
          <button id='btn-pos-neg' className='btn'>+/-</button>
          <button id='btn-plus' className='btn'>+</button>
          <button id='btn-one' className='btn'>1</button>
          <button id='btn-two' className='btn'>2</button>
          <button id='btn-three' className='btn'>3</button>
          <button id='btn-minus' className='btn'>-</button>
          <button id='btn-four' className='btn'>4</button>
          <button id='btn-five' className='btn'>5</button>
          <button id='btn-six' className='btn'>6</button>
          <button id='btn-times' className='btn'>x</button>
          <button id='btn-seven' className='btn'>7</button>
          <button id='btn-eight' className='btn'>8</button>
          <button id='btn-nine' className='btn'>9</button>
          <button id='btn-divide' className='btn'>/</button>
          <button id='btn-zero' className='btn'>0</button>
          <button id='btn-dot' className='btn'>.</button>
        </div>
      </div>
    );
  }
}
