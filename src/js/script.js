import '@babel/polyfill';
import 'es6-promise/auto'
import util from './util'
import config from './config'

import Vue from 'vue'

Vue.mixin({
  methods: {
    isEmpty: util.isEmpty,
    inArray: util.inArray,
  },
});

// load components
import ChatContainer from './components/ChatContainer'

const chatBoxId = config.get('CHAT_BOX_ID')

document.addEventListener('DOMContentLoaded', () => {
  const elms = document.getElementsByTagName('body')
  if (elms.length == 1) {
    const chatBox = document.createElement('div')
    chatBox.setAttribute('id', chatBoxId)

    const chatContainerElm = document.createElement('chat-container')
    chatBox.appendChild(chatContainerElm)

    elms[0].appendChild(chatBox);

    new Vue ({
      el: '#' + chatBoxId,
      components: {
        'chat-container': ChatContainer,
      },
      data: {
      },
      computed: {
      },
      created: function() {
        console.log('chat start!');//!!!!!!
      },
      methods: {
      },
    });
  }
});

