'use client'

import React from 'react'

const numberKanjis = [
  { kanji: '一', meaning: 'One', onyomi: 'いち (ichi)', kunyomi: 'ひと(つ) (hito(tsu))', vocabulary: [{ text: '一人', romaji: 'hitori', desc: 'one person, alone' }] },
  { kanji: '二', meaning: 'Two', onyomi: 'に (ni)', kunyomi: 'ふた(つ) (futa(tsu))', vocabulary: [{ text: '二人', romaji: 'futari', desc: 'two people' }] },
  { kanji: '三', meaning: 'Three', onyomi: 'さん (san)', kunyomi: 'み(っつ) (mi(ttsu))', vocabulary: [{ text: '三日', romaji: 'mikka', desc: '3rd day of the month' }] },
  { kanji: '四', meaning: 'Four', onyomi: 'し (shi)', kunyomi: 'よ(っつ), よん (yo(ttsu), yon)', vocabulary: [{ text: '四日', romaji: 'yokka', desc: '4th day of the month' }] },
  { kanji: '五', meaning: 'Five', onyomi: 'ご (go)', kunyomi: 'いつ(つ) (itsu(tsu))', vocabulary: [{ text: '五日', romaji: 'itsuka', desc: '5th day of the month' }] },
  { kanji: '六', meaning: 'Six', onyomi: 'ろく (roku)', kunyomi: 'む(っつ), むい (mu(ttsu), mui)', vocabulary: [{ text: '六日', romaji: 'muika', desc: '6th day of the month' }] },
  { kanji: '七', meaning: 'Seven', onyomi: 'しち (shichi)', kunyomi: 'なな(つ), なな (nana(tsu), nana)', vocabulary: [{ text: '七日', romaji: 'nanoka', desc: '7th day of the month' }] },
  { kanji: '八', meaning: 'Eight', onyomi: 'はち (hachi)', kunyomi: 'や(っつ), よう (ya(ttsu), you)', vocabulary: [{ text: '八日', romaji: 'youka', desc: '8th day of the month' }] },
  { kanji: '九', meaning: 'Nine', onyomi: 'きゅう, く (kyuu, ku)', kunyomi: 'ここの(つ) (kokono(tsu))', vocabulary: [{ text: '九日', romaji: 'kokonoka', desc: '9th day of the month' }] },
  { kanji: '十', meaning: 'Ten', onyomi: 'じゅう (juu)', kunyomi: 'とう, とお (tou, too)', vocabulary: [{ text: '十日', romaji: 'tooka', desc: '10th day of the month' }] },
  { kanji: '百', meaning: 'Hundred', onyomi: 'ひゃく (hyaku)', kunyomi: '—', vocabulary: [{ text: '百円', romaji: 'hyakuen', desc: '100 yen' }] },
  { kanji: '千', meaning: 'Thousand', onyomi: 'せん (sen)', kunyomi: 'ち (chi)', vocabulary: [{ text: '千円', romaji: 'senen', desc: '1,000 yen' }, { text: '千葉県', romaji: 'chibaken', desc: 'Chiba prefecture' }] },
  { kanji: '万', meaning: 'Ten thousand', onyomi: 'まん (man)', kunyomi: '—', vocabulary: [{ text: '一万円', romaji: 'ichimanen', desc: '10,000 yen' }, { text: '万年筆', romaji: 'mannenpitsu', desc: 'fountain pen' }] },
  { kanji: '億', meaning: 'Hundred-million', onyomi: 'おく (oku)', kunyomi: 'ー', vocabulary: [{ text: '一億円', romaji: 'ichiokuen', desc: '100,000,000 yen' }] },
]

