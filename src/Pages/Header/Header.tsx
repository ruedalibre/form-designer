import * as React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className={styles.header}>
    <h1>{title}</h1>
  </header>
);

export default Header;