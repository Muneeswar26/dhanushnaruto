import {Component} from 'react'
import './index.css'

class YourDetailsPage extends Component {
  state = {
    name: '',
    startLocation: '',
    endLocation: '',
    nameErrMsg: '',
    startErrMsg: '',
    endErrMsg: '',
  }

  onUpdateName = event => {
    this.setState({name: event.target.value})
  }

  onUpdateStartLocation = event => {
    this.setState({startLocation: event.target.value})
  }

  onUpdateEndLocation = event => {
    this.setState({endLocation: event.target.value})
  }

  onNextButton = () => {
    const {name, startLocation, endLocation} = this.state
    const {yourDetailsNextButton} = this.props
    if (name === '') {
      this.setState({nameErrMsg: 'Enter your name'})
    } else if (startLocation === '') {
      this.setState({startErrMsg: 'Enter your start location', nameErrMsg: ''})
    } else if (endLocation === '') {
      this.setState({
        endErrMsg: 'Enter your end location',
        nameErrMsg: '',
        startErrMsg: '',
      })
    } else {
      this.setState({endErrMsg: ''})
      yourDetailsNextButton(0, 1, name, startLocation, endLocation)
    }
  }

  render() {
    const {
      name,
      startLocation,
      endLocation,
      nameErrMsg,
      startErrMsg,
      endErrMsg,
    } = this.state
    return (
      <div className="mytrip-details-container">
        <h1>Your Details</h1>
        <p className="mytrip-details-description">
          Enter your name and location details
        </p>
        <div className="detailsform-card">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                className="input-el"
                onBlur={this.onNameErrMsg}
                value={name}
                onChange={this.onUpdateName}
              />
              <p className="error-msg">{nameErrMsg}</p>
            </div>
            <div>
              <label htmlFor="name">Start Location</label>
              <br />
              <input
                id="name"
                type="text"
                className="input-el"
                placeholder="Enter start location"
                value={startLocation}
                onBlur={this.onStartErrMsg}
                onChange={this.onUpdateStartLocation}
              />
              <p className="error-msg">{startErrMsg}</p>
            </div>
            <div>
              <label htmlFor="name">End Location</label>
              <br />
              <input
                id="name"
                type="text"
                className="input-el"
                placeholder="Enter end location"
                value={endLocation}
                onBlur={this.onEndErrMsg}
                onChange={this.onUpdateEndLocation}
              />
              <p className="error-msg">{endErrMsg}</p>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="next-button"
                onClick={this.onNextButton}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default YourDetailsPage
