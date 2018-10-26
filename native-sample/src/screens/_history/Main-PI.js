import React, { Component } from 'react'
import { Linking } from 'react-native'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'
import { Crashlytics, Answers } from 'react-native-fabric'
import querystring from 'query-string'

import Recommendation from '../Recommendation/Recommendation'
import AppNavigation from 'priceinsight/src/navigation/AppNavigation'

// The following is commented out, since currently there is no need
//  to login (no functionality that requires signing in)
// import Login from '../Login/Login'
// import { NO_USER } from 'priceinsight/src/reducers/auth'
// import Loading from 'priceinsight/src/components/Loading/Loading'

import {
  checkForNewNotificationsRequest,
  handleIncomingNotification,
  handleReceivedNotificationAction,
  handleOpenedNotification
} from 'priceinsight/src/actions/notification'
import { facebookLoginCallback, logout } from 'priceinsight/src/actions/auth'
import analytics from 'priceinsight/src/services/analytics'

// const PrivateScenes = (
//   <View>
//     <Feed/>
//   </View>
// )

export class Main extends Component {
  constructor () {
    super()
    this.handleOpenURL = this.handleOpenURL.bind(this)
    this.onOpened = this.onOpened.bind(this)
    this.onReceived = this.onReceived.bind(this)

    Crashlytics.setUserName('Price Insight')

    Crashlytics.setUserEmail('info@priceinsight.trade')

    Crashlytics.setUserIdentifier('priceinsight')
  }

  componentWillMount () {
    // this.props.logout();
    // this.props.handleReceivedNotification({});
    analytics.trackDownload()
    this.initOneSignal()
    this.props.checkForNewNotifications()
  }

  initOneSignal () {
    console.log('%c In Scenes/Main/initOneSignal. adding OneSignal event listeners', 'color: #fff; background: #f46b42')
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    // OneSignal.addEventListener('opened', (event) => { this.onOpened(event) })
    OneSignal.addEventListener('ids', this.onIds)
    OneSignal.inFocusDisplaying(0)
  }

  closeOneSignal () {
    console.log('%c In Scenes/Main/closeOneSignal. removing OneSignal event listeners', 'color: #fff; background: #f46b42')
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onOpened (openResult) {
    // const data = get(openResult, 'notification.payload.additionalData', {})
    // listener('onOpened', data)
    // this.props.handleOpenedNotification(openResult)
    analytics.trackPushNotificationViewed()
    const pattern = JSON.parse(openResult.notification.payload.additionalData.pattern)
    const id = pattern.nid[0].value
    console.log(`%c In Main/onReceived. id: ${id}`, 'color: #fff; background: #f44259')
    console.log('notification: ', openResult.notification)
  }

  onReceived (notification) {
    // when received, we should be pushing to not reviewed list
    analytics.trackPushNotificationReceived()
    const pattern = JSON.parse(notification.payload.additionalData.pattern)
    const id = pattern.nid[0].value
    console.log(`%c In Main/onReceived. id: ${id}`, 'color: #fff; background: #f44259')
    console.log(notification)
    this.props.handleReceivedNotification(notification)
  }

  /*
  onOpened (openResult) {
    // this.props.handleOpenedNotification(openResult)
    analytics.trackPushNotificationViewed()
    console.log(`%c In Main/onOpened.`, 'color: #fff, background: #f44259')
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }
  */

  onIds (device) {
    // console.log('Device info: ', device);
  }

  componentDidMount () {
    Linking.getInitialURL()
      .then((ev) => {
        if (ev) {
          this.handleOpenURL(ev)
        }
      })
      .catch(e => console.log('Linking failed!', e)) // TODO: handle this error in app
    Linking.addEventListener('url', this.handleOpenURL)
  }

  componentWillUnmount () {
    Linking.removeEventListener('url', this.handleOpenURL)
    this.closeOneSignal()
  }

  handleOpenURL (ev) {
    const { url } = ev

    if (url) {
      const extracted = querystring.extract(url)
      const { state, code } = querystring.parse(extracted)

      if (state && code) {
        this.props.facebookLoginCallback(state, code)
      }
    }
  }

  render () {
    const { isLoggedIn, hasNewPatterns, feedPosts } = this.props

    // The following line is commented out, since currently there is no need to login
    // (no functionality that requires signing in)
    //    if (isLoggedIn !== NO_USER) {
    Answers.logCustom('logged in user', { isLoggedIn, hasNewPatterns, feedPosts })
    // TODO only go to new patterns if they came from notification click
    if (hasNewPatterns) {
      return <Recommendation/>
    }
    return <AppNavigation/>
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

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    hasNewNotifications: state.notification.hasNewNotifications,
    isLoading: state.auth.isLoading,
    patterns: state.notification.patterns,
    hasNewPatterns: state.notification.patterns.length > 0,
    feedPosts: state.feed.items
  }
}

const mapActionToProps = (dispatch) => ({
  handleIncomingNotification (receivedNotification) {
    dispatch(handleIncomingNotification(receivedNotification))
  },
  handleReceivedNotification (receivedNotification) {
    dispatch(handleReceivedNotificationAction(receivedNotification))
  },
  handleOpenedNotification (receivedNotification) {
    dispatch(handleOpenedNotification(receivedNotification))
  },
  checkForNewNotifications () {
    dispatch(checkForNewNotificationsRequest())
  },
  facebookLoginCallback (state, code) {
    dispatch(facebookLoginCallback(state, code))
  },
  logout () {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapActionToProps)(Main)
