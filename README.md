<!DOCTYPE html>

<body>

  <h1>🗓️ Appointment Calendar for Clinic Staff (Frontend-Only React App)</h1>

  <h2>🚀 Project Overview</h2>
  <p>This project is a simple and responsive appointment calendar designed to help front desk staff at a clinic or hospital manage doctor appointments.</p>
  <p>👉 Built using <strong>React</strong>, this is a <strong>frontend-only</strong> application that uses <strong>localStorage</strong> for persisting data — no backend or external services are involved.</p>
  <p>Fully <strong>responsive</strong> for both desktop and mobile views.</p>

  <hr>

  <h2>🔐 1. Login (Mock Authentication)</h2>
  <ul>
    <li>Email + Password login form</li>
    <li>Hardcoded credentials:
      <ul>
        <li><strong>Email:</strong> <code>staff@clinic.com</code></li>
        <li><strong>Password:</strong> <code>123456</code></li>
      </ul>
    </li>
    <li>On successful login → redirects to the calendar dashboard</li>
  </ul>

  <hr>

  <h2>📅 2. Calendar View</h2>

  <h3>🖥️ On Desktop:</h3>
  <ul>
    <li>Displays a <strong>month view</strong> (like Google Calendar)</li>
    <li>Each day shows:
      <ul>
        <li>Patient name(s)</li>
        <li>Appointment time(s)</li>
      </ul>
    </li>
    <li>Clicking a day opens a form to add/edit appointments</li>
  </ul>

  <h3>📱 On Mobile:</h3>
  <ul>
    <li>One-day-at-a-time view</li>
    <li>Includes a date picker</li>
    <li>Scrollable day-wise view</li>
  </ul>

  <hr>

  <h2>🧾 3. Appointments</h2>
  <p>Each appointment includes:</p>
  <ul>
    <li>Patient name (from a dropdown)</li>
    <li>Doctor name (from a dropdown)</li>
    <li>Appointment time (via time picker)</li>
  </ul>
  <p>Data is loaded from a fixed static list (local file).</p>

  <hr>

  <h2>📝 4. Appointment Form</h2>
  <p>Used to <strong>add</strong> or <strong>edit</strong> an appointment.</p>
  <ul>
    <li>Form fields:
      <ul>
        <li>Patient (select)</li>
        <li>Doctor (select)</li>
        <li>Time (time picker)</li>
      </ul>
    </li>
    <li>Appointments are stored in localStorage and persist on reload.</li>
  </ul>

  <hr>

  <h2>📆 5. Calendar Behavior</h2>
  <ul>
    <li>Shows <strong>only the current month</strong></li>
    <li>Leading days (if month doesn't start on Sunday) are <strong>blank</strong></li>
    <li>Optionally supports styling for adjacent-month days (greyed out, not interactive)</li>
  </ul>

  <hr>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>React (Vite)</strong></li>
    <li><strong>React Router</strong> (for navigation)</li>
    <li><strong>CSS</strong> for styling (fully responsive)</li>
    <li>Optional: Add Tailwind / Material UI if desired</li>
  </ul>

  <hr>

  <h2>🌟 Nice-to-Haves (Implemented)</h2>
  <ul>
    <li>✅ Delete an appointment</li>
    <li>✅ Filter appointments by doctor or patient</li>
    <li>✅ Toggle between Light & Dark mode</li>
    <li>✅ Responsive layout (mobile-friendly)</li>
    <li>✅ Footer with creator contact</li>
  </ul>

  <hr>

  <h2>👩‍💻 Developed By</h2>
  <p><strong>Priyanshi Singh</strong><br>
  📧 <a href="mailto:priyanshi302004@gmail.com">priyanshi302004@gmail.com</a></p>

  <hr>

  <h2>🧪 How to Run Locally</h2>
  <pre><code>npm install
npm run dev</code></pre>
  <p>Visit: <code>http://localhost:5173/</code></p>

  <hr>

  <h2>✅ Live Demo (Optional)</h2>
  <p>You can deploy it using <a href="https://vercel.com" target="_blank">Vercel</a> or <a href="https://netlify.com" target="_blank">Netlify</a> in 1-click.</p>

</body>
</html>
