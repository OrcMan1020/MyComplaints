/**
 * Created by saix on 2018/3/15.
 */
import React, { Component } from 'react';
import {NavBar, Icon, WhiteSpace, Toast} from 'antd-mobile';
import ComplaintCard from './ComplaintCard';
import {GetUserInfo} from '../../utils/APIs';
import {GetComplainItems} from "../../utils/APIs";
import {Loading} from '../Loading';
import MyNavBar from '../../component/MyNavBar/MyNavBar';

class MyComplaint extends Component {
    goBack = () => {
        this.context.router.history.goBack();
    };

    constructor(props){
        super(props);
        this.state = {
            complaints : []
        }

    }

    componentDidMount() {
        GetComplainItems(window.localStorage.unionId)
            .then(res=>{
                this.setState({
                    complaints : res
                })
            })
            .catch(e=>{
                Toast.fail("查询用户投诉失败!", 2);
            })

    }


    render() {

        if(this.state.complaints.length == 0) {
            return (
                <Loading/>
            )
        }

        return(
            <div>
                <MyNavBar title="我的投诉">

                </MyNavBar>
                {
                    this.state.complaints.map(el=>{
                        return (
                            <div>
                                <ComplaintCard complaint={el}/>
                                <WhiteSpace size="md"/>
                            </div>
                        )

                    })
                }


            </div>

        )
    }
}

export default MyComplaint;