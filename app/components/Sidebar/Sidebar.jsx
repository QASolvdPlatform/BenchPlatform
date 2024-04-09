import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ items, onSetActive }) => {
    return (
        <div className={styles.sidebar}>
            {items.map((item) => (
                <button
                    key={item.title}
                    onClick={() => onSetActive(item.title)}
                    className={`${styles.button} ${
                        item.isActive ? styles.buttonActive : ""
                    }`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
