import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AppLayout from "@/components/AppLayout";
import { useRouter } from "next/router";
import Provinces from "@/components/Provinces";

export default function ProvincesPage() {
    return (
        <AppLayout title="23 Provinces">
            <Provinces />
        </AppLayout>
    );
}
