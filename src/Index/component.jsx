import React from 'react';
import Calculator from '../Calculator/component';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          <div className="container">
            <h1>Calulator</h1>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <Calculator />
          </div>
        </main>
      </div>
    );
  }
}
