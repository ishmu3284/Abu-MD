const _0x1fb8e9=_0x3473;function _0x1928(){const _0x3612d2=['297208cSMLav','9521656ENoQNw','replace','dellsudo\x20?(.*)','11029935yTohMp','startsWith','3200ISCtSH','settsudo\x20?(.*)','45585eRSWPT','6381980nnBPSE','mention','3748170edItxC','reply','reply_message','split','patch','8733390EFPNEE','/apps/','/config-vars','```UPDATED\x20SUDO:\x20```','4PdSGms','heroku-client','env','Sets\x20sudo','then','3FjIkMs','jid','HEROKU_API_KEY','../config','```BOT\x20RESTARTING```'];_0x1928=function(){return _0x3612d2;};return _0x1928();}function _0x3473(_0x4cf3ba,_0x5b2288){const _0x192837=_0x1928();return _0x3473=function(_0x3473fe,_0x30eba6){_0x3473fe=_0x3473fe-0x9f;let _0xb3e01b=_0x192837[_0x3473fe];return _0xb3e01b;},_0x3473(_0x4cf3ba,_0x5b2288);}(function(_0x298c38,_0x448515){const _0x44a369=_0x3473,_0xc63215=_0x298c38();while(!![]){try{const _0x2b5327=-parseInt(_0x44a369(0xa3))/0x1*(parseInt(_0x44a369(0xb7))/0x2)+-parseInt(_0x44a369(0xbc))/0x3*(parseInt(_0x44a369(0xac))/0x4)+parseInt(_0x44a369(0xb3))/0x5+-parseInt(_0x44a369(0xae))/0x6+parseInt(_0x44a369(0xa7))/0x7+-parseInt(_0x44a369(0xa4))/0x8+-parseInt(_0x44a369(0xab))/0x9*(-parseInt(_0x44a369(0xa9))/0xa);if(_0x2b5327===_0x448515)break;else _0xc63215['push'](_0xc63215['shift']());}catch(_0x41fd8a){_0xc63215['push'](_0xc63215['shift']());}}}(_0x1928,0xe5182));const {bot}=require('../main'),{SUDO}=require(_0x1fb8e9(0xa1)),Heroku=require(_0x1fb8e9(0xb8)),heroku=new Heroku({'token':process[_0x1fb8e9(0xb9)][_0x1fb8e9(0xa0)]}),baseURI=_0x1fb8e9(0xb4)+process[_0x1fb8e9(0xb9)]['HEROKU_APP_NAME'];bot({'pattern':_0x1fb8e9(0xaa),'fromMe':!![],'desc':'Sets\x20sudo'},async(_0x200f3f,_0x75b683)=>{const _0xffd0b9=_0x1fb8e9;var _0x4613f6=(_0x200f3f[_0xffd0b9(0xb0)]?_0x200f3f['reply_message']['jid']:''||_0x200f3f[_0xffd0b9(0xad)][0x0]||_0x75b683[0x1])['split']('@')[0x0];if(!_0x4613f6)return await _0x200f3f[_0xffd0b9(0xaf)]('*Need\x20reply/mention/number*');var _0x11d3a8=(SUDO+','+_0x4613f6)[_0xffd0b9(0xa5)](/,,/g,'');_0x11d3a8=_0x11d3a8[_0xffd0b9(0xa8)](',')?_0x11d3a8['replace'](',',''):_0x11d3a8,await _0x200f3f[_0xffd0b9(0xaf)](_0xffd0b9(0xb6)+_0x11d3a8),await _0x200f3f[_0xffd0b9(0xaf)](_0xffd0b9(0xa2)),await heroku[_0xffd0b9(0xb2)](baseURI+_0xffd0b9(0xb5),{'body':{'SUDO':_0x11d3a8}})[_0xffd0b9(0xbb)](async _0x280384=>{});}),bot({'pattern':_0x1fb8e9(0xa6),'fromMe':!![],'desc':_0x1fb8e9(0xba)},async(_0x125cce,_0x156dec)=>{const _0x12e9a9=_0x1fb8e9;var _0x4f7df5=(_0x125cce[_0x12e9a9(0xb0)]?_0x125cce[_0x12e9a9(0xb0)][_0x12e9a9(0x9f)]:''||_0x125cce['mention'][0x0]||_0x156dec[0x1])[_0x12e9a9(0xb1)]('@')[0x0];if(!_0x4f7df5)return await _0x125cce[_0x12e9a9(0xaf)]('*Need\x20reply/mention/number*');var _0x38eec5=SUDO[_0x12e9a9(0xa5)](_0x4f7df5,'')[_0x12e9a9(0xa5)](/,,/g,'');_0x38eec5=_0x38eec5[_0x12e9a9(0xa8)](',')?_0x38eec5[_0x12e9a9(0xa5)](',',''):_0x38eec5,await _0x125cce[_0x12e9a9(0xaf)]('```UPDATED\x20SUDO:\x20```'+_0x38eec5),await _0x125cce[_0x12e9a9(0xaf)](_0x12e9a9(0xa2)),await heroku[_0x12e9a9(0xb2)](baseURI+_0x12e9a9(0xb5),{'body':{'SUDO':_0x38eec5}})[_0x12e9a9(0xbb)](async _0x38cbf0=>{});});
