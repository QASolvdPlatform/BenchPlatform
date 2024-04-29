import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AppLayout from "@/components/AppLayout";
import { useRouter } from "next/router";
import Provinces from "@/components/Provinces";
import { getSession } from "next-auth/react";

export default function ProvincesPage() {
    return (
        <AppLayout title="23 Provinces">
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
