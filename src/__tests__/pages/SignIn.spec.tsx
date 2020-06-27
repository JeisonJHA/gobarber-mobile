import React from 'react';
import { render } from 'react-native-testing-library';
import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should render email/password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    const emailElement = getByPlaceholder('E-mail');
    const passwordElement = getByPlaceholder('Senha');

    expect(emailElement).toBeTruthy();
    expect(passwordElement).toBeTruthy();
  });
});
