// FormDetail.js
import React, { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { useParams } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
} from '@mui/material';

const FormDetail = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchFormDetails = async () => {
      const formRef = doc(db, 'forms', formId);
      const formSnap = await getDoc(formRef);
      if (formSnap.exists()) {
        setForm(formSnap.data());
      }

      const submissionsRef = collection(db, 'forms', formId, 'submissions');
      const submissionsSnap = await getDocs(submissionsRef);
      const submissionsData = submissionsSnap.docs.map(doc => doc.data());
      setSubmissions(submissionsData);
    };
    fetchFormDetails();
  }, [formId]);

  if (!form) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {form.title} - Details
      </Typography>
      <Box marginBottom={2}>
        <Typography>Created At: {new Date(form.createdAt.seconds * 1000).toLocaleString()}</Typography>
        <Typography>Viewed Count: {form.viewCount || 0}</Typography>
        <Typography>Submission Count: {form.submissionCount || 0}</Typography>
        {/* <Typography>
          Logic Applied: 
          {form.logic.pages && ` Pages - ${form.logic.pages.join(', ')}`}
          {form.logic.startTime && form.logic.endTime && 
            ` | Timing - ${new Date(form.logic.startTime).toLocaleString()} to ${new Date(form.logic.endTime).toLocaleString()}`}
        </Typography> */}
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {form.fields.map(field => (
                <TableCell key={field.id}>{field.label}</TableCell>
              ))}
              <TableCell>Submitted At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions.map((submission, index) => (
              <TableRow key={index}>
                {form.fields.map(field => (
                  <TableCell key={field.id}>{submission.responses[field.id]}</TableCell>
                ))}
                <TableCell>
                  {new Date(submission.submittedAt.seconds * 1000).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default FormDetail;
