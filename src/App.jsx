import { useMemo } from 'react'
import {
  ThemeProvider, createTheme, CssBaseline,
  Box, Paper, Typography, Stack, TextField, Button
} from '@mui/material'

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

  // MUI v6+ prefers slotProps for input attributes
  const phoneSlotProps = { input: { pattern: '[0-9()+. -]{7,20}' } } // 7–20 chars; digits + ()+.- + space
  const employeesSlotProps = { input: { min: 1, step: 1 } }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Center the form card */}
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
        <Paper
          elevation={3}
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: { xs: 3, sm: 4 }, width: '100%', maxWidth: 640, mx: 'auto' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            New Opportunity
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Please provide the details below.
          </Typography>

          <Stack spacing={2}>
            {/* Title */}
            <TextField fullWidth name="title" label="Title" required placeholder="Roof Replacement - HQ" />

            {/* Company */}
            <TextField fullWidth name="company" label="Company" required placeholder="Acme Inc." />

            {/* Industry */}
            <TextField fullWidth name="industry" label="Industry" required placeholder="Manufacturing" />

            {/* Website */}
            <TextField fullWidth name="website" type="url" label="Website" required placeholder="https://example.com" />

            {/* Number of Employees */}
            <TextField
              fullWidth name="employees" type="number" label="Number of Employees" required slotProps={employeesSlotProps}/>

            {/* Email Address */}
            <TextField fullWidth name="email" type="email" label="Email Address" required placeholder="name@company.com" />

            {/* First Name */}
            <TextField fullWidth name="firstName" label="First Name" required />

            {/* Last Name */}
            <TextField fullWidth name="lastName" label="Last Name" required />

            {/* Office Phone */}
            <TextField
              fullWidth name="phoneOffice" label="Office Phone" required placeholder="(555) 555-1212" slotProps={phoneSlotProps} />

            {/* Mobile Phone */}
            <TextField
              fullWidth name="phoneCell" label="Mobile Phone" required placeholder="(555) 555-3434" slotProps={phoneSlotProps} />
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" size="large">Submit</Button>
            <Button type="reset" variant="outlined" size="large">Reset</Button>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}
