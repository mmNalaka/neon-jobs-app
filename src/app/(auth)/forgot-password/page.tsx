import { ForgetPasswordForm } from "@/src/app/(auth)/_components/forget-password-form";
import { Shell } from "@/src/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a verification code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgetPasswordForm />
        </CardContent>
      </Card>
    </Shell>
  );
}