import useFindAccount from "./hooks/useFindAccount";

import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";

import {
  Container,
  StyledTitle,
  StyledDescription,
  TabArea,
  JoinAnnouncementArea,
  FindIdTab,
  FindPasswordTab,
  TabContentsPaper,
  TabList,
} from "./Container.style";
import FindIdTabContents from "features/findAccount/components/FindIdContents";

const FindAccountContainer = () => {
  const { handleLoginClick, handleJoinClick } = useFindAccount();

  return (
    <Container>
      <StyledTitle
        text={`깜-빡 잊었어도 괜찮아요
        우리가 찾아줄거니까!`}
      />
      <StyledDescription text="빠르게 찾을 수 있게 도와줄게요" />
      <TabArea>
        <TabList>
          <FindIdTab>아이디 찾기</FindIdTab>
          <FindPasswordTab>비밀번호 찾기</FindPasswordTab>
        </TabList>
        <TabContentsPaper>
          <FindIdTabContents />
        </TabContentsPaper>
      </TabArea>
      <JoinAnnouncementArea>
        <AnnouncementText text="처음이라면 " />
        <AnnouncementButton
          text="회원가입 하러가기"
          onButtonClick={handleJoinClick}
        />
        <AnnouncementText text="를 클릭해주세요!" />
      </JoinAnnouncementArea>
    </Container>
  );
};

export default FindAccountContainer;
