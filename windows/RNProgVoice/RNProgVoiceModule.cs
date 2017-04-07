using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNProgVoice
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNProgVoiceModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNProgVoiceModule"/>.
        /// </summary>
        internal RNProgVoiceModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNProgVoice";
            }
        }
    }
}
