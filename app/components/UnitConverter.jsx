import React, { useState } from "react";

function UnitConverter() {
    const [inputValueCorrect, setInputValueCorrect] = useState("");
    const [inputValueBug1, setInputValueBug1] = useState("");
    const [inputValueBug2, setInputValueBug2] = useState("");
    const [conversionType, setConversionType] = useState("CtoF");
    const [resultCorrect, setResultCorrect] = useState("");
    const [resultBug1, setResultBug1] = useState("");
    const [resultBug2, setResultBug2] = useState("");

    const handleConversion = (version) => {
        const valueCorrect = parseFloat(inputValueCorrect);
        const valueBug1 = parseFloat(inputValueBug1);
        const valueBug2 = parseFloat(inputValueBug2);
        if (isNaN(valueCorrect) || isNaN(valueBug1) || isNaN(valueBug2)) {
            switch (version) {
                case "correct":
                    setResultCorrect("Please enter a valid number");
                    break;
                case "bug1":
                    setResultBug1("Please enter a valid number");
                    break;
                case "bug2":
                    setResultBug2("Please enter a valid number");
                    break;
            }
            return;
        }

        switch (version) {
            case "correct":
                setResultCorrect(
                    conversionType === "CtoF"
                        ? `${inputValueCorrect}°C is ${(
                              (inputValueCorrect * 9) / 5 +
                              32
                          ).toFixed(2)}°F`
                        : `${inputValueCorrect}°F is ${(
                              ((inputValueCorrect - 32) * 5) /
                              9
                          ).toFixed(2)}°C`
                );
                break;
            case "bug1":
                // Bug: Incorrect conversion formula
                setResultBug1(
                    conversionType === "CtoF"
                        ? `${inputValueBug1}°C is ${(
                              inputValueBug1 * 2 +
                              30
                          ).toFixed(2)}°F`
                        : `${inputValueBug1}°F is ${(
                              inputValueBug1 / 2 -
                              15
                          ).toFixed(2)}°C`
                );
                break;
            case "bug2":
                // Bug: Displays the input value without converting
                setResultBug2(
                    conversionType === "CtoF"
                        ? `${inputValueBug2}°C is ${inputValueBug2}°F`
                        : `${inputValueBug2}°F is ${inputValueBug2}°C`
                );
                break;
            default:
                setResult("Unknown version");
        }
    };

    return (
        <div>
            <div>
                <h3>Temperature Converter (Correct)</h3>
                <input
                    type="text"
                    value={inputValueCorrect}
                    onChange={(e) => setInputValueCorrect(e.target.value)}
                />
                <div>
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
                <button onClick={() => handleConversion("correct")}>
                    Convert
                </button>
                <div>{resultCorrect}</div>
            </div>
            <div>
                <h3>Temperature Converter (Bug 1: Incorrect Formula)</h3>
                <input
                    type="text"
                    value={inputValueBug1}
                    onChange={(e) => setInputValueBug1(e.target.value)}
                />
                <div>
                    <label>
                        <input
                            type="radio"
                            name="conversionTypeBug1"
                            value="CtoF"
                            checked={conversionType === "CtoF"}
                            onChange={() => setConversionType("CtoF")}
                        />
                        Celsius to Fahrenheit
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="conversionTypeBug1"
                            value="FtoC"
                            checked={conversionType === "FtoC"}
                            onChange={() => setConversionType("FtoC")}
                        />
                        Fahrenheit to Celsius
                    </label>
                </div>
                <button onClick={() => handleConversion("bug1")}>
                    Convert
                </button>
                <div>{resultBug1}</div>
            </div>

            <div>
                <h3>Temperature Converter (Bug 2: No Conversion)</h3>
                <input
                    type="text"
                    value={inputValueBug2}
                    onChange={(e) => setInputValueBug2(e.target.value)}
                />
                <div>
                    <label>
                        <input
                            type="radio"
                            name="conversionTypeBug2"
                            value="CtoF"
                            checked={conversionType === "CtoF"}
                            onChange={() => setConversionType("CtoF")}
                        />
                        Celsius to Fahrenheit
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="conversionTypeBug2"
                            value="FtoC"
                            checked={conversionType === "FtoC"}
                            onChange={() => setConversionType("FtoC")}
                        />
                        Fahrenheit to Celsius
                    </label>
                </div>
                <button onClick={() => handleConversion("bug2")}>
                    Convert
                </button>
                <div>{resultBug2}</div>
            </div>
        </div>
    );
}

export default UnitConverter;
