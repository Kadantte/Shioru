<div align="center">
  <img src="https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/icons/favicon-circle.png" width="100" />
  <h1>
    <strong>शिओरू</strong>
  </h1>
  <img src="https://img.shields.io/badge/discord.js-v14-7354F6?logo=discord&logoColor=white" />
  <img src="https://img.shields.io/github/stars/Maseshi/Shioru.svg?logo=github" />
  <img src="https://img.shields.io/github/v/release/Maseshi/Shioru">
  <img src="https://img.shields.io/github/license/Maseshi/Shioru.svg?logo=github" />
  <img src="https://img.shields.io/github/last-commit/Maseshi/Shioru">
  <a title="दर्जा" target="_blank" href="https://shioru.statuspage.io/">
    <img src="https://img.shields.io/badge/dynamic/json?logo=google-cloud&logoColor=white&label=status&query=status.indicator&url=https%3A%2F%2Fq60yrzp0cbgg.statuspage.io%2Fapi%2Fv2%2Fstatus.json" />
  </a>
  <a title="भीड़" target="_blank" href="https://crowdin.com/project/shioru-bot">
    <img src="https://badges.crowdin.net/shioru-bot/localized.svg">
  </a>
  <a title="कोडफैक्टर" target="_blank" href="https://www.codefactor.io/repository/github/maseshi/shioru">
    <img src="https://www.codefactor.io/repository/github/maseshi/shioru/badge" alt="कोडफैक्टर" />
  </a>
  <a title="टॉप.जी" target="_blank" href="https://top.gg/bot/704706906505347183">
    <img src="https://top.gg/api/widget/upvotes/704706906505347183.svg">
  </a>
</div>

