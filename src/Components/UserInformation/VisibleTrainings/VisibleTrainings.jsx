import {
  formatDate
} from '../Filtered/Filtered';
import {
  ContainerTrainings,
  WrapperTraining,
  ListTraining
} from './VisibleTrainings.styled';

const VisibleTrainings = ({ trainings }) => {
  // console.log(trainings)  
  return (
    <ContainerTrainings>
      <WrapperTraining>
        <p>Дата</p>
        <p>Час</p>
        <p>Вид тренування</p>
      </WrapperTraining>
      <div>
      {trainings.map(item => {
        return (
            <ListTraining key={item._id}>
              <p>{formatDate(item.date)}</p>
              <p>{item.time}</p>
              <p>{item.kind_training}</p>
            </ListTraining>
      )
      })}
      </div>
    </ContainerTrainings>
  )
};

export default VisibleTrainings;