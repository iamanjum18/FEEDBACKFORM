import React, { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button ,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async () => {
      const querySnapshot = await getDocs(collection(db, 'forms'));
      const formsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setForms(formsData);
    };
    fetchForms();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Feedback Forms
      </Typography>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        marginBottom="20px"
      >
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/admin/form-builder')}
        >
          Create New Form
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
      
      
      <Grid container spacing={3} marginTop={2}>
        {forms.map(form => (
          <Grid item xs={12} md={6} lg={4} key={form.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{form.title}</Typography>
                <Typography color="textSecondary">
                  Created At: {new Date(form.createdAt.seconds * 1000).toLocaleDateString()}
                </Typography>
                <Typography color="textSecondary">
                  Views: {form.viewCount || 0} | Submissions: {form.submissionCount || 0}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate(`/admin/form-detail/${form.id}`)}>
                  View Details
                </Button>
                <Button size="small" onClick={() => navigate(`/admin/form-builder/${form.id}`)}>
                  Edit Form
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;


