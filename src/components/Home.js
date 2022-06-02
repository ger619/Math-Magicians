import React, { Component } from 'react';
import './Calculator.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="app1">
        <div className="header-home">
          <h1>Welcome to our page</h1>
          <br />
          {/* eslint-disable-next-line max-len */}
          <p> Nullam vulputate magna ac accumsan tristique. Vivamus aliquam, ipsum at facilisis suscipit, arcu augue bibendum ex, a commodo purus eros eu arcu. Suspendisse et placerat erat. Cras lectus nisi, molestie at auctor non, vulputate non est. Suspendisse sodales molestie congue. Nulla metus sem, egestas non porta id, lobortis in nunc. Vivamus cursus pulvinar sem, in consequat lacus dignissim non. Fusce imperdiet eleifend lacus vitae placerat. Phasellus imperdiet sed ex quis imperdiet. Integer et cursus mauris. Integer commodo in justo in gravida.</p>
          <br />
          {/* eslint-disable-next-line max-len */}
          <p>Donec eget elit orci. In mollis euismod lectus eget fermentum. Cras ipsum mauris, varius eu facilisis vel, tristique sed ligula. Praesent id leo vel massa vestibulum lacinia. Fusce in mauris vel massa aliquam luctus. Pellentesque facilisis tempus risus, vel blandit libero luctus ut. Mauris ac interdum libero. Curabitur elementum, nulla eleifend tincidunt rhoncus, velit ante pulvinar elit, lobortis dignissim sem lectus volutpat nulla. Duis sit amet nulla vitae lacus bibendum pretium vitae in eros. Sed rhoncus nibh at libero lobortis, non suscipit diam interdum. Ut sollicitudin dui eget lectus condimentum, in suscipit eros scelerisque. Donec a nunc ligula. Quisque sed rutrum ligula, sit amet facilisis mauris.</p>
        </div>
      </div>

    );
  }
}
export default Home;
