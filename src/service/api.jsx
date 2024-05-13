import axios from 'axios';
// https://sandra-back-end.herokuapp.com http://localhost:8080 https://sandra-back-render.onrender.com

const serverAPI = axios.create({
  // baseURL: 'https://sandra-back-render.onrender.com/',
  // baseURL: 'https://sandra-base.herokuapp.com/',
  baseURL: 'https://ars-fit-studio-server-97360ba5d151.herokuapp.com/',
  // baseURL: 'https://ars-fit-studio-server.onrender.com',


  // baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const tgSandra = axios.create({
  // 163995726 - sandra
  // 525427019 - alexnumo
  // baseURL: 'https://sandra-back-render.onrender.com/',
  baseURL: 'https://api.telegram.org/bot5673512453:AAH-Ac0g-PMN8FwXj16kLg8OiXl99PYJYi8/sendMessage?chat_id=525427019&text=',
  // baseURL: 'https://api.telegram.org/bot"ключ_бота"/sendMessage?chat_id="мій_чат"&text=',
  // baseURL: 'https://api.telegram.org/bot6096389512:AAGJpKndAcXG8jCZ1bqSXpEVNJSrcHkwv3I/sendMessage?chat_id=525427019&text=',
  // baseURL: 'https://api.telegram.org/bot6096389512:AAGJpKndAcXG8jCZ1bqSXpEVNJSrcHkwv3I/sendMessage?chat_id=163995726&text=',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  serverAPI,
  tgSandra
};
