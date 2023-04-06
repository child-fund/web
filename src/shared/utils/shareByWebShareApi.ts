interface ShareByWebShareApiProps {
  image?: string;
  imageTitle?: string;
  url?: string;
}

const shareByWebShareApi = async (props: ShareByWebShareApiProps) => {
  if (navigator.share) {
    try {
      let shareProps: any = {
        title: "에스칼프린트 종이비행기 기부이벤트",
        text: "내 꿈이 담긴 종이비행기를 날리고 저소득층에 따뜻한 마음을 전해보세요!",
      };

      if (props.image && props.imageTitle) {
        const response = await fetch(props.image);
        const blob = await response.blob();
        const file = new File([blob], props.imageTitle, {
          type: "image/png",
        });
        shareProps.files = [file];
      } else if (props.url) {
        shareProps.url = props.url;
      }

      await navigator.share(shareProps);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  } else {
    return false;
  }
};

export default shareByWebShareApi;
