import react from 'react';
import NavBar from "./NavBar";
import styles from './Layout.module.css';

const Layout = ({ children }: any) => {
    return (
        <>
            <div className={styles.main}>
                <NavBar />
                <div>{children}</div>
            </div>
            
        </>
    );
}

export default Layout;