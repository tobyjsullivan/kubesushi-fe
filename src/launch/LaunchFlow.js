import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import TitleBar from '../components/TitleBar';

import './LaunchFlow.css';

const containerSizes = {
  alpha: {
    label: 'Alpha',
    mcpu: 10,
    mem: 40,
    cost: 40
  },
  bravo: {
    label: 'Bravo',
    mcpu: 50,
    mem: 200,
    cost: 200
  },
  charlie: {
    label: 'Charlie',
    mcpu: 100,
    mem: 400,
    cost: 400
  },
  delta: {
    label: 'Delta',
    mcpu: 1000,
    mem: 4000,
    cost: 4000
  },
  echo: {
    label: 'Echo',
    mcpu: 2000,
    mem: 8000,
    cost: 8000
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
    selectedSize: Object.keys(containerSizes)[0],
    replicas: 1
  }

  _handleClickAddEnvVar = () => this.setState(prev => ({numEnvVars: prev.numEnvVars + 1}));

  _handleSizeChanged = value => this.setState({selectedSize: value});

  _handleReplicasChanged = value => this.setState({replicas: value});

  _renderSizeSummary = sizeKey => {
    const size = containerSizes[sizeKey];

    return (
      <div className="launch-flow__size-summary">
        <div className="form__control-group">
          <span className="form__label">
            <strong>Reserved CPU</strong>
          </span>
          <span className="form__label">
            {size.mcpu} mCPU
          </span>
        </div>
        <div className="form__control-group">
          <span className="form__label">
            <strong>Reserved Memory</strong>
          </span>
          <span className="form__label">
            {size.mem} MB
          </span>
        </div>
      </div>
    );
  }

  _renderPriceEstimate = () => (
    <div className="form__control-group">
      <p className="form__label">
        <strong>Estimated Cost</strong>
      </p>
      <p className="form__label">
        {formatPrice(estimatedCost(this.state.selectedSize, this.state.replicas))}/month
      </p>
    </div>
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
        <div className="launch-flow__content-area">
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
      </div>
    );
  }
}

export default LaunchFlow;
