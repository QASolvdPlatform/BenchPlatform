import Layout from "@/app/components/Layout";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";

const sidebarButtons = [
    { title: "QA Conception First Activities", isActive: true },
    { title: "Creation and Execution", isActive: false },
    { title: "Bug Creation and Reports", isActive: false },
    { title: "API Test Cases", isActive: false },
    { title: "Team Work and Communication", isActive: false },
    { title: "Salesforce", isActive: false },
    { title: "SQL", isActive: false },
    { title: "Performance Test", isActive: false },
    { title: "Basic Programming Theory", isActive: false },
    { title: "Leadership", isActive: false },
    { title: "Coaching", isActive: false },
    { title: "Deeper Testing", isActive: false },
    { title: "ISTQB Certification", isActive: false },
];

const BenchPractice = () => {
    const [items, setItems] = useState(sidebarButtons);

    const handleSetActive = (title) => {
        const updatedItems = items.map((item) => ({
            ...item,
            isActive: item.title === title,
        }));
        setItems(updatedItems);
    };

    return (
        <Layout>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Sidebar items={items} onSetActive={handleSetActive} />
                <div style={{ flex: 3, padding: "0 2rem" }}>
                    {items[0].isActive && (
                        <>
                            <h2>Create Test Plan:</h2>
                            <p>
                                <a
                                    href="https://www.youtube.com/watch?v=S2_AJP9Oeg0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.youtube.com/watch?v=S2_AJP9Oeg0
                                </a>
                            </p>
                            <h2>Peer Review Test Plan</h2>
                            <h2>Test Cases Theory</h2>
                            <h2>
                                UDEMY Course: Software Testing Test Techniques
                                for Writing Test Cases
                            </h2>
                            <p>
                                <a
                                    href="https://www.udemy.com/course/draft/3999622/learn/lecture/26148108?start=15#overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy Course Link
                                </a>
                            </p>
                            <h2>Scrum Bases</h2>
                            <p>
                                <a
                                    href="https://www.udemy.com/course/foundations-of-agile-software-testing-j/learn/lecture/6836722?start=0#overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy Course Link
                                </a>
                            </p>
                            <h2>SDLC Theory Videos</h2>
                            <p>
                                <a
                                    href="https://www.youtube.com/watch?v=VFQtSqChlsk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.youtube.com/watch?v=VFQtSqChlsk
                                </a>
                            </p>
                            <h2>User Stories Effective Analysis</h2>
                            <p>
                                <a
                                    href="https://www.youtube.com/watch?v=UukO5VUfw8o"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.youtube.com/watch?v=UukO5VUfw8o
                                </a>
                            </p>
                        </>
                    )}
                    {items[1].isActive && (
                        <>
                            <h2>Gherkin Test Cases:</h2>
                            <p>
                                <a
                                    href="https://cucumber.io/docs/gherkin/reference/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cucumber.io/docs/gherkin/reference/
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://www.youtube.com/watch?v=tMXn3r0p3fY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.youtube.com/watch?v=tMXn3r0p3fY
                                </a>
                            </p>
                            <h2>Create Test Cases For Pages</h2>
                            <p>
                                <a
                                    href="https://www.saucedemo.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.saucedemo.com/
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://demoqa.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://demoqa.com/
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://demo.opencart.com/index.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://demo.opencart.com/index.php
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://solvdqa.zebrunner.com/projects/LTM/test-cases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://solvdqa.zebrunner.com/projects/LTM/test-cases
                                </a>
                            </p>
                            <p>
                                <a
                                    href="http://opencart.qatestlab.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    http://opencart.qatestlab.net/
                                </a>
                            </p>
                            <h2>Peer Review Test Cases</h2>
                            <h2>Test Cases Execution</h2>
                            <h2>Test Cases Execution Report</h2>
                            <p>
                                <a
                                    href="https://docs.google.com/document/d/1owaPD1vBQX12Pe2Epoh2EmarxFUace_TfvDjBhmybnQ/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Docs Link
                                </a>
                            </p>
                            <h2>Test Cases Execution Report Peer Review</h2>
                        </>
                    )}
                    {items[2].isActive && (
                        <>
                            <h2>Bug Tracking</h2>
                            <p>
                                <a
                                    href="https://bencheducationalproject.atlassian.net/jira/software/projects/SCRUM/boards/1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JIRA Link
                                </a>
                            </p>
                            <h2>Bug Reports</h2>
                            <h2>Bug Report Peer Review</h2>
                            <h2>Sign Off Report</h2>
                            <h2>Sign Off Report Peer Review</h2>
                        </>
                    )}
                    {items[3].isActive && (
                        <>
                            <h2>API Theory UDEMY</h2>
                            <p>
                                <a
                                    href="https://www.udemy.com/course/postman-the-complete-guide/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy Course Link
                                </a>
                            </p>
                            <h2>Create Test Cases to Test API</h2>
                            <p>
                                <a
                                    href="https://solvdqa.zebrunner.com/projects/LTM/test-cases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Zebrunner Link
                                </a>
                            </p>
                            <h2>Peer Review API Test Cases</h2>
                            <h2>Execute API Test Cases</h2>
                        </>
                    )}
                    {items[4].isActive && (
                        <>
                            <h2>Communication Effective</h2>
                            <p>
                                <a
                                    href="https://olympus.mygreatlearning.com/courses/63775"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Olympus Learning Link
                                </a>
                            </p>
                            <h2>Develop Your Emotional Intelligence</h2>
                            <p>
                                <a
                                    href="https://alison.com/course/develop-your-emotional-intelligence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Alison Course Link
                                </a>
                            </p>
                            <h2>Team Work and Communication</h2>
                            <p>
                                <a
                                    href="https://www.coursera.org/learn/teamwork-skills-effective-communication"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Coursera Course Link
                                </a>
                            </p>
                            <h2>Collaboration</h2>
                            <p>
                                <a
                                    href="https://www.coursera.org/learn/leadership-collaboration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Coursera Course Link
                                </a>
                            </p>
                            <h2>Assertive</h2>
                            <p>
                                <a
                                    href="https://www.youtube.com/watch?v=_VtuOOK93j8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    YouTube Link
                                </a>
                            </p>
                        </>
                    )}
                    {items[5].isActive && (
                        <>
                            <h2>Salesforce</h2>
                            <p>
                                <a
                                    href="https://drive.google.com/drive/folders/1kLnmSlVzHIL0LyCEqulTl7jGiogMd_GW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Drive Link
                                </a>
                            </p>
                        </>
                    )}
                    {items[6].isActive && (
                        <>
                            <h2>SQL Theory</h2>
                            <p>
                                <a
                                    href="https://www.udemy.com/course/sql-for-real-world-data-analysis/learn/lecture/19953692#overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy Course Link
                                </a>
                            </p>
                            <h2>Practice DB</h2>
                            <p>
                                <a
                                    href="https://sqlpad.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SQLPad.io
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://leetcode.com/problemset/database/?page=4&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJESUZGSUNVTFRZIn1d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LeetCode Database Problems
                                </a>
                            </p>
                            <h2>SQL Interactivo (in Spanish)</h2>
                            <p>
                                <a
                                    href="https://sqlinteractivo.desafiolatam.com/categorias"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SQL Interactivo
                                </a>
                            </p>
                        </>
                    )}
                    {items[7].isActive && (
                        <>
                            <h2>Performance Test Theory</h2>
                            <p>
                                <a
                                    href="https://www.udemy.com/course/jmeter-tutorial/learn/lecture/2700234?start=15#overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy JMeter Tutorial
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://bencheducationalproject.atlassian.net/browse/SCRUM-13"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JIRA SCRUM-13
                                </a>
                            </p>
                            <h2>Practice Create Test Cases</h2>
                            <p>
                                <a
                                    href="https://blazedemo.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BlazeDemo
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://solvdqa.zebrunner.com/projects/LTM/test-cases?caseId=23144"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Zebrunner Link
                                </a>
                            </p>
                            <h2>Practice Execute Test Cases</h2>
                            <p>
                                <a
                                    href="https://docs.google.com/spreadsheets/d/1DzGwSXaSkFzmmJ1nfrv3fgxONiYjZK9vpmLBNHXTK60/edit#gid=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Sheets Link
                                </a>
                            </p>
                        </>
                    )}
                    {items[8].isActive && (
                        <>
                            <h2>Basic Programming Theory</h2>
                            <p>
                                <a
                                    href="https://drive.google.com/drive/folders/1YNKYjsh7bWWArH5g4-kF6ofhzMAjTIRX?fbclid=IwAR2Kg8_KummGC5B3bx_Dgf0eJpZAoq4Hl1GeqtCZMblyjj_g1QDMVSqNZzM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Drive Link
                                </a>
                            </p>
                        </>
                    )}
                    {items[9].isActive && (
                        <>
                            <h2>Leadership</h2>
                            <h3>People Motivation</h3>
                            <h3>Time Management</h3>
                            <h3>Set Task Clearly</h3>
                        </>
                    )}
                    {items[10].isActive && (
                        <>
                            <h2>Coaching</h2>
                            <h3>Patience and Discipline</h3>
                            <h3>Review of Knowledge Material</h3>
                        </>
                    )}
                    {items[11].isActive && (
                        <>
                            <h2>Deeper Testing</h2>
                            <h3>Security Testing</h3>
                            <h3>Penetration</h3>
                            <h3>
                                Basis Knowledge Automation Cypress, Selenium,
                                Java, TestNG
                            </h3>
                        </>
                    )}
                    {items[12].isActive && (
                        <>
                            <h2>ISTQB Certification</h2>
                            <h3>ISTQB Foundational Level Syllabus Rundown</h3>
                            <p>
                                Syllabus recap with examples:
                                <a
                                    href="https://docs.google.com/document/d/1MeyX4SyXap0Koug8TOITxJQKR4nb04zIrQ9kzkyzIgo/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ></a>
                                <a
                                    href="https://solvd.udemy.com/course/accredited-istqb-certified-tester-foundation-level-course/learn/lecture/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Udemy Course Link
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default BenchPractice;
