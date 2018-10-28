import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './carousels.less';
export default class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }
    handleChange = (a, b, c) => {
        console.log(a, b, c);
    };
    render() {
        return (
            <div>
                <Card title="文字背景轮播">
                    <Carousel
                        //  afterChange={this.handleChange}
                        autoplay
                    >
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片背景轮播">
                    <Carousel
                        effect="fade"
                        //  afterChange={this.handleChange}
                        autoplay
                    >
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" />{' '}
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />{' '}
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />{' '}
                        </div>
                    </Carousel>
                </Card>
                <Card title="注意路径的点‘.’ 是有问题的">
                    <Carousel
                        //  afterChange={this.handleChange}
                        autoplay
                    >
                        <div>
                            <img src="./carousel-img/carousel-1.jpg" alt="" />{' '}
                        </div>
                        <div>
                            <img src="./carousel-img/carousel-2.jpg" alt="" />{' '}
                        </div>
                        <div>
                            <img src="./carousel-img/carousel-3.jpg" alt="" />{' '}
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}