[एन](https://github.com/Maseshi/Shioru/blob/main/documents/README.en.md) | [वें](https://github.com/Maseshi/Shioru/blob/main/documents/README.th.md) | [जेए](https://github.com/Maseshi/Shioru/blob/main/documents/README.ja.md)

आपका अच्छा सर्वर सहायक आपके सर्वर को अधिक जीवंत दिखने में मदद करेगा। वह बहुत कुछ कर सकती है जिसके लिए आप `/help` टाइप करके विभिन्न कमांड की विस्तृत जानकारी प्राप्त कर सकते हैं।आप शिओरू को[यहाँ](https://discord.com/api/oauth2/authorize?client_id=704706906505347183&permissions=8&scope=applications.commands%20bot&redirect_uri=https%3A%2F%2Fshiorus.web.app%2Fthanks-you)

## विशेषताएँ

- [Discord.js](https://discord.js.org/) v14 पर काम करता है।
- वांछित वस्तुओं की एक किस्म को अनुकूलित करने में सक्षम
- स्वचालित प्लेबैक के साथ [YouTube](https://www.youtube.com/), [Spotify](https://www.spotify.com/) और [SoundCloud](https://soundcloud.com/) से संगीत चलाया जा सकता है।
- कई भाषाओं का समर्थन करें आप इस रिपॉजिटरी की[भाषा फाइल](https://github.com/Maseshi/shioru/blob/main/source/languages)में समर्थित भाषाओं की जांच कर सकते हैं।
- टियर सिस्टम (स्तर और अनुभव)
- सर्वर अधिसूचना अनुकूलन के लिए समर्थन
- आप जिस संदेश से संवाद करना चाहते हैं उसके बाद `@Shioru` टाइप करके बात कर सकते हैं।
- एप्लिकेशन कमांड (/) का उपयोग किया जा सकता है।

और कई अन्य रोचक विशेषताएं...

## अनुवाद में सुधार करें

आप किसी मौजूदा भाषा या ऐसी भाषा का अनुवाद करने में हमारी मदद कर सकते हैं जो वर्तमान में [Crowdin](https://crowdin.com/project/shioru-bot)पर उपलब्ध नहीं है।

## आवश्यक शर्तें

- [Node.js](https://nodejs.org/) v18.0.0 या अधिक
- [फायरबेस](https://firebase.google.com/) v9.0.0 या अधिक
- [गिट](https://git-scm.com/downloads)

## त्वरित सेटअप गाइड

### शुरू हो जाओ

- [डिसॉर्डर डेवलपर पोर्टल](https://discord.com/developers/applications)पर जाएं
- **"नया एप्लिकेशन"** पर क्लिक करें और अपने बॉट को नाम दें और डिस्कॉर्ड नीति नियमों को स्वीकार करें।
- पेज **"बॉट"** पर जाएं और सेक्शन **प्रिविलेज्ड गेटवे इंटेंट** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- पेज **OAuth2 > URL जेनरेटर** सेलेक्ट `बॉट` और `एप्लिकेशन पर जाकर अपने बॉट को सर्वर पर आमंत्रित करें। कमांड` सिलेक्ट `एडमिनिस्ट्रेटर` फिर लिंक को कॉपी करें और इसे अपने ब्राउज़र के एड्रेस में पेस्ट करें। ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### एक बॉट सेट करें

- एक टर्मिनल लॉन्च करें और निम्न कमांड चलाएँ।

```bash
git क्लोन https://github.com/Maseshi/Shioru.git
cd Shioru
npm install --save
```

- आप **कॉन्फ़िगरेशन** में `./source/config.js`में कुछ डेटा संशोधित कर सकते हैं

### फायरबेस सेट करें

- https://firebase.google.com/ पर जाएं और प्रोजेक्ट सेट करना शुरू करें।
- एक नई परियोजना जोड़ें और चरणों का पालन करें।
- **वेबसाइट के साथ अपना पहला एप्लिकेशन जोड़ें** वैकल्पिक रूप से अपने ऐप को नाम दें **"इस ऐप के लिए फायरबेस होस्टिंग भी सेट करें"** और ऐप को पंजीकृत करें। ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- फायरबेस आपको कॉन्फ़िगरेशन के बारे में जानकारी प्रदान करेगा। इन मानों को फ़ाइल `.env.example`पर लागू करें
- स्टोरेज डेटाबेस बनाने के लिए **पर जाएं > [रीयलटाइम डेटाबेस](https://console.firebase.google.com/u/0/project/_/database/data)** बनाएं।

### विकास करना

- फ़ाइल `.env.example` से `.env` का नाम बदलें और सभी आवश्यक मान डालें।
- ไปที่เทอร์มินัลแล้วรันคำสั่ง `npm run dev` สำหรับการพัฒนาและ `npm start` สำหรับการใช้งานจริง > **หมายเหตุ**: เมื่ออยู่ในโหมดพัฒนา คุณสมบัตบางอย่างอาจไม่ทำงาน

## त्वरित समस्या निवारण

- यदि आप पैकेज **सोडियम** स्थापित नहीं कर सकते हैं, तो इसके बजाय **लिबसोडियम-रैपर** स्थापित करें।
```bat
एनपीएम अनइंस्टॉल सोडियम
एनपीएम इंस्टॉल करें libsodium-wrappers@latest --save
```
- यदि आप अपना संगीत नहीं चला सकते हैं या संगीत प्लेबैक आदेश काम नहीं करते हैं, तो [ffmpeg](https://ffmpeg.org/download.html) **(अनुशंसित)** स्थापित करें या **ffmpeg-स्थैतिक** पैकेज स्थापित करें और पुनः प्रयास करें।
```bat
npm ffmpeg-स्थिर @ नवीनतम स्थापित करें --save
```

## श्रेय

अपने इन अद्भुत कार्यों के उपयोग की अनुमति देने के लिए सभी मूल रचनाकारों को धन्यवाद।

अवतार आरेखण द्वारा: [夏月 まりな (NATSUKI MARINA)](https://www.pixiv.net/en/users/482462)/[お着替え中](https://www.pixiv.net/en/artworks/76075098)

## एक समस्या मिली

यदि आपको कोई समस्या आती है आपके वर्तमान कार्य से आप हमें इस रिपॉजिटरी के [अंक](https://github.com/Maseshi/Shioru/issues) टैब के माध्यम से बता सकते हैं।