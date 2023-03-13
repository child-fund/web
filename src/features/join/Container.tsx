import useJoin from "./hooks/useJoin";

import Input from "components/Input";
import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";

import {
  Container,
  StyledTitle,
  StyledDescription,
  InputArea,
  AnnouncementArea,
} from "./Container.style";

const JoinContainer = () => {
  const { handleLoginClick, handleMainClick } = useJoin();

  return (
    <Container>
      <StyledTitle
        text={`1분만 시간내어서
        회원가입을 부탁드려요`}
      />
      <StyledDescription text="회원가입 후에 바로 기부참여가 가능해요" />
      <InputArea>
        <Input
          placeholder="닉네임을 하나 만들어볼까요?"
          title="닉네임"
          wrongInput={false}
          warningMessage="warning"
        />
        <Input
          placeholder="사용할 아이디를 만들어주세요!"
          title="아이디"
          wrongInput={false}
          warningMessage="warning"
        />
        <Input
          placeholder="8자 이상 20자 이하로 영문, 숫자를 조합해야해요!"
          title="비밀번호"
          wrongInput={false}
          warningMessage="warning"
        />
        <Input
          placeholder="만든 비밀번호를 확인해볼까요?"
          title="비밀번호 확인"
          wrongInput={false}
          warningMessage="warning"
        />
      </InputArea>
      <AnnouncementArea>
        <AnnouncementText text="이미 가입했다면? " />
        <AnnouncementButton text="로그인 하러가기" />
        <AnnouncementText text="를 클릭해주세요!" />
      </AnnouncementArea>
    </Container>
  );
};

export default JoinContainer;
