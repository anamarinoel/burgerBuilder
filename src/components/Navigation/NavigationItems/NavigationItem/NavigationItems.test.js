import React from 'react';

import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from '../NavigationItems';
import NavigationItem from '..//NavigationItem/NavigationItem';

configure({adapter: new Adapter()});
let wrapper;

describe('<NavigationItems />', () => {
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> elements if not authenticating', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if  authenticating', () => {
        //wrapper = wrapper = shallow(<NavigationItems />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.received(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.received(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(expected);
    });
});