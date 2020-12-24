//import area
//import something from 'somelibrary';

import {Component} from 'react';
import U from './U';
class T extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <span className="u">Hello T<U/></span>
        );
    }
}
export default T;