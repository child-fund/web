const shareByWebShareApi = () => {
  if (navigator.share) {
    try {
      navigator.share({
        title: "에스칼프린트x초록우산 종이비행기 기부이벤트",
        url: window.location.href,
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

export default shareByWebShareApi;