const timeKanjis = [
  { kanji: '日', meaning: 'Day, sun', onyomi: 'にち, じつ (nichi, jitsu)', kunyomi: 'ひ, か (hi, ka)', vocabulary: [{ text: '日曜日', romaji: 'nichiyoubi', desc: 'Sunday' }, { text: '休日', romaji: 'kyuujitsu', desc: 'holiday' }] },
  { kanji: '週', meaning: 'Week', onyomi: 'しゅう (shuu)', kunyomi: '—', vocabulary: [{ text: '来週', romaji: 'raishuu', desc: 'next week' }, { text: '週末', romaji: 'shuumatsu', desc: 'weekend' }] },
  { kanji: '月', meaning: 'Month, moon', onyomi: 'げつ, がつ (getsu, gatsu)', kunyomi: 'つき (tsuki)', vocabulary: [{ text: '月', romaji: 'tsuki', desc: 'moon' }, { text: '月曜日', romaji: 'getsuyoubi', desc: 'Monday' }] },
  { kanji: '年', meaning: 'Year', onyomi: 'ねん (nen)', kunyomi: 'とし (toshi)', vocabulary: [{ text: '今年', romaji: 'kotoshi', desc: 'this year' }, { text: '去年', romaji: 'kyonen', desc: 'last year' }] },
  { kanji: '時', meaning: 'Time, hour', onyomi: 'じ (ji)', kunyomi: 'とき (toki)', vocabulary: [{ text: '何時', romaji: 'nanji', desc: 'what time' }, { text: '時々', romaji: 'tokidoki', desc: 'sometimes' }] },
  { kanji: '間', meaning: 'Interval', onyomi: 'かん (kan)', kunyomi: 'あいだ, ま (aida, ma)', vocabulary: [{ text: '時間', romaji: 'jikan', desc: 'time' }] },
  { kanji: '分', meaning: 'Minute, part, understand', onyomi: 'ぶん, ふん, ぶ (bun, fun, bu)', kunyomi: 'わ(かる) (wa(karu))', vocabulary: [{ text: '２分', romaji: 'nifun', desc: 'two minutes' }, { text: '自分', romaji: 'jibun', desc: 'oneself' }, { text: '分かる', romaji: 'wakaru', desc: 'to understand' }] },
  { kanji: '午', meaning: 'Noon', onyomi: 'ご (go)', kunyomi: 'ご', vocabulary: [{ text: '午前', romaji: 'gozen', desc: 'morning, A.M.' }] },
  { kanji: '前', meaning: 'Before', onyomi: 'ぜん (zen)', kunyomi: 'まえ (mae)', vocabulary: [{ text: '前回', romaji: 'zenkai', desc: 'last time' }, { text: '駅前', romaji: 'ekimae', desc: 'front of the station' }] },
  { kanji: '後', meaning: 'After', onyomi: 'ご, こう (go, kou)', kunyomi: 'あと, うし (ato, ushi)', vocabulary: [{ text: '後で', romaji: 'atode', desc: 'after' }, { text: '後ろ', romaji: 'ushiro', desc: 'behind' }] },
  { kanji: '今', meaning: 'Now', onyomi: 'こん (kon)', kunyomi: 'いま (ima)', vocabulary: [{ text: '今回', romaji: 'konkai', desc: 'this time' }, { text: '今', romaji: 'ima', desc: 'now' }] },
  { kanji: '先', meaning: 'Previous', onyomi: 'せん (sen)', kunyomi: 'さき (saki)', vocabulary: [{ text: '先週', romaji: 'senshuu', desc: 'last week' }, { text: '先生', romaji: 'sensei', desc: 'teacher' }] },
  { kanji: '来', meaning: 'Next, come', onyomi: 'らい (rai)', kunyomi: 'く(る) (ku(ru))', vocabulary: [{ text: '来月', romaji: 'raigetsu', desc: 'next month' }, { text: '来る', romaji: 'kuru', desc: 'to come' }] },
  { kanji: '毎', meaning: 'Every', onyomi: 'まい (mai)', kunyomi: 'ごと (goto)', vocabulary: [{ text: '毎日', romaji: 'mainichi', desc: 'every day' }] },
]

