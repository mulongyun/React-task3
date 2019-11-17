import React from 'react';
import { NavBar,Carousel,SearchBar} from 'antd-mobile';

export default class AppShop  extends React.Component{
    render(){
        return (
            <div>
                <NavBar  
                    style={{backgroundColor:'#3fcccb',height:'60px',position:'sticky ',top:'0'}}
                    leftContent="Back"
                    rightContent={[
                        <i style={{lineHeight: '22px',fontSize: 30, marginRight: '8px' }} className='iconfont icon-shangcheng'></i>
                    ]}
                >商城</NavBar> 
                <Carousel
                    style={{position:'relative' }}
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[3,3,3].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={ require(`../img-zhuba/shop/${val}.png`)}
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

                
                <div style={{width: '100%',position:'relative',bottom:'380px'}}>
                    <SearchBar placeholder="搜索" style={{background:'gray'}}/>
                </div>


                <div style={{width:'100%',height:'330px',backgroundColor:'white',display:'inline-block',paddingTop:'20px',paddingBottom:'20px'}}>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}}/>
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>桌</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}}/>
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>床</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>椅</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>几</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>柜</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>書架</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>沙發</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>飾品</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>戶外家具</p>
                    </div>
                    <div style={{width:'100px',marginLeft:'20px',marginRight:'20px',float:'left'}}>
                        <img src={require('../img-zhuba/shop/jiaju.png')} style={{width:'100px'}} />
                        <p style={{marginLeft:'35px',marginTop:'8px'}}>全部分类</p>
                    </div>
                </div>


                <div style={{width:'350px',marginTop:'36px',height:'320px',float:'left',marginLeft:'15px',marginRight:'15px'}}>
                    <img style={{width:"350px",marginLeft:'25px'}} src={require('../img-zhuba/shop/1.png')}></img>
                    <div style={{marginLeft:'25px',marginTop:'8px',fontSize:'20px'}}>
                        <p style={{color:'grey'}}>Top Art Studio 欧式风格精细…</p>
                        <p >￥ 39.95</p>
                    </div>
                </div>
                <div style={{width:'350px',marginTop:'36px',height:'320px',float:'left',marginLeft:'15px',marginRight:'15px'}}>
                    <img style={{width:"350px",marginLeft:'25px'}} src={require('../img-zhuba/shop/1.png')}></img>
                    <div style={{marginLeft:'25px',marginTop:'8px',fontSize:'20px'}}>
                        <p style={{color:'grey'}}>Top Art Studio 欧式风格精细…</p>
                        <p >￥ 39.95</p>
                    </div>
                </div>
            </div>
        )
    }
}