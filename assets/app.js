
/* ================= 数据层 ================= */
const BOOKS = [
  {no:'壹',vol:'三体',en:'THE THREE-BODY PROBLEM',b:'b1',accent:'var(--red)',
   desc:'地球往事。一次面向四光年外的回信，揭开了文明存亡的序幕：三体游戏、智子封锁、危机降临。',
   tags:['红岸基地','三体游戏','智子','危机纪元']},
  {no:'贰',vol:'黑暗森林',en:'THE DARK FOREST',b:'b2',accent:'var(--gold)',
   desc:'面壁与威慑。在智子无处不在的监听下，人类以面壁计划迎战；罗辑参悟黑暗森林法则，建立威慑平衡。',
   tags:['面壁计划','水滴','黑暗森林','执剑人']},
  {no:'叁',vol:'死神永生',en:'DEATH\u2019S END',b:'b3',accent:'var(--blue)',
   desc:'归零之路。威慑崩塌、坐标广播、二向箔降维、歌者清理，直到宇宙尽头——文明以何种方式继续存在。',
   tags:['执剑人','二向箔','歌者','归零']}
];

const FEATURES = [
  {ic:'red',t:'纪年导读',d:'按「纪」组织，如同通鉴之纪：危机纪、威慑纪、广播纪、掩体纪、银河纪、归零纪。'},
  {ic:'gold',t:'高亮注疏',d:'人名、地名、概念三色高亮，悬停即现设定注疏，读文不查书。'},
  {ic:'blue',t:'大事标号',d:'每纪关键事件逐一编号，编年体也能读得清楚明白。'},
  {ic:'blue',t:'宇宙星图',d:'对应历史地图：地球、三体、歌者、归零者在黑暗森林中的坐标关系。'},
  {ic:'purple',t:'设定词典',d:'对应官职说明：智子、水滴、二向箔……三体世界的名词注疏。'},
  {ic:'red',t:'人物图谱',d:'对应人物年表：三大阵营十九位命运坐标上的行者。'}
];

/* 高亮词：p=人名(金) t=地名/实体(蓝) c=概念(紫) */
const E = (t,c)=>`<span class="term ${c}" data-term="${t}">${t}</span>`;

