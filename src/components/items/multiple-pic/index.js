import React,{Component} from 'react';
import { itemFy ,clickAble} from '../decorators';
import style from  './style.css'
// @clickAble   
@itemFy(true)
export default class MultiplePic extends Component{
    static classes="multiple-pic"
    render(){
        const {title,imageList} =this.props.data
        return (<React.Fragment>
            <h3>{title}</h3>
            <img src={imageList[0]} />
            </React.Fragment>)
    }
}
