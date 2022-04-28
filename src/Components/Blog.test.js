import React from 'react';
import Blog from './Blog';

import { shallow } from 'enzyme';
// import { mount } from 'enzyme';


describe("shallow Blog page",()=>{
   
    it('find check',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".licls").length).toBe(3);
        // expect(wrapper.find(".licls").length).toBe(2);
    })

    it('at & check key based on  class or id',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".licls").at(0).key()).toBe("React")
    })

    it('Child check',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".numbers").childAt(1).type()).toBe("span")
    })

    it('Children length check',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find("ul").children().length).toBe(3);
    })

    it('hasclass  check',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".btn").hasClass("ant-btn-primary")).toBe(true);
    })

    it('is check only workon top',()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.is(".container")).toBe(true);
    })

    // it('function  check',()=>{
    //     let wrapper = shallow(<Blog/>);
    //    let anyfn = wrapper.instance().updateAll();
    //    console.log(anyfn);
    // })
})

// describe('mount vs shallow', () => { 
//     it('mount check',()=>{
//         let wrapper = mount(<Blog/>);
//         console.log(wrapper)
//     })
//  })



