import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });


