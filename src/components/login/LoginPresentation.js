import React, { Component } from 'react';

class LoginPresentation extends Component {
  state = {
    inputOne: '',
    inputTwo: '',
    inputThree: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let payload = {
      inputOne: this.state.inputOne,
      inputTwo: this.state.inputTwo,
      inputThree: this.state.inputThree
    };
    this.props.onSubmit(payload);
  };

  render() {
    return (
      <div className="card mb-3 col-sm-6 shadow" style={{ margin: 'auto' }}>
        <div className="card-header display-4 text-center shadow">
          {this.props.title}
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="inputOne">
                <strong>{this.props.inputOneLabel}</strong>
              </label>
              <input
                type={this.props.inputOneType}
                className="form-control"
                name="inputOne"
                placeholder={this.props.inputOnePlaceHolder}
                onChange={this.onChange}
                id="inputOne"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputTwo">
                <strong>{this.props.inputTwoLabel}</strong>
              </label>
              <input
                type={this.props.inputTwoType}
                className="form-control"
                name="inputTwo"
                placeholder={this.props.inputTwoPlaceHolder}
                onChange={this.onChange}
                id="inputTwo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputThree">
                <strong>{this.props.inputThreeLabel}</strong>
              </label>
              <input
                type={this.props.inputThreeType}
                className="form-control"
                name="inputThree"
                placeholder={this.props.inputThreePlaceHolder}
                onChange={this.onChange}
                id="inputThree"
              />
            </div>

            <input
              type="submit"
              value={this.props.btnValue}
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPresentation;
