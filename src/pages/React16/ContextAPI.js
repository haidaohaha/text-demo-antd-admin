import React from 'react';
import { Button } from 'antd';
// Context lets us pass a value deep into the component tree
// 上下文允许我们将值深入到组件树中
// without explicitly threading it through every component.
// 没有显式地将其遍历每个组件。
// Create a context for the current theme (with "light" as the default).
// 为当前主题创建上下文(默认为“light”)。
const ThemeContext = React.createContext('primary');
class ContextAPI extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // 使用提供程序将当前主题传递给下面的树。
        // Any component can read it, no matter how deep it is.
        // 任何组件都可以读取它，不管它有多深。
        // In this example, we're passing "dark" as the current value.
        // 在本例中，我们将“dark”作为当前值传递。
        return (
            // <ThemeContext.Provider>
            <ThemeContext.Provider value="danger">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}
export default ContextAPI;
// A component in the middle doesn't have to
// 中间的组件不一定要
// pass the theme down explicitly anymore.
// 再显式传递主题。
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
function ThemedButton(props) {
    // Use a Consumer to read the current theme context.
    // 使用使用者读取当前主题上下文。
    // React will find the closest theme Provider above and use its value.
    // React会找到上面最接近的主题提供商，并利用其价值。
    // In this example, the current theme is "dark".
    // 在本例中，当前主题是“dark”。
    return (
        <ThemeContext.Consumer>
            {theme => {
                console.log('ThemedButton-props', props);
                console.log('ThemedButton-theme', theme);

                return <Button {...props} type={theme} />;
            }}
        </ThemeContext.Consumer>
    );
}

// 上面的这个案例，真的不怎么样，也许我太笨
// button 组件，我改成 AntD 风格


