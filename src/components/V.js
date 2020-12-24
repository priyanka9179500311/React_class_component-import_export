//import area
//import something from 'somelibrary';

import {Component} from 'react';
import W from './W';
class V extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <span className="w">Hello V<W/></span>
        );
    }
}
export default V;