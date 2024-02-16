import { useSelector, useDispatch } from 'react-redux';
import { BsTelegram } from "react-icons/bs";
import { PiPencilSlash, PiPencilSimple } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import {
  ContainerSettings,
  UserInformation,
  InputStyle,
} from './Settings.styled';
import { useState } from 'react';
import { setUser } from '../../../Redux/userSlice';
import { PasswordForm } from '../../ModalView/ModalView';
import { clientAPI } from '../../../service/axios.users';

const Settings = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    openChangeName: false,
    openChangeSurname: false,
    openChangePassword: false,
    openChangeInstagram: false,
    openChangeTrainingPopular: false,
    newName: user.name,
    newSurname: user.surname,
    newPassword: user.password,
    newInstagram: user.instagram,
    newTrainingPopular: user.trainings.popular,
  });

  const toggleField = (fieldName) => {
    const updatedFormData = {
      ...formData,
      openChangeName: false,
      openChangeSurname: false,
      openChangePassword: false,
      openChangeInstagram: false,
      openChangeTrainingPopular: false,
    };
    updatedFormData[fieldName] = !formData[fieldName];
    setFormData(updatedFormData);
  };

  const handleSave = async (field, value) => {
    if (field === "trainings.popular") {
      const updatedUser = { ...user, trainings: { ...user.trainings, popular: value } };
      dispatch(setUser(updatedUser));
    } else {
      const updatedUser = { ...user, [field]: value };
      dispatch(setUser(updatedUser));
      const id = user.id;
      await clientAPI.OnUpgradeUser({id: id, [field]: value});
    }

    toggleField(`openChange${field.charAt(0).toUpperCase() + field.slice(1)}`);
  };


  // const uniqueTrainingList = Array.from(new Set(schedule.map(item => item.kind_trainee))).filter(item => item !== '-');

  return (
    <ContainerSettings>
      <h3>Налаштування:</h3>
      <UserInformation>
        <div>
          <p>Ім'я:</p>
          {formData.openChangeName ? (
            <InputStyle
              type="text"
              value={formData.newName}
              onChange={(e) => setFormData({ ...formData, newName: e.target.value })}
            />
          ) : (
            <p>{user.name}</p>
          )}
          {formData.openChangeName ? (
            <MdDone color='green' onClick={() => handleSave('name', formData.newName)} style={{marginLeft: '7px'}}/>
          ) : (
            <PiPencilSimple color='#c77171' onClick={() => toggleField('openChangeName')} style={{marginLeft: '7px'}}/>
          )}
        </div>
        <div>
          <p>Прізвище:</p>
          {formData.openChangeSurname ? (
            <InputStyle
              type="text"
              value={formData.newSurname}
              onChange={(e) => setFormData({ ...formData, newSurname: e.target.value })}
            />
          ) : (
            <p>{user.surname === 'Відсутні дані' ? '-' : user.surname}</p>
          )}
          {formData.openChangeSurname ? (
            <MdDone color='green' onClick={() => handleSave('surname', formData.newSurname)} style={{marginLeft: '7px'}}/>
          ) : (
            <PiPencilSimple color='#c77171' onClick={() => toggleField('openChangeSurname')} style={{marginLeft: '7px'}}/>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div>
          <p>Пароль: ****</p>
          {formData.openChangePassword ? <PasswordForm show={formData.openChangePassword} handleClose={() => toggleField('openChangePassword')} /> : ''}
          {formData.openChangePassword ? (
            <MdDone color='green' onClick={() => handleSave('password', formData.newPassword)} style={{marginLeft: '7px'}}/>
          ) : (
            <PiPencilSimple color='#c77171' onClick={() => toggleField('openChangePassword')} style={{marginLeft: '7px'}}/>
            )}
          </div>
        </div>
        <div>
          <p>Telegram bot:</p>
          <p>{user.telegramBot.number === null || 'Відсутні дані' || 0 ?
            <><BsTelegram color='red' size={11} style={{marginRight: '7px'}}/>{user.telegramBot.number || '-'}</>
            : <><BsTelegram size={11} color='green' style={{marginRight: '7px'}}/>
              {user.telegramBot.number || '-'}</>
            }</p>
            <PiPencilSlash color='red' style={{marginLeft: '7px'}}/>
        </div>
        <div>
          <p>Instagram:</p>
          {formData.openChangeInstagram ? (
            <InputStyle
              type="text"
              value={formData.newInstagram}
              onChange={(e) => setFormData({ ...formData, newInstagram: e.target.value })}
            />
          ) : (
            <p>{user.instagram}</p>
          )}
          {formData.openChangeInstagram ? (
            <MdDone color='green' onClick={() => handleSave('instagram', formData.newInstagram)} style={{marginLeft: '7px'}}/>
          ) : (
            <PiPencilSimple color='#c77171' onClick={() => toggleField('openChangeInstagram')} style={{marginLeft: '7px'}}/>
          )}
        </div>
        {/* <div>
          <p>Улюблене тренування:</p>
          {formData.openChangeTrainingPopular ? (
            <>
              <SelectTrainings
                value={formData.newTrainingPopular}
                onChange={(e) => setFormData({ ...formData, newTrainingPopular: e.target.value })}>
                <option
                  style={{ backgroundColor: '#d6aaaa' }}
                  value=""
                >Обери</option>
                {uniqueTrainingList.map((item, index) => (
                  <option
                    key={index}
                    value={item}
                    style={{ backgroundColor: '#d6aaaa', overflow: 'auto' }}
                  >{item}</option>
              ))}</SelectTrainings>
            </>
          ) : (
            <p>{user.trainings.popular === 0 ? '-' : user.trainings.popular}</p>
          )}
          {formData.openChangeTrainingPopular ? (
            <MdDone color='green' onClick={() => handleSave('trainings.popular', formData.newTrainingPopular)} style={{marginLeft: '7px'}}/>
          ) : (
            <PiPencilSimple color='#c77171' onClick={() => toggleField('openChangeTrainingPopular')} style={{marginLeft: '7px'}}/>
          )}
        </div> */}
      </UserInformation>
    </ContainerSettings>
  );
};

export default Settings;
