import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import TitleBar from '../components/TitleBar';

import './LaunchFlow.css';

const containerSizes = {
  centicore: {
    label: 'Centicore',
    mcpu: 10,
    mem: 60,
    cost: 100
  },
  decicore: {
    label: 'Decicore',
    mcpu: 100,
    mem: 600,
    cost: 1000
  },
  unicore: {
    label: 'Unicore',
    mcpu: 1000,
    mem: 6000,
    cost: 10000
  }
}

function estimatedCost(sizeKey, replicas) {
  return replicas * containerSizes[sizeKey].cost
}

function formatPrice(cost) {
  return `USD $${(cost / 100).toFixed(2)}`;
}

class LaunchFlow extends Component {
  state = {
    numEnvVars: 0,
    selectedSize: 'centicore',
    replicas: 1
  }

  _handleClickAddEnvVar = () => this.setState(prev => ({numEnvVars: prev.numEnvVars + 1}));

  _handleSizeChanged = value => this.setState({selectedSize: value});

  _handleReplicasChanged = value => this.setState({replicas: value});

  _renderSizeSummary = sizeKey => {
    const size = containerSizes[sizeKey];

    return (
      <table className="launch-flow__size-summary">
        <tbody>
          <tr>
            <td><strong>Reserved CPU</strong></td>
            <td>{size.mcpu} mCPU</td>
          </tr>
          <tr>
            <td><strong>Reserved Memory</strong></td>
            <td>{size.mem} MB</td>
          </tr>
        </tbody>
      </table>
    );
  }

  _renderPriceEstimate = () => (
    <table className="launch-flow__size-summary">
        <tbody>
          <tr>
            <td><strong>Estimated Cost</strong></td>
            <td>{formatPrice(estimatedCost(this.state.selectedSize, this.state.replicas))}/month</td>
          </tr>
        </tbody>
    </table>
  )

  render() {
    const envVarList = [];
    
    for(let i = 0; i < this.state.numEnvVars; i++) {
      envVarList.push((
        <div key={`ev${i}`} className="form__control-group">
          <input className="form__input" type="text" placeholder="KEY" />=
          <input className="form__input" type="text" placeholder="Value" />
        </div>
      ));
    }

    const sizeOptions = Object.keys(containerSizes).map(key => {
      const size = containerSizes[key];
      return (
        <option key={key} value={key}>{size.label}</option>
      );
    });

    return (
      <div className="launch-flow">
        <TitleBar />
        <h1>Launch a container</h1>
        <div className="form">
          <div className="form__control-group">
            <label className="form__label">Image</label>
            <input className="form__input" type="text" />
          </div>
          <div className="form__control-group">
            <h2>Environment variables</h2>
          </div>
          {envVarList}
          <div className="form__control-group">
            <button
              onClick={this._handleClickAddEnvVar}
              className="launch-flow__add-var-button">+ Add Env Var</button>
          </div>
          <div className="form__control-group">
            <h2>Container resources</h2>
          </div>
          <div className="form__control-group">
            <label className="form__label">Container Size</label>
            <select
              value={this.state.selectedSize}
              onChange={e => this._handleSizeChanged(e.target.value)}
              className="form__input">
              {sizeOptions}
            </select>
          </div>
          <div className="form__control-group">
            {this._renderSizeSummary(this.state.selectedSize)}
          </div>
          <div className="form__control-group">
            <label className="form__label">Replicas</label>
            <input
              type="number"
              defaultValue={this.state.replicas}
              onChange={e => this._handleReplicasChanged(e.target.value)}
              className="form__input" />
          </div>
          <div className="form__control-group">
            {this._renderPriceEstimate()}
          </div>
        </div>
        <Link to="/dashboard">
          <button
            className="launch-flow__add-var-button">Launch Now</button>
        </Link>
      </div>
    );
  }
}

export default LaunchFlow;
