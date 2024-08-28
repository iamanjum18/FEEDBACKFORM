// LogicConfigurator.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { DateTimePicker } from '@mui/lab';

const LogicConfigurator = ({ logic, onLogicChange }) => {
  const [pages, setPages] = useState(logic.pages || '');
  const [startTime, setStartTime] = useState(logic.startTime || null);
  const [endTime, setEndTime] = useState(logic.endTime || null);
  const [useTiming, setUseTiming] = useState(!!logic.startTime && !!logic.endTime);

  const handleSaveLogic = () => {
    onLogicChange({
      pages: pages.split(',').map(page => page.trim()),
      startTime: useTiming ? startTime : null,
      endTime: useTiming ? endTime : null,
    });
  };

  return (
    <Card variant="outlined" style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h6">Logic Configuration</Typography>
        <TextField
          label="Specific Pages (comma separated)"
          fullWidth
          margin="normal"
          value={pages}
          onChange={e => setPages(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={useTiming}
              onChange={e => setUseTiming(e.target.checked)}
            />
          }
          label="Use Timed Display"
        />
        {useTiming && (
          <Box display="flex" justifyContent="space-between">
            <DateTimePicker
              label="Start Time"
              value={startTime}
              onChange={setStartTime}
              renderInput={(props) => <TextField {...props} margin="normal" />}
            />
            <DateTimePicker
              label="End Time"
              value={endTime}
              onChange={setEndTime}
              renderInput={(props) => <TextField {...props} margin="normal" />}
            />
          </Box>
        )}
        <Button variant="contained" onClick={handleSaveLogic} style={{ marginTop: '10px' }}>
          Save Logic
        </Button>
      </CardContent>
    </Card>
  );
};

export default LogicConfigurator;