const ERAS = [
{
 id:'crisis', name:'危机纪', book:'b1', bookNm:'《三体》', span:'公元2007 — 2208',
 accent:'var(--red)', lead:
  `故事从一封不该发送的回信开始。${E('红岸基地','t')}里，${E('叶文洁','p')}向${E('半人马座α','t')}发出了人类的第一声问候，得到的却是「不要回答」的冰冷警告。此后，${E('三体游戏','c')}揭开谜底：一个在三颗恒星间挣扎的文明，正以${E('智子','c')}封锁地球基础科学，并把舰队驶向太阳系。人类第一次确认：宇宙中有别的文明——而它们，并不友好。`,
 blocks:[
  {h:'红岸与回信',idx:'壹',
   p:['上世纪七十年代，叶文洁在红岸基地的日夜里，把人类命运的赌注押给了一封跨星际的讯号。半人马座α那边，一个在「恒纪元与乱纪元」交替中濒临崩溃的三体文明，把希望寄予了那个蓝星上的回应者。',
      '此后二十年，三体文明以「智子」锁死地球的粒子物理，让人类再也无法触及理论物理的突破；而三体舰队，已经在四光年外启航。'],
   quote:'「不要回答！不要回答！不要回答！」—— 来自三体世界监听员的警告（大意引用）。',
   src:'《三体》· 地球往事'},
  {h:'三体游戏与面壁前夜',idx:'贰',
   p:['汪淼卷入三体游戏，见证了那个文明如何在三颗太阳的引力舞蹈中，一次次重建、又一次次毁灭。ETO（地球三体组织）在暗处涌动，把人类的背叛者与幻想者聚在一起。',
      '危机纪元正式开启：全人类站到同一道题面前——如何面对一个四光年外、却已渗透到每一粒尘埃里的对手。']}
 ],
 events:[
  {ye:'1969',tt:'红岸基地建成启用',ds:'叶文洁进入红岸，中国秘密的宇宙监听工程运转。'},
  {ye:'1979',tt:'叶文洁按下发射键',ds:'对人类绝望的她，向半人马座α发出回信，人类坐标被三体世界确认。'},
  {ye:'2007',tt:'智子抵达太阳系',ds:'三体文明以智子封锁地球基础科学，粒子对撞机全部失效。'},
  {ye:'2008',tt:'三体舰队启航',ds:'危机纪元开始，人类面对四光年外驶来的舰队。'},
  {ye:'2008',tt:'面壁计划启动',ds:'为对抗智子无处不在的监听，人类选出四位面壁者，以思想本身为武器。'}
 ],
 gloss:'危机纪的题眼，是「信息不对称」。三体拥有智子，几乎看穿人类的一切；人类唯一未被读懂的，只有大脑与思维。面壁计划的全部逻辑，就建立在这最后一块自留地上——而黑暗森林法则，也将从这一点出发。'
},
{
 id:'deter', name:'威慑纪', book:'b2', bookNm:'《黑暗森林》', span:'公元2208 — 2270',
 accent:'var(--gold)', lead:
  `当三体舰队以${E('水滴','c')}击溃地球联合舰队，人类几乎陷入绝望时，${E('罗辑','p')}在冰封的湖畔独自参悟了宇宙的终极公理——${E('黑暗森林法则','c')}。他以暴露三体世界坐标为威胁，建立起摇摇欲坠的${E('威慑平衡','c')}，成为第一位${E('执剑人','c')}。`,
 blocks:[
  {h:'面壁与破壁',idx:'壹',
   p:['四位面壁者各自布置以假乱真的战略：泰勒的球状闪电、雷迪亚兹的恒星核弹、希恩斯的思想钢印，以及罗辑的「发疯」。破壁人一一揭穿前三位，唯独读不懂罗辑——因为他连自己都骗过了。',
      '罗辑在杨冬墓前的漫长沉默里，与星空对视，最终参悟：宇宙是一座黑暗森林，任何暴露坐标的文明，都会被瞬间清理。'],
   quote:'「宇宙就是一座黑暗森林，每个文明都是带枪的猎人。」—— 黑暗森林法则（大意引用）。',
   src:'《黑暗森林》'},
  {h:'执剑人时代',idx:'贰',
   p:['当罗辑以「向全宇宙广播三体坐标」的引力波威慑，逼得三体舰队偏航，威慑纪元降临。地球与三体之间，维持着一种以毁灭为纽带的恐怖和平。',
      '这和平脆弱至极——它系于一个人，以及他手中那条随时可能按下的引线。']}
 ],
 events:[
  {ye:'2086',tt:'水滴突袭联合舰队',ds:'三体探测器「水滴」以绝对光滑的表面与碾压级防御，近乎全歼地球联合舰队。'},
  {ye:'2096',tt:'罗辑参悟黑暗森林',ds:'在冰湖与星空的尽头，罗辑写下宇宙社会学的两条公理与黑暗森林法则。'},
  {ye:'2100',tt:'威慑建立',ds:'罗辑以引力波发射器为筹码，成功威胁三体，威慑纪元开始。'},
  {ye:'2208',tt:'执剑人之位',ds:'威慑博弈持续数十年，罗辑成为人类有史以来最孤独的守护者。'}
 ],
 gloss:'威慑纪最冷的设定是：真正的威慑不靠力量，而靠「愿意同归于尽的决心」。罗辑之所以是不可替代的执剑人，不是因为武器在他手里，而是因为他在漫长的威慑中，始终保持着那种「敢于按下」的决绝。这也是后来交接给程心时崩塌的根源。'
},
{
 id:'broad', name:'广播纪', book:'b3', bookNm:'《死神永生》', span:'公元2270 — 2272',
 accent:'var(--purple)', lead:
  `执剑权杖移交到${E('程心','p')}手中的那一刻，威慑的弦应声而断。三体文明随即反扑。在绝望中，一艘${E('万有引力号','t')}向宇宙广播了太阳系坐标——地球与三体，双双暴露在${E('黑暗森林法则','c')}的猎枪之下。`,
 blocks:[
  {h:'威慑的断裂',idx:'壹',
   p:['程心接任执剑人，三体随即发动攻击——她的恻隐，让威慑在瞬间失效。三体占领地球，人类被迫迁往澳洲，在一个巨大的集中营里等待命运的裁决。',
      '但人类并非毫无还手之力：仍在深空中的万有引力号，携带引力波发射器，成了最后的火种。'],
   quote:'「当人类将坐标广播出去，就等于向宇宙宣布：这里有一块美味的肉。」（大意引用）',
   src:'《死神永生》'},
  {h:'坐标广播',idx:'贰',
   p:['在得知地球沦陷后，万有引力号与蓝色空间号上的船员，按下引力波广播键。地球与三体的坐标，同时暴露。',
      '黑暗森林的规则随即启动：三体母星被一枚光粒击穿，三体文明在宇宙中灰飞烟灭——而地球，只是时间问题。']}
 ],
 events:[
  {ye:'2270',tt:'程心接任执剑人',ds:'威慑交接完成，三体立即反扑，威慑崩塌。'},
  {ye:'2270',tt:'地球沦陷',ds:'三体占领地球，人类被集中迁移至澳洲。'},
  {ye:'2271',tt:'引力波广播',ds:'万有引力号向宇宙广播太阳系坐标，人类与三体共同暴露。'},
  {ye:'2272',tt:'三体母星毁灭',ds:'高等文明以「光粒」摧毁半人马座α的三体世界，广播纪落幕。'}
 ],
 gloss:'广播纪印证了黑暗森林法则不是修辞，而是运行的宇宙规律。一旦坐标被广播，清除只是迟早。这也是《死神永生》题名的由来：死神的镰刀落下时，从不会区分善良与否——程心不是恶人，但她的一次善念，改变了整个文明的走向。'
},
{
 id:'bunker', name:'掩体纪', book:'b3', bookNm:'《死神永生》', span:'公元2272 — 2354',
 accent:'var(--blue)', lead:
  `为了在${E('黑暗森林','c')}的打击下幸存，人类迁往各大行星的阴影之中，修筑${E('掩体','c')}。但高等文明的${E('二向箔','c')}不讲道理——它把整个太阳系二维化，如同一幅无声展开的画卷。`,
 blocks:[
  {h:'掩体计划',idx:'壹',
   p:['在得知坐标暴露后，人类把生存的希望押在「掩体」上：躲避到木星等大行星的背光阴影里，假定打击只会摧毁太阳本体，而阴影中的文明能够幸存。',
      '太阳系被分割成无数掩体世界，人类以近乎宿命的方式等待那一击。'],
   quote:'「二向箔是一种武器，它把空间从三维降为二维，其中的一切也随之展开。」（大意引用）',
   src:'《死神永生》'},
  {h:'太阳系二维化',idx:'贰',
   p:['真正的打击并非光粒，而是二向箔。当它被抛出，太阳系开始缓慢而不可逆地二维化——如同把整个星系摊平成一幅画。',
      '程心与艾AA乘着曲率驱动的飞船，在二维化的涟漪中逃向深空，太阳系终归于一张巨幅的二维图景。']}
 ],
 events:[
  {ye:'2272',tt:'掩体计划实施',ds:'人类迁往木星等行星阴影，构筑掩体世界。'},
  {ye:'2354',tt:'二向箔展开',ds:'歌者随手抛出的二向箔，开始将太阳系降维。'},
  {ye:'2354',tt:'太阳系二维化',ds:'程心、艾AA乘曲率飞船逃离，太阳系最终铺成一张二维画卷。'}
 ],
 gloss:'掩体纪是人类理性计算的巅峰与幻灭：所有精密的规避，都建立在「对方会用我们理解的武器」这个假设上。而高等文明的二向箔，根本不在人类的想象之内。这提醒我们——在黑暗森林里，防御永远是慢半拍的。'
},
{
 id:'galaxy', name:'银河纪', book:'b3', bookNm:'《死神永生》', span:'公元2273 — …',
 accent:'var(--blue)', lead:
  `逃离太阳系的${E('曲率飞船','c')}载着程心与${E('艾AA','p')}进入深空。另一边，${E('云天明','p')}讲述的童话里，藏着高等文明延续的密码。星舰地球、${E('四维碎片','c')}、${E('黑域','c')}——人类以另一种方式，在宇宙中继续存在。`,
 blocks:[
  {h:'云天明与童话',idx:'壹',
   p:['云天明的大脑被送入三体世界，以另一种形态与三体人共处。在威慑后的漫长岁月里，他借由童话向人类传递了曲率驱动与黑域的线索——那些看似无害的童话，是文明的密码本。',
      '蓝色空间与万有引力号在深空相遇，发现四维空间的碎片「魔戒」，人类第一次触摸到高维的残影。'],
   quote:'「人类的力量，在于把最大的悲剧，藏在最温柔的童话里。」（大意引用）',
   src:'《死神永生》'},
  {h:'星舰文明',idx:'贰',
   p:['失去母星的人类，在星舰上继续进化：蓝色空间、青铜时代、星环世界……他们以数百年、数千年的尺度航行，把文明的种子播向宇宙。',
      '程心与关一帆跨越五百万年，在星环与黑域的边缘重逢——时间在此刻，成为最温柔的背景。']}
 ],
 events:[
  {ye:'2273',tt:'星舰文明起航',ds:'蓝色空间、青铜时代等星舰在深空繁衍，人类以星舰为家园。'},
  {ye:'2500s',tt:'四维碎片',ds:'星舰遭遇四维空间的残片「魔戒」，高维文明早已陨落。'},
  {ye:'未知',tt:'黑域设想',ds:'光速飞船留下的「黑域」——以低光速自我封闭的文明，成为另一种生存选择。'},
  {ye:'+5百万年',tt:'跨越时间的重逢',ds:'程心、关一帆在漫长的航行后重逢，时间成为存在的方式。'}
 ],
 gloss:'银河纪把「文明延续」推向极限：当母星、家园、国家全部失效，文明还能以什么为锚？三体给出的答案之一，是星舰与时间本身。云天明那场跨越维度的「童话」，也成为全书最温柔也最苍凉的伏笔。'
},
{
 id:'return', name:'归零纪', book:'b3', bookNm:'《死神永生》', span:'宇宙终点',
 accent:'var(--purple)', lead:
  `一切归于沉寂之后，${E('归零者','c')}向宇宙发出请求：愿所有文明将维度归还，让宇宙从十维重新开始。在${E('647号宇宙','t')}里，程心与${E('关一帆','p')}留下最后的种子——关于爱与存在，关于宇宙是否愿意再来一次。`,
 blocks:[
  {h:'维度归还',idx:'壹',
   p:['降维不可逆。高等文明的二向箔不断把宇宙推向更低维度，四维、三维、二维……若任其继续，宇宙终将归于一维的点，再无重启的可能。',
      '归零者于是广播：请所有文明交还自己占据的维度，让宇宙回到十维的「田园时代」，重新大爆炸。'],
   quote:'「愿宇宙再回到十维的田园时代。」—— 归零者之声（大意引用）。',
   src:'《死神永生》'},
  {h:'最后的种子',idx:'贰',
   p:['在647号宇宙里，程心与关一帆保存着人类文明的种子，与一个关于「回归运动」的承诺。',
      '他们选择留下来，等待宇宙是否愿意重启——爱与存在，在此刻成为比恒星更恒久的坐标。']}
 ],
 events:[
  {ye:'——',tt:'宇宙持续降维',ds:'歌者随手抛下的二向箔，只是无数降维打击中的一环。'},
  {ye:'——',tt:'归零者广播',ds:'归零者呼吁所有文明归还维度，让宇宙重新开始。'},
  {ye:'647',tt:'647号宇宙',ds:'程心、关一帆守护人类最后的种子与留言。'},
  {ye:'开放',tt:'宇宙重启与否',ds:'刘慈欣留下开放结局：宇宙是否愿意再来一次，交由读者。'}
 ],
 gloss:'归零纪把整部三体提向哲学高度：当存在本身需要被重新选择，爱、记忆与希望是否值得延续？「给岁月以文明，而非给文明以岁月」——这句名言的答案，藏在程心留下的那颗种子与那条留言里。'
}
];

