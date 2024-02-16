import AwesomeSlider from 'react-awesome-slider';
import {
  WrapperInfoSlider,
} from './Sliders.styled';
import LoveTrainings from '../LoveTrainings/LoveTrainings';
import Schedule from '../Schedule/Schedule';
import Subscription from '../Subscription/Subscription';
import Visiting from '../Visiting/Visiting';
import Trainings from '../Trainings/Trainings';
import TrainingsSchedule from '../../CoachInformation/TrainingsSchedule/TrainingsSchedule';
import { useSelector } from 'react-redux';
import ScheduleAdmin from '../../CoachInformation/ScheduleAdmin/ScheduleAdmin';
import TrainingView from '../../CoachInformation/TrainingView/TrainingView';

const Sliders = () => {
  const user = useSelector((state) => state.user);
  const access = user.access;
  
  return (
    <AwesomeSlider
      animation="cubeAnimation"
      style={{height: '550px'}}
    >
      <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
        {access === 'coach' || access === 'admin' ? <TrainingsSchedule/> : <Subscription/>}
      </div>
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {access === 'coach' ? <ScheduleAdmin/> : <LoveTrainings/>}
      </div>
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {access === 'coach' ? <TrainingView/> : <WrapperInfoSlider><Schedule/></WrapperInfoSlider>}
      </div>
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {access === 'coach' || access === 'admin' ? '' : <Visiting/>}
      </div>
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {access === 'coach' || access === 'admin' ? '' : <Trainings/>}
      </div>
    </AwesomeSlider>
  )
};

export default Sliders;



// import { useSelector } from 'react-redux';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import {
//   VisitTrainingsGraphic,
// } from '../Graphics/TrainingsGraphic';
// import {
//   WrapperInfoSlider,
// } from './Sliders.styled';
// import LoveTrainings from '../LoveTrainings/LoveTrainings';
// import Schedule from '../Schedule/Schedule';
// import 'swiper/swiper-bundle.css';

// const Sliders = ({ dataVisit, infoVisit, dataUnique, infoUnique }) => {
//   const user = useSelector((state) => state.user);
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       // onSlideChange={() => console.log('slide change')}
//       // onSwiper={(swiper) => console.log(swiper)}
//       pagination={{
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true}}
//     >
//       <SwiperSlide >
//         <p>Записатися на:</p>
//           <Schedule/>
//       </SwiperSlide>
//       {/* <SwiperSlide  >
//         <p>Запис на улюблене тренування {user.trainings.popular}?</p>
//         <LoveTrainings/>
//       </SwiperSlide>
//       <SwiperSlide >
//         <p>Відвідування</p>
//         <WrapperInfoSlider>
//           <VisitTrainingsGraphic data={dataVisit} info={infoVisit} />
//         </WrapperInfoSlider>
//       </SwiperSlide>
//       <SwiperSlide >
//         <p>Тренування</p>
//         <WrapperInfoSlider>
//           <VisitTrainingsGraphic data={dataUnique} info={infoUnique} />
//         </WrapperInfoSlider>
//       </SwiperSlide> */}
//     </Swiper>
//   )
// };

// export default Sliders;
