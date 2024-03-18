interface FormErrors {
  usernameError: string;
  passwordError: string;
}

export const validateForm = (
  username: string,
  password: string,
  usernameErrorText: string,
  passwordErrorText: string,
): FormErrors => {
  const errors: FormErrors = {
    usernameError: !username ? usernameErrorText : '',
    passwordError: !password ? passwordErrorText : '',
  };

  return errors;
};