const peoplePlacesThingsKanjis = [
  { kanji: '人', meaning: 'Person', onyomi: 'じん, にん (jin, nin)', kunyomi: 'ひと (hito)', vocabulary: [{ text: 'アメリカ人', romaji: 'amerikajin', desc: 'American person' }, { text: '外人', romaji: 'gaijin', desc: 'foreigner' }] },
  { kanji: '男', meaning: 'Man', onyomi: 'だん, なん (dan, nan)', kunyomi: 'おとこ (otoko)', vocabulary: [{ text: '男の子', romaji: 'otokonoko', desc: 'boy' }, { text: '男性', romaji: 'dansei', desc: 'male' }] },
  { kanji: '女', meaning: 'Woman', onyomi: 'じょ (jo)', kunyomi: 'おんな (onna)', vocabulary: [{ text: '女の子', romaji: 'onnanoko', desc: 'girl' }, { text: '女性', romaji: 'josei', desc: 'female' }] },
  { kanji: '子', meaning: 'Child', onyomi: 'し (shi)', kunyomi: 'こ (ko)', vocabulary: [{ text: '子供', romaji: 'kodomo', desc: 'child' }, { text: '菓子屋', romaji: 'kashiya', desc: 'kashiya' }] },
  { kanji: '母', meaning: 'Mother', onyomi: 'ぼ (bo)', kunyomi: 'はは (haha)', vocabulary: [{ text: '母', romaji: 'haha', desc: 'mother' }] },
  { kanji: '父', meaning: 'Father', onyomi: 'ふ (fu)', kunyomi: 'ちち (chichi)', vocabulary: [{ text: '父', romaji: 'chichi', desc: 'father' }] },
  { kanji: '友', meaning: 'Friend', onyomi: 'ゆう (yuu)', kunyomi: 'とも (tomo)', vocabulary: [{ text: '友達', romaji: 'tomodachi', desc: 'friend' }] },
  { kanji: '本', meaning: 'Book, Origin', onyomi: 'ほん (hon)', kunyomi: 'もと (moto)', vocabulary: [{ text: '日本', romaji: 'nihon', desc: 'Japan' }, { text: '本当', romaji: 'hontou', desc: 'reality' }] },
  { kanji: '気', meaning: 'Spirit', onyomi: 'き (ki)', kunyomi: '—', vocabulary: [{ text: '元気', romaji: 'genki', desc: 'lively, fine' }] },
  { kanji: '生', meaning: 'Life', onyomi: 'せい, しょう (sei, shou)', kunyomi: 'い(きる), う(まれる) (i(kiru), u(mareru))', vocabulary: [{ text: '生徒', romaji: 'seito', desc: 'pupil' }, { text: '生きる', romaji: 'ikiru', desc: 'to live' }] },
  { kanji: '車', meaning: 'Car', onyomi: 'しゃ (sha)', kunyomi: 'くるま (kuruma)', vocabulary: [{ text: '車', romaji: 'kuruma', desc: 'car' }, { text: '電車', romaji: 'densha', desc: 'train' }] },
  { kanji: '語', meaning: 'Language', onyomi: 'ご (go)', kunyomi: 'かた(る) (kata(ru))', vocabulary: [{ text: '英語', romaji: 'eigo', desc: 'English' }, { text: '日本語', romaji: 'nihongo', desc: 'Japanese' }] },
  { kanji: '耳', meaning: 'Ear', onyomi: 'じ (ji)', kunyomi: 'みみ (mimi)', vocabulary: [{ text: '耳', romaji: 'mimi', desc: 'ear' }] },
  { kanji: '手', meaning: 'Hand', onyomi: 'しゅ (shu)', kunyomi: 'て (te)', vocabulary: [{ text: '手紙', romaji: 'tegami', desc: 'letter' }, { text: '選手', romaji: 'senshu', desc: 'athlete' }] },
  { kanji: '足', meaning: 'Foot', onyomi: 'そく (soku)', kunyomi: 'あし、た(す) (ashi, ta(su))', vocabulary: [{ text: '足', romaji: 'ashi', desc: 'foot' }] },
  { kanji: '目', meaning: 'Eye', onyomi: 'もく (moku)', kunyomi: 'め (me)', vocabulary: [{ text: '目', romaji: 'me', desc: 'eye' }] },
  { kanji: '口', meaning: 'Mouth', onyomi: 'こう (kou)', kunyomi: 'くち (kuchi)', vocabulary: [{ text: '入り口', romaji: 'iriguchi', desc: 'entrance' }] },
  { kanji: '店', meaning: 'Shop', onyomi: 'てん (ten)', kunyomi: 'みせ (mise)', vocabulary: [{ text: '喫茶店', romaji: 'kissaten', desc: 'coffee shop' }] },
  { kanji: '駅', meaning: 'Station', onyomi: 'えき (eki)', kunyomi: '—', vocabulary: [{ text: '駅弁', romaji: 'ekiben', desc: 'station bento' }] },
  { kanji: '道', meaning: 'Street', onyomi: 'どう (dou)', kunyomi: 'みち (michi)', vocabulary: [{ text: '道', romaji: 'michi', desc: 'road' }, { text: '道具', romaji: 'dougu', desc: 'tool' }] },
  { kanji: '国', meaning: 'Country', onyomi: 'こく (koku)', kunyomi: 'くに (kuni)', vocabulary: [{ text: '国', romaji: 'kuni', desc: 'country' }, { text: '外国', romaji: 'gaikoku', desc: 'foreign' }] },
  { kanji: '学', meaning: 'Study', onyomi: 'がく (gaku)', kunyomi: 'まな(ぶ) (mana(bu))', vocabulary: [{ text: '大学', romaji: 'daigaku', desc: 'university' }, { text: '学ぶ', romaji: 'manabu', desc: 'to learn' }] },
  { kanji: '校', meaning: 'School', onyomi: 'こう (kou)', kunyomi: '—', vocabulary: [{ text: '学校', romaji: 'gakkou', desc: 'school' }] },
  { kanji: '名', meaning: 'Name', onyomi: 'めい, みょう (mei, myou)', kunyomi: 'な (na)', vocabulary: [{ text: '名前', romaji: 'namae', desc: 'name' }] },
  { kanji: '円', meaning: 'Yen, circle', onyomi: 'えん (en)', kunyomi: 'まる(い) (maru(i))', vocabulary: [{ text: '円い', romaji: 'marui', desc: 'round' }] },
  { kanji: '半', meaning: 'Half', onyomi: 'はん (han)', kunyomi: 'なか(ば) (naka(ba))', vocabulary: [{ text: '半分', romaji: 'hanbun', desc: 'half' }] },
  { kanji: '全', meaning: 'All', onyomi: 'ぜん (zen)', kunyomi: 'まった(く), すべて (matta(ku), sube(te))', vocabulary: [{ text: '全然', romaji: 'zenzen', desc: 'completely, not at all' }, { text: '全く', romaji: 'mattaku', desc: 'really' }] },
  { kanji: '何', meaning: 'What', onyomi: 'か (ka)', kunyomi: 'なん, なに (nan, nani)', vocabulary: [{ text: '何', romaji: 'nani', desc: 'what' }, { text: '何日', romaji: 'nannichi', desc: 'what day' }] }
]

