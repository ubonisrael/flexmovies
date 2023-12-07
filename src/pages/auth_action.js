import EmailVerificationUI from "@/components/EmailVerificationUI";
import ResetPasswordUI from "@/components/resetPasswordUI";
import { useRouter } from "next/router";

const AuthPage = () => {
  const { query } = useRouter();
  const mode = query.mode
  // Get the one-time code from the query parameter.
  const actionCode = query.oobCode

  switch (mode) {
    case 'resetPassword':
      // Display reset password handler and UI.
      return <ResetPasswordUI actionCode={actionCode} />
    case 'verifyEmail':
      // Display email verification handler and UI.
      return <EmailVerificationUI actionCode={actionCode}  />
    default:
      // Error: invalid mode.
  }
};
export default AuthPage;
