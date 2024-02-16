import {
  ContainerCabinet,
  WelcomeUserName,
  WrapperInfoUser,
  WrapperUserInfo,
  UserInfo,
  UserPhotoSize,
  LinkRecord,
  SettingsBTN,
  BlockInfo,
} from './UserInformation.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Settings from './Settings/Settings';
import 'react-awesome-slider/dist/styles.css';
import Sliders from './Sliders/Sliders';

const UserInformation = () => {
  const [openCheckTrainings, setOpenCheckTrainings] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [isViewTrainings, setIsViewTrainings] = useState();
  const linkTelegram = 'https://t.me/Ars_Fit_Studio_bot';
  
  const user = useSelector((state) => state.user);

  const handleOpenCheck = (e) => {
    setOpenCheckTrainings(true);
    setIsViewTrainings(e.data.info)
  };

  const handleOpenSettings = (e) => { 
    e.preventDefault();
    setOpenSettings(!openSettings);
    setOpenCheckTrainings(false);
  }

  const dataVisitTrainingsGraphic = [
    {
      "id": "відмінено",
      "label": "відмінено",
      "value": user.trainings.nonVisit.length,
      "info": user.trainings.nonVisit,
    },
    {
      "id": "відвідано",
      "label": "відвідано",
      "value": user.trainings.visit.length,
      "info": user.trainings.visit
    },
  ];
  
  const allUniqueVisitTrainings = user.trainings && user.trainings.allUnique
    ? Object.entries(user.trainings.allUnique)
    : [];
  const dataUniqueVisitTrainingsGraphic = allUniqueVisitTrainings.map(([id, value]) => ({
    id,
    label: id,
    value: value.length,
    info: value
  }));

  const RenameAccess = (access) => {
    switch (access) {
      case "client":
        return 'Клієнт';
      case "admin":
        return 'Адміністратор';
      case "coach":
        return 'Тренер';
      default:
        return '';
    }
  };

  return (
    <ContainerCabinet>
      <WelcomeUserName>Вітаємо у власному кабінеті, <span>{user.name}</span>!</WelcomeUserName>
      <WrapperInfoUser>
        <WrapperUserInfo>
          <UserInfo>
            <UserPhotoSize src={user.photo} alt="user" />
            <div>
              <h3>{user.name} {user.surname === 'Відсутні дані' ? '' : user.surname}</h3>
              <p>{RenameAccess(user.access)}</p>
              <LinkRecord to={linkTelegram}>Telegram bot</LinkRecord>
              <SettingsBTN onClick={handleOpenSettings}>Налаштування</SettingsBTN>
            </div>
          </UserInfo>
          <BlockInfo>
            {openSettings
              ?
              <Settings />
              :
              <Sliders
                dataVisit={dataVisitTrainingsGraphic}
                infoVisit={handleOpenCheck}
                dataUnique={dataUniqueVisitTrainingsGraphic}
                infoUnique={handleOpenCheck}
                trainings={isViewTrainings}
                openCheckTrainings={openCheckTrainings}
              />}
          </BlockInfo>
        </WrapperUserInfo>
      </WrapperInfoUser>
    </ContainerCabinet>
  )
};

export default UserInformation;