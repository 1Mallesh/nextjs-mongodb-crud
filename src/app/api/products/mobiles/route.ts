import MobileModel from "@/app/utils/models/mobiles";
import { request } from "http"
import { NextResponse } from "next/server"


export async function GET(){
    return NextResponse.json({mobiles:"all mobiles"})
}


export async function  POST(request: { json: () => PromiseLike<{ title: any; model: any; price: any }> | { title: any; model: any; price: any } }){
    const {title,model ,price}=await request.json()

    await MobileModel.create({
        title,model,price
    })

    return NextResponse.json({success:"mobile addded successfully"})
}
