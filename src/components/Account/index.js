import PasswordChangeForm from '../PasswordChange';
import PasswordForgotPage from '../PasswordForgot';

export default function AccountPage() {
  return (
    <div>
      <h1>Account Page</h1>
      <PasswordChangeForm />
      <PasswordForgotPage />
    </div>

  )
}