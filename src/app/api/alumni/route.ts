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
      case 'agraria':
        result = await Alumni.find({ruangan: 1}).sort({ nama: 'ascending' })
        break

      case 'humanioria':
        result = await Alumni.find({ruangan: 2}).sort({ nama: 'ascending' })
        break

      case 'kedinasan':
        result = await Alumni.find({ruangan: 3}).sort({ nama: 'ascending' })
        break

      case 'kesehatan':
        result = await Alumni.find({ruangan: 4}).sort({ nama: 'ascending' })
        break

    case 'ekbis':
        result = await Alumni.find({ruangan: 5}).sort({ nama: 'ascending' })
        break

    case 'mipakom':
        result = await Alumni.find({ruangan: 6}).sort({ nama: 'ascending' })
        break
    
    case 'pendidikan':
        result = await Alumni.find({ruangan: 7}).sort({ nama: 'ascending' })
        break
    
    case 'sospol':
        result = await Alumni.find({ruangan: 8}).sort({ nama: 'ascending' })
        break
    
    case 'teknik':
        result = await Alumni.find({ruangan: 9}).sort({ nama: 'ascending' })
        break
    
    case 'vokasi':
        result = await Alumni.find({ruangan: 10}).sort({ nama: 'ascending' })
        break
    
    case 'internasional':
        result = await Alumni.find({ruangan: 11}).sort({ nama: 'ascending' })
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

