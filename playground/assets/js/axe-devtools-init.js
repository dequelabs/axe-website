jQuery(function ($) {
  var React = window.react
  var ReactDOM = window.reactDom
  var createStore = window.redux.createStore
  var applyMiddleware = window.redux.applyMiddleware
  var applyMiddleware = window.redux.applyMiddleware
  var Provider = window.reactRedux.Provider
  var thunk = window.reduxThunk.default
  var AxeDevtoolPanel = window.AxeDevtoolPanel
  var AxeDevtoolReducer = window.AxeDevtoolReducer
  var axeEventListener = window.axeEventListener
  var requestAction = window.utils.requestAction
  var frameMessenger = window.utils.frameMessenger

  // Create a store
  var store = createStore(
    AxeDevtoolReducer, {},
    applyMiddleware(
      thunk.withExtraArgument({ requestAction })
    )
  )

  // Connect to the current window
  frameMessenger.connect(window, 'axe-plugin')

  // Put the panel into the DOM
  ReactDOM.render(
    React.createElement(Provider, { store },
      React.createElement(AxeDevtoolPanel, {
        style: {
          height: '100vh',
          overflowX: 'auto',
          overflowY: 'hidden'
        } // Fill the panel
      })
    ),
    document.getElementById('axe-results-container'),
    function () {}
  )

  // Listen for incoming events
  window.addEventListener('message', msgEvent => {
    if (
      typeof msgEvent.data === 'object' &&
      typeof msgEvent.data.topic === 'string'
    ) {
      axeEventListener({
        topic: msgEvent.data.topic,
        message: msgEvent.data.message,
        dispatch: store.dispatch
      })
    }
  })
})
