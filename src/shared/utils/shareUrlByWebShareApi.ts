interface ShareByWebShareApiProps {
  title: string;
  files?: File[];
  url?: string;
}

const shareUrlByWebShareApi = async (props: ShareByWebShareApiProps) => {
  if (navigator.share) {
    try {
      await navigator.share(props);
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
