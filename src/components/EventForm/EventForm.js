import React, { useState } from 'react';
import './EventForm.css'; // Import the CSS file

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurringDays, setRecurringDays] = useState([]);

  const [events, setEvents] = useState([]);

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleRecurringDayChange = (day) => {
    if (recurringDays.includes(day)) {
      setRecurringDays(recurringDays.filter((d) => d !== day));
    } else {
      setRecurringDays([...recurringDays, day]);
    }
  };

  const handleAddEvent = () => {
    const newEvent = {
      eventName,
      startDate,
      endDate,
      recurringDays,
    };

    setEvents([...events, newEvent]);

    // Reset form fields
    setEventName('');
    setStartDate('');
    setEndDate('');
    setRecurringDays([]);
  };

  return (
    <div className="event-form-container">
      <h2>Event Form</h2>
      <div className="form-field">
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>

      <div className="form-field">
        <label>Recurring Days:</label>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="monday"
              value="Monday"
              checked={recurringDays.includes('Monday')}
              onChange={() => handleRecurringDayChange('Monday')}
            />
            <label htmlFor="monday">Monday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="tuesday"
              value="Tuesday"
              checked={recurringDays.includes('Tuesday')}
              onChange={() => handleRecurringDayChange('Tuesday')}
            />
            <label htmlFor="tuesday">Tuesday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="wednesday"
              value="Wednesday"
              checked={recurringDays.includes('Wednesday')}
              onChange={() => handleRecurringDayChange('Wednesday')}
            />
            <label htmlFor="wednesday">Wednesday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="thursday"
              value="Thursday"
              checked={recurringDays.includes('Thursday')}
              onChange={() => handleRecurringDayChange('Thursday')}
            />
            <label htmlFor="thursday">Thursday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="friday"
              value="Friday"
              checked={recurringDays.includes('Friday')}
              onChange={() => handleRecurringDayChange('Friday')}
            />
            <label htmlFor="friday">Friday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="saturday"
              value="Saturday"
              checked={recurringDays.includes('Saturday')}
              onChange={() => handleRecurringDayChange('Saturday')}
            />
            <label htmlFor="saturday">Saturday</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="sunday"
              value="Sunday"
              checked={recurringDays.includes('Sunday')}
              onChange={() => handleRecurringDayChange('Sunday')}
            />
            <label htmlFor="sunday">Sunday</label>
          </div>
        </div>
      </div>

      <button className="add-event-button" onClick={handleAddEvent}>
        Add Event
      </button>

      <h2>Added Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.eventName}</h3>
            <p>
              <strong>Start Date:</strong> {event.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {event.endDate}
            </p>
            <p>
              <strong>Recurring Days:</strong> {event.recurringDays.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventForm;
