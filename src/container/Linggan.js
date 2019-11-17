import React, { Component } from 'react'
import { NavBar, Icon,Tabs} from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型'},
    { title: '个性色彩'}
  ];
export default class AppIdea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                    tabBarUnderlineStyle={{ display: 'none' }}
                    tabBarActiveTextColor='#3fcccb'
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                        <img src={require('../img-zhuba/linggan/tu.png')} style={{marginLeft:'20px',marginRight:'20px'}}/>
                    </div>
                </Tabs>
            </div>
        )
    }
}