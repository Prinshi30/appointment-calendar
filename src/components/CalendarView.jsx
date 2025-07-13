import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import './CalendarView.css';
import { doctors, patients } from '../data';

const CalendarView = () => {
  const history = useHistory();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filterDoctor, setFilterDoctor] = useState('');
  const [filterPatient, setFilterPatient] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(data);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    history.push('/');
  };

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDayClick = (day) => {
    const fullDate = `${year}-${month + 1}-${day}`;
    setSelectedDate(fullDate);
    setShowForm(true);
  };

  const handleSaveAppointment = (appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  const handleDeleteAppointment = (appointmentToDelete) => {
    const updated = appointments.filter(
      (appt) =>
        !(
          appt.date === appointmentToDelete.date &&
          appt.patient === appointmentToDelete.patient &&
          appt.time === appointmentToDelete.time
        )
    );
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  const getAppointmentsForDate = (dateStr) => {
    return appointments.filter((appt) => {
      const matchesDate = appt.date === dateStr;
      const matchesDoctor = !filterDoctor || appt.doctor === filterDoctor;
      const matchesPatient = !filterPatient || appt.patient === filterPatient;
      return matchesDate && matchesDoctor && matchesPatient;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const cells = [];

    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${month + 1}-${day}`;
      const dayAppointments = getAppointmentsForDate(dateStr);

      cells.push(
        <div key={day} className="calendar-cell" onClick={() => handleDayClick(day)}>
          <div className="cell-date">{day}</div>
          <div className="appointments">
            {dayAppointments.map((appt, index) => (
              <div key={index} className="appt-info">
                <span>{appt.time} - {appt.patient}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAppointment(appt);
                  }}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return cells;
  };

  return (
    <div className={`calendar-container ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={handleLogout} className="logout-btn">Logout</button>

      <div className="calendar-header">
        <button onClick={handlePrev}>⟨</button>
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={handleNext}>⟩</button>
      </div>

      <div className="filters">
        <select onChange={(e) => setFilterDoctor(e.target.value)} value={filterDoctor}>
          <option value="">All Doctors</option>
          {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
        </select>
        <select onChange={(e) => setFilterPatient(e.target.value)} value={filterPatient}>
          <option value="">All Patients</option>
          {patients.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="calendar-grid">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
        {renderCalendar()}
      </div>

      {showForm && (
        <AppointmentForm
          selectedDate={selectedDate}
          onClose={() => setShowForm(false)}
          onSave={handleSaveAppointment}
        />
      )}

      <footer className="app-footer">
        <p>
          Made with ❤️ by Priyanshi Singh | 📧 <a href="mailto:priyanshi302004@gmail.com">priyanshi302004@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default CalendarView;
