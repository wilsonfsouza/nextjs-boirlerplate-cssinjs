import * as S from './styles';

interface MainProps {
  heading?: string;
  subHeading?: string;
}

export const Main = ({
  heading = 'Advanced React',
  subHeading = 'TypeScript, React, NextJS, and Styled Components'
}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/assets/images/logo.svg"
        alt="Image of an atom and Advanced React written side by side"
      />
      <S.Heading>{heading}</S.Heading>
      <S.SubHeading>{subHeading}</S.SubHeading>
      <S.Illustration
        src="/assets/images/hero-illustration.svg"
        alt="A developer programming in front of a computer screen"
      />
    </S.Wrapper>
  );
};
