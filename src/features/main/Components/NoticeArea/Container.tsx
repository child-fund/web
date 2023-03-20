import { Container } from "./Container.style";

interface NoticeAreaContainerProps {
  onNoticeClick: () => void;
}

const NoticeAreaContainer = (props: NoticeAreaContainerProps) => {
  return (
    <Container>
      <li>
        1️⃣ 행사기간 동안
        <span> 1개 계정 당 1회에 한하여 참여 가능</span>해요.
      </li>
      <li>
        💚 누적 후원금은
        <span> 행사 종료 후 전액 초록우산 어린이재단에 기부</span>돼요.
      </li>
      <li>
        {`👀 후원 기부내역은 `}
        <button onClick={props.onNoticeClick}>공지사항 확인하기</button>를
        클릭하여 확인 가능해요.
      </li>
      <li>
        🔐 여러분의 꿈은
        <span> 구름 속에서 안전하게 보관</span>되니 걱정하지 마세요
      </li>
    </Container>
  );
};

export default NoticeAreaContainer;
