import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AppLayout from "@/components/AppLayout";
import { useRouter } from "next/router";
import Provinces from "@/components/Provinces";
import { getSession } from "next-auth/react";

export default function ProvincesPage() {
    const router = useRouter();
    const { version } = router.query;
    const title = version === "version1" ? "23 Province" : "23 Provinces";
    return (
        <AppLayout title={title}>
            <Provinces />
        </AppLayout>
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
            user: session.user,
        },
    };
}
