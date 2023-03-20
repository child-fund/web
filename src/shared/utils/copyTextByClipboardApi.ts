const copyTextByClipboardApi = () => {
  if (navigator.clipboard) {
    try {
      navigator.clipboard.writeText(window.location.href);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  } else {
    return false;
  }
};

export default copyTextByClipboardApi;
