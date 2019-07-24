import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import { render, waitForElement, act } from '@testing-library/react';
import Goods from '../goods';

const match = {
  params: {
    terms: 'Massy',
  },
  path: '/louer/Massy',
};

test('Goods are fetched', async () => {
  const { getAllByText } = render(<Goods match={match} />);

  await waitForElement(() => getAllByText(/Massy/i));
});
