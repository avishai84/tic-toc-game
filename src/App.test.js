import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sqaure from './components/Square';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('testing user click', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const component = shallow(<Sqaure className="square" onClick={onButtonClick}></Sqaure>);
      // console.log(component.debug());
      // console.log(onButtonClick.debug());
      component.find('.square').simulate('click');
      expect(onButtonClick).to.have.property('onClick');

  })
})
it('getting initial value from player', () =>{});