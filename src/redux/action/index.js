export const type = {
    UPDATE_LOADING: 'UPDATE_LOADING',
    UPDATE_NAME: 'UPDATE_NAME',
    SWITCH_MENU: 'SWITCH_MENU'
};

// 点击登陆，控制 loading
export function clickUpdateLoading(data) {
    return {
        type: type.UPDATE_LOADING,
        playload: data
    };
}

// 点击登陆，控制 loading
export function updateName(data) {
    return {
        type: type.UPDATE_NAME,
        playload: data
    };
}

// 菜单点击切换，修改面包屑名称
export function switchMenu(data) {
    return {
        type: type.SWITCH_MENU,
        playload: data
    };
}
