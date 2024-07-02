import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageclassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageclassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
