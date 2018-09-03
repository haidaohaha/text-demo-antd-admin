export const type = {
    SWITCH_MENU: 'SWITCH_MENU'
};

// 菜单点击切换，修改面包屑名称
export function switchMenu(data) {
    return {
        type: type.SWITCH_MENU,
        playload: data
    };
}