/* ===== 时间线（复用纪元，补充筛选） ===== */
const TL_BOOKS = [
  {id:'all',n:'全部'},
  {id:'b1',n:'《三体》'},
  {id:'b2',n:'《黑暗森林》'},
  {id:'b3',n:'《死神永生》'}
];

/* ===== 星图 ===== */
const MAP_NODES = [
  {id:'earth',x:236,y:300,r:20,cat:'blue',name:'太阳系 · 地球',sub:'红岸 · 联合舰队 · 掩体',
   desc:'故事的中心。红岸基地从这里发出回信，联合舰队在这里覆灭，木星掩体在这里修筑。人类文明在黑暗森林中的坐标，最终被万有引力号广播向全宇宙。',
   dim:[['距离三体','4.24 光年'],['最终命运','坐标被广播，太阳系二维化']]},
  {id:'trisolaris',x:680,y:200,r:20,cat:'red',name:'半人马座α · 三体世界',sub:'乱纪元 · 恒纪元',
   desc:'三颗恒星的无序引力，造就了「乱纪元」与「恒纪元」的交替。三体文明以智子锁死地球科学，派舰队跨越四光年而来；其母星最终被高等文明的光粒摧毁。',
   dim:[['距离地球','4.24 光年'],['最终命运','母星被光粒击穿']]},
  {id:'singer',x:852,y:452,r:18,cat:'purple',name:'银河深处 · 歌者',sub:'高等清理文明',
   desc:'神级文明的一角。以二向箔将太阳系二维化，如同随手拂去一粒尘埃。它甚至没有意识到，自己刚刚终结了数百万个文明中的某一个。',
   dim:[['距离太阳系','数千光年'],['手段','二向箔 · 降维打击']]},
  {id:'returner',x:164,y:118,r:18,cat:'gold',name:'宇宙边缘 · 归零者',sub:'维度归还的呼唤',
   desc:'向全宇宙发出「归还维度」广播的存在。希望所有文明交还维度，让宇宙从高维重新开始，回到十维的田园时代。',
   dim:[['诉求','归还维度，宇宙重启'],['立场','超然于文明竞争之上']]}
];
const MAP_ARCS = [
  {a:['trisolaris','earth'],color:'#6ea7d6',dash:true,label:'智子 · 通信与封锁'},
  {a:['earth','singer'],color:'#cda761',dash:true,label:'引力波 · 坐标广播'},
  {a:['singer','earth'],color:'#d05b52',dash:false,label:'光粒 · 二向箔'},
  {a:['earth','returner'],color:'#9d80d0',dash:true,label:'归零之声'}
];

/* ===== 设定词典 ===== */
const G_CATS = [
  {id:'civil',n:'文明与势力'},
  {id:'tech',n:'科技与武器'},
  {id:'plan',n:'计划与组织'},
  {id:'law',n:'法则与理论'}
];
const GLOSSARY = [
  {c:'civil',t:'三体文明',d:'半人马座α三体行星上的文明。因三颗恒星的无序引力而毁灭重生循环，以「乱纪元/恒纪元」为存亡节律，最终母星被光粒摧毁。'},
  {c:'civil',t:'地球文明',d:'人类文明。因叶文洁的回信暴露于宇宙，历经危机、威慑、广播、掩体、银河诸纪元，最终以星舰与种子在宇宙中延续。'},
  {c:'civil',t:'歌者文明',d:'银河深处的高等清理文明。以二向箔等武器维护黑暗森林秩序，随手降维了太阳系。'},
  {c:'civil',t:'归零者',d:'向全宇宙广播「归还维度」的存在，希望宇宙从高维重新大爆炸，回到十维田园时代。'},
  {c:'civil',t:'四维碎片文明',d:'早已陨落的高维文明。其四维空间的残片「魔戒」在银河纪被人类星舰发现。'},
  {c:'tech',t:'智子',d:'三体文明将质子二维展开后改造的智能微观粒子，可瞬间通信、监视一切，并封锁地球基础科学实验。'},
  {c:'tech',t:'水滴',d:'三体探测器。以绝对光滑、强相互作用力制成的外壳，近乎无敌，突袭中几乎全歼地球联合舰队。'},
  {c:'tech',t:'二向箔',d:'高等文明的降维武器。将三维空间降为二维，被抛掷处的一切随之铺展成画。'},
  {c:'tech',t:'光粒',d:'高等文明用于清除暴露坐标星球的武器，以接近光速击穿三体母星。'},
  {c:'tech',t:'曲率驱动',d:'通过扭曲局部时空实现超光速航行的技术，也是逃离二维化的关键。'},
  {c:'tech',t:'黑域',d:'光速飞船留下的低光速区域。身处其中的文明以接近零的光速自我封闭，无法再参与宇宙竞争。'},
  {c:'tech',t:'死线',d:'光速飞船航迹留下的不可逾越的低光速边界，是宇宙中的「速度陷阱」。'},
  {c:'tech',t:'思想钢印',d:'通过设备将信念直接写入大脑，可植入「胜利主义」或「失败主义」等坚定念头。'},
  {c:'tech',t:'引力波广播',d:'以引力波向全宇宙广播信号的技术，是暴露敌方坐标、触发黑暗森林打击的终极威慑。'},
  {c:'tech',t:'红岸工程',d:'中国秘密的宇宙监听与发送工程，叶文洁在此向半人马座α发出回信。'},
  {c:'plan',t:'面壁计划',d:'为对抗智子的全知监听，选出四位面壁者，以虚假与深藏的思想迷惑敌人。'},
  {c:'plan',t:'破壁计划',d:'三体方的反击，派破壁人揭穿每一位面壁者的真实意图。'},
  {c:'plan',t:'阶梯计划',d:'将云天明的大脑送往三体世界，以另一种形态打入敌人内部。'},
  {c:'plan',t:'群星计划',d:'购买恒星所有权，为文明在宇宙中留下坐标与退路的早期设想。'},
  {c:'plan',t:'掩体计划',d:'为躲避针对太阳的打击，将人类分散到木星等大行星阴影中的生存计划。'},
  {c:'plan',t:'黑域计划',d:'以光速飞船制造黑域，将整个太阳系封闭成低光速区，与宇宙彻底隔绝。'},
  {c:'plan',t:'执剑人',d:'掌握引力波威慑、随时可广播坐标以同归于尽的人类守护者，罗辑与程心先后继任。'},
  {c:'plan',t:'逃亡主义',d:'主张放弃地球、以星舰逃离太阳系寻找新家园的思潮，被视为对全人类的一种背叛与分化。'},
  {c:'plan',t:'古筝行动',d:'以「古筝」纳米细丝切断「审判日」号，截取三体情报的行动。'},
  {c:'law',t:'三体问题',d:'三个天体在引力作用下的运动难以解析求解，三体世界的恒星即处于这种混沌之中。'},
  {c:'law',t:'恒纪元/乱纪元',d:'三体世界的两种生存状态：恒星稳定可居的恒纪元，与太阳乱舞、世界反复毁灭的乱纪元。'},
  {c:'law',t:'黑暗森林法则',d:'宇宙社会学核心推论：文明的存在即是威胁，任何暴露坐标的文明都会被立即清理，故宇宙是一片黑暗森林。'},
  {c:'law',t:'猜疑链',d:'文明之间无法确认对方善意，只能不断向下猜疑，最终导向先发制人。'},
  {c:'law',t:'技术爆炸',d:'文明的技术进步可能以极短时间爆发，使弱者的威胁迅速超越强者。'},
  {c:'law',t:'宇宙社会学',d:'由两条公理推导的学科：一、生存是文明的第一需要；二、文明不断增长扩张，但宇宙中的物质总量保持不变。'},
  {c:'law',t:'降维打击',d:'高等文明以维度作为武器，将低维空间中的对手连同维度一起消灭。'},
  {c:'law',t:'给岁月以文明',d:'全书名句：与其让文明在时间里苟活，不如让文明以丰盛的方式去度过岁月。'}
];

