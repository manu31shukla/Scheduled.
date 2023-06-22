import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
  // Step 1: Define state variables
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurringDays, setRecurringDays] = useState([]);
  const [color, setColor] = useState('#007bff');
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    event.preventDefault();

    // Step 2: Create a new event object
    const newEvent = {
      eventName,
      startDate,
      endDate,
      recurringDays,
      color,
    };

    // Step 3: Update the events array with the new event
    setEvents([...events, newEvent]);

    // Step 4: Reset the form fields
    setEventName('');
    setStartDate('');
    setEndDate('');
    setRecurringDays([]);
  };

  return (
    <div className={`event-form-container`}>
      <div className="event-form-left">
        {/* Step 5: Add welcome message and event image */}
        <h2 className="event-text">Welcome to Scheduler.</h2>
        <img
          src="https://img.freepik.com/free-vector/messy-night-workplace-top-view-clutter-office-desk-work-space-with-mess-spilled-coffee-crumbled-muffin-document-around-glowing-pc-monitor_107791-5711.jpg?w=1060&t=st=1687258176~exp=1687258776~hmac=74911dda6a4c2944717d0b713ffedc92ce220b8dacf527f8c7aca6c9688ff4cf"
          alt="Event"
          className="event-image"
        />
      </div>
      <div className="event-form-right">
        <h2>Add Event</h2>
        <form onSubmit={handleAddEvent}>
          {/* Step 6: Add input fields for event details */}
          <div className="form-field">
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="recurringDays">Recurring Days:</label>
            {/* Step 7: Create checkbox inputs for recurring days */}
            <div className="checkbox-group">
              {/* Checkbox for weekdays */}
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="monday"
                  value="Monday"
                  checked={recurringDays.includes('Monday')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRecurringDays([...recurringDays, 'Monday']);
                    } else {
                      setRecurringDays(
                        recurringDays.filter((day) => day !== 'Monday')
                      );
                    }
                  }}
                />
                <label htmlFor="monday">Monday</label>
              </div>
             
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="tuesday"
                  value="Tuesday"
                  checked={recurringDays.includes('Tuesday')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRecurringDays([...recurringDays, 'Tuesday']);
                    } else {
                      setRecurringDays(
                        recurringDays.filter((day) => day !== 'Tuesday')
                      );
                    }
                  }}
                />
                <label htmlFor="tuesday">Tuesday</label>
              </div>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="color">Event Color:</label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <button type="submit" className="add-event-button">
            Add Event
          </button>
        </form>
        {/* Step 8: Display the list of events */}
        {events.length > 0 && (
          <div className="event-list">
            {events.map((event, index) => (
              <div
                className="event-card"
                style={{ backgroundColor: event.color }}
                key={index}
              >
                <h3>{event.eventName}</h3>
                <div className="event-item">
                  <p>Start Date: {event.startDate}</p>
                  <p>End Date: {event.endDate}</p>
                  <p>Recurring Days: {event.recurringDays.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventForm;
