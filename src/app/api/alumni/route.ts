import { NextResponse } from 'next/server'
import Alumni from '@/model/schema'
import connectDB from '@/config/dbConnection'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const operation = searchParams.get('operation')
    
    await connectDB()

    let result

    switch (operation) {
      case 'snbp':
        result = await Alumni.find({ruangan: 1}).sort({ nama: 'ascending' })
        break

      case 'snbt':
        result = await Alumni.find({ruangan: 2}).sort({ nama: 'ascending' })
        break

      case 'mandiri':
        result = await Alumni.find({ruangan: 3}).sort({ nama: 'ascending' })
        break
      
      case 'raport':
        result = await Alumni.find({ruangan: 4}).sort({ nama: 'ascending' })
        break

    default:
        return NextResponse.json(
            { error: 'Invalid operation type' },
            { status: 400 }
        )
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Error connecting to database' },
      { status: 500 }
    )
  }
}

