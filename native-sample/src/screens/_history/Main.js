import React, { Component } from 'react';
import AppNavigation from '../navigation/AppNavigation';

// import { Crashlytics, Answers } from 'react-native-fabric'

// The following is commented out, since currently there is no need
//  to login (no functionality that requires signing in)
// import Login from '../Login/Login'
// import { NO_USER } from 'priceinsight/src/reducers/auth'
// import Loading from 'priceinsight/src/components/Loading/Loading'

// import analytics from './src/services/analytics'

export class Main extends Component {
  constructor(props) {
    super(props);

    // Crashlytics.setUserName('My-Pet')
    // Crashlytics.setUserEmail('yossi.glass@gmail.com')
    // Crashlytics.setUserIdentifier('mypet')
  }

  render() {

    // The following line is commented out, since currently there is no need to login
    // (no functionality that requires signing in)
    //    if (isLoggedIn !== NO_USER) {
    // Answers.logCustom('logged in user', { isLoggedIn, hasNewPatterns, feedPosts })

    return <AppNavigation/>;

    // The is commented out, since currently there is no need to login
    // (no functionality that requires signing in)
    /*
    } else {
      if (isLoading) {
        return <Loading />
      }
      Answers.logCustom('log in screen', { isLoggedIn })
      return <Login/>
    }
    */
  }
}

export default Main;
