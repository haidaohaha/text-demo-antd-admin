import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import Axios from '../../Axios';
import { connect } from 'react-redux';
@connect(
    state => state,
    null
)
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminName: '海盗呼呼',
            desc: '',
            dayPictureUrl: '',
            nightPictureUrl: ''
        };
    }

    componentDidMount() {
        this.getNowDate();
        this.getWeather();
    }

    getNowDate() {
        setInterval(() => {
            const nowDate = Util.formateDate(new Date());
            this.setState({
                nowDate
            });
        }, 1000);
    }

    // http://www.ptbird.cn/promise-jsonp.html
    // 百度和高德  sk 或者 key  一律返回密钥错误，我也是醉了
    getWeather() {
        let city = '杭州';
        const options = { params: 'jsonpCallBack' };
        const url =
            'http://api.map.baidu.com/telematics/v3/weather?location=' +
            encodeURIComponent(city) +
            '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2';

        Axios.jsonp(url, options).then(
            value => {
                // console.log(value);
                this.setState({
                    desc: value.weather_data[0].weather,
                    dayPictureUrl: value.weather_data[0].dayPictureUrl,
                    nightPictureUrl: value.weather_data[0].nightPictureUrl
                });
            },
            err => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="header">
                <Row className={this.props.type ? 'header-top cur' : 'header-top'}>
                    <span>
                        欢迎，
                        {this.state.adminName}
                    </span>
                    <a href="">退出</a>
                </Row>
                {this.props.type ? null : (
                    <Row className="breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                            {this.props.menuName}
                        </Col>
                        <Col span={20} className="weather">
                            <span className="date">{this.state.nowDate}</span>
                            <img className="weather-img" src={this.state.dayPictureUrl} alt="" />
                            <img className="weather-img" src={this.state.nightPictureUrl} alt="" />
                            <span className="weather-detail">{this.state.desc}</span>
                        </Col>
                    </Row>
                )}
            </div>
        );
    }
}
