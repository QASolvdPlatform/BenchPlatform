"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/AppLayout.module.css";
import { VscError } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";

const ProvinceSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedColumn, setSelectedColumn] = useState("name");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const resultRef = useRef(null);

    useEffect(() => {
        if (resultRef.current) {
            const elementPosition =
                resultRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 80;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, [result]);

    const handleSearch = (e) => {
        setResult(null);
        e.preventDefault();

        //Validation
        if (!inputValue.trim()) {
            setError("Please enter a search term.");
            setResult(null);
            return;
        }
        if (
            (selectedColumn === "name" || selectedColumn === "capital") &&
            !isNaN(inputValue)
        ) {
            setError("Please enter a valid name or capital (text only).");
            setResult(null);
            return;
        }
        if (
            (selectedColumn === "inhabitants" || selectedColumn === "area") &&
            isNaN(inputValue)
        ) {
            setError("Please enter a valid number for inhabitants or area.");
            setResult(null);
            return;
        }

        const searchResult = Object.entries(provincesData).find(
            ([name, data]) =>
                selectedColumn === "name"
                    ? name.toLowerCase() === inputValue.toLowerCase()
                    : selectedColumn === "capital"
                    ? data.capital.toLowerCase() === inputValue.toLowerCase()
                    : selectedColumn === "inhabitants"
                    ? data.inhabitants.replace(/,/g, "") === inputValue
                    : selectedColumn === "area"
                    ? data.area.replace(/,/g, "") === inputValue
                    : false
        );

        if (searchResult) {
            setResult(searchResult[1]);
            setError("");
        } else {
            setResult(null);
            setError(
                `No matches found for '${selectedColumn} : ${inputValue}', try again!`
            );
        }
    };

    const shouldHighlightRow = (data) => {
        switch (selectedColumn) {
            case "name":
                return data.name.toLowerCase() === inputValue.toLowerCase();
            case "capital":
                return data.capital.toLowerCase() === inputValue.toLowerCase();
            case "inhabitants":
                return data.inhabitants.replace(/,/g, "") === inputValue;
            case "area":
                return data.area.replace(/,/g, "") === inputValue;
            default:
                return false;
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setResult(null);
        setError("");
    };

    const handleRadioChange = (e) => {
        setSelectedColumn(e.target.value);
        setResult(null);
        setError("");
    };

    return (
        <div>
            <form onSubmit={handleSearch} className={styles.provincesForm}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a value to search for..."
                    className={styles.input}
                />
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="column"
                            value="name"
                            checked={selectedColumn === "name"}
                            onChange={handleRadioChange}
                        />{" "}
                        Name
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="column"
                            value="capital"
                            checked={selectedColumn === "capital"}
                            onChange={handleRadioChange}
                        />{" "}
                        Capital
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="column"
                            value="inhabitants"
                            checked={selectedColumn === "inhabitants"}
                            onChange={handleRadioChange}
                        />{" "}
                        Inhabitants
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="column"
                            value="area"
                            checked={selectedColumn === "area"}
                            onChange={handleRadioChange}
                        />{" "}
                        Area
                    </label>
                </div>
                <div className={styles.inputButtonGroup}>
                    <button type="submit" className={styles.button}>
                        Search
                    </button>
                </div>
            </form>
            {error && (
                <div
                    className={`${styles.result} ${error ? styles.error : ""}`}
                >
                    <VscError />
                    {error}
                </div>
            )}
            {result && (
                <div
                    className={`${styles.result} ${
                        result ? styles.hasContent : ""
                    }`}
                >
                    <FaCheckCircle /> Success! Found {selectedColumn} with a
                    value of {inputValue}
                </div>
            )}
            {/* Grid to display all provinces */}
            <table className={styles.provincesTable}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableRowHeader}>
                        <th className={styles.tableHeader}>Name</th>
                        <th className={styles.tableHeader}>Capital</th>
                        <th className={styles.tableHeader}>Inhabitants</th>
                        <th className={styles.tableHeader}>Area (km&sup2;)</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {Object.entries(provincesData).map(([name, data]) => {
                        const isWinner =
                            result && shouldHighlightRow({ name, ...data });
                        return (
                            <tr
                                key={name}
                                className={
                                    isWinner
                                        ? styles.winnerCell
                                        : styles.tableCell
                                }
                                ref={isWinner ? resultRef : null}
                            >
                                <td>{name}</td>
                                <td>{data.capital}</td>
                                <td>{data.inhabitants}</td>
                                <td>{data.area}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const provincesData = {
    "Buenos Aires": {
        capital: "La Plata",
        inhabitants: "17,557,462",
        area: "307,571",
    },
    Catamarca: {
        capital: "San Fernando del Valle de Catamarca",
        inhabitants: "415,438",
        area: "102,602",
    },
    Chaco: { capital: "Resistencia", inhabitants: "1,198,528", area: "99,633" },
    Chubut: { capital: "Rawson", inhabitants: "618,994", area: "224,686" },
    Córdoba: { capital: "Córdoba", inhabitants: "3,800,000", area: "165,321" },
    Corrientes: {
        capital: "Corrientes",
        inhabitants: "1,173,533",
        area: "88,199",
    },
    "Entre Ríos": {
        capital: "Paraná",
        inhabitants: "1,425,966",
        area: "78,781",
    },
    Formosa: { capital: "Formosa", inhabitants: "605,193", area: "72,066" },
    Jujuy: {
        capital: "San Salvador de Jujuy",
        inhabitants: "770,881",
        area: "53,219",
    },
    "La Pampa": {
        capital: "Santa Rosa",
        inhabitants: "358,428",
        area: "143,440",
    },
    "La Rioja": { capital: "La Rioja", inhabitants: "393,531", area: "89,680" },
    Mendoza: { capital: "Mendoza", inhabitants: "2,082,669", area: "148,827" },
    Misiones: { capital: "Posadas", inhabitants: "1,338,523", area: "29,801" },
    Neuquén: { capital: "Neuquén", inhabitants: "1,078,055", area: "94,078" },
    "Río Negro": { capital: "Viedma", inhabitants: "747,610", area: "203,013" },
    Salta: { capital: "Salta", inhabitants: "1,424,066", area: "155,488" },
    "San Juan": { capital: "San Juan", inhabitants: "781,055", area: "89,651" },
    "San Luis": { capital: "San Luis", inhabitants: "508,328", area: "76,748" },
    "Santa Cruz": {
        capital: "Río Gallegos",
        inhabitants: "374,756",
        area: "243,943",
    },
    "Santa Fe": {
        capital: "Santa Fe",
        inhabitants: "3,500,000",
        area: "133,007",
    },
    "Santiago del Estero": {
        capital: "Santiago del Estero",
        inhabitants: "1,042,086",
        area: "136,351",
    },
    "Tierra del Fuego": {
        capital: "Ushuaia",
        inhabitants: "173,432",
        area: "21,478",
    },
    Tucumán: {
        capital: "San Miguel de Tucumán",
        inhabitants: "1,678,000",
        area: "22,524",
    },
};

export default ProvinceSearch;
