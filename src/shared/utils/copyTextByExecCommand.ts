const copyTextByExecCommand = () => {
  const el = document.createElement("textarea");

  el.value = window.location.href;
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  el.select();

  const result = document.execCommand("copy");
  document.body.removeChild(el);

  return result;
};

export default copyTextByExecCommand;
