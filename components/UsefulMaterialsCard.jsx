import React from "react";
import Image from "next/image";
import Link from "next/link";

//Bug: Deprecated!!!

const UsefulMaterialsCard = ({ imageUrl, title, description, webUrl }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1em",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1em",
                backgroundColor: "#f6f6f8",
                width: "30%",
            }}
        >
            <div>
                <div
                    onClick={() =>
                        window.open(webUrl, "_blank", "noopener,noreferrer")
                    }
                    style={{
                        marginRight: "1em",
                        border: "1px solid #ccc",
                        padding: "0.5em",
                        borderRadius: "4px",
                        cursor: "pointer", // Optional: Changes the mouse cursor on hover
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={150}
                        height={100}
                    />
                </div>
            </div>
            <div>
                <Link href={webUrl} target="_blank" rel="noopener noreferrer">
                    <h3>{title}</h3>
                </Link>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};

export default UsefulMaterialsCard;
