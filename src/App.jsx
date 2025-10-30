import './App.css'

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

export default function App() {
  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('FORM SUBMIT →', data)
    alert('Form submitted! (Open the browser console to see the payload)')
    e.currentTarget.reset()
  }

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 8 }}>New Opportunity</h1>
      <p style={{ marginTop: 0, color: '#555' }}>
        Enter the details below and submit.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>
        {/* Company */}
        <label>
          <span>Company *</span>
          <input name="company" type="text" required placeholder="Acme Inc." />
        </label>

        {/* Email */}
        <label>
          <span>Email *</span>
          <input name="email" type="email" required placeholder="name@company.com" />
        </label>

        {/* State */}
        <label>
          <span>State *</span>
          <select name="state" required defaultValue="">
            <option value="" disabled>Select state…</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        {/* First / Last Name */}
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr 1fr' }}>
          <label>
            <span>First Name *</span>
            <input name="firstName" type="text" required />
          </label>
          <label>
            <span>Last Name *</span>
            <input name="lastName" type="text" required />
          </label>
        </div>

        {/* Opportunity Title */}
        <label>
          <span>Opportunity Title *</span>
          <input name="title" type="text" required placeholder="Roof Replacement – HQ" />
        </label>

        {/* Phones */}
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr 1fr' }}>
          <label>
            <span>Phone (office)</span>
            <input
              name="phoneOffice"
              type="tel"
              inputMode="tel"
              placeholder="(555) 555-1212"
              pattern="[0-9]{7,20}"

              title="7-20 digits; spaces and ()+.- allowed"


            />
          </label>
          <label>
            <span>Phone (cell)</span>
            <input
              name="phoneCell"
              type="tel"
              inputMode="tel"
              placeholder="(555) 555-3434"
              pattern="[0-9]{7,20}"

              title="7-20 digits; spaces and ()+.- allowed"

            />
          </label>
        </div>

        {/* Website */}
        <label>
          <span>Website</span>
          <input name="website" type="url" placeholder="https://example.com" />
        </label>

        {/* Industry */}
        <label>
          <span>Industry</span>
          <input name="industry" type="text" placeholder="Manufacturing" />
        </label>

        {/* Number of Employees */}
        <label>
          <span>Number of Employees</span>
          <input name="employees" type="number" min="1" step="1" placeholder="100" />
        </label>

        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>

      {/* tiny form styles for a clean layout */}
      <style>{`
        label { display: grid; gap: 6px; }
        input, select, button { padding: 10px 12px; font-size: 14px; }
        button { cursor: pointer; }
      `}</style>
    </main>
  )
}
