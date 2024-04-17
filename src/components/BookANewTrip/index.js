import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import ReactContext from '../../context/ReactContext'
import YourDetailsPage from '../YourDetailsPage'
import DateSelectionPage from '../DateSelectionPage'
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
    travelAssistance: travelAssistanceList[0].displayText,
  }

  yourDetailsNextButton = (num1, num2, name, startLocation, endLocation) => {
    stepsList[num1].isCompleted = true
    this.setState({
      activeId: stepsList[num2].stepId,
      name,
      startLocation,
      endLocation,
    })
  }

  dateSelectionNextButton = (num1, num2, startDate, endDate) => {
    stepsList[num1].isCompleted = true
    this.setState({activeId: stepsList[num2].stepId, startDate, endDate})
  }

  previousButton = num1 => {
    this.setState({activeId: stepsList[num1].stepId})
  }

  guestsPage = () => {
    const {adultAgeCount, childrenAgeCount, infantAgeCount} = this.state
    const onAdultIncrement = () => {
      this.setState(prevState => ({adultAgeCount: prevState.adultAgeCount + 1}))
    }
    const onAdultDecrement = () => {
      this.setState(prevState => ({adultAgeCount: prevState.adultAgeCount - 1}))
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
              <p className="Age-minus-plus " onClick={onAdultDecrement}>
                -
              </p>
              <p className="count-members">{adultAgeCount}</p>
              <p className="Age-minus-plus " onClick={onAdultIncrement}>
                +
              </p>
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
              <p className="Age-minus-plus " onClick={onChildAgeDecrement}>
                -
              </p>
              <p className="count-members">{childrenAgeCount}</p>
              <p className="Age-minus-plus " onClick={onChildAgeIncrement}>
                +
              </p>
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
              <p className="Age-minus-plus " onClick={onInfantAgeDecrement}>
                -
              </p>
              <p className="count-members">{infantAgeCount}</p>
              <p className="Age-minus-plus " onClick={onInfantAgeIncrement}>
                +
              </p>
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
    const {isCheckboxChecked} = this.state
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
              onClick={oncheckBoxChecked}
              id="check"
              style={{width: '20px'}}
            />
            <label htmlFor="check" style={{fontSize: '14px'}}>
              Travel Assistance
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
                {travelAssistanceList.map(each => (
                  <option value={each.value}>{each.displayText}</option>
                ))}
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
          <p>Your book has been confirmed</p>
          <button type="button" className="next-button" onClick={bookAnewTrip}>
            Book a new trip
          </button>
        </div>
      </div>
    )
  }

  switchStatementFunction = activeId => {
    const {name, startLocation, endLocation} = this.state
    switch (activeId) {
      case stepsList[0].stepId:
        return (
          <YourDetailsPage
            items={{name, startLocation, endLocation}}
            yourDetailsNextButton={this.yourDetailsNextButton}
          />
        )
      case stepsList[1].stepId:
        return (
          <DateSelectionPage
            previousButton={this.previousButton}
            dateSelectionNextButton={this.dateSelectionNextButton}
          />
        )
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
