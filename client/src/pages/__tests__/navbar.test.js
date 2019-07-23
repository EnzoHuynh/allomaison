import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from '../../components/Nav';

test('Nav bar redirect to acheter', () => {
  const { getByLabelText, getByText } = render(<Nav />);
  //
  // fireEvent.change(getByLabelText(/Email/i), {
  //   target: { value: 'test@gmail.com' },
  // });
  // fireEvent.change(getByLabelText(/Password/i), {
  //   target: { value: 'test' },
  // });

  fireEvent.click(getByText(/Inscription/i));
  expect(window.location.href).toEqual('http://localhost/signUp');
});
