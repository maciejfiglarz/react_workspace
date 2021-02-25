import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import PageContext from '../context';

import GlobalStyle from '../theme/GlobalStyle';

import { theme } from '../theme/mainTheme';

const pageType = 'note';

const MainTemplate = ({children}) => (
  <div>
    <PageContext.Provider value={pageType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PageContext.Provider>
  </div>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
  };

export default withRouter(MainTemplate);
