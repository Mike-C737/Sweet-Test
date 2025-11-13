import React, { useMemo, useState } from 'react';
import {
  ThemeProvider, createTheme, CssBaseline,
  Box, Paper, Typography, Stack,
  TextField, MenuItem, Button, Snackbar, Alert
} from '@mui/material';

const API_BASE = 'https://localhost:7212';
console.log('POSTing to:', `${API_BASE}/api/leads`);

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
];

export default function App() {
  const theme = useMemo(() => createTheme({
    palette: { mode: 'light', background: { default: '#f7f7f9' } },
    shape: { borderRadius: 12 }
  }), []);

  const [form, setForm] = useState({
    title: '',
    company: '',
    state: '',
    industry: '',
    website: '',
    employees: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneOffice: '',
    phoneCell: '',
  });
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState({ open: false, severity: 'success', msg: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  
  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const payload = {
        title: form.title,
        company: form.company,
        state: form.state,
        industry: form.industry,
        website: form.website,
        employees: Number(form.employees || 0),
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phoneOffice: form.phoneOffice,
        phoneCell: form.phoneCell,
      };

      const response = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);

      setToast({ open: true, severity: 'success', msg: 'Lead submitted' });
      setForm({
        title: '', company: '', state: '', industry: '', website: '',
        employees: '', email: '', firstName: '', lastName: '',
        phoneOffice: '', phoneCell: ''
      });
    } catch (err) {
      setToast({ open: true, severity: 'error', msg: err?.message || 'Submission failed' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={3}
          sx={{ p: { xs: 3, sm: 4 }, width: '100%', maxWidth: 640, mx: 'auto' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            New Opportunity
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Please provide the details below. All fields are required.
          </Typography>

          <Stack spacing={2}>
            <TextField
              name="title" label="Opportunity Title" required
              value={form.title} onChange={onChange} placeholder="Roof Replacement – HQ"
            />
            <TextField
              name="company" label="Company" required
              value={form.company} onChange={onChange} placeholder="Acme Inc."
            />
            <TextField
              name="state" label="State" select required
              value={form.state} onChange={onChange}
            >
              <MenuItem value="" disabled>Select state…</MenuItem>
              {STATES.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </TextField>
            <TextField
              name="industry" label="Industry" required
              value={form.industry} onChange={onChange} placeholder="Manufacturing"
            />
            <TextField
              name="website" type="url" label="Website" required
              value={form.website} onChange={onChange} placeholder="https://example.com"
            />
            <TextField
              name="employees" type="number" label="Number of Employees" required
              value={form.employees} onChange={onChange}
              inputProps={{ min: 1, step: 1, inputMode: 'numeric' }}
            />
            <TextField
              name="email" type="email" label="Email Address" required
              value={form.email} onChange={onChange} placeholder="name@company.com"
            />
            <TextField
              name="firstName" label="First Name" required
              value={form.firstName} onChange={onChange}
            />
            <TextField
              name="lastName" label="Last Name" required
              value={form.lastName} onChange={onChange}
            />

            
            <TextField
              name="phoneOffice" label="Office Phone (digits only)" required
              value={form.phoneOffice} onChange={onChange}
              type="tel" placeholder="5555551212"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]{7,20}', maxLength: 20 }}
            />
            <TextField
              name="phoneCell" label="Mobile Phone (digits only)" required
              value={form.phoneCell} onChange={onChange}
              type="tel" placeholder="5555553434"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]{7,20}', maxLength: 20 }}
            />
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" size="large" disabled={busy}>
              {busy ? 'Submitting…' : 'Submit'}
            </Button>
            <Button
              type="reset" variant="outlined" size="large" disabled={busy}
              onClick={() => setForm({
                title:'', company:'', state:'', industry:'', website:'',
                employees:'', email:'', firstName:'', lastName:'', phoneOffice:'', phoneCell:''
              })}
            >
              Reset
            </Button>
          </Stack>
        </Paper>

        <Snackbar
          open={toast.open}
          autoHideDuration={4000}
          onClose={() => setToast(t => ({ ...t, open: false }))}
        >
          <Alert
            severity={toast.severity}
            variant="filled"
            onClose={() => setToast(t => ({ ...t, open: false }))}
          >
            {toast.msg}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
