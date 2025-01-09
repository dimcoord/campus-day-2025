import mongoose from "mongoose";

export interface IAlumni extends Document {
    ruangan: number,
    nama: string,
    angkatan: string,
    pt: string,
    prodi: string,
    kontak: string,
    instagram: string
}

const alumniSchema = new mongoose.Schema({
    ruangan: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    angkatan: {
        type: String,
        required: true
    },
    pt: {
        type: String,
        required: true
    },
    prodi: {
        type: String,
        required: true
    },
    kontak: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
}, {strict: true, strictQuery: false})

const Alumni = mongoose.models.Alumni || mongoose.model<IAlumni>('Alumni', alumniSchema)

export default Alumni