interface ShareByWebShareApiProps {
  title: string;
  url: string;
}

const shareUrlByWebShareApi = (props: ShareByWebShareApiProps) => {
  if (navigator.share) {
    try {
      navigator.share(props);
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