/* ===== 人物 ===== */
const CHAR_GROUPS = [
 {id:'earth',name:'地球文明',accent:'var(--blue)',gc:'#6ea7d6',color:'#6ea7d6',
  list:[
   {n:'叶文洁',av:'叶',role:'红岸工程师 · 引信之人',fate:'sacrifice',f:'牺牲',
    bio:'对人类文明失望的天体物理学家。在红岸向半人马座α发出回信，成为三体危机最初的引信。',
    deed:'「她按下了那个按钮，也按下了人类命运的开关。」'},
   {n:'罗辑',av:'罗',role:'面壁者 · 第一代执剑人',fate:'survive',f:'幸存',
    bio:'社会学与宇宙社会学研究者。参悟黑暗森林法则，建立威慑平衡，是人类最孤独的守护者。',
    deed:'「他在冰湖与星空之间，替整个人类扛起了宇宙的重压。」'},
   {n:'程心',av:'程',role:'执剑人 · 种子守护者',fate:'survive',f:'幸存',
    bio:'以善意为初心的执剑人，却因一次恻隐使威慑崩塌。最终在647号宇宙守护人类最后的种子。',
    deed:'「她的善良，是人类的希望，也是人类的悲剧。」'},
   {n:'汪淼',av:'汪',role:'纳米科学家',fate:'survive',f:'幸存',
    bio:'被卷入三体游戏的纳米材料科学家，以「古筝行动」等提供了关键情报与手段。',
    deed:'「他证明了，人类的技术在关键处仍能闪光。」'},
   {n:'史强',av:'史',role:'刑警 · 地球军衔',fate:'survive',f:'幸存',
    bio:'粗犷而敏锐的地球警探，多次在关键节点拯救罗辑与人类，是「最强地球男人」。',
    deed:'「大史：地球人的直觉，往往比智子更接近真相。」'},
   {n:'章北海',av:'章',role:'太空军政委 · 逃亡派',fate:'sacrifice',f:'牺牲',
    bio:'深谋远虑的「失败主义」者。在舰队中为人类的星舰逃亡埋下火种，最终死于太空。',
    deed:'「他早已看清人类的结局，于是把希望藏进了深空。」'},
   {n:'云天明',av:'云',role:'阶梯计划志愿者 · 童话诗人',fate:'survive',f:'幸存',
    bio:'被送往三体世界的大脑。借由童话向人类传递曲率与黑域的密码，是跨越维度的守望者。',
    deed:'「他把最大的秘密，藏进了最温柔的童话里。」'},
   {n:'丁仪',av:'丁',role:'理论物理学家',fate:'sacrifice',f:'牺牲',
    bio:'直面水滴与二向箔的物理学家，以肉身丈量文明的边界。',
    deed:'「在绝对光滑的敌人面前，他仍选择走上前去。」'},
   {n:'泰勒',av:'泰',role:'面壁者',fate:'sacrifice',f:'牺牲',
    bio:'主张以「牺牲地球舰队」换取向三体同归于尽的面壁者，意图被破壁人揭穿后自杀。',
    deed:'「他的失败，是面壁者与破壁人博弈的第一滴血。」'},
   {n:'雷迪亚兹',av:'雷',role:'面壁者',fate:'sacrifice',f:'牺牲',
    bio:'试图以恒星核弹威慑三体，被破壁人揭穿后，死于自己祖国的民众之手。',
    deed:'「他以武器威胁星辰，最终却被人民之怒吞没。」'},
   {n:'希恩斯',av:'希',role:'面壁者',fate:'unknown',f:'未知',
    bio:'思想钢印的创造者，利用其暗中植入失败主义，为人类的逃亡预埋伏笔。',
    deed:'「他改变的不是武器，而是人类的信念本身。」'},
   {n:'艾AA',av:'艾',role:'程心之友 · 星舰同行者',fate:'survive',f:'幸存',
    bio:'与程心一同逃离太阳系，在漫长的航行中成为她最可靠的伙伴。',
    deed:'「在宇宙的孤独里，她是程心身边的最后一缕人间烟火。」'}
  ]},
 {id:'triso',name:'三体文明',accent:'var(--red)',gc:'#d05b52',color:'#d05b52',
  list:[
   {n:'智子',av:'智',role:'三体智子 · 监视与使节',fate:'unknown',f:'未知',
    bio:'三体以质子改造的微观智能体，无处不在。在威慑后成为人类与三体之间的「使节」。',
    deed:'「它既是锁死人类的锁，也是三体伸向地球的手。」'},
   {n:'1379号监听员',av:'监',role:'三体监听员',fate:'unknown',f:'未知',
    bio:'三体世界的普通监听员，向叶文洁发出「不要回答」的警告，是跨越种族的善意瞬间。',
    deed:'「在乱纪元的绝境里，他仍愿为素不相识的文明保留一线生机。」'},
   {n:'三体元首',av:'元',role:'三体文明领袖',fate:'unknown',f:'未知',
    bio:'三体文明最高决策者，主导了智子计划与舰队远征。',
    deed:'「他代表一个文明，做出了孤注一掷的抉择。」'}
  ]},
 {id:'cosmic',name:'宇宙尺度',accent:'var(--purple)',gc:'#9d80d0',color:'#9d80d0',
  list:[
   {n:'歌者',av:'歌',role:'清理者',fate:'survive',f:'幸存',
    bio:'高等文明的清理员，随手抛出二向箔，将太阳系二维化。',
    deed:'「对他而言，毁灭一个文明与拂去一粒尘埃，并无分别。」'},
   {n:'关一帆',av:'关',role:'星环人 · 程心同行者',fate:'survive',f:'幸存',
    bio:'星环世界的科学家，与程心在宇宙尽头重逢，共同守护最后的种子。',
    deed:'「跨越五百万年，他与她终于站到了时间的尽头。」'},
   {n:'归零者',av:'归',role:'维度归还者',fate:'unknown',f:'未知',
    bio:'向全宇宙广播「归还维度」的存在，希望宇宙重新开始。',
    deed:'「它不是文明，而是一个关于「再来一次」的宇宙级愿望。」'},
   {n:'魔戒',av:'戒',role:'四维碎片文明',fate:'sacrifice',f:'牺牲',
    bio:'高维文明的遗物，在四维碎片中与人类对话，随后坠入低维而毁灭。',
    deed:'「它用尽最后的维度，只为告诉后来者高维的存在。」'}
  ]}
];

