import React, {Component,useState,useEffect} from 'react'
import echarts from 'echarts'
import { deflate } from 'zlib';

export default function (){
    const [price,setPrice]=useState(0)
    const [num,setNum]=useState(0)
    useEffect(() => {
        console.log(price)
        return ()=>{
            // 销毁时调用
        }
      });
    return (<div
    onClick={()=>{setPrice(50); setNum(100)}}> echarts {price} {num}</div>)
}