const natureDirectionsKanjis = [
  { kanji: '火', meaning: 'Fire', onyomi: 'か (ka)', kunyomi: 'ひ (hi)', vocabulary: [{ text: '火', romaji: 'hi', desc: 'fire' }, { text: '火曜日', romaji: 'kayoubi', desc: 'Tuesday' }] },
  { kanji: '水', meaning: 'Water', onyomi: 'すい (sui)', kunyomi: 'みず (mizu)', vocabulary: [{ text: '水', romaji: 'mizu', desc: 'water' }, { text: '水曜日', romaji: 'suiyoubi', desc: 'Wednesday' }] },
  { kanji: '木', meaning: 'Tree', onyomi: 'もく (moku)', kunyomi: 'き (ki)', vocabulary: [{ text: '木', romaji: 'ki', desc: 'tree' }, { text: '木曜日', romaji: 'mokuyoubi', desc: 'Thursday' }] },
  { kanji: '金', meaning: 'Money, gold', onyomi: 'きん (kin)', kunyomi: 'かね (kane)', vocabulary: [{ text: '金', romaji: 'kane', desc: 'money' }, { text: '金曜日', romaji: 'kinyoubi', desc: 'Friday' }] },
  { kanji: '土', meaning: 'Earth', onyomi: 'ど, と (do, to)', kunyomi: 'つち (tsuchi)', vocabulary: [{ text: '土地', romaji: 'tochi', desc: 'land' }, { text: '土曜日', romaji: 'doyoubi', desc: 'Saturday' }] },
  { kanji: '海', meaning: 'Sea', onyomi: 'かい (kai)', kunyomi: 'うみ (umi)', vocabulary: [{ text: '海', romaji: 'umi', desc: 'sea' }, { text: '海外', romaji: 'kaigai', desc: 'overseas' }] },
  { kanji: '川', meaning: 'River', onyomi: 'せん (sen)', kunyomi: 'かわ (kawa)', vocabulary: [{ text: '川', romaji: 'kawa', desc: 'river' }] },
  { kanji: '山', meaning: 'Mountain', onyomi: 'さん (san)', kunyomi: 'やま (yama)', vocabulary: [{ text: '山', romaji: 'yama', desc: 'mountain' }, { text: '富士山', romaji: 'fujisan', desc: 'Mt Fuji' }] },
  { kanji: '花', meaning: 'Flower', onyomi: 'か (ka)', kunyomi: 'はな (hana)', vocabulary: [{ text: '花火', romaji: 'hanabi', desc: 'fireworks' }, { text: '花粉症', romaji: 'kafunshou', desc: 'hay fever' }] },
  { kanji: '天', meaning: 'Heaven', onyomi: 'てん (ten)', kunyomi: 'あめ, あま (ame, ama)', vocabulary: [{ text: '天気', romaji: 'tenki', desc: 'weather' }] },
  { kanji: '空', meaning: 'Sky, empty', onyomi: 'くう (kuu)', kunyomi: 'そら, あける (sora, a(keru))', vocabulary: [{ text: '空', romaji: 'sora', desc: 'sky' }, { text: '空港', romaji: 'kuukou', desc: 'airport' }] },
  { kanji: '晴', meaning: 'Sunny', onyomi: 'せい (sei)', kunyomi: 'は(れ) (ha(re))', vocabulary: [{ text: '晴れ', romaji: 'hare', desc: 'sunny' }] },
  { kanji: '雨', meaning: 'Rain', onyomi: 'う (u)', kunyomi: 'あめ (ame)', vocabulary: [{ text: '雨', romaji: 'ame', desc: 'rain' }] },
  { kanji: '雪', meaning: 'Snow', onyomi: 'せつ (setsu)', kunyomi: 'ゆき (yuki)', vocabulary: [{ text: '雪', romaji: 'yuki', desc: 'snow' }] },
  { kanji: '雲', meaning: 'Cloud', onyomi: 'うん (un)', kunyomi: 'くも (kumo)', vocabulary: [{ text: '曇り', romaji: 'kumori', desc: 'cloudy' }] },
  { kanji: '風', meaning: 'Wind', onyomi: 'ふう (fuu)', kunyomi: 'かぜ (kaze)', vocabulary: [{ text: '風', romaji: 'kaze', desc: 'wind' }, { text: '台風', romaji: 'taifuu', desc: 'taiphoon' }] },
  { kanji: '電', meaning: 'Electricity', onyomi: 'でん (den)', kunyomi: '—', vocabulary: [{ text: '電気', romaji: 'denki', desc: 'electricity' }] },
  { kanji: '外', meaning: 'Outside', onyomi: 'がい (gai)', kunyomi: 'そと, はず(れる) (soto, hazu(reru))', vocabulary: [{ text: '外', romaji: 'soto', desc: 'outside' }, { text: '外国', romaji: 'gaikoku', desc: 'foreign country' }] },
  { kanji: '内', meaning: 'Inside', onyomi: 'ない (nai)', kunyomi: 'うち (uchi)', vocabulary: [{ text: '内', romaji: 'uchi', desc: 'inside' }, { text: '車内', romaji: 'shanai', desc: 'inside the car/train' }] },
  { kanji: '上', meaning: 'Above', onyomi: 'じょう (jou)', kunyomi: 'うえ, あ(げる) (ue, a(geru))', vocabulary: [{ text: '上', romaji: 'ue', desc: 'above' }, { text: '上手', romaji: 'jouzu', desc: 'good at' }] },
  { kanji: '下', meaning: 'Below', onyomi: 'か, げ (ka, ge)', kunyomi: 'した, く(だる) (shita, ku(daru))', vocabulary: [{ text: '下', romaji: 'shita', desc: 'below' }, { text: '下さい', romaji: 'kudasai', desc: 'please' }] },
  { kanji: '右', meaning: 'Right', onyomi: 'ゆう (yuu)', kunyomi: 'みぎ (migi)', vocabulary: [{ text: '右', romaji: 'migi', desc: 'right' }] },
  { kanji: '左', meaning: 'Left', onyomi: 'さ (sa)', kunyomi: 'ひだり (hidari)', vocabulary: [{ text: '左', romaji: 'hidari', desc: 'left' }] },
  { kanji: '中', meaning: 'Middle', onyomi: 'ちゅう, じゅう (chuu, juu)', kunyomi: 'なか (naka)', vocabulary: [{ text: '中', romaji: 'naka', desc: 'middle, in' }, { text: '中学校', romaji: 'chuugakkou', desc: 'junior high school' }] },
  { kanji: '北', meaning: 'North', onyomi: 'ほく (hoku)', kunyomi: 'きた (kita)', vocabulary: [{ text: '北', romaji: 'kita', desc: 'north' }] },
  { kanji: '西', meaning: 'West', onyomi: 'せい, さい (sei, sai)', kunyomi: 'にし (nishi)', vocabulary: [{ text: '西', romaji: 'nishi', desc: 'west' }] },
  { kanji: '東', meaning: 'East', onyomi: 'とう (tou)', kunyomi: 'ひがし (higashi)', vocabulary: [{ text: '東', romaji: 'higashi', desc: 'East' }, { text: '東京', romaji: 'toukyou', desc: 'Tokyo' }] },
  { kanji: '南', meaning: 'South', onyomi: 'なん (nan)', kunyomi: 'みなみ (minami)', vocabulary: [{ text: '南', romaji: 'minami', desc: 'south' }] }
]

