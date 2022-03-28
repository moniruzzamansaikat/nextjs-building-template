import React from 'react';
import { TiTimesOutline } from 'react-icons/ti';
import styles from 'styles/components/Sidebar.module.scss';

function SideBar({ setSidebarOpen, sidebarOpen }) {
  return (
    <aside className={styles.sidebar}>
      <div className="d-flex justify-content-end">
        <span onClick={() => setSidebarOpen(!sidebarOpen)}>
          <TiTimesOutline />
        </span>
      </div>

      <ul>
        <li>
          <a href="#">Page three</a>
        </li>
        <li>
          <a href="#">Page two</a>
        </li>
        <li>
          <a href="#">Page three</a>
        </li>
        <li>
          <a href="#">Page four</a>
        </li>
        <li>
          <a href="#">Page five</a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
