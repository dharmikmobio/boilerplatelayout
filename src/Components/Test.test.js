import React from 'react';
import Test from './Test';

import { shallow } from 'enzyme';


describe("shallow test page",()=>{
    it('Object check',()=>{
        let wrapper = shallow(<Test/>);
        //check all component inside
        // console.log(wrapper);
        // console.log(wrapper.debug());
        //check class in component
        expect(wrapper.exists('.btn')).toEqual(true);
    })


// it('state check only class components',()=>{
//     let wrapper = shallow(<Test/>);
//     expect(wrapper.state()).toEqual({name:""});
// })

    it('html check',()=>{
        let wrapper = shallow(<Test/>);
        expect(wrapper.contains(<h1 className='new'>React 18</h1>)).toEqual(true);
    })

    it('Only msj check',()=>{
        let wrapper = shallow(<Test/>);
        expect(wrapper.containsAllMatchingElements([<h1>React 18</h1>])).toEqual(true);
    })

    it('Any msj check',()=>{
        let wrapper = shallow(<Test/>);
        expect(wrapper.containsAnyMatchingElements([<h1>React 18</h1>,<h1>React 10</h1>])).toEqual(true);
    })
})


