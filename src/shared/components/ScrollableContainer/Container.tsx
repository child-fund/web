import { ReactNode } from "react";

import Button, { ButtonTheme } from "shared/components/Button/Container";
import Announcement from "shared/components/Announcement/Container";

import {
  Container,
  ButtonAreaContainer,
  AnnouncementAreaContainer,
} from "./Container.style";

interface ScrollableContainerProps {
  bottomAnnouncement?: {
    buttonText: string;
    leftText: string;
    onButtonClick: () => void;
    rightText: string;
  };
  bottomButtons?: {
    leftButtonText: string;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
    rightButtonText: string;
  };
  className?: string;
  children: ReactNode;
}

const ScrollableContainer = (props: ScrollableContainerProps) => {
  return (
    <Container>
      {props.children}
      {props.bottomButtons && (
        <ButtonAreaContainer>
          <Button
            onButtonClick={props.bottomButtons.onLeftButtonClick}
            text={props.bottomButtons.leftButtonText}
            theme={ButtonTheme.LIGHT}
          />
          <Button
            onButtonClick={props.bottomButtons.onRightButtonClick}
            text={props.bottomButtons.rightButtonText}
            theme={ButtonTheme.DARK}
          />
        </ButtonAreaContainer>
      )}
      {props.bottomAnnouncement && (
        <AnnouncementAreaContainer>
          <Announcement
            buttonText={props.bottomAnnouncement.buttonText}
            leftText={props.bottomAnnouncement.leftText}
            onButtonClick={props.bottomAnnouncement.onButtonClick}
            rightText={props.bottomAnnouncement.rightText}
          />
        </AnnouncementAreaContainer>
      )}
    </Container>
  );
};

export default ScrollableContainer;
