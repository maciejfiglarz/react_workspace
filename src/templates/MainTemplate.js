import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import PageContext from '../context';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

// import Header from '../components/organisms/Header/Header.tsx';

import Sidebar from '../components/organisms/Sidebar/Sidebar';

const pageType = 'note';

const MainTemplate = ({ children }) => (
  <div>
    <PageContext.Provider value={pageType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <Sidebar />
        {children}
      </ThemeProvider>
    </PageContext.Provider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
