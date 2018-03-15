import React, { Component } from 'react';

import { Modal, WhiteSpace, Grid, Icon  } from 'antd-mobile';


class SuccessModel extends Component
{
    constructor(prop){
        super(prop)
        this.state = {
            visible : this.props.visible
        }


    }

    render() {

        const icons = [
            {icon : './img/wechat.png'},
            {icon : './img/weibo.png'},
            {icon : './img/unknown.png'},
            {icon : './img/qq.png'},

        ];

        return (
                    <div>
                        <Modal
                            wrapClassName ='model-wrap'
                            visible={this.props.visible}
                            transparent
                        >
                            <div>
                                <div class='success-model-head'>
                                    <div style={{float: 'right'}}>
                                        <Icon type="cross" size="lg"
                                        onClick={(e)=>{
                                            this.props.visible = false;

                                            this.props.onFinish();
                                        }}></Icon>
                                    </div>

                                </div>
                                {/*<img src='./img/model-header.png'/>*/}
                                <WhiteSpace size='lg'/>
                                <div style={{fontSize:'17px', color:'#000'}}><b>已提交成功, 请等待受理...</b></div>
                                <WhiteSpace/>
                                <div>可在<span style='color:#108ee9'> "我的" </span>中查看受理情况</div>
                                <WhiteSpace size='lg'/>
                                <WhiteSpace size='lg'/>
                                <div>
                                    选择分享到:</div>
                                <WhiteSpace size='lg'/>

                                <Grid data={icons}
                                      hasLine={false}
                                      activeStyle={false}
                                      renderItem={dataItem => (
                                          <div >
                                              <img src={dataItem.icon} style={{ width: '52px', height: '52px' }} alt=""
                                              onClick={(e)=>console.log(dataItem.icon)}/>
                                          </div>
                                      )}
                                />
                            </div>
                        </Modal>
                    </div>

        );
    }

}

export default SuccessModel;