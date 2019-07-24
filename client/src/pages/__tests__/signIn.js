import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../signIn';

test('Sign in is successful', () => {
  const { getByLabelText, getByText } = render(<SignIn />);

  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: 'test@gmail.com' },
  });
  fireEvent.change(getByLabelText(/Password/i), {
    target: { value: 'test' },
  });

  fireEvent.click(getByText(/Connexion/i));
  expect(window.location.href).toEqual('http://localhost/');
});
