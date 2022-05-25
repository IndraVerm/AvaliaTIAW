const onUserFocus = () => {
  const userContainer = document.getElementById("user-container");
  userContainer.style = "border: solid 1px var(--primaryPlusTwo);";
};

const onUserBlur = () => {
  const userContainer = document.getElementById("user-container");
  userContainer.style = "border: solid 1px var(--gray1);";
};

const onEmailFocus = () => {
  const emailContainer = document.getElementById("email-container");
  emailContainer.style = "border: solid 1px var(--primaryPlusTwo);";
};

const onEmailBlur = () => {
  const emailContainer = document.getElementById("email-container");
  emailContainer.style = "border: solid 1px var(--gray1);";
};

const onPassFocus = () => {
  const passContainer = document.getElementById("pass-container");
  passContainer.style = "border: solid 1px var(--primaryPlusTwo);";
};

const onPassBlur = () => {
  const passContainer = document.getElementById("pass-container");
  passContainer.style = "border: solid 1px var(--gray1);";
};
