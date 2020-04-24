import React, { Component } from "react";
import {shallow} from 'enzyme';

import Home from '../components/Home';

describe('Componente Home', () => {
    const home = shallow (<Home/>);
    test('el component home existe', () => {
        expect(home.exists()).toBeTruthy();
    }) 
    test('Render del título', () => {
        expect(home.find('.title').text()).toEqual('Encuentra tu mascota ideal aquí')
    })
})
