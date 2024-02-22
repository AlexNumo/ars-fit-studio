import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from '../Redux/userSlice';
import {
  serverAPI,
  tgSandra
} from './api';

export const OnLogin = async (tel, password) => {
  try {
    const res = await serverAPI.post(`/user/login`, { tel, password });
    // console.log(res.data);
    const name = res.data.name;
    toast.success(`${name}, Ви успішно увійшли`);
    return res;
  } catch (e) {
    console.log("Error: ", e);

    if (e.response && e.response.data && e.response.data.message) {
      toast.error(e.response.data.message);
    } else {
      toast.error("Щось пішло не так");
    }
  }
};

export const OnAuth = async (token) => {
  // console.log(token)
  try {
    const res = await serverAPI.post(`/user/auth`, {token});
    // console.log(res.data);
    // const name = res.data.name;
    // toast.success(`${name}, Ви успішно увійшли`);
    return res;
  } catch (e) {
    console.log("Error: ", e);
    toast.error("Щось пішло не так");
  }
};

export const OnRegistration = async (name, birthday, tel, password) => {
  try {

    const res = await serverAPI.post(`/user/registration`, { name, birthday, tel, password });
    toast.success(`${name}, Ви успішно зареєструвалися`);
    
    return res.data;
  } catch (e) {
    console.log("Error: ", e);

    if (e.response && e.response.data && e.response.data.message) {
      toast.error(e.response.data.message);
    } else {
      toast.error("Щось пішло не так");
    }
  }
};

