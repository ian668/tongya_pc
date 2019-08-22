import React, {Component} from 'react';
import Sidemenu from "../../common/Sidemenu";
import { showNotification } from "../../../services/utilsService";
import { fetchData } from "../../../services/httpService";
import ReactHtmlParser from 'react-html-parser';
class AnnounceContent extends Component {
    constructor(props){
        super(props);
        this.fetch_request = '';
        this.state = {
            announce:{}
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        this.fetch_request = fetchData('/mobile-announcements/'+id+'/view').subscribe(res=>{
            if(res.data.isSuccess===1){
                this.setState({
                    announce:res.data.data
                })
            }
        },error=>{
            showNotification('error','温馨提示',error);
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Sidemenu history={this.props.history}/>
                    <div className="mng_content">

                        <div className="breadcrumb">

                            <li><span>账户管理</span></li>
                            <li><span>会员中心</span></li>

                        </div>

                        <div className="announce_content">

                            <div className="title">
                                <p>{this.state.announce.title}</p>
                                <p>发布时间:<span>{this.state.announce.created_at}</span></p>
                            </div>

                            <div className="content">

                                {/* ReactHtmlParser{this.state.content} */}
                                {ReactHtmlParser(this.state.announce.content)}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnnounceContent;