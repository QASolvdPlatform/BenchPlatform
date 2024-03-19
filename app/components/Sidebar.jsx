import React from "react";

const sidebarButtons = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
};
const Sidebar = ({ items, onSetActive }) => {
    return (
        <div style={sidebarButtons}>
            {items.map((item) => (
                <button
                    key={item.title}
                    onClick={() => onSetActive(item.title)}
                    style={{ fontWeight: item.isActive ? "bold" : "normal" }}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