const verbsKanjis = [
  { kanji: '見', meaning: 'See', onyomi: 'けん (ken)', kunyomi: 'み(る) (mi(ru))', vocabulary: [{ text: '見る', romaji: 'miru', desc: 'to see' }, { text: '見せる', romaji: 'miseru', desc: 'to show' }] },
  { kanji: '聞', meaning: 'Hear', onyomi: 'もん, ぶん (mon, bun)', kunyomi: 'き(く) (ki(ku))', vocabulary: [{ text: '聞く', romaji: 'kiku', desc: 'to listen, to hear' }] },
  { kanji: '書', meaning: 'Write', onyomi: 'しょ (jo)', kunyomi: 'か(く) (ka(ku))', vocabulary: [{ text: '書く', romaji: 'kaku', desc: 'to write' }, { text: '辞書', romaji: 'jisho', desc: 'dictionary' }] },
  { kanji: '言', meaning: 'Say', onyomi: 'げん (gen)', kunyomi: 'い(う) (i(u))', vocabulary: [{ text: '言う', romaji: 'iu', desc: 'to say' }] },
  { kanji: '話', meaning: 'Talk', onyomi: 'わ (wa)', kunyomi: 'はなし, はな(す) (hanashi, hana(su))', vocabulary: [{ text: '話す', romaji: 'hanasu', desc: 'to talk' }, { text: '電話', romaji: 'denwa', desc: 'telephone' }] },
  { kanji: '読', meaning: 'Read', onyomi: 'どく (doku)', kunyomi: 'よ(む) (yo(mu))', vocabulary: [{ text: '読む', romaji: 'yomu', desc: 'to read' }] },
  { kanji: '行', meaning: 'Go', onyomi: 'こう (kou)', kunyomi: 'い(く), おこな(う) (i(ku), okona(u))', vocabulary: [{ text: '行く', romaji: 'iku', desc: 'to go' }, { text: '銀行', romaji: 'ginkou', desc: 'bank' }] },
  { kanji: '買', meaning: 'Buy', onyomi: 'ばい (bai)', kunyomi: 'か(う) (ka(u))', vocabulary: [{ text: '買う', romaji: 'kau', desc: 'to buy' }, { text: '買い物', romaji: 'kaimono', desc: 'shopping' }] },
  { kanji: '出', meaning: 'Exit', onyomi: 'しゅつ (shuu)', kunyomi: 'で(る), だ(す) (de(ru), da(su))', vocabulary: [{ text: '出る', romaji: 'deru', desc: 'to exit' }, { text: '出口', romaji: 'deguchi', desc: 'exit' }] },
  { kanji: '入', meaning: 'Enter, put in', onyomi: 'にゅう (nyuu)', kunyomi: 'はい(る), い(れる) (hai(ru), i(reru))', vocabulary: [{ text: '入る', romaji: 'hairu', desc: 'to enter' }, { text: '立ち入り禁止', romaji: 'tachiiri kinshi', desc: 'no entry' }] },
  { kanji: '食', meaning: 'Eat', onyomi: 'しょく (shoku)', kunyomi: 'た(べる) (ta(beru))', vocabulary: [{ text: '食べる', romaji: 'taberu', desc: 'to eat' }, { text: '食事', romaji: 'shokuji', desc: 'meal' }] },
  { kanji: '飲', meaning: 'Drink', onyomi: 'いん (in)', kunyomi: 'の(む) (no(mu))', vocabulary: [{ text: '飲む', romaji: 'nomu', desc: 'to drink' }, { text: '飲み物', romaji: 'nomimono', desc: 'beverage' }] },
  { kanji: '休', meaning: 'Rest', onyomi: 'きゅう (kyuu)', kunyomi: 'やす(む), やす(み) (yasu(mu), yasu(mi))', vocabulary: [{ text: '休む', romaji: 'yasumu', desc: 'to rest' }, { text: '休日', romaji: 'kyuujitsu', desc: 'holiday' }] },
  { kanji: '会', meaning: 'Meet', onyomi: 'かい (kai)', kunyomi: 'あ(う) (a(u))', vocabulary: [{ text: '会う', romaji: 'au', desc: 'to meet' }, { text: '会社', romaji: 'kaisha', desc: 'company' }] },
]

