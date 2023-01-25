import { nanoid } from 'nanoid';

export const inputs = [
  {
    id: nanoid(),
    name: 'name',
    label: 'name',
    type: 'text',
    placeholder: 'name',
    errorMessage: "This field can't be empty",
    required: true,
  },
  {
    id: nanoid(),
    name: 'email',
    label: 'email',
    type: 'email',
    placeholder: 'email address',
    errorMessage: 'This should be a valid email',
    required: true,
  },
  {
    id: nanoid(),
    name: 'company name',
    label: 'company name',
    type: 'text',
    placeholder: 'company name',
    errorMessage: "This field can't be empty",
    required: true,
  },
  {
    id: nanoid(),
    name: 'title',
    label: 'title',
    type: 'text',
    placeholder: 'title',
    errorMessage: "This field can't be empty",
    required: true,
  },
  {
    id: nanoid(),
    name: 'message',
    label: 'message',
    type: 'textarea',
    placeholder: 'message',
    errorMessage: "This field can't be empty",
    required: true,
  },
];
