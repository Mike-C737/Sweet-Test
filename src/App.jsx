import { useMemo } from 'react'
import {
  ThemeProvider, createTheme, CssBaseline,
  Box, Paper, Typography, Grid,
  TextField, MenuItem, Stack, Button
} from '@mui/material'

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME',
  'MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
  'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

export default function App() {
  const theme = useMemo(() => createTheme({
    palette: { mode: 'light', background: { default: '#f7f7f9' } },
    typography: { fontFamily: 'Roboto, system-ui, Segoe UI, Arial, sans-serif' },
    shape: { borderRadius: 12 },
  }), [])

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('FORM SUBMIT →', data)
    alert('Form submitted! (Check the console for the payload)')
    e.currentTarget.reset()
  }

  // MUI v6+ prefers slotProps instead of inputProps
  const phoneSlotProps = { input: { pattern: '[0-9()+. -]{7,20}' } } // 7–20 chars: digits + ()+.- + space
  const employeesSlotProps = { input: { min: 1, step: 1 } }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* center the form card */}
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
        <Paper
          elevation={3}
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: { xs: 3, sm: 4 }, width: '100%', maxWidth: 880, mx: 'auto' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            New Opportunity
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Please provide the details below. Fields marked * are required.
          </Typography>

          {/* Exactly two equal columns on md+ (1 column on phones) */}
          <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
            <Grid item xs={1}>
              <TextField fullWidth name="company" label="Company *" required placeholder="Acme Inc." />
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth name="email" type="email" label="Email *" required placeholder="name@company.com" />
            </Grid>

            <Grid item xs={1}>
              <TextField fullWidth name="state" label="State *" select defaultValue="" required>
                <MenuItem value="" disabled>Select state…</MenuItem>
                {STATES.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth name="firstName" label="First Name *" required />
            </Grid>

            <Grid item xs={1}>
              <TextField fullWidth name="lastName" label="Last Name *" required />
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth name="title" label="Opportunity Title *" required placeholder="Roof Replacement – HQ" />
            </Grid>

            <Grid item xs={1}>
              <TextField
                fullWidth
                name="phoneOffice"
                label="Phone (office)"
                placeholder="(555) 555-1212"
                slotProps={phoneSlotProps}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                fullWidth
                name="phoneCell"
                label="Phone (cell)"
                placeholder="(555) 555-3434"
                slotProps={phoneSlotProps}
              />
            </Grid>

            <Grid item xs={1}>
              <TextField fullWidth name="website" type="url" label="Website" placeholder="https://example.com" />
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth name="industry" label="Industry" placeholder="Manufacturing" />
            </Grid>

            <Grid item xs={1}>
              <TextField
                fullWidth
                name="employees"
                type="number"
                label="Number of Employees"
                slotProps={employeesSlotProps}
              />
            </Grid>
            {/* spacer to balance the last row */}
            <Grid item xs={1} />
          </Grid>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" size="large">Submit</Button>
            <Button type="reset" variant="outlined" size="large">Reset</Button>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}
