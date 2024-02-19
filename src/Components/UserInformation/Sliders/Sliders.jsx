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
import { FaPhoenixFramework } from "react-icons/fa6";
import AllUsers from '../../CoachInformation/AllUsers/AllUsers';
import ConfirmSeasonTickets from '../../CoachInformation/ConfirmSeasonTickets/ConfirmSeasonTickets';

const Sliders = () => {
  const user = useSelector((state) => state.user);
  const access = user.access;
  const Prepare = () => {
    return (
      <div>
      <h3>В процесі розробки</h3>
        <div>
          <FaPhoenixFramework size={195} color='#6f1a60' />
        </div>
      </div>
    )
  }
  
  return (
    <AwesomeSlider
      animation="cubeAnimation"
      style={{height: '550px'}}
    >
      
        {/* {access === 'coach' || access === 'admin'
        ? 
          <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
          <TrainingsSchedule /></div>
        :
        <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
          <Subscription /></div>
        }
        {access === 'admin' ? 
        <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        <ScheduleAdmin/></div> : 
        access === 'coach' ? 
          '' :
          <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
            <LoveTrainings /></div>}
      
        
      {access === 'admin' ? 
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        <TrainingView/> </div>
        : access === 'coach' ? '' :
          <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
            <WrapperInfoSlider>
              <Schedule />
            </WrapperInfoSlider>
          </div>
      }
      
        
      {access === 'coach' || access === 'admin' ? '' : 
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        <Visiting/></div>}
      {access === 'coach' || access === 'admin' ?
        '' :
        <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}><Trainings /></div>} */}
      <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
       {/* {access === 'coach' || access === 'admin' ? <TrainingsSchedule/> : <Subscription/>} */}
       {access === 'admin' && <TrainingsSchedule/>}
       {access === 'coach' && <TrainingsSchedule/>}
       {access === 'client' && <Subscription/>}
     </div>
     <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {/* {access === 'admin' ? <ScheduleAdmin /> : access === 'coach' ? <Prepare /> : <LoveTrainings />} */}
        {access === 'admin' && <ScheduleAdmin/>}
        {access === 'coach' && <Prepare/>}
        {access === 'client' && <LoveTrainings/>}
     </div>
     <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {/* {access === 'admin' ? <TrainingView /> : access === 'coach' ? <Prepare /> : <WrapperInfoSlider><Schedule /></WrapperInfoSlider>} */}
        {access === 'admin' && <TrainingView/>}
        {access === 'coach' && <Prepare/>}
        {access === 'client' && <WrapperInfoSlider><Schedule /></WrapperInfoSlider>}
     </div>
      <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {/* {access === 'coach' || access === 'admin' ? <Prepare /> : <Visiting />} */}
        {access === 'admin' && <AllUsers/>}
        {access === 'coach' && <Prepare/>}
        {access === 'client' && <Visiting/>}
     </div>
     <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
        {/* {access === 'coach' || access === 'admin' ? <Prepare /> : <Trainings />} */}
        {access === 'admin' && <ConfirmSeasonTickets/>}
        {access === 'coach' && <Prepare/>}
        {access === 'client' && <Trainings/>}
     </div>
        
      
    </AwesomeSlider>
  )
};

export default Sliders;



 //       <div style={{ backgroundColor: 'inherit', display: 'flex', alignItems: 'start' }}>
 //       {access === 'coach' || access === 'admin' ? <TrainingsSchedule/> : <Subscription/>}
   //   </div>
     // <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
//        {access === 'admin' ? <ScheduleAdmin/> : access === 'coach' ? '' : <LoveTrainings/>}
  //    </div>
   //   <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
    //    {access === 'admin' ? <TrainingView/> : access === 'coach' ? '' : <WrapperInfoSlider><Schedule/></WrapperInfoSlider>}
     // </div>
      //<div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
    //    {access === 'coach' || access === 'admin' ? '' : <Visiting/>}
    //  </div>
     // <div style={{backgroundColor: 'inherit', display: 'flex', alignItems: 'start'}}>
    //    {access === 'coach' || access === 'admin' ? '' : <Trainings/>}
     // </div>



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
