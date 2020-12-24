import {Component} from 'react';

import  B from './B';

import './a.css';
//create an Class Component
 class A extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Every Class Components Must have render method
    render(){
        return<h2 className="a">Hello <span className="b">Priyanka<B/></span></h2>
    }
}
export default A;