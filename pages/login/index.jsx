import Image from "next/image";
import Logo from "@/public/images/Logo_solvd_RGB_Original.png";
import { signIn } from "next-auth/react";
import styles from "./index.module.css";

const Login = () => {
    const redirectUrl = "/";
    return (
        <div className={styles.bgImage}>
            <div className={styles.card}>
                <Image
                    className={styles.logo}
                    src={Logo}
                    alt="Solvd Logo"
                    width={140}
                    height={35}
                />
                <h2 className={styles.header}>
                    Welcome to the Solvd QA Bench program
                </h2>
                <div>
                    <button
                        className={styles.button}
                        onClick={() =>
                            signIn("google", {
                                prompt: "consent",
                                redirect: false,
                                callbackUrl: redirectUrl,
                            })
                        }
                    >
                        <Image
                            src="https://cdn.peopleforce.io/assets/integrations/google_workspace-db7f3b99932cd740a984148aa33fad3e634a2c6802a5d3d843d233debbca10a9.svg"
                            width={25}
                            height={25}
                        />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
