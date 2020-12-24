//create an Class Component
import {Component} from 'react';

import C from './C';

class B extends Component{//Named Export
    //1.Property

    //2.constructor

    //3.Method
    //Every Class Components Must have render method
    render(){
        return<span className="c">Hello Bhanu<C/></span>;
    }    
}    
export default B;