const adjectivesKanjis = [
  { kanji: '多', meaning: 'A lot', onyomi: 'た (ta)', kunyomi: 'おお(い) (oo(i))', vocabulary: [{ text: '多い', romaji: 'ooi', desc: 'many' }, { text: '多分', romaji: 'tabun', desc: 'probably' }] },
  { kanji: '少', meaning: 'A little', onyomi: 'しょう (shou)', kunyomi: 'すこ(し), すく(ない) (suko(shi), suku(nai))', vocabulary: [{ text: '少し', romaji: 'sukoshi', desc: 'a little' }] },
  { kanji: '古', meaning: 'Old', onyomi: 'こ (ko)', kunyomi: 'ふる(い) (furu(i))', vocabulary: [{ text: '古い', romaji: 'furui', desc: 'old' }] },
  { kanji: '新', meaning: 'New', onyomi: 'しん (shin)', kunyomi: 'あたら(しい) (atara(shii))', vocabulary: [{ text: '新しい', romaji: 'atarashii', desc: 'new' }, { text: '新聞', romaji: 'shinbun', desc: 'newspaper' }] },
  { kanji: '大', meaning: 'Big', onyomi: 'だい, たい (dai, tai)', kunyomi: 'おお(きい) (oo(kii))', vocabulary: [{ text: '大きい', romaji: 'ookii', desc: 'big' }, { text: '大変', romaji: 'taihen', desc: 'very, terribly' }] },
  { kanji: '小', meaning: 'Small', onyomi: 'しょう (shou)', kunyomi: 'ちい(さい)、こ (chii(sai), ko)', vocabulary: [{ text: '小さい', romaji: 'chiisai', desc: 'small' }] },
  { kanji: '長', meaning: 'Long, leader', onyomi: 'ちょう (chou)', kunyomi: 'なが(い) (naga(i))', vocabulary: [{ text: '長い', romaji: 'nagai', desc: 'long' }, { text: '部長', romaji: 'buchou', desc: 'manager' }] },
  { kanji: '短', meaning: 'Short', onyomi: 'たん (tan)', kunyomi: 'みじか(い) (mijika(i))', vocabulary: [{ text: '短い', romaji: 'mijikai', desc: 'short' }] },
  { kanji: '遠', meaning: 'Far', onyomi: 'えん (en)', kunyomi: 'とお(い) (too(i))', vocabulary: [{ text: '遠い', romaji: 'tooi', desc: 'far' }] },
  { kanji: '近', meaning: 'Near', onyomi: 'きん, こん (kin, kon)', kunyomi: 'ちか(い) (chika(i))', vocabulary: [{ text: '近い', romaji: 'chikai', desc: 'close' }, { text: '近く', romaji: 'chikaku', desc: 'near' }] },
  { kanji: '白', meaning: 'White', onyomi: 'はく (haku)', kunyomi: 'しろ, しろ(い) (shiro, shiro(i))', vocabulary: [{ text: '白い', romaji: 'shiroi', desc: 'white' }, { text: '面白い', romaji: 'omoshiroi', desc: 'interesting' }] },
  { kanji: '黒', meaning: 'Black', onyomi: 'こく (koku)', kunyomi: 'くろ、くろ(い) (kuro, kuro(i))', vocabulary: [{ text: '黒', romaji: 'kuro', desc: 'black' }, { text: '真っ黒', romaji: 'makkuro', desc: 'pitch black' }] },
  { kanji: '高', meaning: 'Expensive, high', onyomi: 'こう (kou)', kunyomi: 'たか(い) (taka(i))', vocabulary: [{ text: '高い', romaji: 'takai', desc: 'expensive, tall' }] },
  { kanji: '安', meaning: 'Cheap, safety', onyomi: 'あん (an)', kunyomi: 'やす(い) (yasu(i))', vocabulary: [{ text: '安い', romaji: 'yasui', desc: 'cheap' }, { text: '安心', romaji: 'anshin', desc: 'relief' }] },
]

