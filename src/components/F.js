//import area
//import something from 'somelibrary';

import {Component} from 'react';
import G from './G';
class F extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Every method must have render method always return HTML
    render(){
        return(
            <div>
                <span className="g">Hello F<G/></span>
            </div>
        );
    }
}
export default F;