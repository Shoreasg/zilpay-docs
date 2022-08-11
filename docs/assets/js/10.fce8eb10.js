(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,t,a){"use strict";a.r(t);var n=a(45),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("To develop for ZilPay, you're first going to want to get ZilPay installed on your development machine. "),a("a",{attrs:{href:"https://zilpay.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once you have it running, you should find that new browser tabs have a "),a("code",[e._v("window.zilPay")]),e._v(" object available in the console. This is the way ZilPay provides for you to interact with it.")]),e._v(" "),a("p",[e._v("You can review the full API for that object "),a("a",{attrs:{href:"../zilliqa-provider"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"bubble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bubble"}},[e._v("#")]),e._v(" Bubble")]),e._v(" "),a("p",[e._v("Building tech is expensive. Bubble is the most easy way to build no-code digital products. Build better and faster.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://bubble.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bubble.io"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://bubble.io/plugin/zilpay---zilliqa-wallet-1660211605724x172398360975376400",target:"_blank",rel:"noopener noreferrer"}},[e._v("PLUGIN"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"basic-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-considerations"}},[e._v("#")]),e._v(" Basic Considerations")]),e._v(" "),a("h3",{attrs:{id:"zilpay-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zilpay-detection"}},[e._v("#")]),e._v(" ZilPay Detection")]),e._v(" "),a("p",[e._v("The first thing your app will want to do is verify whether the user is using ZilPay or not, which is simple using a check like "),a("code",[e._v("if (typeof window.zilPay !== 'undefined') { /* deal with it */ }")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"running-a-test-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-test-network"}},[e._v("#")]),e._v(" Running a Test Network")]),e._v(" "),a("p",[e._v("In the top right menu of ZilPay, you can select the network that you are currently connected to. Among several popular defaults, you'll find "),a("code",[e._v("Custom RPC")]),e._v(" and "),a("code",[e._v("Localhost:4200")]),e._v(". These are both useful for connecting to a test blockchain, like "),a("a",{attrs:{href:"https://github.com/Zilliqa/kaya",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kaya"),a("OutboundLink")],1),e._v(", which you can quickly install and start if you have "),a("code",[e._v("npm")]),e._v(" installed with "),a("code",[e._v("npm install -g kaya-cli")]),e._v(".")]),e._v(" "),a("p",[e._v("Since your seed phrase is the power to control all your accounts, it is probably worth keeping at least one seed phrase for development, separate from any that you use for storing real value. One easy way to manage multiple seed phrases with ZilPay is with multiple browser profiles, each of which can have its own clean extension installations.")]),e._v(" "),a("h4",{attrs:{id:"resetting-your-local-nonce-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resetting-your-local-nonce-calculation"}},[e._v("#")]),e._v(" Resetting Your Local Nonce Calculation")]),e._v(" "),a("p",[e._v("To clear ZilPay transactions queue, and effectively reset its nonce calculation, you can use the "),a("code",[e._v("CLEAR")]),e._v(" button in "),a("code",[e._v("Setting -> General -> CLEAR")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"user-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-state"}},[e._v("#")]),e._v(" User State")]),e._v(" "),a("p",[e._v("Currently there are a few stateful things you want to consider when interacting with this API:")]),e._v(" "),a("ul",[a("li",[e._v("What is the current network?")]),e._v(" "),a("li",[e._v("What is the current account?")]),e._v(" "),a("li",[e._v("Has the user allowed work with your site?")]),e._v(" "),a("li",[e._v("Is ZilPay unlocked?")]),e._v(" "),a("li",[e._v("Enable is broadcasting?")])]),e._v(" "),a("p",[e._v("Both of these are available synchronously as "),a("code",[e._v("window.zilPay.wallet")]),e._v(". You can listen for changes using events, too ("),a("RouterLink",{attrs:{to:"/zilliqa-provider/#window-zilpay-wallet-observablenetwork"}},[e._v("see the observable state")]),e._v(").")],1),e._v(" "),a("h3",{attrs:{id:"connection-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-in"}},[e._v("#")]),e._v(" Connection In")]),e._v(" "),a("p",[e._v("When you're ready to request the user connect in, you can call this simple method:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("zilPay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("This promise-returning function resolves with a Boolean value, true if user access and false if use reject your requests.")]),e._v(" "),a("p",[e._v("Over time, this method is intended to grow to include various additional parameters to help your site request all the setup it needs from the user during setup.")]),e._v(" "),a("p",[e._v("Since it returns a promise, if you're in an "),a("code",[e._v("async")]),e._v(" function, you may log in like this:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" status "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nstatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("zilPay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("isConnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("if the user has allowed then ZilPay will remember this and will no longer ask.")]),e._v(" "),a("p",[e._v("You can also remove all Dapps from ZilPay by going to "),a("code",[e._v("Setting -> Security & Privacy -> CLEAR DATA")])]),e._v(" "),a("h2",{attrs:{id:"choosing-a-convenience-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-convenience-library"}},[e._v("#")]),e._v(" Choosing a Convenience Library")]),e._v(" "),a("p",[e._v("Convenience libraries exist for a variety of reasons.")]),e._v(" "),a("p",[e._v("Some of them simplify the creation of specific user interface elements, some entirely manage the user account onboarding, and others give you a variety of methods of interacting with smart contracts, for a variety of API preferences, from promises, to callbacks, to strong types, and on.")]),e._v(" "),a("p",[e._v("The provider API itself is very simple, and wraps "),a("a",{attrs:{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zilliqa-JavaScript-Library"),a("OutboundLink")],1),e._v(" . You can generally find sufficient documentation to interact with the provider, without reading this lower-level API.")])])}),[],!1,null,null,null);t.default=s.exports}}]);