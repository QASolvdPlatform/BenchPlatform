import Link from "next/link";
import Image from "next/image";
import cover from "@/public/images/cover.png";
import solvdLogo from "@/public/images/Logo_solvd_RGB_Original.png";
import styles from "./index.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const firstName = session?.user?.name?.split(" ")[0] || "";

    console.log("session: ", session);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src={solvdLogo}
                            alt="Solvd logo"
                            width={150}
                            height={38}
                        />
                    </Link>
                    <div className={styles.buttonGroup}>
                        <div className={styles.buttons}>
                            <Link href="/">
                                <div className={styles.button}>Home</div>
                            </Link>
                            <Link href="/bench-practice">
                                <div className={styles.button}>Practice</div>
                            </Link>
                            {/* <Link href="/webinars"><div className={styles.button}>Webinars</div></Link> */}
                            <Link href="/useful-links">
                                <div className={styles.button}>
                                    Useful Links
                                </div>
                            </Link>
                            {/* <Link href="/clients-faq"><div className={styles.button}>Clients FAQ</div></Link> */}
                        </div>
                        <div className={styles.auth}>
                            {session ? (
                                <div className={styles.userProfile}>
                                    <div className={styles.userImage}>
                                        <Image
                                            src={session.user.image}
                                            alt="Profile Image"
                                            width={40}
                                            height={40}
                                            className={styles.roundedImage}
                                        />
                                    </div>
                                    <div
                                        onClick={toggleDropdown}
                                        className={styles.userName}
                                    >
                                        {firstName} ▼
                                    </div>
                                    {dropdownOpen && (
                                        <div className={styles.dropdownMenu}>
                                            <button onClick={() => signOut()}>
                                                Sign Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button onClick={() => signIn()}>
                                    Sign In
                                </button>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            <div className={styles.coverImage}>
                <Image
                    src={cover}
                    alt="Solvd cover"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </>
    );
}
