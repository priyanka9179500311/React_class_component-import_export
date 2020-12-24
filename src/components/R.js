//import area
//import something from 'somelibrary';

import {Component} from 'react';
import S from './S';
class R extends Component{
    //1. Property

    //2. Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <span className="s">Hello R<S/></span>
        );
    }
}
export default R;