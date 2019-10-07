import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Render from "react-test-renderer";
import Info from "./Components/info";
import {Call, Data} from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.todo("Call"), done => {
  function callBack(data) {
      expect(data).toBe("result");
      done();
  }
  callBack()
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);    
};

it("Test is good to go!!", () => {
  const component = Render.create(<Info/>)
  let app = component.toJSON();
  expect(app).toMatchSnapshot();
});