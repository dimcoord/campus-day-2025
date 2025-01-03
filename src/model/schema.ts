import mongoose from "mongoose";

export interface IAlumni extends Document {
    nama: string,
    pt: string,
    f_prodi: string
}

const alumniSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    pt: {
        type: String,
        required: true
    },
    f_prodi: {
        type: String,
        required: true
    },
}, {strict: true, strictQuery: false})

const Alumni = mongoose.models.Alumni || mongoose.model<IAlumni>('Alumni', alumniSchema)

export default Alumni