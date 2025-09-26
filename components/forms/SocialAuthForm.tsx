"use client";

import ROUTES from "@/constants/routes";
import { XIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.error(error);

      toast.error("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in",

        action: {
          label: <XIcon className="size-3" />,
          onClick: () => toast.dismiss(),
        },
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {/* GitHub */}
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      {/* Google */}
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
