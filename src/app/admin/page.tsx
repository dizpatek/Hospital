import { redirect } from 'next/navigation';

export default function AdminRoot() {
    // Redirect to the dashboard sub‑page
    redirect('/admin/dashboard');
    return null; // This line will never be rendered
}
