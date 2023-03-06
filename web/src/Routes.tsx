// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import RobotWindowLayout from './layouts/RobotWindowLayout/RobotWindowLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/sign-in" page={SignInPage} name="signIn" />
      <Private unauthenticated="signIn" roles="monitor">
        <Set wrap={RobotWindowLayout}>
          <Route path="/" page={HomePage} name="home" />
          <Route path="/tasks" page={TasksPage} name="tasks" />
          <Route path="/settings" page={SettingsPage} name="settings" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
