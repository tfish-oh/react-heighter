import React,{ Component ,Suspense} from 'react'
import ReactDOM from 'react-dom'
import List from './list'
import * as components from './components/items'
import Tab from './tab'
const SettingCom =React.lazy(()=>import('./setting/setting'));
const TABS=[{id:'all',name:'推荐'},{id:'video',name:'视频'}]
const  All_Tabs=[{id:'all',name:'推荐'},{id:'video',name:'视频'}]
import TabContext from './tab-context'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            showSetting:false
        }
        this.getList().then(({data})=>{
            this.setState({
                list:data
            })
        })
    }
    getList(){
      return  fetch('http://localhost:9000/list').then(res=>res.json())
    }
    render(){
        return<div className="container"> 
        <TabContext.Provider  value={All_Tabs} theme="dark">
        <Tab tabs={TABS}  />
        <List 
        dataSource={this.state.list}
        renderItem={item=>{
            const type = item.type.replace(/^\w/,code=>code.toUpperCase())
            const ItemComponent=components[type]
            console.log(type,'88888880000000')
            return <ItemComponent 
            onClick={this.skip}
            data={item.data}
            />
        }}
        />
        </TabContext.Provider>
       
        {/* {
            this.state.showSetting?<Suspense fallback={<div>Loading...</div>}>
            <SettingCom alltabs={All_Tabs}/>
            </Suspense>:null
        } */}
          
        {/* <div> 
        {this.state.list.map(item=>{
             const type = item.type.replace(/^\w/,code=>code.toUpperCase())
             const ItemComponent=components[type]
             return <ItemComponent/>
        })}  
        </div> */}
        </div>

    }
    skip(){
        console.log('over')
    }
   

}
ReactDOM.render(<Main />,document.getElementById('app'))