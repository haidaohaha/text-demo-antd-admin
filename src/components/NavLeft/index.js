import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import './index.less';
import menuList from '../../config/menuConfig';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            current: '/home',
            menuTreeNode: []
        };
    }

    componentDidMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        });
    }

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light'
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
        this.props.getMenuName(e.item.props.title);
    };

    renderMenu(data) {
        return (
            data &&
            data.map((v, i) => {
                if (v.children) {
                    return (
                        <SubMenu key={v.key} title={v.title}>
                            {this.renderMenu(v.children)}
                        </SubMenu>
                    );
                }
                return (
                    <Menu.Item key={v.key} title={v.title}>
                        <Link to={v.key}>{v.title}</Link>
                    </Menu.Item>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>AntD Admin</h1>
                </div>
                <Menu
                    defaultSelectedKeys={[this.state.current]}
                    onClick={this.handleClick}
                    mode="vertical"
                    theme={this.state.theme}
                >
                    {this.state.menuTreeNode}
                </Menu>
                <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
        );
    }
}
