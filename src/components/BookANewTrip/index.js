import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import ReactContext from '../../context/ReactContext'

import './index.css'

const stepsList = [
  {
    stepId: 'YOUR_DETAILS',
    displayText: 'Your Details',
    number: 1,
    isCompleted: false,
  },
  {
    stepId: 'DATE_SELECTION',
    displayText: 'Date Selection',
    number: 2,
    isCompleted: false,
  },
  {stepId: 'GUESTS', displayText: 'Guests', number: 3, isCompleted: false},
  {
    stepId: 'TRAVEL_ASSISTANCE',
    displayText: 'Travel Assistance',
    number: 4,
    isCompleted: false,
  },
  {
    stepId: 'CONFIRMATION',
    displayText: 'Confirmation',
    number: 5,
    isCompleted: false,
  },
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class BookANewTrip extends Component {
  state = {
    activeId: stepsList[0].stepId,
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    adultAgeCount: 1,
    childrenAgeCount: 0,
    infantAgeCount: 0,
    isCheckboxChecked: false,
    travelAssistance: travelAssistanceList[2].displayText,
    nameErrMsg: '',
    startErrMsg: '',
    endErrMsg: '',
    endDateErrMsg: '',
    startDateErrMsg: '',
  }

  yourDetailsPage = () => {
    const {
      name,
      startLocation,
      endLocation,
      nameErrMsg,
      startErrMsg,
      endErrMsg,
    } = this.state

    const onUpdateName = event => {
      this.setState({name: event.target.value})
    }

    const onUpdateStartLocation = event => {
      this.setState({startLocation: event.target.value})
    }

    const onUpdateEndLocation = event => {
      this.setState({endLocation: event.target.value})
    }
    const nextButton = () => {
      if (name === '') {
        this.setState({nameErrMsg: 'Enter your name'})
      } else if (startLocation === '') {
        this.setState({
          startErrMsg: 'Enter your start location',
          nameErrMsg: '',
        })
      } else if (endLocation === '') {
        this.setState({
          endErrMsg: 'Enter your end location',
          nameErrMsg: '',
          startErrMsg: '',
        })
      } else {
        stepsList[0].isCompleted = true
        this.setState({activeId: stepsList[1].stepId})
      }
    }

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
                value={name}
                onChange={onUpdateName}
              />
              <p className="error-msg">{nameErrMsg}</p>
            </div>
            <div>
              <label htmlFor="startLocation">Start Location</label>
              <br />
              <input
                id="startLocation"
                type="text"
                className="input-el"
                placeholder="Enter start location"
                value={startLocation}
                onChange={onUpdateStartLocation}
              />
              <p className="error-msg">{startErrMsg}</p>
            </div>
            <div>
              <label htmlFor="endLocation">End Location</label>
              <br />
              <input
                id="endLocation"
                type="text"
                className="input-el"
                placeholder="Enter end location"
                value={endLocation}
                onChange={onUpdateEndLocation}
              />
              <p className="error-msg">{endErrMsg}</p>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="next-button"
                onClick={nextButton}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  dateSelectionPage = () => {
    const {startDate, endDate, startDateErrMsg, endDateErrMsg} = this.state

    const onstartDateErrMsg = event => {
      if (event.target.value === '') {
        this.setState({startDateErrMsg: 'Select start data'})
      } else {
        this.setState({startDateErrMsg: ''})
      }
    }

    const onEndDateErrMsg = event => {
      if (event.target.value === '') {
        this.setState({endDateErrMsg: 'Select end data'})
      } else {
        this.setState({endDateErrMsg: ''})
      }
    }

    const updateStartDate = event => {
      this.setState({startDate: event.target.value})
    }

    const updateEndDate = event => {
      this.setState({endDate: event.target.value})
    }
    const nextButton = () => {
      const startDateObject = new Date(startDate)
      const endDateObject = new Date(endDate)
      if (startDate === '') {
        this.setState({startDateErrMsg: 'Select start date'})
      } else if (endDate === '') {
        this.setState({endDateErrMsg: 'Select end date'})
      } else if (endDateObject - startDateObject < 0) {
        this.setState({
          endDateErrMsg: 'The end date cannot be less than the start date',
        })
      } else {
        stepsList[1].isCompleted = true
        this.setState({activeId: stepsList[2].stepId})
      }
    }
    const previousButton = () => {
      this.setState({activeId: stepsList[0].stepId})
    }

    return (
      <div className="myTrip-details-container">
        <h1 className="myTrips-heading">Date Selection</h1>
        <p className="myTrip-details-description">
          Select your Start and End Date
        </p>
        <form className="detailsForm-card">
          <label htmlFor="startDate">Start Date</label>
          <br />
          <input
            id="startDate"
            type="date"
            className="date-input"
            value={startDate}
            onBlur={onstartDateErrMsg}
            onChange={updateStartDate}
          />
          <p className="error-msg">{startDateErrMsg}</p>

          <label htmlFor="endDate">End Date</label>
          <br />
          <input
            id="endDate"
            type="date"
            className="date-input"
            value={endDate}
            onBlur={onEndDateErrMsg}
            onChange={updateEndDate}
          />
          <p className="error-msg">{endDateErrMsg}</p>

          <div className="button-container">
            <button
              type="button"
              className="previous-button"
              onClick={previousButton}
            >
              Previous
            </button>
            <button type="button" className="next-button" onClick={nextButton}>
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }

  guestsPage = () => {
    const {adultAgeCount, childrenAgeCount, infantAgeCount} = this.state
    const onAdultIncrement = () => {
      this.setState(prevState => ({adultAgeCount: prevState.adultAgeCount + 1}))
    }
    const onAdultDecrement = () => {
      this.setState(prevState => {
        if (prevState.adultAgeCount === 1) {
          return {adultAgeCount: prevState.adultAgeCount}
        }
        return {adultAgeCount: prevState.adultAgeCount - 1}
      })
    }
    const onChildAgeIncrement = () => {
      this.setState(prevState => ({
        childrenAgeCount: prevState.childrenAgeCount + 1,
      }))
    }
    const onChildAgeDecrement = () => {
      this.setState(prevState => ({
        childrenAgeCount: prevState.childrenAgeCount - 1,
      }))
    }
    const onInfantAgeIncrement = () => {
      this.setState(prevState => ({
        infantAgeCount: prevState.infantAgeCount + 1,
      }))
    }
    const onInfantAgeDecrement = () => {
      this.setState(prevState => ({
        infantAgeCount: prevState.infantAgeCount - 1,
      }))
    }
    const previousButton = () => {
      this.setState({activeId: stepsList[1].stepId})
    }
    const nextButton = () => {
      stepsList[2].isCompleted = true
      this.setState({activeId: stepsList[3].stepId})
    }

    return (
      <div className="mytrip-details-container">
        <h1>Guests</h1>
        <p className="mytrip-details-description">Select your Guests</p>
        <div className="detailsform-card">
          <div className="guest-container-card">
            <div>
              <p className="guest-page-para">Adults</p>
              <p className="guest-page-para" style={{color: '#64748b'}}>
                Age 13 or above
              </p>
            </div>
            <div className="guest-container-age-card">
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onAdultDecrement}
              >
                -
              </button>
              <p className="count-members">{adultAgeCount}</p>
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onAdultIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="guest-container-card">
            <div>
              <p className="guest-page-para">Children</p>
              <p className="guest-page-para" style={{color: '#64748b'}}>
                Age 2-12
              </p>
            </div>
            <div className="guest-container-age-card">
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onChildAgeDecrement}
              >
                -
              </button>
              <p className="count-members">{childrenAgeCount}</p>
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onChildAgeIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="guest-container-card">
            <div>
              <p className="guest-page-para">Infants</p>
              <p className="guest-page-para" style={{color: '#64748b'}}>
                under 2
              </p>
            </div>
            <div className="guest-container-age-card">
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onInfantAgeDecrement}
              >
                -
              </button>
              <p className="count-members">{infantAgeCount}</p>
              <button
                type="button"
                className="Age-minus-plus "
                onClick={onInfantAgeIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="button-container" style={{marginTop: '10px'}}>
            <button
              type="button"
              className="previous-button"
              onClick={previousButton}
            >
              Previous
            </button>
            <button type="button" className="next-button" onClick={nextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  travelAssistance = () => {
    const {isCheckboxChecked, travelAssistance} = this.state
    const oncheckBoxChecked = () => {
      this.setState(prevState => ({
        isCheckboxChecked: !prevState.isCheckboxChecked,
      }))
    }
    const onUpdateTravelAssistance = event => {
      this.setState({travelAssistance: event.target.value})
    }
    const previousButton = () => {
      this.setState({activeId: stepsList[2].stepId})
    }
    const nextButton = () => {
      stepsList[3].isCompleted = true
      this.setState({activeId: stepsList[4].stepId})
    }
    return (
      <div className="mytrip-details-container">
        <h1>Travel Assistance</h1>
        <p className="mytrip-details-description">
          Select your travel assistance
        </p>
        <div className="detailsform-card" style={{width: '350px'}}>
          <div style={{marginBottom: '20px'}}>
            <input
              type="checkbox"
              checked={isCheckboxChecked}
              onClick={oncheckBoxChecked}
              id="check"
              style={{width: '20px'}}
            />
            <label htmlFor="check" style={{fontSize: '14px'}}>
              Travel Assistance Needed
            </label>
          </div>
          {isCheckboxChecked ? (
            <div>
              <label htmlFor="options" style={{fontSize: '14px'}}>
                Travel Assistance
              </label>
              <br />
              <select
                id="options"
                className="travel-assistance-select"
                onChange={onUpdateTravelAssistance}
              >
                {travelAssistanceList.map(each => {
                  if (each.displayText === travelAssistance) {
                    return (
                      <option value={each.value} selected="true">
                        {each.displayText}
                      </option>
                    )
                  }
                  return <option value={each.value}>{each.displayText}</option>
                })}
              </select>
            </div>
          ) : (
            ''
          )}

          <div className="button-container" style={{marginTop: '10px'}}>
            <button
              type="button"
              className="previous-button"
              onClick={previousButton}
            >
              Previous
            </button>
            <button type="button" className="next-button" onClick={nextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  confirmation = () => (
    <ReactContext.Consumer>
      {value => {
        const {
          name,
          startLocation,
          endLocation,
          startDate,
          endDate,
          adultAgeCount,
          childrenAgeCount,
          infantAgeCount,
          travelAssistance,
        } = this.state

        const {addTrip} = value
        const confirmButton = () => {
          const tripObject = {id: uuidv4(), endLocation, startDate, endDate}
          addTrip(tripObject)
          stepsList[4].isCompleted = true
          this.setState({activeId: 'awesomePage'})
        }
        const cancelButton = () => {
          stepsList[0].isCompleted = false
          stepsList[1].isCompleted = false
          stepsList[2].isCompleted = false
          stepsList[3].isCompleted = false
          stepsList[4].isCompleted = false
          this.setState({
            activeId: stepsList[0].stepId,
            name: '',
            startLocation: '',
            endLocation: '',
            startDate: '',
            endDate: '',
            adultAgeCount: 1,
            childrenAgeCount: 0,
            infantAgeCount: 0,
            isCheckboxChecked: false,
            travelAssistance: travelAssistanceList[0].displayText,
          })
        }

        return (
          <div className="mytrip-details-container">
            <h1>Confirmation</h1>
            <p className="mytrip-details-description">Confirm your details</p>
            <div className="detailsform-card" style={{width: '350px'}}>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">Name:</p>
                <p>{name}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">
                  Start Location:
                </p>
                <p>{startLocation}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">
                  End Location:
                </p>
                <p>{endLocation}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">Start Date:</p>
                <p>{startDate}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">End Date:</p>
                <p>{endDate}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">Guests:</p>
                <p>{adultAgeCount + childrenAgeCount + infantAgeCount}</p>
              </div>
              <div className="confirmation-eachDetails">
                <p className="confirmation-eachDetails-heading">
                  Travel Assistance:
                </p>
                <p>{travelAssistance}</p>
              </div>
              <div className="button-container" style={{marginTop: '10px'}}>
                <button
                  type="button"
                  className="previous-button"
                  onClick={cancelButton}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="next-button"
                  onClick={confirmButton}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )
      }}
    </ReactContext.Consumer>
  )

  awesomePage = () => {
    const bookAnewTrip = () => {
      stepsList[0].isCompleted = false
      stepsList[1].isCompleted = false
      stepsList[2].isCompleted = false
      stepsList[3].isCompleted = false
      stepsList[4].isCompleted = false
      this.setState({
        activeId: stepsList[0].stepId,
        name: '',
        startLocation: '',
        endLocation: '',
        startDate: '',
        endDate: '',
        adultAgeCount: 1,
        childrenAgeCount: 0,
        infantAgeCount: 0,
        isCheckboxChecked: false,
        travelAssistance: travelAssistanceList[0].displayText,
      })
    }
    return (
      <div className="mytrip-details-container">
        <div
          className="detailsform-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
            alt="success"
            className="awesome-tick"
          />
          <h1>Awesome!</h1>
          <p>Your booking has been confirmed</p>
          <button type="button" className="next-button" onClick={bookAnewTrip}>
            Book a new trip
          </button>
        </div>
      </div>
    )
  }

  switchStatementFunction = activeId => {
    switch (activeId) {
      case stepsList[0].stepId:
        return this.yourDetailsPage()
      case stepsList[1].stepId:
        return this.dateSelectionPage()
      case stepsList[2].stepId:
        return this.guestsPage()
      case stepsList[3].stepId:
        return this.travelAssistance()
      case stepsList[4].stepId:
        return this.confirmation()
      case 'awesomePage':
        return this.awesomePage()
      default:
        return this.awesomePage()
    }
  }

  render() {
    const {activeId} = this.state
    return (
      <div>
        <Header />
        <div className="mytrip-whole-container">
          <div>
            <ul>
              {stepsList.map(each => {
                let activelistNumberStyle = ''
                let activelistTextStyle = ''
                if (each.stepId === activeId) {
                  activelistNumberStyle = 'active-list-item-number'
                  activelistTextStyle = 'active-text-color'
                }

                return (
                  <li key={each.stepId}>
                    <div className="list-item-container">
                      {each.isCompleted ? (
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                          className="completed-tick-icon"
                          alt={each.displayText}
                        />
                      ) : (
                        <p
                          className={`list-item-number ${activelistNumberStyle}`}
                        >
                          {each.number}
                        </p>
                      )}

                      <p className={activelistTextStyle}>{each.displayText}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          {this.switchStatementFunction(activeId)}
        </div>
      </div>
    )
  }
}

export default BookANewTrip
