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

    it('find check',()=>{
        let wrapper = shallow(<Test/>);
        expect(wrapper.find('.new').length).toBe(1);
    })

    it('snapshot 1 check',()=>{
        let wrapper = shallow(<Test/>);
        expect(wrapper).toMatchSnapshot();
    })

    it('function check in function component',()=>{
        const wrapper = shallow(<Test/>);
        wrapper.find(".btn").simulate("click");
        // console.log(wrapper.find('.new2').text());
        expect(wrapper.find('.new2').text()).toBe("React new version")
    })

    it('gender state by click function',()=>{
        const wrapper = shallow(<Test/>);
        const btn = wrapper.find("button").last();

        btn.simulate('click',{
            target:{
                getAttribute:function(){
                    return btn.props()['data-gender']
                }
            }
        })
        expect(wrapper.find('.box.female').length).toEqual(1);
        
    })



})







