import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "@/styles/AppLayout.module.css";

export default function AppLayout({ title, children }) {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Link href="/bench-practice?activeItem=1">
                        <button type="button" className={styles.button}>
                            Go back
                        </button>
                    </Link>
                    <h3 className={styles.title}>{title}</h3>
                    {children}
                </div>
            </div>
        </Layout>
    );
}