/* ================= 应用层 ================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

/* --- 主题切换（黑/白） --- */
(function(){
  const root=document.documentElement, btn=$('#themeBtn');
  const saved=localStorage.getItem('santi-theme');
  root.setAttribute('data-theme',saved==='light'?'light':'dark');
  btn.addEventListener('click',()=>{
    const next=root.getAttribute('data-theme')==='light'?'dark':'light';
    root.setAttribute('data-theme',next);
    localStorage.setItem('santi-theme',next);
  });
})();

/* --- 路由 --- */
function go(id){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+id));
  $$('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===id));
  if(id==='text')renderReader();
  if(id==='timeline')setTimeout(()=>{try{initEraChart()}catch(e){}},0);
  window.scrollTo({top:0,behavior:'auto'});
}
function route(){
  let h=location.hash.replace('#','')||'home';
  if(!['home','read','text','timeline','map','glossary','characters'].includes(h))h='home';
  go(h);
}
window.addEventListener('hashchange',route);
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-nav]'); if(!b)return;
  e.preventDefault(); location.hash=b.dataset.nav;
});

/* --- 首页：三卷 + 特性 --- */
function renderBooks(){
  $('#booksGrid').innerHTML=BOOKS.map((b,i)=>`
   <div class="book-card" style="--ac:${b.accent}">
     <div class="no">${b.no}</div>
     <div class="vol">VOL.${'I II III'.split(' ')[i]}</div>
     <h3>${b.vol}</h3>
     <div class="en">${b.en}</div>
     <p>${b.desc}</p>
     <div class="tags">${b.tags.map(t=>`<span>${t}</span>`).join('')}</div>
     <span class="go" data-nav="read">进入阅读 <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"/></svg></span>
   </div>`).join('');
}
function renderFeatures(){
  $('#featureGrid').innerHTML=FEATURES.map(f=>`
   <div class="feature"><div class="ic ${f.ic}">${ICONS[f.ic]}</div><h4>${f.t}</h4><p>${f.d}</p></div>`).join('');
}
const ICONS={
  red:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19V6a2 2 0 0 1 2-2h13l-3 3 3 3H6"/></svg>',
  gold:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20h16M7 20v-6m5 6v-9m5 9v-5"/></svg>',
  blue:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  purple:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/><path d="M11 8h6M8 11v6"/></svg>'
};

/* --- 导读 --- */
function renderEraList(){
  $('#eraList').innerHTML=ERAS.map((e,i)=>`
   <button class="era-btn ${i===0?'active':''}" data-era="${e.id}">
     <span class="dot"></span><span class="nm">${e.name}</span>
     <span class="book-tag ${e.book}">${e.bookNm.replace(/《|》/g,'')}</span>
   </button>`).join('');
  $$('#eraList .era-btn').forEach(b=>b.addEventListener('click',()=>{
    $$('#eraList .era-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    renderEra(b.dataset.era);
  }));
}
function renderEra(id){
  const e=ERAS.find(x=>x.id===id);
  if(!e)return;
  const blocks=e.blocks.map((b,i)=>`
   <div class="read-block ${b.quote?'quote':''}">
     <div class="h"><span class="idx">${b.idx}</span>${b.h}</div>
     ${b.p.map(p=>`<p>${p}</p>`).join('')}
     ${b.quote?`<div class="note">${b.quote}</div><div class="src" style="margin-top:8px;font-size:12px;color:var(--ink-3)">—— ${b.src}</div>`:''}
   </div>`).join('');
  const events=`<div class="read-block"><div class="h"><span class="idx">历</span>本纪大事</div>
   <div class="events">${e.events.map((ev,i)=>`<div class="event"><div class="no">${String(i+1).padStart(2,'0')}</div><div class="body"><b>${ev.tt}</b><span>${ev.ds}</span></div></div>`).join('')}</div></div>`;
  const gloss=`<div class="gloss-toggle"><div class="bar">解读注疏 · 编者按<svg class="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div><div class="gloss-body"><p>${e.gloss}</p></div></div>`;
  $('#eraContent').innerHTML=`
   <div class="era-head">
     <div class="era-kicker">${e.bookNm} · ${e.span}</div>
     <h2>${e.name}</h2>
     <div class="spanline">纪元跨度 · ${e.span}</div>
     <p class="lead">${e.lead}</p>
   </div>
   ${blocks}${events}${gloss}`;
  $('#eraContent .gloss-toggle .bar').addEventListener('click',function(){
    this.closest('.gloss-toggle').classList.toggle('open');
  });
}

/* --- 时间线 --- */
let tlFilter='all';
function renderTLControls(){
  $('#tlControls').innerHTML=TL_BOOKS.map(b=>`<button class="tl-chip ${b.id===tlFilter?'active':''}" data-tl="${b.id}">${b.n}</button>`).join('');
  $$('#tlControls .tl-chip').forEach(c=>c.addEventListener('click',()=>{
    tlFilter=c.dataset.tl; renderTLControls(); renderTimeline();
  }));
}
function renderTimeline(){
  const eras=ERAS.filter(e=>tlFilter==='all'||e.book===tlFilter);
  $('#timeline').innerHTML=eras.map(e=>`
   <div class="tl-era" data-era="${e.id}" style="--ac:${e.accent}">
     <div class="tl-body">
       <div class="tl-head" tabindex="0" role="button" aria-expanded="false">
         <span class="tl-year">${e.span}</span>
         <span class="tl-name">${e.name}</span>
         <span class="tl-count">${e.events.length} 事</span>
         <svg class="tl-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
       </div>
       <div class="tl-events">
         ${e.events.map(ev=>`<div class="tl-event"><div class="ye">${ev.ye}</div><div class="tt">${ev.tt}</div><div class="ds">${ev.ds}</div></div>`).join('')}
       </div>
     </div>
   </div>`).join('');
  $$('#timeline .tl-head').forEach(h=>h.addEventListener('click',()=>{
    const era=h.closest('.tl-era'); era.classList.toggle('open');
    h.setAttribute('aria-expanded',era.classList.contains('open'));
  }));
}

/* --- 星图 --- */
const NODE_MAP=Object.fromEntries(MAP_NODES.map(n=>[n.id,n]));
function renderMap(){
  const svg=$('#mapSvg');
  let s='';
  // 星空背景
  let seed=7; const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280;};
  for(let i=0;i<90;i++){
    const x=Math.round(rnd()*1000),y=Math.round(rnd()*560),r=(rnd()*1.3+0.3).toFixed(2),o=(rnd()*0.5+0.2).toFixed(2);
    s+=`<circle cx="${x}" cy="${y}" r="${r}" style="fill:var(--star)" opacity="${o}"/>`;
  }
  // 弧线
  MAP_ARCS.forEach(a=>{
    const p1=NODE_MAP[a.a[0]],p2=NODE_MAP[a.a[1]];
    const mx=(p1.x+p2.x)/2,my=(p1.y+p2.y)/2-38;
    s+=`<path d="M${p1.x},${p1.y} Q${mx},${my} ${p2.x},${p2.y}" fill="none" stroke="${a.color}" stroke-width="1.6" stroke-dasharray="${a.dash?'5 6':'none'}" opacity="0.75"/>`;
    const lx=(p1.x+p2.x)/2+10, ly=my-10;
    s+=`<text x="${lx}" y="${ly}" font-size="11" fill="${a.color}" opacity="0.85">${a.label}</text>`;
  });
  // 节点
  MAP_NODES.forEach(n=>{
    const c='var(--'+n.cat+')';
    s+=`<g class="map-node" data-node="${n.id}" style="--node:${c}">
      <circle cx="${n.x}" cy="${n.y}" r="${n.r+7}" fill="var(--bg-elev)" stroke="${c}" stroke-width="1.5" opacity="0.9"/>
      <circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="var(--bg-elev)" stroke="${c}" stroke-width="1"/>
      <circle cx="${n.x}" cy="${n.y}" r="3.5" fill="${c}"/>
      <text x="${n.x}" y="${n.y-n.r-14}" text-anchor="middle" font-weight="600">${n.name}</text>
      <text class="sub" x="${n.x}" y="${n.y+n.r+18}" text-anchor="middle">${n.sub}</text>
    </g>`;
  });
  svg.innerHTML=s;
  $$('#mapSvg .map-node').forEach(g=>g.addEventListener('click',()=>showMapNode(g.dataset.node)));
}
function showMapNode(id){
  const n=NODE_MAP[id]; if(!n)return;
  const c='var(--'+n.cat+')';
  $('#mapPanelBody').innerHTML=`
    <div style="width:34px;height:4px;border-radius:2px;background:${c};margin-bottom:14px"></div>
    <h4>${n.name}</h4>
    <div class="cat" style="--ac:${c}">${n.sub}</div>
    <p>${n.desc}</p>
    ${n.dim.map(d=>`<div class="dim"><span>${d[0]}</span><span style="color:var(--ink)">${d[1]}</span></div>`).join('')}`;
  $('#mapPanel').classList.add('show');
}
$('#mapClose').addEventListener('click',()=>$('#mapPanel').classList.remove('show'));

