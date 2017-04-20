import { NativeModules, NativeEventEmitter } from 'react-native'
const TwilioRCT = NativeModules.RNProgVoice

const NativeAppEventEmitter = new NativeEventEmitter(NativeModules.RNProgVoice)

const _eventHandlers = {
  'oncallinvitereceived': new Map(),
  'tokenSetup': new Map(),
  'onvoicenotificationerror': new Map(),
  'oncallinvitecanceled': new Map(),
  'oncalldidconnect': new Map(),
  'oncalldiddisconnect': new Map(),
  'calldidfailwitherror': new Map()
};

const Twilio = {
  initializeWithAccessToken (token) {
    TwilioRCT.initializeWithAccessToken(token)
  },
  call (params) {
    TwilioRCT.call(params)
  },
  disconnect () {
    TwilioRCT.disconnect()
  },
  acceptCallInvite () {
    TwilioRCT.acceptCallInvite();
  },
  setSpeaker (onOrOff) {
    TwilioRCT.setSpeaker(onOrOff);
  },
  addEventListener (type, handler) {
    console.log('type we are adding it for is =>', type);
    _eventHandlers[type].set(handler, NativeAppEventEmitter.addListener(
      type, (rtn) => {
        handler(rtn)
      }
    ))
  },
  removeEventListener (type, handler) {
    if (!_eventHandlers[type].has(handler)) {
      return
    }
    _eventHandlers[type].get(handler).remove()
    _eventHandlers[type].delete(handler)
  }
}

export default Twilio