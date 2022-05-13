import Navbar from '../components/Navbar';

const Layout = ({children}:{children:any}) => {
    return <>
    <Navbar/>
    <div>{children}</div>
    </>
}
export default Layout