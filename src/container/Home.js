import React, { Component } from 'react'
import { NavBar,Carousel} from 'antd-mobile';

export default class Home extends Component {
    render() { 
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#000',height:'44px',position:'sticky ',top:'0',zIndex:11111111}}
                >住吧家居</NavBar>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        dotStyle={{ height: 3, width: 20, borderRadius: 0 }}
                        dotActiveStyle={{ height: 3, width: 20, borderRadius: 0, backgroundColor: '#3fcccb' }}
                    >
                    {[1, 2].map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={require(`../img-zhuba/home/R${val}.png`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                    </Carousel>
                    <div>
                        <img src={require('../img-zhuba/home/3.png')} style={{ height:'220px',width:'220px',marginRight:'15px',marginLeft:'15px',float:'left'}}></img>
                        <img src={require('../img-zhuba/home/4.png')} style={{ height:'220px',width:'220px',marginRight:'15px',marginLeft:'15px',float:'left'}}></img>
                        <img src={require('../img-zhuba/home/5.png')} style={{ height:'220px',width:'220px',marginRight:'15px',marginLeft:'15px',float:'left'}}></img>
                    </div>
                    <div style={{height:'400px',backgroundColor:'white',width:'100%'}}>
                        <img src={require('../img-zhuba/home/lv.png')} style={{ height:'40px',width:'10px',float:'left',marginRight:'15px'}}></img>
                        <span style={{marginLeft:'20px',float:'left',lineHeight:'40px'}}>热门推荐</span>
                        <img src={require('../img-zhuba/home/6.png')} style={{width:'100%'}}></img>
                    </div>
            </div>
        )
    }
}