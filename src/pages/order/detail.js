import React from 'react';
import { Card } from 'antd';
import Axios from '../../Axios';
import './detail.less';
export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        };
    }

    componentDidMount() {
        const { detailId } = this.props.match.params;
        if (detailId) {
            this.getDetailInfo(detailId);
        }
    }

    getDetailInfo(id) {
        Axios.ajax({
            method: 'GET',
            url: '/order/detail',
            data: {
                detailId: id
            }
        }).then(res => {
            if (res && Number(res.code) === 0) {
                this.setState({
                    info: res.result
                });
            }
            this.renderMap(res.result);
        });
    }

    // renderMap = () => {
    //     // 百度地图API功能
    //     this.map = new window.BMap.Map('allmap'); // 创建Map实例
    //     this.map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    //     //添加地图类型控件
    //     this.map.addControl(
    //         new window.BMap.MapTypeControl({
    //             mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP]
    //         })
    //     );
    //     this.map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
    // this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    //     // 设置主题：
    //     this.map.setMapStyle({style:'bluish'});
    // };

    renderMap = result => {
        this.map = new window.BMap.Map('allmap');
        // this.map.centerAndZoom('北京',11);
        // 添加地图控件
        this.addMapControl();
        // 调用路线图绘制方法
        this.drawBikeRoute(result.position_list);
        // 调用服务区绘制方法
        this.drwaServiceArea(result.area);
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    };

    // 添加地图控件
    addMapControl = () => {
        let map = this.map;
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    };

    // 绘制用户的行驶路线
    drawBikeRoute = positionList => {
        let startPoint = '';
        let endPoint = '';
        if (positionList.length > 0) {
            let first = positionList[0];
            let last = positionList[positionList.length - 1];
            startPoint = new window.BMap.Point(first.lon, first.lat);
            let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(18, 42)
            });

            let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon, rotation: 30 });
            this.map.addOverlay(startMarker);

            endPoint = new window.BMap.Point(last.lon, last.lat);
            let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(18, 42)
            });
            let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon });
            this.map.addOverlay(endMarker);

            // 连接路线图
            let trackPoint = [];
            for (let i = 0; i < positionList.length; i++) {
                let point = positionList[i];
                trackPoint.push(new window.BMap.Point(point.lon, point.lat));
            }

            let polyline = new window.BMap.Polyline(trackPoint, {
                strokeColor: '#1869DD',
                strokeWeight: 3,
                strokeOpacity: 1
            });
            this.map.addOverlay(polyline);
            this.map.centerAndZoom(endPoint, 11);
            // this.map.centerAndZoom('杭州', 11);
        }
    };

    // 绘制服务区
    drwaServiceArea = positionList => {
        // 连接路线图
        let trackPoint = [];
        for (let i = 0; i < positionList.length; i++) {
            let point = positionList[i];
            trackPoint.push(new window.BMap.Point(point.lon, point.lat));
        }
        // 绘制服务区
        let polygon = new window.BMap.Polygon(trackPoint, {
            strokeColor: '#CE0000',
            strokeWeight: 4,
            strokeOpacity: 1,
            fillColor: '#ff8605',
            fillOpacity: 0.4
        });
        this.map.addOverlay(polygon);
    };

    render() {
        const { info } = this.state;
        return (
            <div>
                <div id="allmap" className="order-map" />
                <Card>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content">{info.mode == 1 ? '服务区' : '停车点'}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行驶轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content">{info.start_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content">{info.end_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行驶里程</div>
                                <div className="detail-form-content">
                                    {info.distance / 1000}
                                    公里
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        );
    }
}

// function Map() {
//     return <div>地图</div>;
// }
