import { useState } from 'react';
import { VisitTrainingsGraphic } from '../Graphics/TrainingsGraphic';
import VisibleTrainings from '../VisibleTrainings/VisibleTrainings';
import { useSelector } from 'react-redux';
import {
  WrapperInfoSlider,
  Title
} from './Visiting.styled';

const Visiting = () => {
  const [openCheckTrainings, setOpenCheckTrainings] = useState(false)
  const [isViewTrainings, setIsViewTrainings] = useState();
  const user = useSelector((state) => state.user);

  // console.log(isViewTrainings);

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
  
  const handleOpenCheck = (e) => {
    // e.preventDefault();
    setOpenCheckTrainings(true);
    setIsViewTrainings(e.data.info)
  };

  const NonVisitTrainings = () => {
    return (
      <>
        <p>Ви ще не були на тренуваннях</p>
      </>
    )
  }

  return (
    <>
      <Title>Відвідування</Title>
      {user.trainings.visit?.length === 0 || user.trainings.visit.length === undefined ? <NonVisitTrainings /> :
        <WrapperInfoSlider>
          <VisitTrainingsGraphic data={dataVisitTrainingsGraphic} info={handleOpenCheck} />
          {openCheckTrainings ? <VisibleTrainings trainings={isViewTrainings} /> : ''}
        </WrapperInfoSlider>
      }
    </>
  )
};

export default Visiting;