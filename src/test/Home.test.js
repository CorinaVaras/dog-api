import React, { Component } from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home';

describe('Componente Home', () => {
    const home = shallow (<Home/>);
    test('el component home existe', () => {
        expect(home.exists()).toBeTruthy();
    }) 
})
