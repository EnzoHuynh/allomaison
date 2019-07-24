import React from 'react';
import { withRouter } from 'react-router-dom';

import Search from './Search';

const SearchContainer = ({ history }) => <Search history={history} />;

export default withRouter(SearchContainer);
