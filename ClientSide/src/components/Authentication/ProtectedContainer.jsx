import React from 'react'
import { Outlet } from 'react-router-dom';
import AuthLayout from './AuthLayout';
export default function ProtectedContainer() {
    return (
        <AuthLayout authentication={true}>
            <Outlet />
        </AuthLayout>
    )
}
