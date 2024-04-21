import Image from "next/image";
import Logo from "@/public/images/Logo_solvd_RGB_Original.png";
import { signIn } from "next-auth/react";

const Login = () => {
    const redirectUrl = "/";
    return (
        <div>
            <Image src={Logo} />
            <h1>Welcome to the Solvd QA Bench program</h1>
            <div>
                <Image
                    src="https://cdn.peopleforce.io/assets/integrations/google_workspace-db7f3b99932cd740a984148aa33fad3e634a2c6802a5d3d843d233debbca10a9.svg"
                    width={25}
                    height={25}
                />
                <button
                    onClick={() =>
                        signIn("google", {
                            prompt: "consent",
                            redirect: false,
                            callbackUrl: redirectUrl,
                        })
                    }
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
