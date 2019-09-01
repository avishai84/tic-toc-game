import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sqaure from './components/Square';
import Board from './components/Board';
import { shallow } from 'enzyme';
import { expect } from 'chai';


describe('testing if class on wrapper exist', () => {
  it('will check if .square class present', () => {
    const component = shallow(<Sqaure></Sqaure>);
     expect(component.exists('.square')).to.equal(true);
  })
})


describe('testing if button elements exist', () => {
  it('will check if buttons exists', () => {
    const component = shallow(<Sqaure className="square"></Sqaure>);
    expect(component.containsMatchingElement(<button></button>)).to.equal(true);
  })
})

describe('testing user click', () => {
  let counter = 0;
  it('simulates click events on Square component', () => {
    const component = shallow(<Sqaure onClick={() => {counter = counter + 1; return counter;}}></Sqaure>);
          component.find('.square').simulate('click');
          expect(counter).not.to.equal(0);
  });
});



describe('React is running', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
