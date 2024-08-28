import React, { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { collection, getDocs, doc, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Rating,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';

const FeedbackModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(null);
  const location = useLocation();
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchApplicableForms = async () => {
      const formsSnap = await getDocs(collection(db, 'forms'));
      const now = new Date();
      formsSnap.forEach(docSnap => {
        const data = docSnap.data();
        const showOnPage = !data.logic.pages || data.logic.pages.includes(location.pathname);
        const withinTimeFrame = !data.logic.startTime || 
          (now >= data.logic.startTime.toDate() && now <= data.logic.endTime.toDate());
        if (data.isPublished && showOnPage && withinTimeFrame && !localStorage.getItem(`form-${docSnap.id}`)) {
          setForm({ id: docSnap.id, ...data });
          setOpen(true);
          updateDoc(doc(db, 'forms', docSnap.id), {
            viewCount: (data.viewCount || 0) + 1,
          });
        }
      });
    };
    fetchApplicableForms();
  }, [location]);

  const onSubmit = async (data) => {
    await addDoc(collection(db, 'forms', form.id, 'submissions'), {
      responses: data,
      submittedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'forms', form.id), {
      submissionCount: (form.submissionCount || 0) + 1,
    });
    localStorage.setItem(`form-${form.id}`, 'submitted');
    setOpen(false);
    reset();
  };

  const handleClose = () => {
    localStorage.setItem(`form-${form.id}`, 'closed');
    setOpen(false);
    reset();
  };

  if (!form) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4 
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{form.title}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {form.fields.map(field => (
            <Box key={field.id} marginY={2}>
              {field.type === 'Star Rating' && (
                <>
                  <Typography>{field.label}</Typography>
                  <Controller
                    name={field.id}
                    control={control}
                    rules={{ required: field.required }}
                    render={({ field: controllerField }) => (
                      <Rating {...controllerField} />
                    )}
                  />
                </>
              )}
              {field.type === 'Text Area' && (
                <Controller
                  name={field.id}
                  control={control}
                  rules={{ required: field.required }}
                  render={({ field: controllerField }) => (
                    <TextField 
                      {...controllerField}
                      label={field.label}
                      multiline
                      rows={4}
                      fullWidth
                      error={field.required && !controllerField.value}
                      helperText={field.required && !controllerField.value ? field.errorMessage : ''}
                    />
                  )}
                />
              )}
              {/* Add other field types similarly */}
            </Box>
          ))}
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
