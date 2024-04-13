import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import './index.css'

const MyTrips = props => (
  <ReactContext.Consumer>
    {value => {
      const {myTripsList, updateTrips} = value

      const bookANewTripButton = () => {
        const {history} = props
        history.replace('/book-a-new-trip')
      }

      const myTripsListItems = () => (
        <div className="myTrips-container">
          <ul>
            <li className="myTrips-listItems">My Trips</li>
            {myTripsList.map(eachItem => {
              const {endLocation, startDate, endDate, id} = eachItem
              const cancelButton = () => {
                updateTrips(id)
              }
              return (
                <li className="myTrips-each-card myTrips-listItems">
                  <div>
                    <h1>{endLocation}</h1>
                  </div>
                  <div>
                    <p>Date</p>
                    <p>{`${startDate} to ${endDate}`}</p>
                  </div>
                  <div style={{alignSelf: 'center'}}>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={cancelButton}
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )

      const noItemsPage = () => (
        <div className="noItemsPage-container">
          <img src="https://i.ibb.co/gmhNmKT/Frame-1000003896.png" alt="" />
          <h1 className="noItemsPage-heading">No Upcoming trips</h1>
          <p style={{color: '#64748b'}}>
            When you book a trip, you will see your trip details here.
          </p>
          <button
            type="button"
            className="book-button"
            onClick={bookANewTripButton}
          >
            Book a New Trip
          </button>
        </div>
      )

      return (
        <div>
          <Header />
          {myTripsList.length === 0 ? noItemsPage() : myTripsListItems()}
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default MyTrips
