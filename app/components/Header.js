import Link from "next/link";
import Image from "next/image";


const headerStyles = {
  backgroundColor: 'F6F6F8',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#F6F6F8',
};

const linkStyles = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '646567',
  backgroundColor: '#BEBEBF',
  height: '3rem',
  width: '8rem',
  textAlign: 'center',
  lineHeight: '3rem',
  borderRadius: '8px',
};

export default function Header() {
  return (<>
    <header style={headerStyles}>
      <Link href="/">
        <Image
						src="/solvd-logo.png"
          alt="Solvd logo"
          width={200}
          height={50}
        />
      </Link>
      <nav>
        <Link style={linkStyles} href="/">Home</Link>
        <Link style={linkStyles} href="/bench-practice">Bench Practice</Link>
        <Link style={linkStyles} href="/webinars">Webinars</Link>
        <Link style={linkStyles} href="/useful-links">Useful Links</Link>
        <Link style={linkStyles} href="/clients-faq">Clients FAQ</Link>
      </nav>
    </header>
    <Image
      src="/cover.png"
      alt="Solvd cover"
      width={1000}
      height={200}
      layout="responsive"
    />
  </>
  );
}
