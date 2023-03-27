interface ShareByWebShareApiProps {
  title: string;
  url: string;
}

const shareUrlByWebShareApi = async (props: ShareByWebShareApiProps) => {
  if (navigator.share) {
    try {
      await navigator.share(props);
      return true;
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};

export default shareUrlByWebShareApi;
