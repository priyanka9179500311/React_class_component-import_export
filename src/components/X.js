//import area
//import something from 'somelibrary';

import {Component} from 'react';
import Y from './Y';
class X extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <span className="y">Hello X<Y/></span>
        );
    }
}
export default X;