export const OnUpgradeUser = async (updatedUser) => {
  try {
    const result = await serverAPI.post(`/user/upgrade`, updatedUser);
    toast.success("Зміни внесено успішно");
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnUpgradeUserPassword = async (updatedUser) => {
  // console.log(updatedUser)
  try {
    const result = await serverAPI.post(`/user/upgrade/password`, updatedUser);
    // if (result.status === 201) {
    toast.success("Зміни внесено успішно");
    // }
    console.log(result)
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetAllSeasonTickets = async () => {
  try {
    const result = await serverAPI.get(`/seasonTickets`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnBuySeasonTicket = async (userData) => {
  // console.log(userData);
  try {
    const result = await serverAPI.post(`/seasonTickets`, userData);
    // console.log(result.data);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnSendTgBuySeasonTicket = async (userData) => {
  // console.log(userData);
  try {
    const urlInsta = `https://www.instagram.com/${userData.user.instagram}/`;
    let seasonTicketKind = '';
    if (userData.seasonTicket.kind === 'group') {
      seasonTicketKind = 'групових';
    }
    if (userData.seasonTicket.kind === 'personal') {
      seasonTicketKind = 'персональних';
    }

    const phoneNumber = userData.user.tel.replace(/\D/g, ''); // Видаляємо всі символи, окрім цифр
    const nationalPhoneNumber = phoneNumber.startsWith('38') ? phoneNumber.slice(2) : phoneNumber; // Обрізаємо +38, якщо він присутній

    const res = await tgSandra.get(`Клієнт ${userData.user.name} ${userData.user.surname} бажає придбати абонемент на ${userData.seasonTicket.name} для ${seasonTicketKind} занять вартістю ${userData.seasonTicket.price} грн. Номер телефону клієнта: ${nationalPhoneNumber}, instagram: ${urlInsta}`);

    return res;
  } catch (error) {
    toast.error('Щось пішло не так');
    console.log(error.message)
  }
};


export const OnRecordTraining = async (userData) => {
  // console.log(userData)
  try {
    const res = await serverAPI.post(`/user/signUpTraining`, userData);
    // console.log(res)
    if (res.data.messages.error && res.data.messages.error === 'Кількість тренувань по абонементу закінчилася. Ви записані як на разове заняття') {
        toast.warning(`${res.data.messages.error}`);
      return res;
    } else if (res.data.messages.error === 'Повторний запис на тренування') {
        toast.error('Повторний запис на тренування');
    } else if (res.data.messages.warning === 'Ви не маєте абонементу. Запис на тренування без абонементу') {
      toast.info('Ви не маєте абонементу. Запис на тренування без абонементу');
      return res;
    } else {
        toast.success('Ви успішно записалися на тренування');
      return res;
    }
  } catch (e) {
    toast.error('Щось пішло не так');
    console.log(e);
  }
};

export const OnGetCoachTrainings = async (coachLabel, date) => {
  // console.log(coachLabel);
  try {
    const result = await serverAPI.post(`/user/coach`, {coachLabel, date});
    // console.log(coachLabel);
    // console.log("result.data: ", result.data);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};
// OnSendVisitTraining
export const OnSendVisitTraining = async (trainingInfo) => {
  console.log(trainingInfo);
  try {
    const result = await serverAPI.post(`/user/coach/visit`, trainingInfo);
    // console.log(result);
    if (result.data.message.error) {
      toast.info(result.data.message.error);
    }
    // console.log(result);
    return result.data.message.error;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetCoaches = async () => {
  try {
    const result = await serverAPI.get(`/user/coach`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetCoachSalary = async (coachInfo) => {
  try {
    const result = await serverAPI.put(`/user/coach/salary`, coachInfo);
    // console.log(result.data); 
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetAllUsers = async () => {
  try {
    const result = await serverAPI.get(`/user/all`);
    // console.log(result.data); 
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetSeasonTicketsNotConfirm = async () => {
  try {
    const result = await serverAPI.get(`/user/seasonTicketsConfirm`);
    // console.log(result.data); 
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnSeasonTicketConfirm = async (idSeasonTicket, idUser, selectedDateValue) => {
  try {
    const result = await serverAPI.post(`/user/seasonTicketsConfirm`, { idSeasonTicket, idUser, selectedDateValue });
    if (result.data.error === 'Абонемент вже було підтверджено') {
     return toast.error(`${result.data.error}`);
    }
    toast.success(`${result.data}`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const OnGetCoachTrainingsPeriod = async (coachInfo) => {
  try {
    const result = await serverAPI.put(`/user/coach/trainings`, coachInfo);
    // console.log("result.data: ", result.data); 
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};


// export const getData = async ({id}) => {
//   try {
//     const result = await serverAPI.put(`/api`, { id });
//     return result;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getDataALL = async () => {
//   try {
//     const result = await serverAPI.get(`/api`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const addTrainee = async ({ name_Coach, info }) => {
//   try {
//     const res = await serverAPI.post(`/trainee`, { name_Coach, info });
//     toast.success('Зміни відправлено');
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };

// export const findTrainee = async ({name_Coach}) => {
//   try {
//     const result = await serverAPI.put(`/trainee`, { name_Coach });
//     console.log(result);
//     return result;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getAllTrainee = async () => {
//   try {
//     const result = await serverAPI.get(`/trainee`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getAllCoach = async () => {
//   try {
//     const result = await serverAPI.get(`/coach`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const addCoach = async ({ name_Coach, tel, instagram, trainings }) => {
//   try {
//     const res = await serverAPI.post(`/coach`, { name_Coach, tel, instagram, trainings });
//     toast.success('Нового тренера додано');
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };

// export const deleteCoach = async (name_Coach) => {
//   try {
//     console.log(name_Coach);
//     const result = await serverAPI.put(`/coach`, { name_Coach });
//     toast.success('Тренера видалено');
//     return console.log(result);
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getAllClient = async () => {
//   try {
//     const result = await serverAPI.get(`/client`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const addClient = async ({ name_client, tel }) => {
//   try {
//     const res = await serverAPI.post(`/client`, { name_client, tel });
//     toast.success('Нового тренера додано');
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };

// export const deleteClient = async ({name_client}) => {
//   try {
//     const result = await serverAPI.put(`/client`, { name_client });
//     return result;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const sendNewKindTrainee = async ({ id, value, label }) => {
//   try {
//     const res = await serverAPI.post(`/kindtrainee`, { id, value, label });
//     toast.success('Зміни відправлено');
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };

// export const deleteKindTrainee = async ({id}) => {
//   try {
//     const result = await serverAPI.put(`/kindtrainee`, { id });
//     return result;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getKindTraineeAll = async () => {
//   try {
//     const result = await serverAPI.get(`/kindtrainee`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const sendDataUsers = async ({ id, info }) => {
//   try {
//     const res = await serverAPI.post(`/tgbot`, { id, info });
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };

// export const canceledTraining = async (id, status) => {
//   try {
//     if (status.status === false) {
//       const res = await serverAPI.put(`/tgbot/visit`, { id, status });
//       toast.success(`Скасовано заняття для клієнта "${res.data.info[0].name}"`)
//     return res;
//     }   
//   } catch (e) {
//     toast.error('Щось пішло не так');
//     console.error(e.message);
//   }
// };

// export const sendSeasonTicketVisitTrainee = async (id) => {
//   try {
//     const res = await serverAPI.put(`/tgbot/changeSeasonTicket`, id);
//     toast.success(`Підтвердженео заняття для клієнта "${res.data.info[0].name}"`);
//     return res;
//   } catch (e) {
//     toast.error('Щось пішло не так');
//     console.error(e.message);
//   }
// };

// export const sendVisitTrainingInfoSeasonTickets = async (data) => {
//   try {
//     // console.log(data)
//     const res = await serverAPI.put(`/tgbot/changeSeasonTicket/infoTrainings`, data);
//     return res;
//   } catch (e) {
//     toast.error('Щось пішло не так');
//     console.error(e.message);
//   }
// };

// export const deleteDataUsers = async (id) => {
//   try {
//     const result = await serverAPI.put(`/tgbot`, id);
//     return result;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const getDataALLUsers = async () => {
//   try {
//     const result = await serverAPI.get(`/tgbot`);
//     return result.data;
//   } catch (error) {
//     toast.error('Упс, щось пішло не так');
//     console.error(error.message);
//   }
// };

// export const sendSeasonTicket = async (data) => {
//     try {
//       const result = await serverAPI.put(`/tgbot/seasonTicket`, data);
//       return result.data;
//     } catch (error) {
//       toast.error('Упс, щось пішло не так');
//       console.error(error.message);
//     }
//   };

// const sendTgRecord = async ({id, day_translate, clientName, kind_trainee, time, date, instaNickName}) => {
//   try {
//     const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
//     const res = await tgSandra.post(`Записався клієнт ${clientName} на тренування ${kind_trainee} в ${day_translate} о ${time}. Номер телефону клієнта ${id}, дата тренування: ${date}, Instagram: ${urlInsta}`,);
//     return res;
//   } catch (e) {
//       toast.error('Щось пішло не так');
//   }
// };
export const clientAPI = {
  OnLogin,
  OnAuth,
  OnRegistration,
  OnUpgradeUser,
  OnUpgradeUserPassword,
  OnGetAllSeasonTickets,
  OnSendTgBuySeasonTicket,
  OnBuySeasonTicket,
  OnRecordTraining,
  OnGetCoachTrainings,
  OnSendVisitTraining,
  OnGetCoaches,
  OnGetCoachSalary,
  OnGetAllUsers,
  OnGetSeasonTicketsNotConfirm,
  OnSeasonTicketConfirm,
  OnGetCoachTrainingsPeriod,
  // sendData,
  // getData,
  // getDataALL,
  // addTrainee,
  // findTrainee,
  // getAllTrainee,
  // addCoach,
  // deleteCoach,
  // getAllCoach,
  // getAllClient,
  // addClient,
  // sendNewKindTrainee,
  // deleteKindTrainee,
  // getKindTraineeAll,
  // sendDataUsers,
  // sendSeasonTicketVisitTrainee,
  // sendVisitTrainingInfoSeasonTickets,
  // deleteDataUsers,
  // getDataALLUsers,
  // sendSeasonTicket,
  // canceledTraining,
  // sendTgRecord
};