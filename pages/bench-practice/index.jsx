import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import styles from "./index.module.css";
import CollapsibleBox from "@/components/CollapsibleBox";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

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
    const router = useRouter();

    useEffect(() => {
        const activeItem = parseInt(router.query.activeItem);
        if (
            !isNaN(activeItem) &&
            activeItem >= 0 &&
            activeItem < items.length
        ) {
            handleSetActive(items[activeItem].title);
        }
    }, [router.query.activeItem]);

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
                <div
                    style={{
                        flex: 3,
                        padding: "0 2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    {items[0].isActive && (
                        <>
                            <CollapsibleBox title="Create Test Plan">
                                <p>
                                    <a
                                        href="https://www.youtube.com/watch?v=S2_AJP9Oeg0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.youtube.com/watch?v=S2_AJP9Oeg0
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Peer Review Test Plan" />
                            <CollapsibleBox title="Test Cases Theory" />
                            <CollapsibleBox title="UDEMY Course: Software Testing Test Techniques for Writing Test Cases">
                                <p>
                                    <a
                                        href="https://www.udemy.com/course/draft/3999622/learn/lecture/26148108?start=15#overview"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Udemy Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Scrum Bases">
                                <p>
                                    <a
                                        href="https://www.udemy.com/course/foundations-of-agile-software-testing-j/learn/lecture/6836722?start=0#overview"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Udemy Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="SDLC Theory Videos">
                                <p>
                                    <a
                                        href="https://www.youtube.com/watch?v=VFQtSqChlsk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.youtube.com/watch?v=VFQtSqChlsk
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="User Stories Effective Analysis">
                                <p>
                                    <a
                                        href="https://www.youtube.com/watch?v=UukO5VUfw8o"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.youtube.com/watch?v=UukO5VUfw8o
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[1].isActive && (
                        <>
                            <CollapsibleBox title="Gherkin Test Cases">
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
                            </CollapsibleBox>
                            <CollapsibleBox title="Test Cases For Pages">
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
                            </CollapsibleBox>
                            <CollapsibleBox title="Peer Review Test Cases" />
                            <CollapsibleBox title="Test Cases Execution" />
                            <CollapsibleBox title="Test Cases Execution Reort">
                                <p>
                                    <a
                                        href="https://docs.google.com/document/d/1owaPD1vBQX12Pe2Epoh2EmarxFUace_TfvDjBhmybnQ/edit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Docs Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Test Cases Execution Report Peer Review" />
                            <div className="centered">
                                <CollapsibleBox title="Unit Converter App">
                                    <div
                                        className={`${styles.container} ${styles.centered}`}
                                    >
                                        <div className={styles.centered}>
                                            <Link
                                                href="/unit-converter/version1"
                                                passHref
                                            >
                                                <button
                                                    type="button"
                                                    className={styles.button}
                                                >
                                                    Version 1
                                                </button>
                                            </Link>
                                            <Link
                                                href="/unit-converter/version2"
                                                passHref
                                            >
                                                <button
                                                    type="button"
                                                    className={styles.button}
                                                >
                                                    Version 2
                                                </button>
                                            </Link>
                                            <Link
                                                href="/unit-converter/version3"
                                                passHref
                                            >
                                                <button
                                                    type="button"
                                                    className={styles.button}
                                                >
                                                    Version 3
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </CollapsibleBox>
                            </div>
                        </>
                    )}

                    {items[2].isActive && (
                        <>
                            <CollapsibleBox title="Bug Tracking">
                                <p>
                                    <a
                                        href="https://bencheducationalproject.atlassian.net/jira/software/projects/SCRUM/boards/1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        JIRA Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Bug Reports" />
                            <CollapsibleBox title="Bug Report Peer Review" />
                            <CollapsibleBox title="Sign Off Report" />
                            <CollapsibleBox title="Sign Off Report Peer Review" />
                            <CollapsibleBox title="Sign Off Report Peer Review" />
                        </>
                    )}
                    {items[3].isActive && (
                        <>
                            {" "}
                            <CollapsibleBox title="API Theory UDEMY">
                                <p>
                                    <a
                                        href="https://www.udemy.com/course/postman-the-complete-guide/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Udemy Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Create Test Cases to Test API">
                                <p>
                                    <a
                                        href="https://solvdqa.zebrunner.com/projects/LTM/test-cases"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Zebrunner Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Peer Review API Test Cases" />
                            <CollapsibleBox title="Execute API Test Cases" />
                        </>
                    )}
                    {items[4].isActive && (
                        <>
                            <CollapsibleBox title="Communication Effective">
                                <p>
                                    <a
                                        href="https://olympus.mygreatlearning.com/courses/63775"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Olympus Learning Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Develop Your Emotional Intelligence">
                                <p>
                                    <a
                                        href="https://alison.com/course/develop-your-emotional-intelligence"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Alison Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Team Work and Communication">
                                <p>
                                    <a
                                        href="https://www.coursera.org/learn/teamwork-skills-effective-communication"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Coursera Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Collaboration">
                                <p>
                                    <a
                                        href="https://www.coursera.org/learn/leadership-collaboration"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Coursera Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Assertive">
                                <p>
                                    <a
                                        href="https://www.youtube.com/watch?v=_VtuOOK93j8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[5].isActive && (
                        <>
                            <CollapsibleBox title="Salesforce">
                                <p>
                                    <a
                                        href="https://drive.google.com/drive/folders/1kLnmSlVzHIL0LyCEqulTl7jGiogMd_GW"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Drive Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[6].isActive && (
                        <>
                            <CollapsibleBox title="SQL Theory">
                                <p>
                                    <a
                                        href="https://www.udemy.com/course/sql-for-real-world-data-analysis/learn/lecture/19953692#overview"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Udemy Course Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                            <CollapsibleBox title="Practice DB">
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
                            </CollapsibleBox>
                            <CollapsibleBox title="SQL Interactivo (in Spanish)">
                                <p>
                                    <a
                                        href="https://sqlinteractivo.desafiolatam.com/categorias"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SQL Interactivo
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[7].isActive && (
                        <>
                            <CollapsibleBox title="Performance Test Theory">
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
                            </CollapsibleBox>
                            <CollapsibleBox title="Practice Create Test Cases">
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
                            </CollapsibleBox>
                            <CollapsibleBox title="Practice Execute Test Cases">
                                <p>
                                    <a
                                        href="https://docs.google.com/spreadsheets/d/1DzGwSXaSkFzmmJ1nfrv3fgxONiYjZK9vpmLBNHXTK60/edit#gid=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Sheets Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[8].isActive && (
                        <>
                            <CollapsibleBox title="Basic Programming Theory">
                                <p>
                                    <a
                                        href="https://drive.google.com/drive/folders/1YNKYjsh7bWWArH5g4-kF6ofhzMAjTIRX?fbclid=IwAR2Kg8_KummGC5B3bx_Dgf0eJpZAoq4Hl1GeqtCZMblyjj_g1QDMVSqNZzM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Drive Link
                                    </a>
                                </p>
                            </CollapsibleBox>
                        </>
                    )}
                    {items[9].isActive && (
                        <>
                            <CollapsibleBox title="Leadership" />
                            <CollapsibleBox title="People Motivation" />
                            <CollapsibleBox title="Time Management" />
                            <CollapsibleBox title="Set Task Clearly" />
                        </>
                    )}
                    {items[10].isActive && (
                        <>
                            <CollapsibleBox title="Coaching" />
                            <CollapsibleBox title="Patience and Discipline" />
                            <CollapsibleBox title="Review of Knowledge Material" />
                        </>
                    )}
                    {items[11].isActive && (
                        <>
                            <CollapsibleBox title="Deeper Testing" />
                            <CollapsibleBox title="Security Testing" />
                            <CollapsibleBox title="Penetration" />
                            <CollapsibleBox title="Basis Knowledge Automation Cypress, Selenium, Java, TestNG" />
                        </>
                    )}
                    {items[12].isActive && (
                        <>
                            <CollapsibleBox title="ISTQB Certification" />
                            <CollapsibleBox title="ISTQB Foundational Level Syllabus Rundown">
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
                            </CollapsibleBox>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

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

export default BenchPractice;
