import {Component} from 'react'
import './index.css'

class DateSelectionPage extends Component {
  state = {startDateErrMsg: '', endDateErrMsg: '', startDate: '', endDate: ''}

  onstartDateErrMsg = event => {
    if (event.target.value === '') {
      this.setState({startDateErrMsg: 'Select start data'})
    } else {
      this.setState({startDateErrMsg: ''})
    }
  }

  onEndDateErrMsg = event => {
    if (event.target.value === '') {
      this.setState({endDateErrMsg: 'Select end data'})
    } else {
      this.setState({endDateErrMsg: ''})
    }
  }

  updateStartDate = event => {
    this.setState({startDate: event.target.value})
  }

  updateEndDate = event => {
    this.setState({endDate: event.target.value})
  }

  onDateSelectionNextButton = () => {
    const {startDate, endDate} = this.state
    const {dateSelectionNextButton} = this.props
    const startDateObject = new Date(startDate)
    const endDateObject = new Date(endDate)
    if (startDate === '') {
      this.setState({startDateErrMsg: 'Select start data'})
    } else if (endDate === '') {
      this.setState({endDateErrMsg: 'Select end data'})
    } else if (endDateObject - startDateObject < 0) {
      this.setState({
        endDateErrMsg: 'The end date cannot be less than start date',
      })
    } else {
      dateSelectionNextButton(1, 2, startDate, endDate)
    }
  }

  onPreviousButton = () => {
    const {previousButton} = this.props
    previousButton(0)
  }

  render() {
    const {startDateErrMsg, endDateErrMsg, startDate, endDate} = this.state

    return (
      <div className="mytrip-details-container">
        <form>
          <h1>Date Selection</h1>
          <p className="mytrip-details-description">
            Select your Start and End Date.
          </p>
          <div className="detailsform-card">
            <div>
              <label htmlFor="startDate">Start Date</label>
              <br />
              <input
                id="startDate"
                type="date"
                className="date-input"
                value={startDate}
                onBlur={this.onstartDateErrMsg}
                onChange={this.updateStartDate}
              />
              <p className="error-msg">{startDateErrMsg}</p>
            </div>
            <div>
              <label htmlFor="startdate">Start Date</label>
              <br />
              <input
                id="startdate"
                type="date"
                className="date-input"
                value={endDate}
                onBlur={this.onEndDateErrMsg}
                onChange={this.updateEndDate}
              />
              <p className="error-msg">{endDateErrMsg}</p>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="previous-button"
                onClick={this.onPreviousButton}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-button"
                onClick={this.onDateSelectionNextButton}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DateSelectionPage
