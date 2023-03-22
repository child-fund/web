import useFindAccount from "./hooks/useFindAccount";

import FindIdTabContents from "features/findAccount/components/FindIdTabContents/Container";
import FindPasswordTabContents from "./components/FindPasswordTabContents";

import {
  ContentAreaContainer,
  StyledTitle,
  StyledDescription,
  TabArea,
  TabItem,
  TabContentsPaper,
  TabList,
} from "./Container.style";
import ScrollableContainer from "shared/components/ScrollableContainer/Container";

const FindAccountContainer = () => {
  const { handleJoinClick, handleTabClick, selectedTab } = useFindAccount();

  return (
    <ScrollableContainer
      bottomAnnouncement={{
        buttonText: "회원가입 하러가기",
        leftText: "처음이라면 ",
        onButtonClick: handleJoinClick,
        rightText: "를 클릭해주세요!",
      }}
    >
      <ContentAreaContainer>
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
      </ContentAreaContainer>
    </ScrollableContainer>
  );
};

export default FindAccountContainer;
