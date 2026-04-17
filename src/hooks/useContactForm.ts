import React, { useReducer, useTransition } from 'react';
import type { FormFields, FormAction, UseContactFormReturn } from '../components/Sections/Contact.types';

const initialFields: FormFields = { name: '', email: '', phone: '', service: '', message: '' };

const formReducer = (state: FormFields, action: FormAction): FormFields => {
  switch (action.type) {
    case 'SET_FIELD': return { ...state, [action.field]: action.value };
    case 'RESET':     return initialFields;
    default:          return state;
  }
};

const useSentReducer = (state: boolean, action: { type: 'SENT' }): boolean =>
  action.type === 'SENT' ? true : state;

const useReducerSent = (): [boolean, (v: boolean) => void] => {
  const [sent, dispatch] = useReducer(useSentReducer, false);
  const setSent = (v: boolean) => { if (v) dispatch({ type: 'SENT' }); };
  return [sent, setSent];
};

const useContactForm = (): UseContactFormReturn => {
  const [fields, dispatch] = useReducer(formReducer, initialFields);
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useReducerSent();

  const setField =
    (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      dispatch({ type: 'SET_FIELD', field, value: e.target.value });

  const submit = () => {
    if (!fields.name || !fields.email || !fields.message) return;
    startTransition(() => {
      setTimeout(() => setSent(true), 900);
    });
  };

  return { fields, isPending, sent, setField, submit };
};

export { useContactForm };
