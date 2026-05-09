import cloudinary from 'cloudinary'
import { NextResponse } from 'next/server'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req: Request){
  try{
    const body = await req.json()
    const data = body.data as string
    if(!data) return NextResponse.json({ error: 'No data' }, { status: 400 })
    // data is a data URI like data:image/png;base64,xxxx
    const result = await cloudinary.v2.uploader.upload(data, { folder: 'sohrab' })
    return NextResponse.json({ url: result.secure_url })
  }catch(err){
    console.error(err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
