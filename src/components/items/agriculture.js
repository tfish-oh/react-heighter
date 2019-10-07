import React,{Component} from 'react';
import { itemFy } from './decorators';
import Echarts from './echarts'
@itemFy(true)
export default class Agriculture extends Component{
    static classes='Agriculture'
    render(){
        return (<div >农业
            <Echarts />
        </div>)
    }
}

