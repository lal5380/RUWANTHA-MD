const _0x1c791e=_0x2711;(function(_0x43ab6e,_0x1cfd34){const _0xcace78=_0x2711,_0x2dc07d=_0x43ab6e();while(!![]){try{const _0x4a46a5=parseInt(_0xcace78(0x100))/0x1*(parseInt(_0xcace78(0x116))/0x2)+-parseInt(_0xcace78(0x109))/0x3+parseInt(_0xcace78(0x114))/0x4+parseInt(_0xcace78(0xfc))/0x5+-parseInt(_0xcace78(0x105))/0x6+-parseInt(_0xcace78(0xff))/0x7*(-parseInt(_0xcace78(0x10d))/0x8)+-parseInt(_0xcace78(0x10a))/0x9;if(_0x4a46a5===_0x1cfd34)break;else _0x2dc07d['push'](_0x2dc07d['shift']());}catch(_0x576282){_0x2dc07d['push'](_0x2dc07d['shift']());}}}(_0x3e48,0x1fe43));function _0x2711(_0x29cad9,_0x31ccfd){const _0x3e4806=_0x3e48();return _0x2711=function(_0x271191,_0x5bcac2){_0x271191=_0x271191-0xf7;let _0x5a170a=_0x3e4806[_0x271191];return _0x5a170a;},_0x2711(_0x29cad9,_0x31ccfd);}const {fetchJson}=require(_0x1c791e(0xfd)),config=require(_0x1c791e(0x11d)),{cmd,commands}=require(_0x1c791e(0x10f));cmd({'pattern':'cz','desc':_0x1c791e(0x102),'category':_0x1c791e(0x108),'react':'🎬','filename':__filename},async(_0x2027b7,_0x13bd3a,_0x4d7d87,{from:_0x1077b1,q:_0x30bfd9,isDev:_0x35468b,reply:_0x161752})=>{const _0x453362=_0x1c791e;if(!_0x30bfd9)return await _0x161752('*NOT\x20MOVIE\x20TITLE\x20🎦*');try{if(!_0x30bfd9){await _0x2027b7['sendMessage'](_0x1077b1,{'text':_0x453362(0xf9)},{'quoted':_0x13bd3a});return;}const _0x25ea0b=await fetchJson('https://darksadas-yt-cinezsub-search.vercel.app/?query='+_0x30bfd9+'&apikey=pramashi01'),_0x54d2fe=_0x25ea0b['data'][0x0][_0x453362(0x119)],_0x5ded43=fetchJson('https://darksadas-yt-cineszub-info.vercel.app/?url='+_0x54d2fe+_0x453362(0x11f)),_0x19379e=_0x5ded43[_0x453362(0x11c)][_0x453362(0xf7)][0x1][_0x453362(0x119)],_0x417b2f='\x20\x0a*👿RUWANTHA-MD\x20CINESUB\x20MOVIE🎦*\x0a*▣♣️Titel\x20:*\x20'+_0x5ded43[_0x453362(0x11c)][_0x453362(0x110)]+_0x453362(0x101)+_0x5ded43['data']['country']+_0x453362(0x104)+_0x5ded43[_0x453362(0x11c)][_0x453362(0x112)]+_0x453362(0x117)+_0x5ded43['data'][_0x453362(0x103)]+_0x453362(0x10b)+_0x5ded43['data'][_0x453362(0x118)]+'\x0a';await _0x2027b7['sendMessage'](_0x1077b1,{'image':{'url':_0x5ded43[_0x453362(0x11c)][_0x453362(0xf8)]},'caption':_0x417b2f},{'quoted':_0x13bd3a});const _0x4a8392=fetchJson(_0x453362(0x113)+_0x19379e+_0x453362(0x11f));await _0x2027b7[_0x453362(0x10e)](_0x1077b1,{'document':{'url':_0x4a8392[_0x453362(0x11c)][_0x453362(0x10c)]},'mimetype':_0x453362(0x111),'fileName':_0x5ded43[_0x453362(0x11c)][_0x453362(0x110)]+_0x453362(0x11e),'caption':_0x453362(0x11b)},{'quoted':_0x13bd3a}),await _0x2027b7[_0x453362(0x10e)](_0x1077b1,{'react':{'text':'✔️','key':_0x13bd3a[_0x453362(0x106)]}});}catch(_0xde73bc){await _0x2027b7[_0x453362(0x10e)](_0x1077b1,{'text':'⛔️'+_0xde73bc},{'quoted':_0x13bd3a}),await _0x2027b7['sendMessage'](_0x1077b1,{'react':{'text':'❌️','key':_0x13bd3a[_0x453362(0x106)]}});}}),cmd({'pattern':_0x1c791e(0xfb),'desc':_0x1c791e(0x102),'category':'download','react':'🎬','filename':__filename},async(_0x664f6e,_0x1da89b,_0x201df0,{from:_0x915ac8,q:_0x5ec2f9,isDev:_0x28744f,reply:_0x3ef545})=>{const _0x58ea0e=_0x1c791e;if(!_0x5ec2f9)return await _0x3ef545(_0x58ea0e(0x107));try{if(!_0x5ec2f9){await _0x664f6e[_0x58ea0e(0x10e)](_0x915ac8,{'text':_0x58ea0e(0xf9)},{'quoted':_0x1da89b});return;}const _0x2d288a=fetchJson(_0x58ea0e(0xfa)+_0x5ec2f9),_0x578fb1=_0x2d288a[_0x58ea0e(0x11c)][_0x58ea0e(0x119)],_0x526e0a=fetchJson(_0x58ea0e(0x115)+_0x578fb1),_0x18d2fb='\x0a*👿RUWANTHA-MD\x20CINESUB\x20MOVIE🎦*\x0a*▣♣️Titel\x20:*\x20'+_0x526e0a['data'][_0x58ea0e(0x110)]+_0x58ea0e(0x101)+_0x526e0a['data']['country']+_0x58ea0e(0x104)+_0x2d288a[_0x58ea0e(0x11c)][_0x58ea0e(0x112)]+_0x58ea0e(0xfe)+_0x2d288a[_0x58ea0e(0x11c)]['tmdbRate']+_0x58ea0e(0x10b)+_0x2d288a['data'][_0x58ea0e(0x11a)]+'\x0a';await _0x664f6e['sendMessage'](_0x915ac8,{'image':{'url':_0x526e0a[_0x58ea0e(0x11c)][_0x58ea0e(0xf8)]},'caption':_0x18d2fb},{'quoted':_0x1da89b}),await _0x664f6e[_0x58ea0e(0x10e)](_0x915ac8,{'document':{'url':_0x578fb1[_0x58ea0e(0x11c)][_0x58ea0e(0x10c)]},'mimetype':_0x58ea0e(0x111),'fileName':_0x526e0a[_0x58ea0e(0x11c)][_0x58ea0e(0x110)]+_0x58ea0e(0x11e),'caption':_0x58ea0e(0x11b)},{'quoted':_0x1da89b}),await _0x664f6e[_0x58ea0e(0x10e)](_0x915ac8,{'react':{'text':'✔️','key':_0x1da89b[_0x58ea0e(0x106)]}});}catch(_0x1567de){await _0x664f6e[_0x58ea0e(0x10e)](_0x915ac8,{'text':'⛔️'+_0x1567de},{'quoted':_0x1da89b}),await _0x664f6e[_0x58ea0e(0x10e)](_0x915ac8,{'react':{'text':'❌️','key':_0x1da89b[_0x58ea0e(0x106)]}});}});function _0x3e48(){const _0x16db50=['\x0a*▣🎖️Imdb\x20:*\x20','desc','link','description','>\x20*RUEANTHA-MD*','data','../config','.mp4','&apikey=pramashi01','dl_links','image','*👿Give\x20Me\x20Titel*','https://vajira-official-api.vercel.app/movie/sinhalasub/search?text=','slsub','244565IlBfAv','../lib/functions','\x0a*▣🎖️tmdb\x20:*\x20','7hqHErM','89zctXOL','\x0a*▣🌐Country\x20:*\x20','Check\x20bot\x20online\x20or\x20check','imdb','\x0a*▣📅Date\x20:*\x20','182544ssTUJA','key','*NOT\x20MOVIE\x20TITLE\x20🎦*','download','379392lUaJPk','2409471celtzd','\x0a*▣📄Description\x20:*\x20','directLink','1070480ZUEBaN','sendMessage','../command','title','video/mp4','date','https://darksadas-yt-cinezsub-dl.vercel.app/?url=','597908mtndoi','https://vajira-official-api.vercel.app/movie/sinhalasub/movie?url=','5012hUkdqv'];_0x3e48=function(){return _0x16db50;};return _0x3e48();}
