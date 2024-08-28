import React from 'react';
import { TextField, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const FieldEditor = ({ field, onUpdate, onDelete }) => {
  const handleLabelChange = (e) => {
    onUpdate({ ...field, label: e.target.value });
  };


  return (
    <div>
      <Typography variant="h6">{field.type}</Typography>
      <TextField
        label="Field Label"
        value={field.label}
        onChange={handleLabelChange}
        fullWidth
        margin="normal"
      />
      
      {field.type === 'Star Rating' && (
        <Rating
          value={Number(field.label)}
          onChange={(e, newValue) => onUpdate({ ...field, label: newValue })}
        />
      )}

      {field.type === 'Smile Rating' && (
        <Rating
          icon={<SentimentSatisfiedIcon />}
          emptyIcon={<SentimentVeryDissatisfiedIcon />}
          value={Number(field.label)}
          onChange={(e, newValue) => onUpdate({ ...field, label: newValue })}
        />
      )}
     <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default FieldEditor;
