import Link from 'next/link';
import Image from 'next/image';
import cover from './cover.png';
import solvdLogo from './solvd-logo.png';
import styles from '@/styles/Header.module.css';

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<Link href="/">
					<Image src={solvdLogo} alt="Solvd logo" width={150} height={38} />
				</Link>
				<nav className={styles.nav}>
					<Link href="/"><div className={styles.link}>Home</div></Link>
					<Link href="/bench-practice"><div className={styles.link}>Bench Practice</div></Link>
					<Link href="/webinars"><div className={styles.link}>Webinars</div></Link>
					<Link href="/useful-links"><div className={styles.link}>Useful Links</div></Link>
					<Link href="/clients-faq"><div className={styles.link}>Clients FAQ</div></Link>
				</nav>
			</header>
			<div className={styles.coverImage} style={{ position: 'relative', height: '200px', width: '100%' }}>
				<Image src={cover} alt="Solvd cover" layout="fill" objectFit="cover" />
			</div>

		</>
  );
}
