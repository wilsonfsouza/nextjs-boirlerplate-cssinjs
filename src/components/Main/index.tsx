import * as S from './styles';

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/assets/images/logo.svg"
        alt="Image of an atom and Advanced React written side by side"
      />
      <S.Heading>Advanced React</S.Heading>
      <S.SubHeading>
        TypeScript, React, NextJS, and Styled Components
      </S.SubHeading>
      <S.Illustration
        src="/assets/images/hero-illustration.svg"
        alt="A developer programming in front of a computer screen"
      />
    </S.Wrapper>
  );
};
