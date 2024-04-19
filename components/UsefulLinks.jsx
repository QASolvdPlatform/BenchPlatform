import Layout from "./Layout"; // Update the import path as necessary
import CollapsibleBox from "./CollapsibleBox";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/UsefulLinks.module.css."; // Ensure correct path

// Warning: This file is deprecated.

const UsefulLinks = () => {
    return (
        <Layout>
            <h1 className={styles.h1}>Useful Links</h1>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <CollapsibleBox
                        title={card.title}
                        key={card.title}
                        showIcon={false}
                        isCollapsible={false}
                    >
                        <div className={styles.card}>
                            <Link
                                href={card.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className={styles.image}
                                    src={card.imageUrl}
                                    alt={card.title}
                                    width={150}
                                    height={100}
                                />
                            </Link>
                            <p>{card.description}</p>
                        </div>
                    </CollapsibleBox>
                ))}
            </div>
        </Layout>
    );
};

export default UsefulLinks;