/* --- 设定词典 --- */
let glossFilter='all';
function renderFilter(){
  const cats=[{id:'all',n:'全部'},...G_CATS];
  $('#filterBar').innerHTML=cats.map(c=>`<button class="f ${c.id===glossFilter?'active':''}" data-f="${c.id}">${c.n}</button>`).join('');
  $$('#filterBar .f').forEach(b=>b.addEventListener('click',()=>{glossFilter=b.dataset.f;renderFilter();renderGloss();}));
}
function renderGloss(){
  const list=GLOSSARY.filter(g=>glossFilter==='all'||g.c===glossFilter);
  $('#glossGrid').innerHTML=list.map(g=>{
    const cat=G_CATS.find(c=>c.id===g.c);
    return `<div class="g-term"><div class="g-cat">${cat.n}</div><h4>${g.t}</h4><p>${g.d}</p></div>`;
  }).join('');
}

/* --- 人物 --- */
function renderChars(){
  $('#charGroups').innerHTML=CHAR_GROUPS.map(g=>`
   <div class="char-group">
     <div class="gh"><span class="bar" style="background:${g.gc}"></span>${g.name}</div>
     <div class="char-grid">${g.list.map(p=>`
       <div class="char-card">
         <div class="top">
           <div class="av" style="background:${p.fate==='survive'?'rgba(126,207,157,.14)':p.fate==='sacrifice'?'var(--red-soft)':'var(--gold-soft)'};color:${p.fate==='survive'?'#7ecf9d':p.fate==='sacrifice'?'var(--red)':'var(--gold)'}">${p.av}</div>
           <div><h4>${p.n}</h4><div class="role">${p.role}</div></div>
           <span class="fate ${p.fate}">${p.f}</span>
         </div>
         <p class="bio">${p.bio}</p>
         <div class="deed">${p.deed}</div>
       </div>`).join('')}</div>
   </div>`).join('');
}

/* --- 提示浮层（高亮词） --- */
const tipEl=$('#tip');
function termDef(name){
  const g=GLOSSARY.find(x=>x.t===name); if(!g)return null;
  const cat=G_CATS.find(c=>c.id===g.c);
  return {t:g.t,c:cat.n,d:g.d};
}
document.addEventListener('mouseover',e=>{
  const el=e.target.closest('.term'); if(!el)return;
  const def=termDef(el.dataset.term); if(!def)return;
  tipEl.innerHTML=`<div class="tt">${def.t}</div><div class="tc" style="color:var(--gold)">${def.c}</div>${def.d}`;
  const r=el.getBoundingClientRect();
  tipEl.style.display='block';
  const tw=tipEl.offsetWidth,th=tipEl.offsetHeight;
  let x=r.left+8, y=r.bottom+8;
  if(x+tw>innerWidth-8)x=Math.max(8,innerWidth-tw-8);
  if(y+th>innerHeight-8)y=r.top-th-8;
  tipEl.style.left=x+'px'; tipEl.style.top=y+'px';
});
document.addEventListener('mouseout',e=>{
  if(e.target.closest('.term'))tipEl.style.display='none';
});

