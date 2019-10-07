import React,{Component} from 'react'
export const itemFy = hasClick => ItemComponent=>{
   return class extends Component{
        render(){
           return <div className={`item ${ItemComponent.classes}`}> 
           <ItemComponent  
        //    必须要透传
           {...this.props}
           onClick={hasClick?this.props.onClick:()=>{}}/>
           </div>
        }
    }
    
}
export const clickAble =ItemComponent=>{
    return class extends Component{
         render(){
            return <div onClick={this.props.onClick}> 
            <ItemComponent/>
            </div>
         }
         componentDidMount(){
          
         }
         
     }
     
 }