import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../db/firebase';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import FieldEditor from '../components/FieldEditor';
import LogicConfigurator from '../components/LogicConfigurator';

const FormBuilder = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [fields, setFields] = useState([
    { id: 'field-1', type: 'Star Rating', label: 'Rate Us', required: true, errorMessage: 'Please rate us!' },
    { id: 'field-2', type: 'Smile Rating', label: 'How do you feel?', required: true, errorMessage: 'Please provide feedback!' },
    { id: 'field-6', type: 'Numerical Rating', label: 'Rate from 1 to 10', required: true, errorMessage: 'Please rate!' },
    { id: 'field-3', type: 'Text Area', label: '', required: false, errorMessage: '' },
    
  ]);
  const [formTitle, setFormTitle] = useState('');
  const [logic, setLogic] = useState({});
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    if (formId) {
      const fetchForm = async () => {
        const docRef = doc(db, 'forms', formId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormTitle(data.title);
          setFields(data.fields);
          setLogic(data.logic);
          setIsPublished(data.isPublished);
        }
      };
      fetchForm();
    }
  }, [formId]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedFields = Array.from(fields);
    const [movedField] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, movedField);
    setFields(reorderedFields);
  };

  const handleSaveForm = async () => {
    const formData = {
      title: formTitle,
      fields,
      logic,
      isPublished: isPublished || false,
      createdAt: serverTimestamp(),
    };
    if (formId) {
      await updateDoc(doc(db, 'forms', formId), formData);
    } else {
      const newDocRef = doc(db, 'forms', `form-${Date.now()}`);
      await setDoc(newDocRef, formData);
    }
    navigate('/admin/dashboard');
  };

  const handlePublishForm = async () => {
    await updateDoc(doc(db, 'forms', formId), { isPublished: true });
    setIsPublished(true);
  };

  return (
    <Container>
      <Typography variant="h4"  style={{textJustify:"center"}}gutterBottom>
        {formId ? 'Edit Feedback Form' : 'Create Feedback Form'}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate(-1)} 
        sx={{ marginBottom: '20px' }}
      >
        Back
      </Button>
      <TextField
        label="Form Title"
        fullWidth
        margin="normal"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fields">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ margin: '10px 0', ...provided.draggableProps.style }}
                    >
                      <FieldEditor
                        field={field}
                        onUpdate={(updatedField) => {
                          const newFields = [...fields];
                          newFields[index] = updatedField;
                          setFields(newFields);
                        }}
                        onDelete={() => {
                          const newFields = fields.filter((_, i) => i !== index);
                          setFields(newFields);
                        }}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* <LogicConfigurator logic={logic} onLogicChange={setLogic} /> */}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveForm}
        style={{ marginRight: '10px', marginTop: '20px' }}
      >
        Save Form
      </Button>
      {!isPublished && formId && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePublishForm}
          style={{ marginTop: '20px' }}
        >
          Publish Form
        </Button>
      )}
    </Container>
  );
};

export default FormBuilder;

