import React, { createContext, useState } from 'react';
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([]);

  const addForm = (form) => setForms([...forms, form]);
  const updateForm = (updatedForm) => {
    setForms(forms.map(f => f.id === updatedForm.id ? updatedForm : f));
  };

  return (
    <FormContext.Provider value={{ forms, addForm, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};
