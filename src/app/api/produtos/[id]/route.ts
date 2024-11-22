import { NextResponse } from "next/server";

export async function GET(req:Request, {params}:{params:Promise<{id:number}>}) {
    const {id} = await params;
    try {
        const response = await fetch(`http://localhost:8080/products/${id}`,{
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