import React ,{Component} from 'react'
import style from './style.css'
import  TabContext from '../tab-context'
export default class Setting extends Component{
    static contextType = TabContext;
    
    render(){
        console.log('conetxtType ',this.context)
        // const {dataSource=[],renderItem}=this.props
        return (
            <div className="setting">
                {this.context.map(item=><li>{item.name}</li>)}
            </div>
        )
    }
}