/* --- Hero Canvas：三体运动 --- */
(function(){
  const cv=$('#heroCanvas'),ctx=cv.getContext('2d');
  let W,H,DPR,stars=[],sim=null,raf=0,visible=true;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){
    const pr=Math.min(devicePixelRatio||1,2);
    const rect=cv.parentElement.getBoundingClientRect();
    W=rect.width;H=rect.height;DPR=pr;
    cv.width=W*pr;cv.height=H*pr;ctx.setTransform(pr,0,0,pr,0,0);
  }
  function makeStars(){
    stars=[];for(let i=0;i<140;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+0.3,ph:Math.random()*6.28,sp:0.4+Math.random()*1.2});
  }
  function makeSim(){
    sim={t:0,
      suns:[{x:0,y:0,r:16,ang:0,br:110,drift:0.02,sp:0.5,col:'#d98b4a'},
            {x:0,y:0,r:12,ang:2.2,br:150,drift:0.035,sp:0.32,col:'#c8504a'},
            {x:0,y:0,r:10,ang:4.4,br:86,drift:0.05,sp:0.68,col:'#cda761'}],
      pl:{ang:0,sp:1.6,r:3.2,dist:34},
      cx:0,cy:0,
      trails:[[],[],[]]};
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    if(!sim)return;
    const t=sim.t; sim.cx=W*0.5; sim.cy=H*0.52;
    // 星空
    const starCol=getComputedStyle(document.documentElement).getPropertyValue('--star').trim()||'#b8c7dd';
    if(!window.__GL_STARS){for(const s of stars){
      const tw=reduce?1:(0.55+0.45*Math.sin(s.ph+t*s.sp));
      ctx.globalAlpha=0.4+0.6*tw;ctx.fillStyle=starCol;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,6.28);ctx.fill();
    }}
    ctx.globalAlpha=1;
    if(reduce){// 静态三星
      drawSun(0,sim.cx-70,sim.cy-30);drawSun(1,sim.cx+50,sim.cy-20);drawSun(2,sim.cx-10,sim.cy+55);return;
    }
    // 三星轨道
    sim.suns.forEach((s,i)=>{
      s.ang+=s.sp*0.02*(1+0.25*Math.sin(t*0.03+i*2));
      s.br=s.br+((i===0?110:i===1?150:86)-s.br)*0.02;
      const rr=s.br*(1+0.22*Math.sin(s.ang*1.7+i*1.3));
      s.x=sim.cx+Math.cos(s.ang)*rr;
      s.y=sim.cy+Math.sin(s.ang)*rr*0.8;
      sim.trails[i].push({x:s.x,y:s.y});
      if(sim.trails[i].length>34)sim.trails[i].shift();
      // 轨道线
      ctx.strokeStyle=s.col;ctx.globalAlpha=0.28;ctx.lineWidth=1;
      ctx.beginPath();
      for(let k=0;k<sim.trails[i].length-1;k++){const a=sim.trails[i][k],b=sim.trails[i][k+1];ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);}
      ctx.stroke();
    });
    // 行星：绕最近的一颗星
    const nearest=sim.suns.slice().sort((a,b)=>Math.hypot(a.x-W*0.5,a.y-H*0.5)-Math.hypot(b.x-W*0.5,b.y-H*0.5))[0];
    sim.pl.ang+=sim.pl.sp*0.02;
    const px=nearest.x+Math.cos(sim.pl.ang)*sim.pl.dist;
    const py=nearest.y+Math.sin(sim.pl.ang)*sim.pl.dist*0.9;
    // 恒/乱纪元判定：以三星彼此距离的离散度
    let spread=0;const pair=[[0,1],[1,2],[0,2]];
    let dsum=0;pair.forEach(([i,j])=>{dsum+=Math.hypot(sim.suns[i].x-sim.suns[j].x,sim.suns[i].y-sim.suns[j].y);});
    const avg=dsum/3;
    let ddev=0;pair.forEach(([i,j])=>ddev+=Math.pow(Math.hypot(sim.suns[i].x-sim.suns[j].x,sim.suns[i].y-sim.suns[j].y)-avg,2));
    const chaos=ddev/avg/400;
    const state=chaos<0.55?'恒纪元':'乱纪元';
    ctx.fillStyle=state==='恒纪元'?'#7ecf9d':'#d05b52';
    ctx.font='500 13px "Noto Sans SC",sans-serif';
    ctx.globalAlpha=0.9;ctx.fillText(state,22,30);
    ctx.globalAlpha=0.5;ctx.font='11px "Noto Sans SC",sans-serif';ctx.fillStyle='#9aa4b6';
    ctx.fillText(chaos<0.55?'三星暂稳 · 行星可居':'三星乱舞 · 文明危殆',22,50);
    ctx.globalAlpha=1;
    // 行星
    ctx.fillStyle='#7fb0d6';ctx.beginPath();ctx.arc(px,py,sim.pl.r,0,6.28);ctx.fill();
    // 三星绘制（带光晕）
    sim.suns.forEach((s,i)=>drawSun(i,s.x,s.y));
    sim.t++;
  }
  function drawSun(i,x,y){
    const s=sim.suns[i];
    const g=ctx.createRadialGradient(x,y,0,x,y,s.r*3.2);
    g.addColorStop(0,s.col);g.addColorStop(0.5,s.col+'66');g.addColorStop(1,'transparent');
    ctx.globalAlpha=0.4;ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,s.r*3.2,0,6.28);ctx.fill();
    ctx.globalAlpha=1;ctx.fillStyle=s.col;ctx.beginPath();ctx.arc(x,y,s.r*0.55,0,6.28);ctx.fill();
  }
  function loop(){if(!visible){raf=0;return;}draw();raf=requestAnimationFrame(loop);}
  size();makeStars();
  if(reduce){makeSim();draw();}
  else{makeSim();loop();}
  const io=new IntersectionObserver(en=>{visible=en[0].isIntersecting;if(visible&&!raf)loop();},{threshold:0});
  io.observe(cv);
  let rt;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{size();makeStars();if(reduce)draw();},150);});
})();

/* ================= 原文阅读器 ================= */
const TXTBOOKS=(window.SANTI_TEXT&&window.SANTI_TEXT.books)||[];
let rBook=0,rChap=0,rInit=false;
function _chs(){return TXTBOOKS[rBook].parts.reduce((a,p)=>a.concat(p.chapters),[]);}
function renderReader(){
  if(!TXTBOOKS.length)return;
  if(!rInit){
    rInit=true;
    $('#readerBooks').addEventListener('click',e=>{const b=e.target.closest('button[data-b]');if(!b)return;rBook=+b.dataset.b;rChap=0;paintReader();});
    $('#readerChapters').addEventListener('click',e=>{const b=e.target.closest('button[data-c]');if(!b)return;rChap=+b.dataset.c;paintReader();});
    $('#prevCh').addEventListener('click',()=>{if(rChap>0){rChap--;paintReader();}});
    $('#nextCh').addEventListener('click',()=>{if(rChap<_chs().length-1){rChap++;paintReader();}});
    $('#fontUp').addEventListener('click',()=>setRFS(1));
    $('#fontDown').addEventListener('click',()=>setRFS(-1));
    const sv=parseInt(localStorage.getItem('santi-rfs')||'17',10);document.documentElement.style.setProperty('--rfs',sv+'px');
  }
  paintReader();
}
function setRFS(d){
  let v=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--rfs'),10)||17;
  v=Math.min(24,Math.max(13,v+d));
  document.documentElement.style.setProperty('--rfs',v+'px');
  localStorage.setItem('santi-rfs',v);
}
function paintReader(){
  const chs=_chs(); if(rChap>=chs.length)rChap=chs.length-1; if(rChap<0)rChap=0;
  $('#readerBooks').innerHTML=TXTBOOKS.map((b,i)=>`<button data-b="${i}" class="${i===rBook?'active':''}">${b.name}</button>`).join('');
  $('#readerChapters').innerHTML=chs.map((c,i)=>`<button data-c="${i}" class="${i===rChap?'active':''}">${c.t}</button>`).join('');
  const c=chs[rChap];
  $('#readerCurrent').textContent=TXTBOOKS[rBook].name+' · '+c.t;
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  $('#readerContent').innerHTML='<div class="ch-title">'+esc(c.t)+'</div>'+c.paras.map(x=>'<p>'+esc(x)+'</p>').join('');
  $('#readerContent').scrollTop=0;
  $('#prevCh').disabled=rChap===0; $('#nextCh').disabled=rChap===chs.length-1;
  const a=document.querySelector('#readerChapters button.active'); if(a)a.scrollIntoView({block:'nearest'});
}

/* ================= three.js 3D 星海 ================= */
(function(){
  const gl=document.getElementById('heroGL');
  if(!gl||typeof THREE==='undefined'){return;}
  let renderer,scene,camera,points,raf=0,visible=true,mx=0,my=0,tx=0,ty=0;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{renderer=new THREE.WebGLRenderer({canvas:gl,alpha:true,antialias:true});}
  catch(e){gl.style.display='none';return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));
  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(60,1,0.1,3000);
  camera.position.set(0,0,620);
  const N=1800,pos=new Float32Array(N*3),col=new Float32Array(N*3);
  const pal=[[.72,.79,.92],[.86,.72,.55],[.55,.72,.86],[.88,.9,.94]];
  for(let i=0;i<N;i++){
    const r=140+Math.random()*560,th=Math.random()*Math.PI*2,ph=Math.acos(2*Math.random()-1);
    pos[i*3]=r*Math.sin(ph)*Math.cos(th);
    pos[i*3+1]=r*Math.cos(ph)*0.68;
    pos[i*3+2]=r*Math.sin(ph)*Math.sin(th);
    const c=pal[i%pal.length];col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2];
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  geo.setAttribute('color',new THREE.BufferAttribute(col,3));
  points=new THREE.Points(geo,new THREE.PointsMaterial({size:2.0,vertexColors:true,transparent:true,opacity:.92,depthWrite:false,sizeAttenuation:true}));
  scene.add(points);
  function resize(){
    const w=gl.clientWidth||gl.parentElement.clientWidth||innerWidth;
    const hh=gl.clientHeight||gl.parentElement.clientHeight||innerHeight;
    renderer.setSize(w,hh,false);camera.aspect=w/hh;camera.updateProjectionMatrix();
  }
  resize();window.addEventListener('resize',()=>{clearTimeout(gl._t);gl._t=setTimeout(resize,150);});
  document.addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-0.5;my=e.clientY/innerHeight-0.5;});
  function frame(now){
    if(!visible){raf=0;return;}
    const t=now/1000;
    points.rotation.y=t*0.02;points.rotation.x=Math.sin(t*0.08)*0.09;
    tx+=(mx*0.7-tx)*0.05;ty+=(my*0.5-ty)*0.05;
    camera.position.x=tx*110;camera.position.y=-ty*70;camera.lookAt(0,0,0);
    renderer.render(scene,camera);raf=requestAnimationFrame(frame);
  }
  window.__GL_STARS=true;
  if(reduce){renderer.render(scene,camera);}
  else{raf=requestAnimationFrame(frame);}
  const io=new IntersectionObserver(en=>{visible=en[0].isIntersecting;if(visible&&!raf&&!reduce)raf=requestAnimationFrame(frame);},{threshold:0});
  io.observe(gl);
})();

