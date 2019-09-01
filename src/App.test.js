import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sqaure from './components/Square';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';





describe('testing class square exist', () => {
  it('will check if .square class present', () => {
    //const onButtonClick = sinon.spy();
    //<Sqaure className="square" onClick={onButtonClick}></Sqaure>
    const component = shallow(<Sqaure></Sqaure>);
     expect(component.exists('.square')).to.equal(false);
       console.log(component.debug());
      // console.log(onButtonClick.debug());
      //component.find('.square');
      //component.find('.square').simulate('click');
      //expect(component).to.have.property('');
      //expect(onButtonClick).to.have.property('onClick');
      //component.find('.square').to.have.property('button');


  })
})

// describe('testing user click', () => {
//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     //<Sqaure className="square" onClick={onButtonClick}></Sqaure>
//     const component = shallow(<Sqaure onClick={undefined}></Sqaure>);
//      expect(component).to.have.properties('button');
//        console.log(component.debug());
      // console.log(onButtonClick.debug());
      //component.find('.square');
      //component.find('.square').simulate('click');
      //expect(component).to.have.property('');
      //expect(onButtonClick).to.have.property('onClick');
      //component.find('.square').to.have.property('button');


//   })
// })
//it('getting initial value from player', () =>{});






// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });