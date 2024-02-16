import {
  WrapperBuyTicket,
  BuyTicketBTN,
} from './BuySubscription.styled';
import { useState } from 'react';
import { ModalViewBuySubscription } from '../../../ModalView/ModalView';
// import { clientAPI } from '../../../../service/axios.config';
// OnGetAllSeasonTickets

const BuySubscription = () => {
  const [showModal, setShowModal] = useState(false);
  // const [dataSeasonTickets, setDataSeasonTickets] = useState('');

  // const getDataSeasonTickets = async () => {
  //   const result = await clientAPI.OnGetAllSeasonTickets();
  //   return result;
  // }

  // useEffect(() => {
  //   getDataSeasonTickets().then((result) => setDataSeasonTickets(result));
  // }, []);
  
  // console.log(dataSeasonTickets)

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  }

  return (
    <WrapperBuyTicket>
      <BuyTicketBTN onClick={handleShowModal}>Придбати абонемент</BuyTicketBTN>
      {showModal ? <ModalViewBuySubscription handleShowModal={handleShowModal} /> : null}
    </WrapperBuyTicket>
  )
};

export default BuySubscription;