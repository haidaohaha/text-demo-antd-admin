import React, { Component } from 'react';
import { Row, Col, Card, Modal } from 'antd';
const { Meta } = Card;

export default class Gallerys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArrays: [],
            imgSrc: '',
            imgVisiable: false
        };
    }

    componentDidMount() {
        // 已知图片 25 png 格式
        this.processDate(25);
    }

    processDate(ArrLength) {
        const num = 6; //每个子数组里的元素个数
        const cardArrays = new Array(Math.ceil(ArrLength / num));
        for (let i = 0; i < cardArrays.length; i++) {
            cardArrays[i] = [];
            for (let j = 0; j < num; j++) {
                cardArrays[i][j] = i * num + j;
            }
        }
        for (let i = 0; i < ArrLength; i++) {
            const dnge = parseInt(i / num, 10);
            cardArrays[dnge][i % num] = (
                <Card
                    key={i + 1}
                    hoverable
                    cover={<img alt="example" src={`/gallery/${i + 1}.png`} />}
                    onClick={() => this.handleClickCard(i)}
                >
                    <Meta title={`看React${i + 1}`} description="学React" />
                </Card>
            );
        }
        console.log(cardArrays);

        this.setState({
            cardArrays: cardArrays.map(v => v.filter(item => item.key))
        });
    }

    handleClickCard = i => {
        this.setState({
            imgSrc: `/gallery/${i + 1}.png`,
            imgVisiable: true
        });
    };

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.cardArrays.map((v, i) => (
                        <Col key={i} span={6}>
                            {v.map(v => v)}
                        </Col>
                    ))}
                </Row>
                <Modal
                    title="图片详情"
                    visible={this.state.imgVisiable}
                    onCancel={() => this.setState({ imgVisiable: false })}
                    footer={null}
                >
                    <img src={this.state.imgSrc} alt="" width={472} />
                </Modal>
            </div>
        );
    }
}
