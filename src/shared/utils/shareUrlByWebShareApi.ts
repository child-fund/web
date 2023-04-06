interface ShareByWebShareApiProps {
  files?: File[];
  url?: string;
}

const shareUrlByWebShareApi = async (props: ShareByWebShareApiProps) => {
  if (navigator.share) {
    try {
      await navigator.share({
        ...props,
        title: "에스칼프린트 종이비행기 기부이벤트",
        text: "내 꿈이 담긴 종이비행기를 날리고 저소득층에 따뜻한 마음을 전해보세요!",
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  } else {
    return false;
  }
};

export default shareUrlByWebShareApi;
