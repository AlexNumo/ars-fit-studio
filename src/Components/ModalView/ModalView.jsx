import React, { useEffect } from 'react';
import {
  WrapperModal,
  ModalOverlay,
  Modal,
  ModalHeader,
  CloseBTN,
  WrapperBTN,
  OKbutton,
  NonButton,
  InputStyle,
  SelectTrainings,
  // SelectTrainingsComponent,
  WrapperCoachTrainings
} from './ModalView.styled';
import { MdOutlineDone } from "react-icons/md";
import { FaAngleDown, FaAngleUp  } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { clientAPI } from '../../service/axios.users';
import { scheduleAPI } from '../../service/axios.schedule';
import { kindTrainingsAPI } from "../../service/axios.kindTrainings";
import 'react-select-search/style.css';
import SelectSearch from 'react-select-search';

const translateDay = (day) => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 'понеділок';
    case 'tuesday':
      return 'вівторок';
    case 'wednesday':
      return 'середу';
    case 'thursday':
      return 'четвер';
    case 'friday':
      return 'п’ятницю';
    case 'saturday':
      return 'суботу';
    case 'sunday':
      return 'неділю';
    default:
      return day;
  }
};

const days = {
  day1: 'monday',
  day2: 'tuesday',
  day3: 'wednesday',
  day4: 'thursday',
  day5: 'friday',
  day6: 'saturday',
  day7: 'sunday',
};

const BoldIcon = ({ size, color }) => (
  <MdOutlineDone
    fill={color}
    style={{
      marginRight: '10px',
      fontSize: size,
      fontWeight: 'bold',
    }}
  />
);

const pay = {
  0: 0,
  1: 100,
  2: 200,
  3: 200,
  4: 250,
  5: 250,
  6: 250,
  7: 300,
  8: 300,
  9: 300,
  10: 350,
  11: 350,
  12: 350,
}