/* ================= ECharts 纪元演进图 ================= */
let eraChart=null;
function _cssv(v){const m=/var\((--[\w-]+)\)/.exec(v||'');if(!m)return v;return getComputedStyle(document.documentElement).getPropertyValue(m[1]).trim()||v;}
function jumpEra(id){
  go('read');location.hash='read';
  try{renderEra(id);}catch(e){}
  $$('#eraList .era-btn').forEach(x=>x.classList.toggle('active',x.dataset.era===id));
  window.scrollTo({top:0,behavior:'auto'});
}
function initEraChart(){
  const el=document.getElementById('eraChart');
  if(!el||typeof echarts==='undefined'||!ERAS.length)return;
  if(eraChart){try{eraChart.dispose();}catch(e){}eraChart=null;}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ink3=_cssv('var(--ink-3)')||'#888', ink=_cssv('var(--ink)')||'#ddd',
        line=_cssv('var(--line)')||'#333', bg2=_cssv('var(--panel-2)')||'#111';
  const cats=ERAS.map(e=>e.name);
  const ranges=ERAS.map(e=>{
    let n=(String(e.span).match(/\d{3,4}/g)||[]).map(Number).filter(x=>x>=1900&&x<=3000);
    if(n.length>=2)return[n[0],n[1]];
    if(n.length===1)return[n[0],n[0]+90];
    return null;
  });
  let maxK=2400; ranges.forEach(r=>{if(r)maxK=Math.max(maxK,r[1]);});
  const lastEmpty=ranges.findIndex(r=>!r);
  if(lastEmpty>=0)ranges[lastEmpty]=[maxK+20,maxK+150];
  let maxAll=0;ranges.forEach(r=>{if(r)maxAll=Math.max(maxAll,r[1]);});
  const base=ranges.map(r=>r[0]);
  const dur=ranges.map(r=>Math.max(24,r[1]-r[0]));
  const scat=[];
  ERAS.forEach((e,i)=>{(e.events||[]).forEach(ev=>{
    const m=/^(?:\+)?(\d{4})/.exec(ev.ye||''); if(!m)return;
    const y=+m[1]; if(y<1900||y>3000)return;
    scat.push({value:[y,i],tt:ev.tt,ds:ev.ds,eid:e.id,accent:e.accent});
  });});
  eraChart=echarts.init(el,null,{renderer:'canvas'});
  eraChart.setOption({
    animation:!reduce,
    backgroundColor:'transparent',
    grid:{left:64,right:26,top:26,bottom:78},
    tooltip:{trigger:'item',backgroundColor:bg2,borderColor:line,textStyle:{color:ink,fontSize:12},
      formatter:pa=>{const d=pa.data;
        if(d&&d.tt)return '<b>'+d.tt+'</b><br/>'+(d.ds||'');
        const i=pa.dataIndex;return '<b>'+cats[i]+'</b><br/>'+(ERAS[i].span||'');}},
    xAxis:{type:'value',min:1950,max:maxAll+170,axisLabel:{color:ink3,fontSize:11,formatter:v=>v},
      splitLine:{lineStyle:{color:line,opacity:.5}},axisLine:{lineStyle:{color:line}}},
    yAxis:{type:'category',data:cats,inverse:true,axisLabel:{color:ink3,fontSize:12},
      axisTick:{show:false},axisLine:{lineStyle:{color:line}}},
    dataZoom:[{type:'inside',xAxisIndex:0,zoomOnMouseWheel:true,moveOnMouseWheel:false},
      {type:'slider',xAxisIndex:0,height:16,bottom:20,borderColor:'transparent',fillerColor:line,
       handleStyle:{color:ink3},textStyle:{color:ink3},labelFormatter:''}],
    series:[
      {name:'base',type:'bar',stack:'span',silent:true,barWidth:16,itemStyle:{color:'transparent'},data:base},
      {name:'span',type:'bar',stack:'span',barWidth:16,data:dur.map((v,i)=>({value:v,eid:ERAS[i].id,
        itemStyle:{color:_cssv(ERAS[i].accent),opacity:.28,borderRadius:7,borderColor:_cssv(ERAS[i].accent),borderWidth:1,borderOpacity:0.5}}))},
      {name:'events',type:'scatter',symbolSize:9,z:3,data:scat,
        itemStyle:{color:pa=>_cssv(pa.data.accent),borderColor:bg2,borderWidth:1.5},
        emphasis:{scale:1.5,itemStyle:{shadowBlur:12,shadowColor:'rgba(0,0,0,.35)'}}}
    ]
  });
  eraChart.off('click');
  eraChart.on('click',pa=>{const d=pa.data;if(d&&d.eid)jumpEra(d.eid);});
}
window.addEventListener('resize',()=>{if(eraChart)try{eraChart.resize();}catch(e){}});
new MutationObserver(()=>{if(document.getElementById('eraChart')&&document.getElementById('view-timeline').classList.contains('active'))initEraChart();})
  .observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

/* ================= 初始化 ================= */
renderBooks();renderFeatures();renderEraList();renderEra('crisis');
renderTLControls();renderTimeline();renderMap();renderFilter();renderGloss();renderChars();
route();

/* ================= 访问计数 ================= */
(function(){
  const el=document.getElementById('visitCount');
  const label=document.getElementById('visitLabel');
  if(!el) return;
  const NS='rogeda-island', KEY='read-santi';
  const put=n=>{el.textContent=Number(n).toLocaleString('en-US');};
  const localCount=()=>{
    let n=Number(localStorage.getItem('santi-local-visits')||0)+1;
    localStorage.setItem('santi-local-visits',String(n));
    if(label) label.textContent='本机访问';
    put(n);
  };
  (async()=>{
    try{
      const r=await fetch('https://abacus.jasoncameron.app/hit/'+NS+'/'+KEY,{cache:'no-store'});
      if(!r.ok) throw 0;
      const d=await r.json();
      if(typeof d.value==='number'){put(d.value);return;}
      throw 0;
    }catch(e){
      try{
        const r=await fetch('https://api.counterapi.dev/v1/'+NS+'/'+KEY+'/up',{cache:'no-store'});
        if(!r.ok) throw 0;
        const d=await r.json();
        if(typeof d.count==='number'){put(d.count);return;}
        throw 0;
      }catch(e2){localCount();}
    }
  })();
})();
