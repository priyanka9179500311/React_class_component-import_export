//import area
//import something from 'somelibrary';

import {Component} from 'react';
import X from './X';
class W extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <sub className="x">Hello W<X/></sub>
        );
    }
}
export default W;