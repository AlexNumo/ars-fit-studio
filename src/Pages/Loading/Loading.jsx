import {HashLoader}  from "react-spinners";
// import { useState, CSSProperties } from "react";
import Logo from "../../Components/Header/Logo/Logo";
import {
  Wrapper,
  PositionLoading
} from './Loading.styled';

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const Loading = () => {
  return (
    <Wrapper>
      <Logo />
      <PositionLoading>
        <HashLoader
          color='#c61d1d'
          loading={true}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </PositionLoading>

    </Wrapper>
  )
};

export default Loading;