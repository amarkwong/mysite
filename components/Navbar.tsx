import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/"> Home </Link>
                </li>
                <li>
                    <Link href="/About"> About </Link>
                </li>
                <li>
                    <Link href="/Projects"> Projects </Link>
                </li>
                <li>
                    <Link href="/Blog"> Blog </Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar