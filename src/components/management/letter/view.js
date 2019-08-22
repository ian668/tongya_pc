import React, {Component} from 'react';
import Sidemenu from "../../common/Sidemenu";
import { fetchData } from "../../../services/httpService";
import {message} from 'antd';
class LetterView extends Component {
    constructor(props){
        super(props);
        this.fetch_request = '';
        this.state = {
            letter:{}
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        this.fetch_request = fetchData('/message/'+id+'/view').subscribe(res=>{
            if(res.data.isSuccess===1){
                this.setState({
                    letter:res.data.data
                });
                return;
            }
            message.warning(res.data.data.info||res.data.type,1);
        },error=>{
            message.error('/message/'+id+'/view'+error.message);
        })
    }
    componentWillUnmount(){
        this.fetch_request&&this.fetch_request.unsubscribe();
    }
    render() {
        return (
            <div>
                <div className="container">
                <Sidemenu history={this.props.history} />
                    <div className="mng_content">
                        <div className="breadcrumb">
                            <li><span>平台管理</span></li>
                            <li><span>站内信详情</span></li>
                        </div>
                        <div className="announce_content">
                            <div className="content">
                                {this.state.letter.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LetterView;