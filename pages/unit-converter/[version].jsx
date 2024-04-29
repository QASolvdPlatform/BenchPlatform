import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "@/styles/AppLayout.module.css";
import { getSession } from "next-auth/react";

function UnitConverter() {
    const router = useRouter();
    const { version } = router.query;

    const [inputValue, setInputValue] = useState("");
    const [conversionType, setConversionType] = useState("CtoF");
    const [result, setResult] = useState("");

    const handleConversion = () => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult("Please enter a valid number");
            return;
        }

        let conversionResult;
        switch (version) {
            case "version1":
                conversionResult =
                    conversionType === "CtoF"
                        ? `${value}°C is ${((value * 9) / 5 + 32).toFixed(2)}°F`
                        : `${value}°F is ${(((value - 32) * 5) / 9).toFixed(
                              2
                          )}°C`;
                break;
            case "version2":
                // Bug: Incorrect conversion formula
                conversionResult =
                    conversionType === "CtoF"
                        ? `${value}°C is ${(value * 2).toFixed(2)}°F`
                        : `${value}°F is ${(value / 2).toFixed(2)}°C`;
                break;
            case "version3":
                // Bug: Displays the input value without converting
                conversionResult =
                    conversionType === "CtoF"
                        ? `${value}°C is ${value}°F`
                        : `${value}°F is ${value}°C`;
                break;
            default:
                conversionResult = "Unknown version";
        }

        setResult(conversionResult);
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Link href="/bench-practice?activeItem=1">
                        <button type="button" className={styles.button}>
                            Go back
                        </button>
                    </Link>
                    <h3 className={styles.title}>Temperature Converter</h3>
                    <input
                        className={styles.input}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="CtoF"
                                checked={conversionType === "CtoF"}
                                onChange={() => setConversionType("CtoF")}
                            />
                            Celsius to Fahrenheit
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="conversionType"
                                value="FtoC"
                                checked={conversionType === "FtoC"}
                                onChange={() => setConversionType("FtoC")}
                            />
                            Fahrenheit to Celsius
                        </label>
                    </div>
                    <button
                        onClick={handleConversion}
                        className={styles.button}
                    >
                        Convert
                    </button>
                    {version !== "version1" ? (
                        <div
                            className={`${styles.result} ${
                                result ? styles.hasContent : ""
                            }`}
                        >
                            {result}
                        </div>
                    ) : (
                        <p>{result}</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: session.user, // pass user data to the page
        },
    };
}

export default UnitConverter;
