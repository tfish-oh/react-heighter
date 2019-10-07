import React ,{Component,Suspense} from 'react'
const SettingCom =React.lazy(()=>import('./setting/setting'));
// const  All_Tabs=[{id:'all',name:'推荐'},{id:'video',name:'视频'}]
export default class Tab extends Component{
    constructor(props){
        super(props);
        this.state={
            showSetting:false
        }
    }
    render(){
        const {dataSource=[],renderItem}=this.props
        return (
            <div>
                {
                    this.props.tabs.map(tab=>{
                        return <span> {tab.name}</span>
                    })
                    
                }
                <span onClick={this.onShowMore.bind(this)}>+</span>
                {
            this.state.showSetting?<Suspense fallback={<div>Loading...</div>}>
                <SettingCom /> 
            </Suspense>:null
        } 
            </div>
        )
    }
    onShowMore(){
        console.log('o',this.setState)
        this.setState({
            showSetting:true
        })
    }
}