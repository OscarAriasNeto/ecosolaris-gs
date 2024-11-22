import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch('http://localhost:8080/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
    }
    
}