export default function KanjiRootPage() {
  return (
    <div className="w-full max-w-5xl mx-auto pb-16 animate-in fade-in duration-500 pt-8 px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#202c5c] mb-3 font-serif">Kanji <span className="font-jp ml-2 opacity-80">漢字</span></h1>
        <div className="w-16 h-1 bg-[#1aa379] mx-auto rounded-full mb-4"></div>
        <p className="text-[#59668d] text-sm font-medium">Master the essential logographic characters.</p>
      </div>

      {/* Numbers Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#e6f4f0] text-[#1aa379] flex items-center justify-center text-xl font-bold font-jp">
            一
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">Numbers</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbf9] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {numberKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fbfdfc] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fafcfb] group-hover:bg-[#f6fbf9] transition-colors">
                       <span className="text-4xl font-medium font-jp text-[#1aa379]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <div className="flex flex-col gap-3">
                         {item.vocabulary.map((vocab, vIndex) => (
                           <div key={vIndex} className="flex flex-wrap items-center gap-2">
                             <span className="bg-[#e6f4f0] text-[#1aa379] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                               {vocab.text}
                             </span>
                             <div className="flex flex-col ml-1">
                               <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                               <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Time Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#e6f4f0] text-[#1aa379] flex items-center justify-center text-xl font-bold font-jp">
            時
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">Time</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbf9] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {timeKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fbfdfc] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fafcfb] group-hover:bg-[#f6fbf9] transition-colors">
                       <span className="text-4xl font-medium font-jp text-[#1aa379]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <div className="flex flex-col gap-3">
                         {item.vocabulary.map((vocab, vIndex) => (
                           <div key={vIndex} className="flex flex-wrap items-center gap-2">
                             <span className="bg-[#e6f4f0] text-[#1aa379] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                               {vocab.text}
                             </span>
                             <div className="flex flex-col ml-1">
                               <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                               <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* People, Places, & Things Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#e6f4f0] text-[#1aa379] flex items-center justify-center text-xl font-bold font-jp">
            人
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">People, Places, & Things</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbf9] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {peoplePlacesThingsKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fbfdfc] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fafcfb] group-hover:bg-[#f6fbf9] transition-colors">
                       <span className="text-4xl font-medium font-jp text-[#1aa379]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <div className="flex flex-col gap-3">
                         {item.vocabulary.map((vocab, vIndex) => (
                           <div key={vIndex} className="flex flex-wrap items-center gap-2">
                             <span className="bg-[#e6f4f0] text-[#1aa379] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                               {vocab.text}
                             </span>
                             <div className="flex flex-col ml-1">
                               <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                               <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Nature & Directions Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#e6f4f0] text-[#1aa379] flex items-center justify-center text-xl font-bold font-jp">
            火
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">Nature & Directions</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbf9] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {natureDirectionsKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fbfdfc] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fafcfb] group-hover:bg-[#f6fbf9] transition-colors">
                       <span className="text-4xl font-medium font-jp text-[#1aa379]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <div className="flex flex-col gap-3">
                         {item.vocabulary.map((vocab, vIndex) => (
                           <div key={vIndex} className="flex flex-wrap items-center gap-2">
                             <span className="bg-[#e6f4f0] text-[#1aa379] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                               {vocab.text}
                             </span>
                             <div className="flex flex-col ml-1">
                               <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                               <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Verbs Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#e6f4f0] text-[#1aa379] flex items-center justify-center text-xl font-bold font-jp">
            見
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">Verbs</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbf9] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {verbsKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fbfdfc] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fafcfb] group-hover:bg-[#f6fbf9] transition-colors">
                       <span className="text-4xl font-medium font-jp text-[#1aa379]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                       <div className="flex flex-col gap-3">
                         {item.vocabulary.map((vocab, vIndex) => (
                           <div key={vIndex} className="flex flex-wrap items-center gap-2">
                             <span className="bg-[#e6f4f0] text-[#1aa379] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                               {vocab.text}
                             </span>
                             <div className="flex flex-col ml-1">
                               <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                               <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Adjectives Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#fff3ec] text-[#d95d41] flex items-center justify-center text-xl font-bold font-jp">
            新
          </div>
          <h2 className="text-2xl font-bold text-[#202c5c]">Adjectives</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#fcfae8] border-b border-gray-100/80">
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-25">Kanji</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest w-35">Meaning</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Onyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Kunyomi</th>
                  <th className="py-5 px-6 font-bold text-[#848fa5] text-[11px] uppercase tracking-widest">Vocabulary Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {adjectivesKanjis.map((item, index) => (
                  <tr key={index} className="hover:bg-[#fefdc4] transition-colors group">
                    <td className="py-5 px-6 border-r border-gray-50 bg-[#fdfbe9] group-hover:bg-[#fefce1] transition-colors">
                      <span className="text-4xl font-medium font-jp text-[#d9ac41]">{item.kanji}</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-bold text-[#202c5c]">{item.meaning}</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-sm font-jp text-[#59668d]">{item.onyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-sm font-jp text-[#59668d]">{item.kunyomi}</span>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex flex-col gap-3">
                        {item.vocabulary.map((vocab, vIndex) => (
                          <div key={vIndex} className="flex flex-wrap items-center gap-2">
                            <span className="bg-[#fef6c4] text-[#d9ac41] font-bold font-jp px-3 py-1 text-sm rounded-md shadow-sm">
                              {vocab.text}
                            </span>
                            <div className="flex flex-col ml-1">
                              <span className="text-xs font-semibold text-[#59668d]">{vocab.romaji}</span>
                              <span className="text-[10px] text-gray-400 capitalize">{vocab.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
