import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';

const localizer = momentLocalizer(moment);

const Myschedule = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: null, end: null });
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#F0E68C'];

  // Function to handle event creation
  const handleSelectSlot = (slotInfo) => {
    setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
    setModalOpen(true); // Open the modal when a day is clicked
  };

  // Handle form submission
  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title.trim()) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      setEvents([...events, { ...newEvent, color }]);
      setModalOpen(false); // Close the modal after submission
      setNewEvent({ title: '', start: null, end: null });
    }
  };

  // Custom event style for random border color
  const eventStyleGetter = (event) => {
    return {
      style: {
        borderLeft: `5px solid ${event.color}`,
        backgroundColor: '#fff',
        color: 'black',
      },
    };
  };

  return (
    <div className="schedule-container">
      <h2>My Schedule</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600, width: '100%' }}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={null}
        views={['month', 'year']}
        popup
        components={{
          event: ({ event }) => (
            <div className="custom-event" style={{ borderColor: event.color }}>
              {event.title}
              <div className="event-popup" style={{ backgroundColor: event.color }}>
                {event.title}
              </div>
            </div>
          ),
        }}
      />

      {/* Event creation modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Create Event"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h3>Create New Event</h3>
        <form onSubmit={handleEventSubmit}>
          <label>
            Event Title:
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              required
            />
          </label>
          <button type="submit">Add Event</button>
        </form>
      </Modal>
    </div>
  );
};

export default Myschedule;
