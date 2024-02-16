import { useState } from 'react';
import { VisitTrainingsGraphic } from '../Graphics/TrainingsGraphic';
import VisibleTrainings from '../VisibleTrainings/VisibleTrainings';
import { useSelector } from 'react-redux';
import {
  WrapperInfoSlider,
  Title
} from './Trainings.styled';

const Trainings = () => {
  const [openCheckTrainings, setOpenCheckTrainings] = useState(false)
  const [isViewTrainings, setIsViewTrainings] = useState();
  const user = useSelector((state) => state.user);

  // console.log(isViewTrainings);

  const allUniqueVisitTrainings = user.trainings && user.trainings.allUnique
    ? Object.entries(user.trainings.allUnique)
    : [];
  const dataUniqueVisitTrainingsGraphic = allUniqueVisitTrainings.map(([id, value]) => ({
    id,
    label: id,
    value: value.length,
    info: value
  }));
  
  const handleOpenCheck = (e) => {
    // e.preventDefault();
    setOpenCheckTrainings(true);
    setIsViewTrainings(e.data.info)
  };

  return (
    <>
      <Title>Тренування</Title>
      {user.trainings.visit.length === 0 || user.trainings.visit.length === undefined
        ?
        <p>У Вас ще не було тренувань, будь ласка, запишіться на тренування</p> :
      <WrapperInfoSlider>
        <VisitTrainingsGraphic data={dataUniqueVisitTrainingsGraphic} info={handleOpenCheck} />
        {openCheckTrainings ? <VisibleTrainings trainings={isViewTrainings} /> : ''}
      </WrapperInfoSlider>}
    </>
  )
};

export default Trainings;