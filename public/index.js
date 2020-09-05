import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import React from 'react';
import ReactDOM from 'react-dom';
import BoilerplateReactComponent from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = { hasUpdate: false };

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }
  render() {
    return (
      <div className="app-container">
        <BoilerplateReactComponent />
        <ReactSwUpdateTips value={this.state.hasUpdate} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
