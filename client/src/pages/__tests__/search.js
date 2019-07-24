import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import { render, waitForElement, fireEvent, act } from '@testing-library/react';
import Search from '../../components/Search';

test('Goods are fetched', () => {
  const { getByLabelText, getAllByText } = render(<Search />);

  fireEvent.change(getByLabelText(/Recherche/i), {
    target: { value: 'Blanc' },
  });

  act(() => {
    const getBlancey = async () =>
      waitForElement(() => getAllByText(/Blancey/i));
    getBlancey();
  });
});
