"use client";
import React, { useState } from "react";

const provincesData = {
    "Buenos Aires": { capital: "La Plata", inhabitants: "17,557,462" },
    Catamarca: {
        capital: "San Fernando del Valle de Catamarca",
        inhabitants: "415,438",
    },
    Chaco: { capital: "Resistencia", inhabitants: "1,198,528" },
    Chubut: { capital: "Rawson", inhabitants: "618,994" },
    Córdoba: { capital: "Córdoba", inhabitants: "3,800,000" },
    Corrientes: { capital: "Corrientes", inhabitants: "1,173,533" },
    "Entre Ríos": { capital: "Paraná", inhabitants: "1,425,966" },
    Formosa: { capital: "Formosa", inhabitants: "605,193" },
    Jujuy: { capital: "San Salvador de Jujuy", inhabitants: "770,881" },
    "La Pampa": { capital: "Santa Rosa", inhabitants: "358,428" },
    "La Rioja": { capital: "La Rioja", inhabitants: "393,531" },
    Mendoza: { capital: "Mendoza", inhabitants: "2,082,669" },
    Misiones: { capital: "Posadas", inhabitants: "1,338,523" },
    Neuquén: { capital: "Neuquén", inhabitants: "1,078,055" },
    "Río Negro": { capital: "Viedma", inhabitants: "747,610" },
    Salta: { capital: "Salta", inhabitants: "1,424,066" },
    "San Juan": { capital: "San Juan", inhabitants: "781,055" },
    "San Luis": { capital: "San Luis", inhabitants: "508,328" },
    "Santa Cruz": { capital: "Río Gallegos", inhabitants: "374,756" },
    "Santa Fe": { capital: "Santa Fe", inhabitants: "3,500,000" },
    "Santiago del Estero": {
        capital: "Santiago del Estero",
        inhabitants: "1,042,086",
    },
    "Tierra del Fuego": { capital: "Ushuaia", inhabitants: "173,432" },
    Tucumán: { capital: "San Miguel de Tucumán", inhabitants: "1,678,000" },
};

const ProvinceSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setError("Please enter a search term.");
            setResult(null);
            return;
        }
        function capitalizeEachWord(str) {
            return str
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        }
        const searchResult = provincesData[capitalizeEachWord(inputValue)];
        if (searchResult) {
            setResult(searchResult);
            setError("");
        } else {
            setResult(null);
            setError(`No matches found for '${inputValue}', try again!`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for a province"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {result && (
                <div>
                    <p>Capital: {result.capital}</p>
                    <p>Inhabitants: {result.inhabitants}</p>
                </div>
            )}
        </div>
    );
};

export default ProvinceSearch;
