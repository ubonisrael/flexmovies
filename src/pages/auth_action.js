import EmailVerificationUI from "@/components/EmailVerificationUI";
import ResetPasswordUI from "@/components/resetPasswordUI";
import { useRouter } from "next/router";

const AuthPage = () => {
  const { query } = useRouter();
  const mode = query.mode
  // Get the one-time code from the query parameter.
  const actionCode = query.oobCode
  // (Optional) Get the continue URL from the query parameter if available.
  const continueUrl = query.continueUrl
  // (Optional) Get the language code if available.
  const lang = query.lang || "en";

  switch (mode) {
    case 'resetPassword':
      // Display reset password handler and UI.
      return <ResetPasswordUI />
      handleResetPassword(auth, actionCode, continueUrl, lang);
      break;
    case 'verifyEmail':
      // Display email verification handler and UI.
      
      return <EmailVerificationUI actionCode={actionCode} continueUrl={continueUrl}  />
    default:
      // Error: invalid mode.
  }
};
export default AuthPage;
