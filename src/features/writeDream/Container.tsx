import useWriteDream from "./hooks/useWriteDream";

import {
  Container,
  LetterCounter,
  WritingArea,
  WritingText,
  StyledDescription,
  StyledTitle,
  StyledSubtitleBar,
} from "./Container.style";

const WriteDreamContainer = () => {
  const { dream, handleTextChange, handleSubmitClick } = useWriteDream();

  return (
    <Container>
      <StyledTitle
        text={`종이비행기에 들어갈
        여러분의 꿈을 적어주세요!`}
      />
      <StyledDescription text="여러분의 꿈은 구름 속에서 안전하게 보관되니 걱정하지 마세요" />
      <StyledSubtitleBar
        buttonText="기부하러 가기"
        onButtonClick={handleSubmitClick}
        subtitle="꿈 작성하기"
      />
      <WritingArea>
        <WritingText
          placeholder="이루고 싶은 꿈이나 소원을 적어주세요."
          onChange={handleTextChange}
          wrap="soft"
        />
        <LetterCounter overwritten={dream.length > 300}>
          <span>{dream.length}</span>/300
        </LetterCounter>
      </WritingArea>
    </Container>
  );
};

export default WriteDreamContainer;
