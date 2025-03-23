"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const register = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const tel = formData.get("tel");
        const email = formData.get("email");
        const role = formData.get("role");
        const password = formData.get("password");

        try {
            const res = await fetch("http://localhost:5000/api/v1/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, tel, email, role, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Registration failed");

            router.push("/api/auth/signin"); 
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={register} className="w-1/2 mt-5 mx-auto p-4 border rounded shadow">
            <h2 className="text-xl text-blue-700 mb-4">Create an Account</h2>
            
            {error && <p className="text-red-500">{error}</p>}

            <div className="my-2">
                <label className="block text-gray-700">Name</label>
                <input type="text" required name="name" placeholder="name" className="border rounded w-full p-2"/>
            </div>

            <div className="my-2">
                <label className="block text-gray-700">Tel.</label>
                <input type="text" required name="tel" placeholder="contact number" className="border rounded w-full p-2"/>
            </div>

            <div className="my-2">
                <label className="block text-gray-700">E-mail</label>
                <input type="email" required name="email" placeholder="e-mail" className="border rounded w-full p-2"/>
            </div>

            <div className="my-2">
                <label className="block text-gray-700">Role</label>
                <input type="text" required name="role" placeholder="user / admin" className="border rounded w-full p-2"/>
            </div>

            <div className="my-2">
                <label className="block text-gray-700">Password</label>
                <input type="password" required name="password" placeholder="at least 6 characters" className="border rounded w-full p-2"/>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-full">
                Register NOW
            </button>
        </form>
    );
}