export const ModalView = ({
  handleClose,
  show,
  name_Coach,
  time,
  day,
  kind_training,
  selectedDay
}) => {
  const user = useSelector((state) => state.user);
  const [completeRecord, setCompleteRecord] = useState(false);
  const [completeRecordData, setCompleteRecordData] = useState('');
  const [isDisable, setIsDisable] = useState(false);

  const handleConfirmed = async (e, selectedDate) => {
    e.preventDefault();
    setIsDisable(true);

  const options = { timeZone: 'Europe/Kiev', weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

  let selectedDateValue;

  switch (selectedDate) {
    case 'today':
      selectedDateValue = new Date().toLocaleString('en-US', options);
      break;
    case 'tomorrow':
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      selectedDateValue = tomorrow.toLocaleString('en-US', options);
      break;
    case 'aftertomorrow':
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
      selectedDateValue = dayAfterTomorrow.toLocaleString('en-US', options);
      break;
    default:
      selectedDateValue = new Date().toLocaleString('en-US', options);
      break;
  }

    let sendData = {
      userID: user.id,
      name_Coach: name_Coach,
      kind: 'group',
      time: time,
      day: day,
      kind_training: kind_training,
      date: selectedDateValue
    };

    const result = await clientAPI.OnRecordTraining(sendData).then(result => { 
      if (result?.status === 200) {
        setCompleteRecord(true);
        setCompleteRecordData(result.data.newInfoUser);
        // const user = useSelector((state) => state.user);
        // const updatedUser = { ...user, user.seasonTickets.remainderOfTrainings: -1 };
        // dispatch(setUser(updatedUser));
        return;
      } else {
        setCompleteRecord(false);
        setCompleteRecordData('');
        return;
      }
    });
    return result;
  };

  return (
    <WrapperModal>
      <div>
        {show && (
          <ModalOverlay>
            <Modal>
              {!completeRecord
                ? 
                <>
                  <ModalHeader>
                    <h3>Ви підтверджуєте запис?</h3>
                    <CloseBTN onClick={handleClose}>&times;</CloseBTN>
                  </ModalHeader>
                  <div>
                    <p>
                      {kind_training} об {time} в {translateDay(day)}
                    </p>
                  </div>
                  <WrapperBTN>
                    <OKbutton onClick={ (e) => handleConfirmed(e, selectedDay)} disabled={isDisable}>Так</OKbutton>
                    <NonButton onClick={handleClose}>Ні</NonButton>
                  </WrapperBTN>
                </>
                :
              <>
                <ModalHeader>
                  <BoldIcon size={45} color='green' />
                    <h3>Вітаємо!</h3>
                    <p>Ви успішно записалися на тренування {completeRecordData.kind_training} в {translateDay(completeRecordData.day)} об {completeRecordData.time} до тренера {completeRecordData.coach} </p>
                  <CloseBTN onClick={handleClose}>&times;</CloseBTN>
                </ModalHeader>
              </>}
            </Modal>
          </ModalOverlay>
        )}
      </div>
    </WrapperModal>
  );
};

export const PasswordForm = ({ show, handleClose }) => {
  const user = useSelector((state) => state.user);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    if (name === 'currentPassword') {
      setCurrentPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Перевірка, чи новий пароль співпадає з підтвердженням
    if (newPassword !== confirmPassword) {
      setMessage('Паролі не співпадають');
      return;
    }
    const userID = user.id;
    await clientAPI.OnUpgradeUserPassword({ id: userID , currentPassword: currentPassword, newPassword: newPassword})
    // OnGetUserPassword

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('Пароль змінено успішно');
  };

  if (show) {
    return (
      <WrapperModal>
        <div>
        <ModalOverlay style={{justifyContent: 'center'}}>
          <Modal style={{ margin: '15px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <p>Зміна паролю</p>
              {/* <CloseBTN onClick={handleClose}>&times;</CloseBTN> */}
              <form onSubmit={handleSubmit}>
                <div>
                  {/* <label htmlFor="currentPassword">Поточний пароль:</label> */}
                  <InputStyle
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    placeholder='Поточний пароль'
                    value={currentPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  {/* <label htmlFor="newPassword">Новий пароль:</label> */}
                  <InputStyle
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder='Новий пароль'
                    value={newPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  {/* <label htmlFor="confirmPassword">Підтвердження нового паролю:</label> */}
                  <InputStyle
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder='Підтвердження нового паролю'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                  />
            </div>
              <WrapperBTN>
                <OKbutton type="submit">Змінити пароль</OKbutton>
                <NonButton onClick={handleClose}>Відмінити</NonButton>
              </WrapperBTN>
              </form>
              {message && <p>{message}</p>}
            </div>
          </Modal>
          </ModalOverlay>
        </div>
      </WrapperModal>
    );
  } else {
    return null;
  }
};

export const ModalViewBuySubscription = ({
  handleShowModal
}) => {
  const user = useSelector((state) => state.user);
  const dataSeasonTickets = useSelector((state) => state.seasonTickets);
  const group = dataSeasonTickets.seasonTickets.filter(item => item.kind === 'group');
  const personalDance = dataSeasonTickets.seasonTickets.filter(item => item.kind === 'personal' && item.includes.includes('High Heels'));
  const personalHard = dataSeasonTickets.seasonTickets.filter(item => item.kind === 'personal' && item.includes.includes('Sky jumping'));
  const allKindSeasonTickets = [
    {
        name: 'Групові заняття',
        result: group,
    },
    {
        name: 'Персональні тренування (танцювальні напрямки)',
        result: personalDance,
    },
    {
        name: 'Персональні тренування (силові напрямки)',
        result: personalHard,
    }
  ];

  const [selectedKindTraining, setSelectedKindTraining] = useState('');
  const [selectedSeasonTicket, setSelectedSeasonTicket] = useState('');
  const [buySeasonTicket, setBuySeasonTicket] = useState(false);

  const chooseKind = allKindSeasonTickets.filter(item => item.name === selectedKindTraining);

  const handleChooseSeasonTicket = async (e) => {
    e.preventDefault();

    let findSeasonTicket = chooseKind.find(items => items.name === selectedKindTraining);
    let seasonTicket = findSeasonTicket.result.find(item => item._id === selectedSeasonTicket);

    let userDataSeasonTicket = {
      seasonTicket: seasonTicket,
      dateChoose: new Date(),
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        tel: user.tel,
        instagram: user.instagram
      }
    };
    // await clientAPI.OnSendTgBuySeasonTicket(userDataSeasonTicket);
    const result = await clientAPI.OnBuySeasonTicket(userDataSeasonTicket);
    if (result) {
      return setBuySeasonTicket(true);
    }
    return result;
  }
  
  return (
    <WrapperModal>
      <div>
          <ModalOverlay>
          <Modal>
            {!buySeasonTicket 
            ?
            <>
              <ModalHeader>
                <h3>Оберіть абонемент для покупки</h3>
                <CloseBTN onClick={handleShowModal}>&times;</CloseBTN>
              </ModalHeader>
            <div>
              <SelectTrainings
                value={selectedKindTraining}
                onChange={(e) => setSelectedKindTraining(e.target.value)}>
                <option
                  style={{ backgroundColor: '#d6aaaa' }}
                  value=""
                >Обери вид абонементу</option>
              {dataSeasonTickets ?
                allKindSeasonTickets.map((item, index) => (
                  <option
                    key={index}
                    value={item.name}
                    style={{ backgroundColor: '#d6aaaa', overflow: 'auto' }}
                  >{item.name}</option>
                )) : <></>}
              </SelectTrainings>
                <SelectTrainings
                  value={selectedSeasonTicket}
                onChange={(e) => setSelectedSeasonTicket(e.target.value)}>
                {chooseKind.length > 0 
                  ? 
                  <option
                    style={{ backgroundColor: '#d6aaaa' }}
                    value=""
                >
                  Обери кількість тренувань
                  </option>
                  : 
                  <option
                    style={{ backgroundColor: '#d6aaaa' }}
                    value=""
                >
                  Спочатку обери вид абонементу
                </option>}
                {chooseKind ?
                  chooseKind.map((items) => (items.result.map((item, index) =>
                    <option
                      key={index}
                      value={item._id}
                      style={{ backgroundColor: '#d6aaaa', overflow: 'auto' }}
                    >{item.name}, {item.price} грн.</option>
                  ))): <></>}</SelectTrainings>
              </div>
              <WrapperBTN>
                <OKbutton onClick={handleChooseSeasonTicket}>Придбати</OKbutton>
                <NonButton onClick={handleShowModal}>Буду жирним</NonButton>
              </WrapperBTN>
            </>
            :
              <>
                <ModalHeader>
                  <BoldIcon size={45} color='green' />
                  <h3>Вітаємо!</h3>
                  <p>Інформація передана адміністрації та найближчим часом з Вами зв'яжуться.
                    Після підтвердження абонемент буде відображатися в особистому кабінеті</p>
                <CloseBTN onClick={handleShowModal}>&times;</CloseBTN>
              </ModalHeader>
              </>}
            </Modal>
          </ModalOverlay>
      </div>
    </WrapperModal>
  );
};

export const ModalViewCoachSalary = ({
  dateRanges, selectedCoach, dataCoachTrainings, handleCloseModal
}) => {
  // const user = useSelector((state) => state.user);
  const [showUsers, setShowUsers] = useState(false); 
  const [selectedTrainingIndex, setSelectedTrainingIndex] = useState(''); 
  
  // const startDate = dateRanges.
  const selectedDates = dateRanges[selectedCoach];
  const startDate = new Date(selectedDates.startDate).toLocaleDateString('uk-UA');
  const endDate = new Date(selectedDates.endDate).toLocaleDateString('uk-UA');

  useEffect(() => {
    document.getElementById('canceled')
  })

  console.log(dataCoachTrainings);

  const countTrainingsUsers = (value, status) => {
    if (!value || !value.users || !Array.isArray(value.users)) {
      return 0;
    }
    const usersCount = value.users.reduce((acc, user) => {
      if ((status === 'cancel' && user.trainingCanceled === true) || 
          (status === 'visit' && user.trainingVisit === true)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return usersCount;
  };

  const handleShowUsers = (e, index) => {
    e.preventDefault();
    setSelectedTrainingIndex(index)
    setShowUsers(!showUsers);
  }

  const countSalaryCoach = (value, status) => {
    if (!value || !value.users || !Array.isArray(value.users)) {
      return {};
    }
    const usersCount = value.users.reduce((acc, user) => {
      if (status === 'cancel' && user.trainingCanceled === false) {
        acc++;
      }
      return acc;
    }, 0);
    // console.log( pay[usersCount])
    return pay[usersCount];
    // return { [usersCount]: pay[usersCount] };
  };

  const totalSalary = Object.values(dataCoachTrainings).reduce((acc, value) => {
    return acc + countSalaryCoach(value, 'cancel');
  }, 0);
  // console.log(totalSalary);

  return (
    <WrapperModal>
      <div>
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <p>Оплата тренеру {selectedCoach} за період з {startDate} по {endDate} становить {totalSalary} грн.</p>
              <CloseBTN onClick={handleCloseModal}>&times;</CloseBTN>
            </ModalHeader>
            <div>
              {Object.entries(dataCoachTrainings).map(([key, value], index) => (
                <WrapperCoachTrainings key={key}>
                  <p>Дата: {new Date(value.training.date).toLocaleDateString('uk-UA')}</p>
                  <p>Вид тренування: {value.training.kind_training}</p>
                  <p>ЗП: {countSalaryCoach(value, 'cancel')} грн.</p>
                  <p>Час: {value.training.time}</p>
                  {/* <p>{value.training.users}</p> */}
                  <p>
                    Кількість клієнтів: {value.users.length}  
                    &nbsp;(<span className={countTrainingsUsers(value, 'cancel') > 0 ? "canceledTrainings" : ""}>
                      {countTrainingsUsers(value, 'cancel')}
                    </span>)
                    &nbsp;(<span className={countTrainingsUsers(value, 'visit') > 0 ? "visitedTrainings" : ""}>
                      {countTrainingsUsers(value, 'visit')}
                    </span>)
                  </p>
                  {showUsers && selectedTrainingIndex === index ?
                    <FaAngleUp onClick={(e) => handleShowUsers(e, index)} /> :
                    <FaAngleDown onClick={(e) => handleShowUsers(e, index)} />}
                  {showUsers && selectedTrainingIndex === index &&
                    value.users.map((item, index) => (
                      <div key={index}>
                        <p className=
                          {item.trainingCanceled === true ? "canceledTrainings" : ""
                            || 
                           item.trainingVisit === true ?  "visitedTrainings" : ""}>
                          {item.name} {item.surname}</p>
                      </div>
                    ))
                  }
                </WrapperCoachTrainings>
              ))}
            </div>
          </Modal>
        </ModalOverlay>
      </div>
    </WrapperModal>
  );

};

export const ModalViewAddSchedule = ({
  openChangeSchedule,
  dataCoach,
  time,
  kindTrainingData
}) => {
  // const user = useSelector((state) => state.user);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedKindTraining, setSelectedKindTraining] = useState('');
  const [selectedCoach, setSelectedCoach] = useState('');
  // console.log(dataCoach)
  
  const sendDataSchedule = async () => {
    const data = {
      id: selectedDay + selectedTime,
      day: selectedDay,
      time: selectedTime,
      kind_training: selectedKindTraining,
      coach: selectedCoach
    }
    // console.log(data);
    const sendData = await scheduleAPI.OnAddDataSchedule(data, translateDay);
    return sendData;
  }
  
  return (
    <WrapperModal>
      <div>
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <h3>Виберіть, що необхідно змінити</h3>
              <CloseBTN onClick={() => openChangeSchedule()}>&times;</CloseBTN>
            </ModalHeader>
            <div style={{marginBottom: '15px'}}>
              <SelectSearch
                value={selectedDay}
                onChange={(value) => setSelectedDay(value)}
                options={days ? Object.values(days).map((day) => ({ name: translateDay(day), value: day })) : []}
                placeholder="Оберіть день"
              />
              <SelectSearch
                value={selectedTime}
                onChange={(value) => setSelectedTime(value)}
                options={time ? Object.values(time).map((item) => ({ name: item, value: item })) : []}
                placeholder="Оберіть час"
                search
                style={{backgroundColor: '#000000'}}
              />
              <SelectSearch
                value={selectedKindTraining}
                onChange={(value) => setSelectedKindTraining(value)}
                options={kindTrainingData ? kindTrainingData.map((item) => ({ name: item.label, value: item.value})) : []}
                placeholder="Оберіть вид тренування"
                search
              />
              <SelectSearch
                value={selectedCoach}
                onChange={(value) => setSelectedCoach(value)}
                options={dataCoach ? dataCoach.map((item) => ({ name: item.labelAuth, value: item.labelAuth })) : []}
                placeholder="Оберіть тренера"
                search
              />
            </div>
              <OKbutton onClick={sendDataSchedule}>Відправити зміни</OKbutton>
          </Modal>
        </ModalOverlay>
      </div>
    </WrapperModal>
  );
};

export const ModalViewAddKindTraining = ({
  openAddKindTraining,
}) => {
  // const user = useSelector((state) => state.user);
  const [inputKind, setInputKind] = useState('');
  const [inputKindID, setInputKindID] = useState('');
  // console.log(dataCoach)
  
  const addKindTraining = async () => {
    const kindSend = {
      id: inputKindID,
      value: inputKind,
      label: inputKind,
    };
    await kindTrainingsAPI.OnAddKindTrainings(kindSend);
  };

  
  return (
    <WrapperModal>
      <div>
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <h3>Введіть дані нового виду тренування</h3>
              <CloseBTN onClick={() => openAddKindTraining()}>&times;</CloseBTN>
            </ModalHeader>
            <div>
              <p>Назва тренування:</p>
              <InputStyle
                type="text"
                value={inputKind}
                onChange={(e) => setInputKind(e.target.value)}
                placeholder="Вид тренування"
              />
              <p>ID тренування</p>
              <InputStyle
                type="text"
                value={inputKindID}
                onChange={(e) => setInputKindID(e.target.value)}
                placeholder="ID тренування"
              />
              <OKbutton onClick={addKindTraining}>Додати</OKbutton>

            </div>
              {/* <OKbutton onClick={sendDataSchedule}>Відправити зміни</OKbutton> */}
          </Modal>
        </ModalOverlay>
      </div>
    </WrapperModal>
  );
};
