//import area
//import something from 'somelibrary';

import {Component} from 'react';
import T from './T';
class S extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <sub className="t">Hello S<T/></sub>
        );
    }
}
export default S;