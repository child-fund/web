import useFindAccount from "./hooks/useFindAccount";

import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";
import FindIdTabContents from "features/findAccount/components/FindIdTabContents";
import FindPasswordTabContents from "./components/FindPasswordTabContents";

import {
  Container,
  StyledTitle,
  StyledDescription,
  TabArea,
  JoinAnnouncementArea,
  TabItem,
  TabContentsPaper,
  TabList,
} from "./Container.style";

const FindAccountContainer = () => {
  const { handleJoinClick, handleTabClick, selectedTab } = useFindAccount();

  return (
    <Container>
      <StyledTitle
        text={`깜-빡 잊었어도 괜찮아요
        우리가 찾아줄거니까!`}
      />
      <StyledDescription text="빠르게 찾을 수 있게 도와줄게요" />
      <TabArea>
        <TabList>
          <TabItem
            onClick={() => handleTabClick("Id")}
            selected={selectedTab === "Id"}
          >
            아이디 찾기
          </TabItem>
          <TabItem
            onClick={() => handleTabClick("Password")}
            selected={selectedTab === "Password"}
          >
            비밀번호 찾기
          </TabItem>
        </TabList>
        <TabContentsPaper>
          {selectedTab === "Id" ? (
            <FindIdTabContents />
          ) : (
            <FindPasswordTabContents />
          )}
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
