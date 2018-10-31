import React from 'react';
const initialState = {
    theme: 'dark',
    color: 'blue'
};
const GlobalStore = React.createContext();
class GlobalStoreProvider extends React.Component {
    render() {
        return <GlobalStore.Provider value={{ ...initialState }}>{this.props.children}</GlobalStore.Provider>;
    }
}

class ContextAPI2 extends React.Component {
    render() {
        return (
            <GlobalStoreProvider>
                <GlobalStore.Consumer>
                    {context => (
                        <div>
                            <div>{context.theme}</div>
                            <div>{context.color}</div>
                        </div>
                    )}
                </GlobalStore.Consumer>
            </GlobalStoreProvider>
        );
    }
}
export default ContextAPI2;
