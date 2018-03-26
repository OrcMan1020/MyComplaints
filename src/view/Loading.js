/**
 * Created by saix on 2018/3/23.
 */
import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import FetchDataPlaceholder from '../component/FetchDataPlaceholder'


class Loading extends Component {
    render() {
        return (
            <FetchDataPlaceholder style={{height: 100}}>
                <Icon type="loading" />
                <p>加载中</p>
            </FetchDataPlaceholder>
        );
    }
}

class Refetch extends Component {
    render() {
        return (
            <FetchDataPlaceholder>
                <Icon type="cross-circle" color="#FF5A5F" />
                <p>点击<span className="color-cyan" onClick={this.props.refetch?this.props.refetch:null}>重新获取</span></p>
            </FetchDataPlaceholder>

        );
    }
}

export {
    Loading,
    Refetch
};