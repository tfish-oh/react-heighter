import React,{Component} from 'react';
import { itemFy,clickAble } from './decorators';

@itemFy(true)
// @clickAble
export default  class SinglePic extends Component{
    static classes="single-pic"
    render(){
        const { title,imageList} =this.props.data
        return (<div>
            <h3>{title}</h3>
            <img  src={imageList[0] }/>
        </div>)
    }
}
// (SinglePic)