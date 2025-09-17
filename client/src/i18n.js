// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Define your translation resources
const resources = {
  en: {
    translation: {
      "home_p1": "A Home Service Provider",
      "home_h1": "Welcome to GigSwap",
      "home_p2": "Need reliable home services? GigSwap brings the best local professionals—cleaning, repairs, gardening, and more—right to your doorstep. Our carefully vetted providers ensure quality, convenience, and peace of mind every time.",
      "book_now": "book now",
      "services": "services",
      "help_p1": "We are here to help you",
      "help_h1": "Get Started Today",
      "help_p2": "Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Thapa Technical can help your business thrive in the digital age."
    }
  },
  hi: {
    translation: {
      "home_p1": "एक होम सर्विस प्रोवाइडर",
      "home_h1": "GigSwap में आपका स्वागत है",
      "home_p2": "क्या आपको विश्वसनीय होम सेवाओं की आवश्यकता है? GigSwap सबसे अच्छे स्थानीय पेशेवरों—सफाई, मरम्मत, बागवानी, और बहुत कुछ—को सीधे आपके दरवाजे पर लाता है। हमारे सावधानीपूर्वक जांचे गए प्रदाता हर बार गुणवत्ता, सुविधा और मन की शांति सुनिश्चित करते हैं।",
      "book_now": "अभी बुक करें",
      "services": "सेवाएं",
      "help_p1": "हम आपकी मदद के लिए यहां हैं",
      "help_h1": "आज ही शुरू करें",
      "help_p2": "एक अधिक कुशल और सुरक्षित आईटी बुनियादी ढांचे की दिशा में पहला कदम उठाने के लिए तैयार हैं? आज ही एक निःशुल्क परामर्श के लिए हमसे संपर्क करें और आइए चर्चा करें कि Thapa Technical आपके व्यवसाय को डिजिटल युग में कैसे मदद कर सकता है।"
    }
  },
  mr: {
    translation: {
      "home_p1": "एक गृह सेवा प्रदाता",
      "home_h1": "GigSwap मध्ये आपले स्वागत आहे",
      "home_p2": "विश्वसनीय गृह सेवांची गरज आहे? GigSwap तुमच्या दारापर्यंत सर्वोत्तम स्थानिक व्यावसायिक—स्वच्छता, दुरुस्ती, बागकाम आणि बरेच काही—घेऊन येतो. आमचे काळजीपूर्वक तपासणी केलेले प्रदाते प्रत्येक वेळी गुणवत्ता, सोय आणि मनःशांती सुनिश्चित करतात.",
      "book_now": "आता बुक करा",
      "services": "सेवा",
      "help_p1": "आम्ही तुम्हाला मदत करण्यासाठी येथे आहोत",
      "help_h1": "आजच सुरुवात करा",
      "help_p2": "अधिक कार्यक्षम आणि सुरक्षित आयटी पायाभूत सुविधांकडे पहिले पाऊल उचलण्यासाठी तयार आहात? आजच विनामूल्य सल्लामसलतसाठी आमच्याशी संपर्क साधा आणि तुमच्या व्यवसायाला डिजिटल युगात भरभराट होण्यास Thapa Technical कशी मदत करू शकते, याबद्दल चर्चा करूया."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language if no other language is detected
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;