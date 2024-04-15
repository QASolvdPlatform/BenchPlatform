import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./CollapsibleBox.module.css";

const DynamicHeading = ({ titleSize, className, onClick, children }) => {
    const Tag = titleSize;
    return (
        <Tag className={className} onClick={onClick}>
            {children}
        </Tag>
    );
};

const CollapsibleBox = ({
    title,
    startsOpen = true,
    showIcon = true,
    isCollapsible = true,
    titleSize = "h2",
    children,
}) => {
    const [isOpen, setIsOpen] = useState(startsOpen);

    const toggleOpen = () => {
        if (isCollapsible) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={styles.card}>
            <DynamicHeading
                titleSize={titleSize}
                className={`${styles.title} ${
                    isCollapsible ? styles.collapsible : ""
                }`}
                onClick={isCollapsible ? toggleOpen : null}
            >
                {title}
                {showIcon && (
                    <span
                        className={`${styles.icon} ${
                            isOpen ? styles.rotate : ""
                        }`} // Why depending on the state of the component, the icon will rotate?
                    >
                        <FaChevronDown />
                    </span>
                )}
            </DynamicHeading>
            <div
                className={`${styles.children} ${isOpen ? styles.expand : ""}`}
            >
                <div className={styles.contentWrapper}>{children}</div>
            </div>
        </div>
    );
};

export default CollapsibleBox;
