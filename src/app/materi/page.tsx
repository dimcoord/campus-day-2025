/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import placeholder from '../../../public/placeholder-materi.jpg'

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <main className="bg-generic w-screen bg-no-repeat bg-cover">
      <div className="container mx-auto p-4">
      <Card className="max-w-screen mx-auto mt-20">
        <CardHeader>
          <CardTitle className='text-2xl'>Materi Rumpun</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            <AccordionItem value="agraria">
              <AccordionTrigger className='text-xl'>Agraria</AccordionTrigger>
              <AccordionContent>
                <p>
                  <b></b>
                  <b></b>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="humaniora">
            <AccordionTrigger className='text-xl'>Humaniora</AccordionTrigger>
              <AccordionContent>
              <span>
                <p className='text-lg bold'>1. Jurnalistik</p>
                <p className='text-justify'>
                Jurusan Jurnalistik mengajak mahasiswa mendalami dunia jurnalistik beserta karakter dan dinamika yang terjadi di berbagai media massa (televisi, radio, cetak, dan online). Mahasiswa akan mempelajari bagaimana suatu informasi didistribusikan melalui media massa, dan mengetahui karakter masing-masing media beserta perubahannya. Dalam perkuliahan, mahasiswa akan belajar berbagai hal termasuk mencari, menulis, serta menyunting berita. Kemampuanmu menyampaikan pesan melalui berbagai media massa akan terus diasah selama mengenyam pendidikan di jurusan ini. Umumnya, Jurnalistik menjadi salah satu pilihan konsentrasi di Jurusan Ilmu Komunikasi. Namun, di beberapa kampus Jurusan Jurnalistik bisa berdiri sendiri.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Public Relations (Humas), Jurnalis (Reporter), Fotografer, Penulis (Content Writer), Editor.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Di jurusan ini, kamu akan mempelajari banyak hal tentang seluk-beluk dunia jurnalistik, terutama teknik yang dibutuhkan untuk melakukan liputan dan memperoleh data serta informasi yang akan ditemui di lapangan. Selama masa studi di jurusan ini, kamu juga akan mempelajari bagaimana cara mencari, menulis, menyunting, dan mendistribusikan suatu informasi atau berita. Jadi, jurusan ini akan menuntunmu untuk melakukan praktik dalam membuat sebuah produk media atau karya jurnalistik baik untuk media cetak atau media elektronik. Kamu juga akan memperoleh materi mengenai karakter dan manajemen media serta berbagai perubahannya.
                <br/> Mata kuliah yang akan dipelajari antara lain Pengantar Ilmu Komunikasi, Lingkup Jurnalistik, Penulisan Berita, Reportase, Komunikasi Massa, Jurnalisme Foto, Jurnalisme Audiovisual, Manajemen Media, dll. Jurusan Jurnalistik tersedia dalam jenjang Diploma (D3) hingga Sarjana (S1). Lulusan D3 akan mendapatkan gelar A.Md. Sementara lulusan sarjana Jurnalistik atau Ilmu Komunikasi umumnya mendapatkan gelar S.I.Kom.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Padjadjaran, Universitas Diponegoro, Universitas Airlangga, Universitas, Politeknik Negeri Jakarta, Universitas Halu Uleo.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>2. Ilmu Komunikasi</p>
                <p className='text-justify'>
                Ilmu Komunikasi adalah studi yang mempelajari proses penyampaian pesan secara efektif dari komunikator (pemberi pesan) kepada komunikan (penerima pesan) melalui berbagai media. Di jurusan ini kamu akan mempelajari komunikasi dalam berbagai tingkatan, mulai dari individu, media, periklanan/publisitas, komunikasi interkultural, hingga komunikasi media sosial.
                <br/> Seperti yang kita rasakan bahwa kehidupan kita tidak pernah lepas dari yang namanya komunikasi. Oleh karena itu, Ilmu komunikasi berhubungan erat dengan masalah fundamental dari hubungan antara manusia dengan sesamanya dalam bermasyarakat. Untuk mengetahui lebih detail tentang apa saja yang akan dipelajari di jurusan ini serta prospek kerjanya, berikut ulasan lengkap dari Jurusan Ilmu Komunikasi.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Product Manager, Bagian Penjualan dan Pelayanan (Customer Service), Penyiar, Video Editor, Account Executive, Public Relations (Humas), Jurnalis (Reporter), Produser TV atau Radio, Content Creator, Telemarketer, Penulis (Content Writer), Editor.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Secara umum, selama 4 tahun atau 8 semester, kuliah di jurusan Ilmu Komunikasi akan membahas berbagai bentuk komunikasi, seperti komunikasi personal, komunikasi publik, komunikasi organisasi, dan komunikasi massa. Kamu juga akan mempelajari strategi komunikasi serta melakukan berbagai praktik yang berhubungan dengan media. 
                <br/> Pada semester awal, biasanya mahasiswa mengikuti mata kuliah dasar seperti Pengantar Ilmu Komunikasi, Teori Komunikasi, Komunikasi Massa, Psikologi Komunikasi, Pengantar Humas, Pengantar Jurnalistik, dan Penyiaran. Memasuki tahun kedua, mahasiswa dapat memilih mata kuliah sesuai peminatan yang diambil. Beberapa peminatan yang umum di jurusan ini meliputi Hubungan Masyarakat (Public Relations), Jurnalistik, Penyiaran (Broadcasting), Periklanan, Manajemen Komunikasi, dan lainnya, tergantung pada kurikulum kampus masing-masing. Di beberapa kampus, mata kuliah pilihan baru ditawarkan mulai semester 5 atau tahun ketiga.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Diponegoro, Universitas Gadjah Mada, Universitas Indonesia, Universitas Padjadjaran, Universitas Pattimura, Universitas Airlangga, Institut Pertanian Bogor, Universitas Brawijaya, Universitas Semarang, Universitas Negeri Jakarta.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>3. Perpustakaan dan Sains Informasi</p>
                <p className='text-justify'>
                Jurusan Ilmu Perpustakaan akan membuat kamu belajar gimana caranya mengelola perpustakaan dengan benar, mulai dari sistem pengarsipan, penyimpanan buku dan dokumen, juga pengelolaan informasi yang baik supaya bisa memudahkan para pengunjung. Jadi, kamu nggak cuma berkutat dengan buku-buku aja ya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Tata Usaha (Admin), Market Researcher, Pustakawan, Kurator, Data Scientist, Penulis (Content Writer), Research And Development (RnD), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan ini, kamu akan mempelajari berbagai hal, mulai dari sistem informasi, database, multimedia, ilmu komputer, public speaking, dan lainnya. Keterampilan di bidang teknologi informasi dan komputer akan sangat membantu. Selain itu, kamu akan mendalami cara suatu instansi menyusun prosedur serta tata cara pengarsipan. Selama 4 tahun atau 8 semester, kamu akan dibekali keterampilan untuk mengelola dan mengorganisasi berbagai sumber informasi sekaligus memberikan pelayanan prima. Setelah lulus, gelar yang diperoleh tergantung kebijakan kampus, bisa Sarjana Sains Informasi (S.S.I), Sarjana Humaniora (S.Hum), atau Sarjana Sosial (S.Sos).
                <br/>Beberapa mata kuliah yang mungkin kamu temui antara lain: Administrasi Lembaga Informasi, Metadata untuk Temu Balik Informasi, Pangkalan Data untuk Lembaga Informasi, Sistem Pemberkasan, Klasifikasi, Kosakata Indeks, Aplikasi Teknologi Pengelolaan Informasi, Sumber dan Jasa Informasi, Administrasi Arsip, Manajemen Koleksi, Manajemen Perpustakaan, Jaringan Lembaga Informasi, Rekod dan Arsip Elektronik, Audit Informasi, Literasi Informasi, dan masih banyak lagi.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Pendidikan Indonesia, Universitas Airlangga, Universitas Brawijaya, Universitas Hasanuddin, Universitas Indonesia, Universitas Sebelas Maret, Universitas Padjadjaran.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>4. Sastra Indonesia</p>
                <p className='text-justify'>
                Sastra Indonesia merupakan bidang ilmu yang mempelajari puisi, prosa, cerita, novel, naskah, dan karya sastra lainnya dalam bahasa Indonesia. Kamu akan melakukan berbagai kajian untuk mengetahui latar belakang dari ide dan karya seniman. Ada pula bibliografis yang mempelajari tentang penampilan dan formasi buku. Selain itu, kamu juga akan belajar penulisan kreatif dan penyuntingan lho. Jadi, Jurusan ini sangat cocok untuk kamu yang senang membaca dan menulis.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Penerjemah Lisan (Interpreter), Penerjemah Tulisan (Translator), Penyiar, Jurnalis (Reporter), Produser TV atau Radio, Dosen, Sutradara, Penulis (Content Writer), Editor.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Sastra Indonesia selama 4 tahun atau 8 semester, secara umum akan melakukan kajian dari aspek linguistik, sastra, maupun filologi. Kamu akan mempelajari tata bahasa, pengkajian budaya, dan menganalisis berbagai karya sastra mulai dari novel, puisi, prosa, maupun drama. Selain itu, kamu juga akan banyak membahas teks sastra dan naskah zaman kuno. Beberapa mata kuliah yang harus kamu tempuh untuk meraih gelar Sarjana Humaniora antara lain Fonologi Bahasa Indonesia, Morfologi Bahasa Indonesia, Sintaksis Bahasa Indonesia, Semantik dan Pragmatik Bahasa Indonesia, Kemahiran Bahasa Indonesia, Kemahiran Membaca Naskah Klasik, Pengkajian Naskah Klasik, Pengkajian Puisi Indonesia, Pengkajian Prosa Indonesia, Bahasa Indonesia Jurnalistik, Penulisan Kreatif, Penyuntingan, Copywriting, dll. Kalau kamu ingin melanjutkan studi jenjang pascasarjana, pilihan fokus studinya sangat beragam. Ada banyak pilihan kampus bergengsi di dalam maupun luar negeri yang bisa kamu jadikan referensi.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Andalas, Universitas Diponegoro, Universitas Indonesia, Universitas Indonesia, Universitas Negeri Jakarta, Universitas Sebelas Maret, Universitas Padjadjaran, Universitas Negeri Semarang.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>5. Film dan Televisi</p>
                <p className='text-justify'>
                Film dan Televisi adalah bidang ilmu yang mempelajari bagaimana menciptakan bentuk-bentuk di dalam audio visual lengkap dengan berbagai prosesnya. Segala hal teknis pembuatan film juga program siaran televisi akan kamu lahap habis! Nggak lupa, bekal manajerial juga akan kamu dapatkan di jurusan ini.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Penyiar, Video Editor, Jurnalis (Reporter), Produser TV atau Radio, Penata Musik (Music Arranger), Fotografer, Content Creator, Sutradara, Wirausaha (Entrepreneur), Animator.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Untuk kamu yang memilih melanjutkan studi di jurusan Film dan Televisi akan ditempa selama 4 tahun atau 8 semester untuk meraih gelar sarjana. Terdapat dua jenis titel sarjana yang berbeda untuk jurusan ini yaitu S.T.Sn. untuk kampus yang berorientasi seni dan gelar S.I.Kom. jika kamu kuliah di kampus ilmu komunikasi. Di jurusan ini, kamu akan dibekali dengan kemampuan mengkaji, menciptakan, dan mengelola bidang pertelevisian juga perfilman. Kamu juga akan bersentuhan dengan kegiatan produksi program Film dan Televisi, menulis naskah, menjadi pengarah acara, melakukan penataan artistik juga foto elektronik, serta melakukan editing. Selama kuliah kamu bisa mengimplementasikan pengetahuan dan kreativitasmu melalui pengalaman profesional sebagai mahasiswa magang saat praktik kerja profesi.
                <br/> Mata kuliah yang akan kamu temui beberapa di antaranya adalah Komunikasi Visual, Komunikasi Massa, Literasi Media, Penulisan Skenario, Teknologi TV dan Film, Editing Video dan Sound, Perencanaan Program TV, Penyutradaraan, Tata Artistik dan Estetika, Produksi Program TV, Kajian Film, Produksi Film, Hukum dan Etika TV dan Film, Jurnalisme TV, Bisnis dan Industri Film, dan sebagainya.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Padjadjaran, Institut Seni Indonesia Yogyakarta, Universitas Pendidikan Indonesia, Universitas Jember, Institut Kesenian Jakarta.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>6. Hubungan Masyarakat</p>
                <p className='text-justify'>
                Jurusan Hubungan Masyarakat (Humas) atau Public Relation (PR) mempelajari cara menciptakan dan mengelola reputasi serta citra positif suatu organisasi. Mahasiswa akan belajar melakukan komunikasi yang baik, negosiasi, creative thinking, advertising, dan lain-lain. Hal tersebut berkaitan dengan profesi yang akan dijalani di bidang humas atau public relation nantinya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Dosen, Penulis (Content Writer), Event Planner/Event Organizer, Public Relations (Humas).
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                karena cakupan ilmu Humas sangat luas, jurusan ini dibagi ke dalam dua konsentrasi, yaitu Komunikasi Perusahaan dan Komunikasi Merek. Komunikasi Perusahaan berfokus pada strategi merancang komunikasi serta membangun relasi dengan publik secara internal maupun eksternal. Konsentrasi ini juga mempelajari berbagai macam kasus atau krisis yang kemungkinan terjadi di perusahaan. Sementara itu, Komunikasi Merek lebih berfokus pada perencanaan strategis dalam menginformasikan suatu brand kepada masyarakat, serta mempelajari bagaimana cara membangun citra positif yang kreatif dan inovatif.
                <br/> Beberapa mata kuliah yang dipelajari di Jurusan Humas antara lain Pengantar Ilmu Komunikasi, Komunikasi Organisasi, Komunikasi Pemasaran Terpadu, Fotografi Periklanan, Leadership dan Team Building, Dasar-dasar Desain Grafis, Penulisan Humas, Opini Publik, Hubungan Media, Manajemen Humas, Lobi dan Negosiasi, Periklanan, Komunikasi Bisnis, dan masih banyak lagi. Untuk tugas-tugasnya, tentu saja akan seasyik mata kuliah yang dipelajari ya, kamu, di antaranya adalah menulis press release dari suatu event, fotografi, dan membuat visual desain.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Padjadjaran, Universitas Diponegoro, Universitas Indonesia.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>7. Sastra Prancis</p>
                <p className='text-justify'>
                Jurusan Sastra Prancis adalah bidang studi yang mempelajari bahasa, sastra, budaya, sejarah, dan kehidupan masyarakat Prancis. Di jurusan ini, mahasiswa akan belajar tata bahasa, teori linguistik, sastra, dan pengetahuan kebudayaan. Tujuannya agar mahasiswa dapat menganalisis dan memecahkan masalah yang berkaitan dengan ketiga ilmu tersebut.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Editor Tulisan, Penerjemah, Pemandu Wisata, Jurnalistik, Tenaga Pengajar.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jurusan Sastra atau Pendidikan Bahasa Prancis, hal yang akan menjadi titik utama pembelajaran kamu ialah tata bahasa. Dengan mempelajari mata kuliah ini, diharapkan kamu mampu menguasai penggunaan bahasa tersebut, baik lisan dan tulisan. Penggunaan bahasa ini meliputi penyusunan kata, frasa, bahkan memproduksi teks kompleks.
                <br/>Tidak hanya meliputi penguasaan tata bahasa, namun kamu juga akan dibekali dengan teori linguistik, sastra, serta pengetahuan kebudayaan. Teori-teori yang diberikan ini kemudian digunakan untuk menganalisis karya sastra serta fenomena budaya Prancis atau Frankofon yang menjadi objek pembelajaran. Sebagai contoh, materi pengkajian Frankofon membahas isu-isu rasial, inferiorisme,  serta agama.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Universitas Negeri Semarang, Universitas Padjadjaran, Universitas Gadjah Mada, Universitas Pendidikan Indonesia, Universitas Negeri Medan, Universitas Negeri Yogyakarta.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>8. Sastra Inggris</p>
                <p className='text-justify'>
                Sastra Inggris merupakan bidang ilmu yang mempelajari Bahasa Inggris dari sisi linguistik dan sastra secara mendalam. Jadi jangan heran kalau kamu akan melakukan banyak kajian terhadap berbagai karya, seperti puisi, prosa, novel drama, maupun film. Selain itu, kamu juga akan banyak membahas kebudayaan negara-negara dengan Bahasa Inggris sebagai bahasa ibu.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Penerjemah Lisan (Interpreter), Guru Bahasa Asing, Bagian Tata Usaha (Atase) Perdagangan Luar Negeri, Penerjemah Tulisan (Translator), Konsultan Pendidikan, Staf Maskapai Penerbangan, Concierge Hotel, Pemandu Wisata (Tour Guide), Public Relations (Humas), Jurnalis (Reporter), Dosen, Editor, Sastrawan.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama kuliah 4 tahun di sastra inggris kamu akan mengkaji berbagai karya dari aspek linguistik dan sastra, serta membahas kebudayaan negara-negara yang menjadikan bahasa Inggris sebagai bahasa ibu. Selain itu kamu juga akan belajar terkait politik dan bisnis Internasional.
                <br/>Beberapa mata kuliah yang harus kamu tempuh untuk mendapat gelar Sarjana Sastra antara lain Bahasa Inggris, Fonetik dan Fonologi Bahasa Inggris, Morfologi Bahasa Inggris, Sintaksis Bahasa Inggris, Semantik Bahasa Inggris, Pengkajian Prosa Inggris, Pengkajian Drama Inggris, Pengkajian Puisi Inggris, Kritik Sastra Inggris, Perkembangan Kebudayaan dan Kesusastraan Inggris, Perkembangan Kebudayaan dan Kesusastraan Amerika, Perkembangan Kebudayaan dan Kesusastraan Australia, Kajian Sastra dan Budaya Inggris Tematis, dan sebagainya.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Universitas Padjadjaran, Universitas Airlangga, Universitas Indonesia,  Universitas Diponegoro, Universitas Pendidikan Indonesia.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>9. Desain Komunikasi Visual (DKV) </p>
                <p className='text-justify'>
                Jurusan Desain Komunikasi Visual atau DKV adalah bagian dari ilmu desain yang mempelajari tentang konsep komunikasi dan ungkapan kreatif, dengan memanfaatkan elemen visual untuk menyampaikan pesan dengan tujuan tertentu. Mahasiswa jurusan ini bukan hanya dituntut jago gambar, tetapi juga harus mampu menghasilkan karya seni agar dapat mencapai tujuan yang telah ditetapkan, seperti mempengaruhi perilaku seseorang. Sebagai bagian dari cabang ilmu desain, pada jurusan ini mahasiswa akan dibantu untuk bisa mengembangkan bahasa visual dalam bentuk gambar, sekaligus mengolah pesan dalam bentuk kata, agar pesan tersebut mampu diterima oleh sasaran dengan baik.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Ilustrator, Desainer Produk, Perancang Web, Desain Grafis Game, Dosen, Animator, Graphic Designer (Desainer Grafis)
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Sebelum memasuki dunia perkuliahan, umumnya kamu akan menjalani tes khusus yakni tes menggambar. Tes ini merupakan syarat awal bagi calon mahasiswa yang memilih jurusan di fakultas seni rupa, dan salah satunya adalah Jurusan Desain Komunikasi Visual. Jadi, kemampuan dasar menggambar memang sering menjadi tolak ukur untuk bisa menekuni bidang ini
                <br/>Selama 4 tahun atau 8 semester masa perkuliahan, kamu akan mendapatkan banyak tugas yang akan membuat kamu terbiasa menggunakan beberapa software yang berhubungan dengan desain grafis seperti, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premier, CorelDraw, SketchUp, dll. Oleh karena itu, pastikan kamu memiliki perangkat dengan spesifikasi yang cukup dalam membantu kamu melewati masa perkuliahan tersebut.
                <br/> Pada dasarnya Komunikasi Grafis dan Komunikasi Visual Periklanan mengolah bahasa visual pada media statis/diam. Kemampuan komunikasi, tipografi, ilustrasi, fotografi menjadi faktor yang harus dikuasai. Desainer Grafis mampu membuat logo, desain majalah/surat kabar, rambu (sign system), desain kemasan, paket promosi produk dan lain-lain dengan keahliannya tersebut.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Teknologi Bandung, Institut Seni Indonesia Surakarta, Institut Kesenian Jakarta, Institut Teknologi Sepuluh Nopember, Universitas Telkom, Universitas Sebelas Maret Surakarta, Universitas Negeri Semarang, Universitas Negeri Makassar, Universitas Trisakti, Universitas Bina Nusantara.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>10. Sejarah </p>
                <p className='text-justify'>
                Sejarah sudah menjadi bagian penting bagi kehidupan manusia. Nah, kamu yang tertarik dengan sejarah dan ingin mendalaminya bisa melanjutkan kuliah di Jurusan Ilmu Sejarah. Disini kamu akan mempelajari segala hal yang berkaitan dengan sejarah, mulai dari geografi sejarah, sejarah kerajaan nusantara, sejarah dunia, sejarah Indonesia, dan sebagainya. Ilmu sejarah itu berkaitan erat sama kehidupan manusia, seperti politik, sosial, budaya, bahasa, ekonomi, dan militer. 
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Penerjemah Lisan (Interpreter), Penerjemah Tulisan (Translator), Pemandu Wisata (Tour Guide), Penyiar, Pustakawan, Jurnalis (Reporter), Produser TV atau Radio, Kurator, Guru SMP/SMA, Guru Sekolah Dasar (SD),  Dosen, Penulis (Content Writer), Sejarawan.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di Jurusan Ilmu Sejarah itu menarik banget! Selain mempelajari sejarah dari zaman kuno sampai zaman modern di atas abad 20, cakupan Ilmu Sejarah ternyata sangat luas. Ada aspek budaya, sosial, ekonomi, politik, juga agama. Kamu akan belajar memahami mengapa peristiwa sejarah itu tidak pernah titik melainkan koma, serta bagaimana temuan sumber sejarah yang baru akan diklarifikasi. Selama kuliah kamu akan dilatih untuk melakukan analisis perkembangan historiografi juga tentang fakta-fakta sejarah. Nah, ketahuan kan sekarang kalau ternyata mahasiswa Ilmu Sejarah itu visioner? Masa lalu aja dipelajari, apalagi menjalani masa depan sama kamu.
                <br/>Beberapa mata kuliah yang akan kamu pelajari di Jurusan Ilmu Sejarah antara lain Geografi Sejarah, Sejarah Indonesia, Sejarah Kesultanan di Nusantara, Sejarah Dunia, Kebudayaan Indonesia, Sejarah Masyarakat Indonesia, Sejarah Perkotaan, Bahasa Sumber Sejarah, Historiografi, Retorika Sejarah, Sejarah Diplomasi Indonesia, Sejarah Agraria, dan sebagainya. Ketika kamu menulis skripsi, bisa pilih kajiannya mau fokus kemana, misalnya bidang kesehatan, militer, gastronomi, dokumenter, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Airlangga, Universitas Andalas, Universitas Gadjah Mada, Universitas Indonesia, Universitas Negeri Malang, Universitas Diponegoro, Universitas Hasanuddin, Universitas Sebelas Maret, Universitas Negeri Semarang, Universitas Jember, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>11. Seni Rupa </p>
                <p className='text-justify'>
                Seni Rupa adalah bidang seni yang bermula dari pemahaman tradisi “fine art,” sebuah wacana dari modernisme yang dikembangkan dalam kesadaran nilai-nilai lokal juga global. Kamu akan diajari cara berekspresi melalui melukis, seni grafis, seni pahat, kerajinan, dan sebagainya. Kuliah di jurusan ini juga akan mempelajari sejarah seni, komposisi, dan tematik dalam karya seni.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Ilustrator, Fotografer, Kurator, Desainer Produk, Display Designer (Merchandiser), Pembatik, Resepsionis (Front Office), Pengrajin Mebel, Florist (Dekorator Bunga), Guru SMP/SMA, Guru Sekolah Dasar (SD), Dosen, Content Creator, Digital Marketing, Seniman, Peneliti.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Seni Rupa, kamu akan dibekali sama keterampilan artistik, ekspresi proses kreatif, juga praktik seni. Selama 4 tahun atau 8 semester kuliah nanti, kamu akan banyak belajar tentang dasar dalam tradisi artistik melalui media yang mapan juga baru. Menggambar, melukis dan memahat akan jadi aktivitasmu sehari-hari. Dengan begitu kapasitasmu untuk berekspresi semakin kaya. Cocok banget deh sama kamu yang doyan berkreasi dan bereksperimen dengan seni! Pastinya keren banget kalau kamu berhasil menemukan dan mengembangkan ciri khasmu!
                <br/>Mata kuliah yang bisa kamu temui, beberapa di antaranya adalah Gambar, Rupa Dasar 2D, Rupa Dasar 3D, Studio Seni Rupa, Media Seni, Estetika, Kritik Seni Rupa, Sosiologi Seni, Tinjauan Seni Rupa, Sejarah Seni Rupa Indonesia, Sejarah Seni Rupa Modern, Seni dan Ruang Publik, Seni Eksperimental, dan sebagainya. Jurusan Seni Rupa juga memiliki beberapa peminatan lho. Di antaranya Seni Rupa Dwimatra, Seni Rupa Trimatra, Seni Rupa Intermedia, dan Kajian Seni. Setelah menuntaskan studi, kamu berhak atas gelar Sarjana Seni.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Teknologi Bandung, Institut Seni Budaya Indonesia Bandung, Universitas Negeri Jakarta, Universitas Negeri Malan, Institut Seni Indonesia Yogyakarta.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>12. Filsafat </p>
                <p className='text-justify'>
                Filsafat merupakan bidang ilmu yang mempelajari cara berpikir. Kamu dilatih untuk mempertanyakan suatu keadaan. Selain itu, juga akan diajarkan bagaimana memformulasikan dan mengokohkan pandanganmu secara merdeka tentang suatu permasalahan di dunia ini. Kamu akan diajak untuk mengenal jenis-jenis kesesatan berpikir, karakteristik ilmu pengetahuan, mengkritik suatu karya seni, pentingnya empati, mengkaji kapan suatu tindakan bisa dikatakan baik dan buruk, dan sebagainya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Kurator, Dosen, Chocolatier, Penulis (Content Writer), Editor, Peneliti, System Analyst, Arsiparis.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kamu akan belajar bagaimana cara berpikir kritis dan runtut sesuai dengan nalar. Selama kuliah, kamu akan banyak memakai teori-teori sosial untuk memformulasikan pendapat. Percayalah kuliah selama 4 tahun atau 8 semester di jurusan ini kamu akan ditempatkan pada area latihan mengutarakan pendapat tanpa merasa takut dihakimi.
                <br/>Beberapa mata kuliah yang harus kamu tempuh untuk meraih gelar Sarjana Filsafat antara lain Logika, Sejarah Filsafat Yunani, Sejarah Filsafat Abad Pertengahan, Sejarah Filsafat Modern, Epistemologi, Etika, Estetika, Metafisika, Filsafat Manusia, Filsafat Budaya, Filsafat Bahasa, Filsafat Sosial, Filsafat Agama, Filsafat Teknologi, Filsafat Timur, Teori-teori Keadilan, Filsafat Ketuhanan, Hermeneutika, Fenomenologi, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Universitas Indonesia, Universitas Negeri Yogyakarta.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>13. Arkeologi </p>
                <p className='text-justify'>
                Jurusan Arkeologi kerap dikaitkan dengan menggali dan mencari peninggalan masa lampau. Arkeologi merupakan ilmu yang mempelajari budaya manusia sepanjang zaman dengan menggabungkan Sejarah dan Geologi. Kamu akan banyak membahas peristiwa di masa lampau, mengaji peninggalan kepurbakalaan, juga mempelajari artefak mulai dari cara menemukan hingga menaksir usia artefak tersebut. Serunya, kuliah di jurusan ini kamu akan mengungkap berbagai fakta peradaban masa lampau dari beraneka ragam budaya. Yang paling penting, akan banyak travelling-nya juga lho.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pemandu Wisata (Tour Guide), Pustakawan, Jurnalis (Reporter), Kurator, Dosen, Penulis (Content Writer), Research And Development (RnD), Editor, System Analyst, Sejarawan.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Arkeologi selama 4 tahun atau 8 semester, kamu akan belajar sejarah kebudayaan material dan berbagai benda-benda peninggalan masa lampau. Kamu akan mempelajari berbagai jenis benda kepurbakalaan, mulai dari gimana melakukan ekskavasi artefak kepurbakalaan, hingga mengulik fakta sejarah di balik artefak kepurbakalaan. Kamu akan belajar menaksir umur dari benda atau artefak yang ditemukan. Kamu juga akan membahas pergerakan perpindahan manusia purba untuk memperkirakan perubahan evolusinya. Selain itu, ada juga pembelajaran mengenai pengorganisasian museum. Jurusan ini sangat cocok dengan kamu yang punya hobi travelling,
                <br/>Untuk mendapat gelar Sarjana Humaniora, kamu akan bertemu dengan beberapa mata kuliah seperti Kepurbakalaan Indonesia, Metode Arkeologi, Pengantar Manajemen Sumber Daya Arkeologi, Pengantar Arkeologi Tekstual, Epigrafi Indonesia, Ikonografi, Kebudayaan Indonesia, Kerajaan-Kerajaan Kuno di Indonesia, Arkeologi Maritim, Museum dan Publik, Manusia dan Masyarakat Indonesia, Arkeologi Sosial, Kajian Koleksi dan Tata Pamer Museum, Seni Kuno Indonesia, Bangunan Kuno Indonesia, Permukiman dan Perkotaan Kuno Indonesia, Arkeologi Ekologi, Arkeologi Industri, Arkeologi Seni, Epigrafi dan Sejarah Kuno, Arkeologi Publik, Permasalahan Pelestarian Cagar Budaya, dan lain-lain.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Universitas Indonesia, Universitas Hasanuddin, Universitas Jambi, Universitas Halu Oleo (UHO, Universitas Udayana).
                </p>
              </span>
              <br/><br/>
              
              
              

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kedinasan">
            <AccordionTrigger className='text-xl'>Kedinasan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kesehatan">
            <AccordionTrigger className='text-xl'>Kesehatan</AccordionTrigger>
              <AccordionContent>
              <span>
                <p className='text-lg bold'>1. Kedokteran</p>
                <p className='text-justify'>
                  Ilmu kedokteran adalah ilmu yang mempelajari cara kerja tubuh manusia dalam pemeliharaan kesehatan, kesetimbangannya, pencegahan, pengobatan atau penatalaksanaan penyakit.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                  Selain membuka praktik, Dokter juga bisa bekerja struktural. Misalnya di Kementerian Kesehatan, Badan Pengawas Obat dan Makanan, Badan Narkotika Nasional, Badan Penyelenggara Jaminan Sosial, Badan SAR Nasional, dan sebagainya. Prospek lainnya, yaitu Teknisi Medis Gawat Darurat (Paramedis), Ahli Diet (Dietitian), Teknisi Radiologi Medis, Teknisi Alat Kesehatan, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                  Rata-rata kampus Kedokteran menggunakan sistem blok, belajar gimana cara menangani suatu kasus (problem based learning). Kira-kira ada sekitar 21 blok yang akan dipelajari, setiap blok biasanya ditempuh 6-7 minggu, termasuk dengan praktikum dan ujiannya. Selain itu, kita juga belajar cara melayani pasien, melakukan pemeriksaan, memberikan pengobatan, juga menjelaskan suatu keadaan kepada pasien dan keluarganya dalam skill lab. Jadi, semua teori di fase praklinik bisa diselesaikan paling cepat 3,5 tahun.
                <br/>Setelah meraih gelar Sarjana Kedokteran, akan memasuki fase klinik dan disebut sebagai Dokter Muda atau dikenal dengan koas. Kamu akan belajar dari satu stase ke stase lainnya di rumah sakit. Fase klinik ini akan kamu tempuh selama 1,5 sampai 2 tahun. Selanjutnya, untuk menyandang  gelar Dokter, kamu harus menempuh Ujian Kompetensi Dokter Indonesia (UKDI). Kalau udah sah jadi Dokter, kamu harus mengikuti program internship selama 1 tahun agar bisa memperoleh Surat Ijin Praktik (SIP) dan Surat Tanda Register (STR). Setelah resmi mendapatkan surat-surat penting tersebut kamu dapat memutuskan apakah mau ambil spesialisasi atau langsung berkarir sebagai Dokter Umum.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                  Universitas Airlangga, Universitas Brawijaya, Universitas Lambung Mangkurat, Universitas Pembangunan Nasional Veteran Jakarta, Universitas Padjadjaran, Universitas Katolik Parahyangan, Universitas Islam Bandung, Universitas Pertahanan, Universitas Surabaya, Universitas Islam Malang, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>2. Kedokteran Gigi</p>
                <p className='text-justify'>
                Kedokteran Gigi adalah program studi yang mempelajari tentang perawatan kesehatan oral manusia, mulai dari  gigi dan mulut, sampai cara mengobati berbagai permasalahan pada area tersebut.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Jika sudah memperoleh surat tanda registrasi Dokter Gigi, bisa praktik di instansi kesehatan, seperti rumah sakit, puskesmas, atau klinik dental-care. Prospek lainnya, yaitu Dokter Gigi, Dosen, Wirausaha (Entrepreneur), System Analyst, Pekerja Sosial Medis, Dosen, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di Pendidikan Dokter Gigi menggunakan sistem blok dengan metode problem-based learning. Masa praklinik ditempuh selama 3,5 tahun, diikuti dengan fase klinik (koas) selama 1,5 hingga 2 tahun di rumah sakit pendidikan. Setelah lulus, mahasiswa mengikuti Ujian Kompetensi Dokter Gigi Indonesia (UKDGI) untuk mengucap sumpah. Lulusan dapat melanjutkan ke jenjang pascasarjana, seperti program magister ilmu kedokteran gigi atau kedokteran gigi klinis.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Universitas Padjadjaran, Universitas Airlangga, Universitas Jendral Achmad Yani, Universitas Hasanuddin, Universitas Trisakti, Universitas Jember, Universitas Brawijaya, Universitas Andalas, Universitas Sumatera Utara
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>3. Kedokteran Hewan</p>
                <p className='text-justify'>
                Program Studi Kedokteran Hewan adalah program studi yang mempelajari tentang berbagai sudut pandang kesejahteraan timbal balik bersama antara hewan, lingkungan, dan manusia.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Setelah lulus dari Kedokteran Hewan, bisa bekerja di rumah sakit hewan, klinik kesehatan hewan, balai karantina hewan, kebun binatang, laboratorium, lembaga penelitian, perusahaan sektor peternakan, bahkan koperasi internasional. Selain itu, dokter hewan juga dapat membuka praktik pribadi atau bekerja di bidang pet salon & grooming, peternakan, juga bioteknologi.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                  Untuk jadi seorang Dokter Hewan, harus melewati dua tahap pendidikan, yaitu tahap preklinik dan klinik. Tahap preklinik biasanya ditempuh paling cepat 3,5 tahun karena menggunakan metode problem based learning. Setelah lulus tahap preklinik, lulusan akan menyandang gelar Sarjana Kedokteran Hewan. Pada tahap klinik, mahasiswa akan menjalani masa koas selama kurang lebih 1 tahun, kemudian dilanjut dengan mengikuti serangkaian ujian berskala nasional. Apabila berhasil melewati fase klinik, selanjutnya akan mengucap sumpah Dokter Hewan dan mendapat sertifikat kompetensi dokter hewan. 
                  <br/> Ruang lingkup kompetensi seorang dokter hewan di antaranya memenuhi kebutuhan pangan asal hewan, memberikan jaminan mutu atas segala yang berkaitan dengan hewan, juga meningkatkan kesehatan dan kesejahteraan hewan. Melalui semboyan "Manusya mriga satwa sewaka" (mengabdi untuk kesejahteraan manusia melalui dunia hewan), profesi dokter hewan menunjukkan bahwa kesehatan dan kesejahteraan hewan turut mendukung kesejahteraan manusia.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Padjadjaran, Universitas Udayana, Institut Pertanian Bogor, Universitas Gadjah Mada, Universitas Brawijaya, Universitas Airlangga, Universitas Hasanuddin, Universitas Jambi, Universitas Wijaya Kusuma Surabaya, Universitas Nusa Cendana, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>4. Keperawatan</p>
                <p className='text-justify'>
                Jurusan Keperawatan adalah ilmu yang mempelajari cara memberikan pelayanan terhadap pasien guna mencapai derajat kesehatan yang optimal.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Selain di Rumah Sakit, lulusan perawat bisa praktik di Puskesmas, Klinik Kesehatan, Panti Jompo, dan menjadi perawat pribadi di suatu keluarga. Beberapa pilihan karier lain, yaitu Pengasuh Anak/Bayi, Instruktur Perawat, Pekerja Sosial Medis, Perawat Lansia (Careworker), Perawat Kesehatan Mental, Perawat, Teknisi Radiologi Medis, Perawat Gigi, Terapis Wicara, Terapis Okupasi, Terapis Fisik (Fisioterapis), Research And Development (RnD).
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama 4 tahun atau 8 semester akan fokus pada perawatan individu agar bisa mencapai, mempertahankan, atau memulihkan kesehatan yang optimal juga kualitas hidupnya. Setelah lulus dengan gelar Sarjana Keperawatan, apabila ingin menjadi perawat di Rumah Sakit harus menempuh Studi Profesi Ners selama 1 tahun yang biasanya dilaksanakan melaluI praktik di pusat pelayanan kesehatan. 
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Airlangga, Universitas Padjadjaran, Universitas Andalas, Universitas Cenderawasih, Universitas Diponegoro, Universitas Indonesia, Universitas Jambi, Universitas Negeri Gorontalo, Universitas Udayana.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>5. Farmasi</p>
                <p className='text-justify'>
                Jurusan Farmasi merupakan jurusan yang identik dengan obat-obatan. Apabila masuk jurusan ini, maka kamu akan belajar mengidentifikasi, meracik, menyeleksi, memelihara, hingga menganalisis obat dan bahan obat berdasarkan standar kelayakan. Di Jurusan Farmasi, kamu juga akan mempelajari tata cara pendistribusian, penyimpanan, dan penggunaan obat-obatan yang tepat. 
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Lulusan Sarjana Farmasi memiliki prospek karier yang luas, tidak hanya di sektor kesehatan, tetapi juga di industri kosmetik, makanan dan minuman, serta farmasi manajemen. Selain terlibat dalam penelitian dan pengembangan produk, juga dapat berkarir di bidang penjualan, bioteknologi, kecantikan, administrasi rumah sakit, rekam medis, serta sebagai dosen. 
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Farmasi mempelajari bagaimana menentukan obat yang tepat untuk suatu jenis penyakit dan bagaimana cara kerja obat tersebut. Di Jurusan Farmasi, ada beberapa fokus kajian yang bisa dipilih, seperti Biologi Farmasi, Farmasetika, Kimia Farmasi, serta Farmakologi dan Farmasi Klinik. Bagi yang bercita-cita menjadi Apoteker, maka setelah lulus Kuliah di Jurusan Farmasi harus menempuh Pendidikan Profesi Apoteker selama kurang lebih satu tahun dan mengikuti ujian kompetensi profesi. Kalau ingin lanjut ke jenjang pascasarjana, peminatan yang ditawarkan akan sangat spesifik tergantung pada tujuan karier. 
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Teknologi Bandung, Universitas Airlangga, Universitas Gadjah Mada, Universitas Hasanuddin, Universitas Indonesia, Universitas Jenderal Achmad Yani, Universitas Sumatera Utara, Universitas Padjadjaran.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>6. Ilmu Gizi</p>
                <p className='text-justify'>
                Jurusan Ilmu Gizi adalah bidang ilmu yang mempelajari pentingnya nutrisi pada kehidupan manusia, terutama hubungan antara asupan makanan dengan kesehatan. Hal lain yang juga akan dipelajari meliputi pemahaman tetang pola makan sehat, gaya hidup, hingga cara memproses makanan. Di jurusan ini mahasiswa akan mempelajari zat gizi apa saja yang dibutuhkan dan bagaimana takaran idealnya sesuai dengan ilmu pengetahuan.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Bagian Pengendalian Mutu Produk dan Kesehatan, Terapis Aroma (Aromatherapist), Ahli Diet (Dietitian), Ahli Gizi (Nutritionist), Chef (Koki), Wirausaha (Entrepreneur), Quality Assurance (QA) & Quality, Control (QC), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Ilmu Gizi selama 4 tahun atau 8 semester, kamu akan belajar tentang asupan gizi dan ilmu pangan pada berbagai kondisi. Jadi, kamu akan mempelajari berbagai jenis penyakit juga ilmu dasar patofisiologi dan anatomi tubuh manusia. Kemudian kamu akan mengaitkannya dengan interaksi makanan, organ tubuh, obat-obatan, juga fitokimia. Nah, ketika datang klien yang dalam kondisi tidak sehat, kamu akan fokus menganalisa asupan makanannya terlebih dulu, setelah itu menyusul obat-obatan. Selama kuliah kamu juga akan dilatih bagaimana menghadapi klien melalui skill lab, tutorial, dan Praktek Kerja Lapangan.
                <br/> Mata kuliah yang bisa kamu temui misalnya Gizi dalam Daur Kehidupan, Imunologi Gizi, Metabolisme Zat Gizi Makro, Metabolisme Zat Gizi Mikro, Patogenesis Penyakit Degeneratif, Patogenesis Penyakit Defisiensi dan Infeksi, Mikrobiologi Pangan, Gizi Kerja dan Olahraga, Penentuan Status Gizi, Manajemen Pelayanan dalam Makanan, Promosi Gizi, Konseling Gizi, Dietetika Penyakit Degeneratif, Analisa Pangan, Pengendalian Mutu Makanan, dan lainnya. Lulus dari Prodi Ilmu Gizi, kamu akan menyandang gelar Sarjana Gizi (S.Gz.). 
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Pendidikan Indonesia, Universitas, Universitas Brawijaya, Universitas Diponegoro, Institut Pertanian Bogor, Universitas Gadjah Mada, Universitas Indonesia, Universitas Andalas, Universitas Hasanudin, Universitas Sriwijaya,  Politeknik Kesehatan Kementerian Kesehatan Jakarta II.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>7. Kebidanan</p>
                <p className='text-justify'>
                Jurusan Kebidanan merupakan jurusan yang akan mengajarkan kamu cara menolong persalinan, kamu akan berperan dalam membantu dan memimpin persalinan. Kamu juga akan dilatih untuk melakukan pemeriksaan kehamilan, melakukan perawatan, juga memberikan asuhan kepada pasien. Selain disiapkan menjadi tenaga medis dalam proses persalinan, kamu juga akan berperan dalam membantu ibu saat proses menyusui, pemulihan kesehatan ibu pasca melahirkan, hingga program keluarga berencana. Kuliahnya nggak cuma teori lho, tapi juga didukung oleh praktek. 
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Dosen, Pengasuh Anak/Bayi, Pekerja Sosial Medis, Perawat Lansia (Care Worker), Pekerja Sosial (Social Worker), Bidan, Penyuluh Kesehatan Masyarakat, Wirausaha (Entrepreuner), Research And Development (RnD), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jurusan Kebidanan menawarkan pendidikan vokasional yang bisa ditempuh selama 3 tahun atau 6 semester untuk D3 dan 4 tahun atau 8 semester untuk D4. Selama di kampus, kamu akan belajar secara lebih mendalam tentang fungsi-fungsi reproduksi dan hal-hal yang berhubungan sama usaha meningkatkan kesejahteraan keluarga. Dibekali juga dengan keterampilan melakukan pemeriksaan pada fase-fase kehamilan, melakukan perawatan, juga memberikan asuhan. Kamu juga akan belajar bagaimana seharusnya bersikap dan menghadapi pasien. Menariknya di kelas Asuhan Kebidanan, kamu akan belajar mendokumentasikan apa saja yang telah kamu lakukan pada pasien.
                <br/> Mata kuliah yang bisa kamu temui misalnya Anatomi Fisiologi, Biorep dan Mikrobiologi, Keterampilan Dasar Kebidanan, Komunikasi dalam Praktik Kebidanan, Etikolegal dalam Praktik Kebidanan, Obstetri dan Ginekologi, Asuhan Kebidanan Kehamilan, Asuhan Kebidanan Persalinan dan Bayi Baru Lahir, Asuhan Kebidanan Nifas dan Menyusui, Asuhan Kebidanan Neonatus Bayi, Balita, dan Anak pra Sekolah, Asuhan Kebidanan Kegawatdaruratan Maternal Neonatal, Asuhan Kebidanan Komunitas, Epidemiologi, Farmakologi, Mutu Layanan Kebidanan dan Kebijakan Kesehatan, Promosi Kesehatan, dan lainnya. Selain teori, pastinya ada praktiknya juga.

                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Brawijaya, Universitas Gadjah Mada, Universitas Hasanuddin, Universitas Indonesia, Universitas Padjadjaran, Universitas Airlangga, Universitas Andalas, Universitas Bengkulu, Politeknik Kesehatan Kemenkes Bandung.
                </p>
              </span>
              <br/><br/>

              
              <span>
                <p className='text-lg bold'>8. Kesehatan Masyarakat</p>
                <p className='text-justify'>
                Program Studi Kesehatan Masyarakat merupakan bidang ilmu yang mempelajari pencegahan dan pengobatan penyakit pada individu. Bidang ilmu ini juga bertujuan menjaga dan mempromosikan kesehatan sosial dengan mempelajari hubungan antara manusia dan lingkungan dan metode pencegahan penyakit, kesehatan dalam suatu kawasan, maupun kesehatan di lingkungan kerja. Pada Prodi Kesehatan Masyarakat, mahasiswa juga akan mempelajari tentang ilmu gizi, manajemen dan administrasi kesehatan, dan proses penyuluhan kesehatan di masyarakat.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Pengendalian Mutu Produk dan Kesehatan, Ahli Diet (Dietitian), Dosen, Pekerja Sosial (Social Worker), Ahli Gizi (Nutritionist), Penyuluh Kesehatan Masyarakat, Bagian Administrasi Rumah Sakit, Staf Ahli Informasi Medis (Rekam Medis), Chocolatier, Wirausaha (Entrepreuner), Research And Development (RnD), System Analyst, Arsiparis.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Prodi Kesehatan Masyarakat merupakan salah satu jurusan favorit calon mahasiswa rumpun kesehatan selain Pendidikan Dokter. Kamu akan ditempa selama 4 tahun atau 8 semester untuk meraih gelar Sarjana Kesehatan Masyarakat.Kamu akan dibekali dengan basic skill yang disebut “MIRACLE”, yaitu Manager (manajer), Innovator (pembaharu), Researcher (peneliti), Apprentice (mampu belajar dalam tim dan mampu bekerja cepat), Communitarian (merakyat), Leader (memimpin), dan Educator (pendidik). Dengan begitu kamu akan siap untuk jadi ahli Kesehatan Masyarakat.
                <br/> Mata kuliah yang akan kamu temui selama kuliah di jurusan Kesehatan Masyarakat antara lain Ilmu Kependudukan, Sosio-Antro Kesehatan, Psikologi Kesehatan, Epidemiologi, Kesehatan Lingkungan, Keselamatan dan Kesehatan Kerja, Higiene Lingkungan Kerja, Pemberdayaan Masyarakat, Kebijakan Kesehatan, Renval Kesehatan, serta Penentuan Status Gizi. Di jurusan ini, kamu nggak hanya dibekali teori lho, tapi juga diberikan kesempatan untuk terjun langsung ke lapangan.
                <br/>  Alternatif jurusan yang jurusan erat kaitanya dengan kesehatan masyarakat yaitu kesehatan lingkungan berfokus pada kesehatan alam dan lingkungan yang dapat berdampak pada kesehatan masyarakat.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Diponegoro, Universitas Airlangga, Universitas Hasanuddin, Universitas Indonesia, Universitas Cenderawasih, Universitas Mulawarman, Universitas Pembangunan Nasional Veteran Jakarta, Unuversitas Sumatera Utara, Universitas Andalas.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>9. Fisioterapi</p>
                <p className='text-justify'>
                Jurusan Fisioterapi merupakan cabang dari ilmu kedokteran. Di jurusan ini kamu mempelajari hal-hal yang berhubungan dengan fungsi gerak, mulai dari menjaga fungsinya agar tetap baik hingga pemulihan fungsi gerak. Jika kamu berminat dengan Jurusan Fisioterapi, kamu bisa memilih mulai dari program D3, D4, dan S1.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Jurusan ini memang belum sepopuler jurusan cabang ilmu kesehatan lainnya seperti kedokteran atau keperawatan padahal prospek kerjanya cukup menjanjikan lho. Lulusan jurusan ini nantinya bisa bekerja di berbagai tempat, misalnya : 1. Bekerja di rumah sakit sebagai bagian fisioterapis 2. Bekerja di instansi pemerintah 3. Akademisi 4. Tim kesehatan klub olahraga.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jurusan Fisioterapi merupakan cabang dari ilmu kedokteran. Di jurusan ini kamu mempelajari hal-hal yang berhubungan dengan fungsi gerak, mulai dari menjaga fungsinya agar tetap baik hingga pemulihan fungsi gerak. Jika kamu berminat dengan Jurusan Fisioterapi, kamu bisa memilih mulai dari program D3, D4, dan S1.
                <br/> Hingga saat ini, Jurusan Fisioterapi hanya tersedia bagi lulusan IPA karena memang hampir secara keseluruhan ilmu yang digunakan jurusan ini adalah rumpun IPA, mulai dari biokimia, anatomi manusia, fisiologi, neurologi, hingga ilmu fisioterapi aplikatif.
                <br/> Untuk menjadi seorang fisioterapis, kamu harus mengikuti program profesi dan selanjutnya kamu akan mengikuti ujian kompetensi, barulah setelah lulus ujian kompetensi kamu bisa menjalani karier sebagai fisioterapis dengan mengantongi STR (Surat Registrasi).
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Hasanuddin, Universitas Udayana, Unuversitas Indonesia, Universitas Airlangga, Politeknik Kesehatan Makassar.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>10.Biomedis</p>
                <p className='text-justify'>
                Ilmu Biomedis mengkaji tentang fenomena makhluk hidup di tingkat molekul, sel, organ, sampai organisme utuh yang berhubungan dengan penyakit, cara pencegahan, pengobatan, dan pemulihannya. Ilmu Biomedis ini merupakan cabang Ilmu Kedokteran yang berkaitan dengan Biologi, Kimia, dan Fisika.
                <br/> Ilmu Biomedis pun memiliki cakupan yang luas, mulai dari menganalisis sampel biologis, mengembangkan strategi terapeutik; seperti perawatan medis, obat-obatan, dan vaksin di industri swasta maupun pemerintahan, serta melakukan penelitian mengenai penyakit manusia.
                <br/> Selain itu, mahasiswa Jurusan Ilmu Biomedis juga mempelajari mengenai obat-obatan medis modern, seperti melakukan pengecekan jenis darah pasien yang sedang kritis, mengidentifikasi penyakit menular, dan mengawasi pasien kanker. Dengan cakupan yang luas tersebut, di jurusan ini kamu akan belajar mengenai patologi, virologi, anatomi, dan masih banyak lagi.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
               
                </p>
                <br/> ...
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Saat kuliah di Jurusan Ilmu Biomedis, kamu akan belajar bagaimana mengaplikasikan teori-teori sains untuk mencegah, mengobati, sekaligus melakukan rehabilitasi penyakit. Hal itulah yang menyebabkan jurusan ini masuk ke dalam Fakultas Kedokteran. Makanya, bagi kamu yang tertarik di bidang kesehatan bisa banget ya masuk ke jurusan ini.
                <br/> Mata kuliah yang akan kamu temui di antaranya adalah Anatomi, Farmakologi, Genetik, Patologi, Epidemiologi, Virologi, dan masih banyak lagi. Pelaksanaan perkuliahannya dilakukan dengan metode pelatihan, pendidikan, penilaian ujian, serta terjun ke lapangan secara langsung.
                <br/> Kamu juga akan sering belajar di laboratorium dan mengembangkan kemampuan yang berkaitan laboratorium, seperti menyelesaikan tugas-tugas dasar, menyiapkan slide mikroskop, dan sebagainya. Selain itu, kamu juga akan belajar mengembangkan keterampilan perencanaan dan eksperimen, penelitian, serta interpretasi data.
                <br/> Jurusan Ilmu Biomedis tidak hanya dapat ditempuh dengan program sarjana, melainkan beberapa kampus juga memiliki program magister pada jurusan ini. Sama seperti jurusan lainnya, waktu tempuh untuk program S1 idealnya adalah 4 tahun, sedangkan program magister atau S2 adalah 2 tahun. Nah, jika kamu mengambil jurusan ini pada program sarjana kamu akan meraih gelar Sarjana Sains, sedangkan untuk program magister akan meraih gelar Magister Biomedis.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Andalas, Institut Pertanian Bogor, Universitas Indonesia.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>11. Rekam Medis</p>
                <p className='text-justify'>
                Rekam medis itu adalah salah satu bagian paling vital di rumah sakit atau klinik. Melalui rekam medis seorang dokter dapat mempelajari dan mengenali kondisi pasien dengan baik, sebab dalam rekam medis tersebut terdapat history atau pencatatan riwayat penyakit, perawatan, pengobatan, dan tindakan medis lainnya yang dialami seorang pasien. Dengan berpatokan pada rekam medis, dokter pun bisa memberikan tindakan yang tepat kepada pasien.
                <br/> Jadi, di jurusan ini kamu akan mempelajari sistem pencatatan dan pelaporan yang terintegrasi dengan teknologi sistem informasi yang tengah berkembang saat ini dan pastinya akan terus disesuaikan dengan perkembangan teknologi informasi yang akan datang.

                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Dosen, Teknisi Alat Kesehatan, Teknisi Rekam Medis, Staf Ahli Informasi Medis.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Memiliki ketelitian dan ketekunan yang baik merupakan salah satu modal utama untuk kamu kuliah di Jurusan Rekam Medis. Di jurusan ini, kamu akan fokus belajar membuat pelaporan, pencatatan, pendataan, dan analisis data yang berhubungan dengan kebutuhan diagnosa pasien. Maka dari itu, mata kuliah yang akan kamu pelajari di jurusan ini juga cenderung spesifik. Beberapa mata kuliah yang akan kamu temui di jurusan ini antara lain Administrasi Kesehatan, Biostatistika, Kodifikasi dan Klasifikasi penyakit, Sistem Informasi Kesehatan, dan lain-lain.
                <br/> Jurusan Rekam Medis di Indonesia tersedia mulai dari jenjang pendidikan Diploma III (D3) hingga Magister (S2). Bagi kamu yang ingin melanjutkan S1 rekam medis dari jurusan lain kesempatannya tetap ada kok, begitupun sebaliknya tetapi harus dari jurusan yang relevan. Salah satu jurusan yang relevan dengan jurusan rekam medis adalah jurusan sistem informarsi atau teknik informatika.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Politeknik Negeri Jember, Politeknik Kesehatan Kemenkes Tasikmalaya, Politeknik Kesehatan Kemenkes Malang, Politeknik Kesehatan Kemenkes Semarang, Universitas Esa Unggul.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>12. Psikologi</p>
                <p className='text-justify'>
                Jurusan Psikologi adalah salah satu bidang keilmuan yang mempelajari tentang manusia. Manusia yang dimaksud di sini tak sebatas pada perilakunya saja, melainkan mempelajari jiwa yang mempengaruhi tindakan tersebut. Misalnya pada konteks sosial, seperti mempelajari bagaimana manusia berinteraksi dengan lingkungannya, atau dalam konteks industri mempelajari bagaimana seseorang berperilaku terkait dengan posisinya di sebuah perusahaan.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Personalia (HRD), Konsultan Pendidikan, Konsultan Karier, Dosen, Perawat Kesehatan Mental, Psikolog, Psikolog Klinis, Penulis (Content Writer), Research And Development (RnD), Management Trainee.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama 4 tahun atau 8 semester kamu akan belajar segala hal yang berkaitan dengan perilaku dan fungsi mental manusia secara ilmiah, hingga layak mendapatkan gelar Sarjana Psikologi. Kamu akan terbiasa melihat manusia dari sudut pandang yang berbeda, serta diminta menerima semua pribadi apa adanya. Selama menjadi mahasiswa psikologi, kamu diharapkan dapat mengasah kepekaan dan intuisi karena akan sangat berguna saat kamu melakukan asesmen nantinya. Selain itu, kamu juga harus punya rasa toleransi yang tinggi dan kemauan untuk menghargai sesama manusia bagaimanapun kondisi mereka. Kemampuan ini penting saat berhubungan dengan subjek atau klien.
                <br/>Mata kuliah yang akan kamu temui selama kuliah antara lain Psikologi Perkembangan, Psikologi Sosial, Psikologi Klinis, Psikologi Industri dan Organisasi, Psikologi Trauma dan Bencana, Psikologi Abnormal, Psikologi Pendidikan, Psikologi Faal, Psikodiagnostika, Psikometri, Kepribadian, Konstruksi Alat Ukur, dan sebagainya. Beberapa fokus studi atau peminatan yang bisa kalian ambil, misalnya Psikologi Perkembangan mempelajari perkembangan pola pikir dan tingkah laku manusia dari masa kecil hingga dewasa. Pada beberapa kampus, mata kuliah mengikuti kurikulum yang sudah ditentukan tanpa peminatan, dan peminatan lebih ditekankan di jenjang pascasarjana, seperti di S1 Psikologi UPI.
                <br/> Psikologi adalah jurusan yang sangat diminati. Banyak kampus yang membuka jurusan ini untuk semua jurusan saat SMA, tidak membedakan jalur IPA atau IPS, utamanya untuk yang mendaftar saat SNBT. Setelah lulus S1, kamu bisa memilih untuk melanjutkan S2, sekolah profesi, ataupun keduanya. Jika melanjutkan ke S2 kamu akan mendapat gelar Magister Psikologi (M.Psi) yang tidak memungkinkan membuka praktik, dan jika melanjutkan ke sekolah profesi, gelar yang akan kamu dapat adalah Sekolah Profesi (Psi) yang dapat memungkinkan kamu untuk membuka praktik.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Diponegoro, Universitas Pendidikan Indonesia, Universitas Airlangga, Universitas Gadjah Mada, Universitas Indonesia


                </p>
              </span>
              <br/><br/>

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ekbis">
            <AccordionTrigger className='text-xl'>Ekonomi dan Bisnis</AccordionTrigger>
              <AccordionContent>
              <span>
                <p className='text-lg bold'>1. Ekonomi Syariah</p>
                <p className='text-justify'>
                Jurusan Ekonomi Syariah sering juga disebut Jurusan Ekonomi Islam di beberapa perguruan tinggi. Secara umum, di jurusan ini kamu akan mempelajari subjek-subjek yang kurang lebih sama seperti Jurusan Ekonomi pada umumnya, misalnya pengelolaan sumber daya, kajian prinsip-prinsip ekonomi baik makro maupun mikro, perdagangan internasional, dan lain-lain. 
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Penjualan (Sales) di Lembaga Keuangan, Pegawai Bank (Account Officer), Pegawai Asuransi, Dosen, Ekonom, Wirausaha (Entrepreuner), Bagian Keuangan (Finance), Peneliti.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jurusan Ekonomi Syariah terbagi lagi menjadi beberapa konsentrasi seperti Ilmu Ekonomi Islam, Manajemen Keuangan Islam, Akuntansi Syari’ah, Perbankan Syari’ah Kebijakan Makro Islam, dan Kewirausahaan Islam. Setiap konsentrasi tersebut memiliki keseruan tersendiri, jadi kamu tinggal memilih yang sesuai dengan passion dan cita-cita kamu kedepannya.
                <br/>Mengenai tugas-tugas kuliah yang akan kamu hadapi di jurusan ini kurang lebih sama kok dengan jurusan lainnya seperti makalah, presentasi, dan observasi lapangan. Perlu kamu ketahui pula, tidak ada syarat yang menyatakan bahwa harus muslim lho untuk masuk jurusan ini, sehingga kamu yang non-muslim pun bisa berkuliah di Jurusan Ekonomi Syariah.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Brawijaya (UB), Universitas Indonesia (UI), Universitas Islam Negeri Syarif Hidayatullah Jakarta, Universitas Islam Negeri Sultan Syarif Kasim Riau, Universitas Airlangga.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>2. Ekonomi Pembangunan</p>
                <p className='text-justify'>
                Ekonomi Pembangunan merupakan salah satu cabang ilmu Ekonomi yang khusus mengkaji persoalan-persoalan pembangunan baik itu dari sektor bisnis, keuangan, ataupun perbankan. Dan jika kamu berminat untuk kuliah di jurusan ekonomi pembangunan, kamu akan berkutat dengan analisa berbagai isu perekonomian untuk mencari dan menemukan solusi dari berbagai persoalan ekonomi secara kritis, kreatif, dan inovatif.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Akuntan, Trend Analyst, Dosen, Ekonom, Research And Development (RnD), Peneliti, System Analyst, Data Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Ekonomi Pembangunan bisa kamu selesaikan dalam 8 semester dengan skripsi sebagai tugas akhirnya. Dan setelah lulus, mahasiswa akan mendapatkan gelar Sarjana Ekonomi. Kepekaan terhadap kondisi ekonomi nasional bisa menjadi modal dasar kamu untuk menganalisis berbagai permasalahan ekonomi mulai dari pertumbuhan sektor industri, ekspor dan impor, investasi domestik, dan berbagai hal lainnya yang berhubungan erat dengan kegiatan perekonomian nasional.
                </p>
                <br/>Selama kuliah juga nantinya kamu akan bertemu dengan mata kuliah terapan ekonomi diberbagai sektor, antara lain manajemen perbankan, valuasi korporat, ekonomi internasional, ekonomi pertanian, ekonomi kependudukan, ekonomi transportasi, dan masih banyak lagi. Jika kamu berminat kuliah di jurusan ini, ada beberapa universitas dan sekolah tinggi yang menyediakan jurusan tersebut.
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Pertanian Bogor (IPB), Universitas Hasanuddin (Unhas), Universitas Diponegoro (Undip), Universitas Islam Negeri Syarif Hidayatullah Jakarta, Universitas Brawijaya, Universitas Gadjah Mada
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>3. Bisnis Digital</p>
                <p className='text-justify'>
                Jurusan Bisnis Digital adalah program studi yang mempelajari bagaimana merancang dan mengelola bisnis dengan memanfaatkan teknologi digital, internet, dan perkembangan teknologi informasi. Jurusan ini merupakan perpaduan dari ilmu bisnis, manajemen, sistem informasi, dan teknik informatika.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Penjualan (Sales), Product Manager, Bagian Penjualan dan Pelayanan (Customer Service), Market Researcher, Dosen, Digital Marketing, Wirausaha (Entrepreuner).
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Umumnya tujuan dari adanya Jurusan Bisnis Digital ini adalah, supaya dapat menyiapkan banyak sumber daya manusia yang menguasai bidang bisnis terkini tentang marketplace, big data, startup digital, pengembangan web, pemrograman, user experience, keamanan siber sampai dengan tingkatan artificial intelligence. Sehingga intinya, jurusan ini akan memperdalam segala hal yang memiliki keterkaitan tentang manajemen bisnis yang dikuatkan juga dengan tambahan teknologi canggih masa kini.
                </p>
                <br/>Untuk mencapai tujuan pembelajaran tersebut, maka mata kuliah yang akan kamu pelajari pun sangatlah unik yakni kombinasi ilmu bisnis dan teknologi. Beberapa mata kuliah yang akan kamu temui antara lain Consumer Behaviour, Market Research, Database, E-Marketing & E-CRM, Manajemen Sistem Informasi, Matematika Bisnis, Strategi Bisnis Digital, dan lain-lain.
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Negeri Medan (Unimed), Universitas Negeri Makassar, Universitas Pendidikan Indonesia (UPI), Universitas Padjadjaran (Unpad)
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>4. AKUNTANSI</p>
                <p className='text-justify'>
                Jurusan Akuntansi adalah bidang studi yang mempelajari materi terkait metode pencatatan dan penyusunan laporan keuangan yang berguna membantu pemangku kepentingan dalam proses pengambilan keputusan. Jurusan Akuntansi dikenal sebagai jurusan yang sangat dekat dengan angka, khususnya segala sesuatu yang terkait dengan keuangan.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Makelar Saham (Broker Saham), Pegawai Bank (Account Officer), Akuntan, Bagian Personalia (HRD), Konsultan Pajak, Pegawai Asuransi, Dosen, Bagian Keuangan (Finance), Auditor.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di Jurusan Akuntansi, kamu akan ditempa untuk mempelajari banyak hal tentang laporan keuangan. Selama 4 tahun atau 8 semester, agar meraih gelar Sarjana Akuntansi atau Sarjana Ekonomi, kamu akan belajar segala hal tentang laporan keuangan. Mulai dari bagaimana membuat laporan keuangan yang sesuai dengan standar masing-masing perusahaan, melakukan analisis laporan keuangan, menilai kelayakan usaha lewat laporan keuangan, sampai menilai prospek kedepannya.
                <br/>Selain itu, kamu juga belajar audit, yang secara sederhana kamu akan mempelajari cara melihat apakah laporan keuangan dapat dikatakan layak atau tidak. Beberapa mata kuliah yang akan di jumpai di Jurusan Akuntansi, antara lain Akuntansi Keuangan, Akuntansi Manajemen, Akuntansi Biaya, Analisis Laporan Keuangan, Perpajakan, Pengauditan, Sistem Informasi Akuntansi, Akuntansi Sektor Publik, Akuntansi Pemerintahan, dll.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Universitas Udayana, Universitas Airlangga, Universitas Diponegoro, Universitas Gadjah Mada, Universitas Pendidikan Indonesia.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>5. Manajemen</p>
                <p className='text-justify'>
                Jurusan manajemen adalah program studi yang mempelajari cara mengelola perusahaan atau organisasi. Jurusan ini termasuk dalam bidang bisnis dan ekonomi, namun lebih fokus pada kegiatan mengelola, merencanakan, dan mengatur semua proses dalam perusahaan,
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Penjualan (Sales), Pegawai Bank (Account Officer), Bagian Operasional dan Logistik, Product Manager, Pegawai Asuransi, Market Researcher, Produser TV atau Radio, Event Planner/Event Organizer, Dosen, Wirausaha (Entrepreuner).
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Saat kuliah di prodi Manajemen, Kamu akan belajar bagaimana caranya mengelola perusahaan baik dalam aspek finansial, operasional, promosi, maupun mengatur struktur organisasi perusahaan. Terdapat beberapa elemen yang bisa kamu pilih untuk mendalami Ilmu Manajemen, seperti Manajemen Keuangan, Manajemen Pemasaran, Manajemen Sumber Daya Manusia, Manajemen Organisasi, Manajemen Operasi, Manajemen Pendidikan, dan lainnya.
                <br/>Beberapa mata kuliah yang bisa kamu temui misalnya Pengantar Bisnis, Pengantar Teori Ekonomi, Matematika, Statistika, Akuntansi Manajemen, Akuntansi Biaya dan beberapa mata kuliah yang sangat spesifik seperti, Manajemen Kinerja dan Balas Jasa, Bisnis Ritel, Etika Bisnis, Analisis Laporan Keuangan, Studi Perencanaan dan Kelayakan Bisnis, Manajemen Operasi, Manajemen Strategis, Manajemen Risiko, Manajemen Mutu dan Produktivitas, dan Manajemen Kuantitatif.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Institut Teknologi Bandung, Universitas Pendidikan Indonesia, Universitas Airlangga, Institut Teknologi Sepuluh Nopember, Universitas Diponegoro, Universitas Padjadjaran, Universitas Gadjah Mada, Universitas Kristen Maranatha.
                </p>
              </span>
              <br/><br/>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mipakom">
            <AccordionTrigger className='text-xl'>Mipakom</AccordionTrigger>
              <AccordionContent>
              <span>
                <p className='text-lg bold'>1. Matematika</p>
                <p className='text-justify'>
                Jurusan Matematika fokus mempelajari berbagai teori matematika secara mendalam, seperti geometri, aljabar, hingga matematika diskrit. Jadi, kamu akan bertemu dengan beragam konsep dalam matematika seperti mempelajari fitur lain dari angka, juga ruang multidimensi. Selain itu, ada juga lho matematika terapan untuk mempelajari aplikasi matematika di bidang lainnya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Penilai Real Estate, Market Researcher, Insinyur Aplikasi (Application Engineer), Insinyur Perangkat Lunak (Software Engineering), Data Scientist, Programmer (Software Developer), Guru SMP/SMA, Guru Sekolah Dasar (SD), Quality Assurance (QA) & Quality Control (QC) Ahli Statistik, Aktuaris.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Matematika selama 4 tahun atau 8 semester, kamu akan banyak mengutak-atik berbagai teorema dan membuktikannya. Selain itu, kamu akan mempelajari bagaimana memperoleh nilai optimal dari permasalahan yang kompleks, bagaimana matematika diaplikasikan dalam bidang komputer, keuangan, dan bidang lainnya. Kamu juga akan dibekali dengan cara berpikir logis, analitis, dan sistematis untuk menyelesaikan suatu permasalahan. Jadi, jurusan ini cocok banget dengan kamu yang suka menghitung dan punya data analisis yang kuat.
                <br/>Untuk menjadi seorang Sarjana Sains yang ahli dalam bidang Matematika, kamu akan bertemu dengan mata kuliah seperti Kalkulus, Matematika Diskrit, Geometri Analitik, Geometri Transformasi, Aljabar Linear, Teori Himpunan, Persamaan Diferensial Elementer, Program Linear, Matematika Komputasi, Fungsi Variabel Kompleks, Analisis Real dan Kompleks, Teori Peluang, Teori Optimasi, dan masih banyak lagi. Setelah lulus, kamu bisa melanjutkan studi ke jenjang pascasarjana pada bidang Matematika atau bidang lain yang terkait dengan Matematika dan aplikasinya. Ada banyak banget pilihan kampus bergengsi di dalam juga luar negeri yang bisa kamu jadikan referensi untuk melanjutkan studi.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Universitas Padjadjaran, Institut Teknologi Bandung, Universitas Brawijaya, Institut Teknologi Sepuluh Nopember, Universitas Ahmad Dahlan, Universitas Sriwijaya, Universitas Airlangga, Universitas Telkom, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>2. Biologi</p>
                <p className='text-justify'>
                Jurusan Biologi pada jenjang kuliah kamu akan mendalami segala fenomena yang berkaitan sama benda hidup seperti sel, struktur/ fungsi organ/ fenomena psikologis yang menjangkiti organisme, interaksi biologi dan lingkungan, keragaman spesies dan warisan, perkembangan, dan evolusi.
                Jurusan biologi adalah ilmu yang mempelajari proses kehidupan makhluk hidup pada semua tingkatan molekuler, seluler, organisme dan ekologi pada hewan dan tumbuhan. serta perkembangan atau evolusi meliputi perilaku, fisiologi dan genetika.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Peneliti, Dosen, Konsultan, Analis Laboratorium, Teknisi Laboratorium, Ahli Gizi, Ahli Bioteknologi, Ahli Genetika, Penulis Artikel, PNS.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Biologi, kamu akan mempelajari kehidupan berbagai jenis organisme dan hubungannya dengan ekosistem. Mulai dari genetika, sistematika dan struktur perkembangan hewan maupun tumbuhan, lingkungan dan konservasi, serta berbagai penerapan ilmu biologi. kamu juga akan dikenalkan dengan rekayasa gen, kultur jaringan, kultur sel hewan, konservasi lingkungan, dan sebagainya. Selama 4 tahun atau 8 semester ditempa, kamu akan merasakan asyiknya kuliah di alam bebas karena kamu bisa mengamati langsung fenomena alam, perilaku hewan, dan tentunya dapat mengaplikasikan ilmu biologi secara langsung.
                <br/>Mata kuliah yang akan kamu jumpai antara lain Struktur dan Perkembangan Hewan, Struktur dan Perkembangan Tumbuhan, Paleontologi, Ekologi, Biologi Evolusi, Genetika, Sistematika Hewan, Sistematika Tumbuhan, Mikrobiologi, Fisiologi Hewan, Fisiologi Tumbuhan, dll. Selain mata kuliah tersebut, kamu tentu saja akan belajar Matematika, Fisika, dan Kimia dasar untuk menunjang perkuliahan di jurusan Biologi. Misalnya nih, untuk membuat suatu pemodelan terhadap proses alam dibutuhkan pemahaman Matematika yang baik. Untuk menjelaskan beberapa fenomena alam, diperlukan pemahaman tentang konsep-konsep Fisika. Begitu pula dalam memahami reaksi-reaksi dalam tubuh makhluk hidup, kamu tidak bisa lepas dari Kimia.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Institut Teknologi Bandung, Institut Pertanian Bogor, Institut Teknologi Sepuluh Nopember, Universitas Airlangga, Universitas Brawijaya, Universitas Diponegoro, Universitas Gadjah Mada, Universitas Negeri Malang, Universitas Negeri Yogyakarta, Universitas Padjadjaran, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>3. Fisika</p>
                <p className='text-justify'>
                Fisika merupakan bidang ilmu yang fokus mempelajari gejala alam tidak hidup (materi) dalam lingkup ruang dan waktu. Mulai dari menelusuri dasar-dasar hukum alam partikel submikroskopis yang membentuk materi hingga perilaku materi alam semesta sebagai satu kesatuan kosmos. Selain itu, kamu juga bakal belajar fisika secara fundamental dan modern seperti; dinamika, gaya elektromagnetik, mekanika kuantum, termodinamika, dan sebagainya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Pegawai Bank (Account Officer), Bagian Operasional dan Logistik, Data Scientist, Bagian Perencanaan Produk Otomotif, Teknisi Tambang, Minyak, dan Material, Guru SMP/SMA, Guru Sekolah Dasar (SD), Instruktur Pelatihan Kejuruan, Dosen, Teknisi Listrik (Electrical Engineer).
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama kamu kuliah di jurusan Fisika selama 4 tahun atau 8 semester, kamu akan belajar Mekanika, Termodinamika, Elektromagnetika, Kuantum, Nuklir, Partikel, karena itu merupakan core-nya Ilmu Fisika. Selain itu, ada mata kuliah turunan elektronika seperti Mikrokontroler, Sensor, Sistem Instrumen untuk mengasah hardskill. Oh iya, kamu kalau kamu kuliah di jurusan Fisika nggak boleh anti sama Matematika ya! Soalnya bisa dibilang Matematika itu bahasa pengantar kuliahnya anak Fisika.
                <br/>Kamu juga akan dibekali dengan beberapa mata kuliah yang didesain mengikuti perkembangan zaman, agar bisa relevan dengan dunia kerja. Nah, nantinya ketika kamu memasuki tahap penulisan tugas akhir, kamu boleh memilih salah satu fokus bidang. Kalau kamu tertarik mengkaji fenomena fisika secara teori maupun komputasi, senang bikin coding untuk simulasi di komputer maka kamu bisa fokus ke Fisika Teoretik dan Komputasional. Ada juga bidang Ekonofisika yang mengkaji fenomena ekonomi tapi dari sudut pandang fisika. Berbeda lagi kalau kamu lebih tertarik untuk menerapkan konsep-konsep fisika yang udah dipelajari supaya bermanfaat untuk masyarakat, cocoknya ambil Fisika Terapan. Jadi, output dari risetmu nantinya berupa alat, seperti bikin pendingin ruang yang memanfaatkan gelombang akustik, atau bikin alat pencitraan seperti x-ray dan radiografi. Tapi, kalau kamu tertantang untuk mengkaji material-material baru dan terapannya maka kamu bisa memilih Fisika Material Fungsional.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Pertanian Bogor , Universitas Indonesia, Institut Teknologi Bandung, Universitas Gadjah Mada, Universitas Padjadjaran, Institut Teknologi Sepuluh Nopember, Universitas Negeri Jakarta, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>4. Kimia</p>
                <p className='text-justify'>
                Di jurusan Kimia, kamu bakal mempelajari struktur, sifat, dan reaktivitas suatu zat. Terdapat pula materi fisika kimia yang mempelajari sifat-sifat zat di lapangan untuk lebih memfokuskan diri pada senyawa organik, senyawa anorganik, protein, dan sebagainya.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Bagian Operasional dan Logistik, Bagian Pengendalian Mutu Produk dan Kesehatan, Data Scientist, Peneliti dan Teknisi Kimia, Teknisi Tambang, Minyak, dan Material, Teknisi Konservasi Lingkungan, Peneliti Bioteknologi, Bagian Perencanaan, Pengembangan, dan Penelitian, Ahli Bioteknologi, Teknisi Laboratorium Klinis, Quality Assurance (QA) & Quality Control (QC), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Untuk meraih gelar Sarjana Sains bidang Ilmu Kimia, kamu akan dibekali pengetahuan seputar sifat dan struktur zat serta interaksi yang terjadi antara materi-materi penyusun zat. Selain itu, kamu juga akan mengeksplorasi zat atau reaksi baru. Perkuliahan di jurusan Kimia lebih bersifat analitik dan ada dominasi kegiatan pengujian di laboratorium, setiap minggu kamu akan dihadapkan dengan jurnal dan laporan praktikum yang beragam. Fokusmu akan mengarah ke bagaimana merancang suatu produk, mulai dari memastikan kualitas bahan bakunya, melakukan uji coba, sampai merumuskan reaksi yang terjadi.
                <br/>Mata kuliah yang akan kamu pelajari selama 4 tahun atau 8 semester antara lain Kimia Organik, Kimia Anorganik, Kimia Analitik, Kimia Fisik, Kemometri, Geokimia, Stereokimia, Elektrokimia, Pemisahan Kimia, Termodinamika Kimia, Spektroskopi Kimia, Kinetika Kimia, dan masih banyak lagi. Beberapa mata kuliah yang disebutkan tidak hanya akan belajar teori, tetapi juga ada praktikum di laboratorium.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Gadjah Mada, Universitas Padjadjaran, Universitas Riau, Universitas Sriwijaya, Universitas Andalas, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>5. Astronomi</p>
                <p className='text-justify'>
                Secara umum, ilmu astronomi mempelajari tentang fenomena berbagai benda langit. Dengan begitu, mahasiswa Jurusan Astronomi akan mempelajari berbagai benda angkasa beserta berbagai peristiwa yang terjadi di luar angkasa. Seluruh kajian keilmuan astronomi berhubungan dengan 3 bidang keilmuan yakni kimia, biologi, dan fisika.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                BJurnalis (Reporter), Konsultan IT, Astronot, Dosen, Penulis, Peneliti.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jika kamu kuliah di jurusan ini, kamu akan mendapatkan pengetahuan yang berhubungan dengan ilmu lainnya yakni biologi, kimia, fisika, dan matematika. Selain itu, belajar astronomi juga akan berhubungan dengan pemrograman, pengembangan perangkat lunak, analisis model, dan statistika. Tujuannya yakni untuk lebih mudah dalam memahami dan membuat model dari fenomena alam yang ada di luar angkasa.
                <br/>Terdapat tiga bidang keahlian di Jurusan Astronomi yakni Tata Surya, Fisika Bintang, serta Galaksi dan Kosmologi. Banyak mata kuliah menarik yang akan kamu jumpai salah satunya yakni Sistem Kalender yang akan membuatmu memahami tentang penentuan hilal atau penentuan awal bulan pada sistem penanggalan Islam.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Teknologi Bandung.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>6. Geofisika</p>
                <p className='text-justify'>
                Geofisika merupakan bidang ilmu kebumian yang mempelajari bumi dengan kaidah-kaidah fisika. Kamu akan dibekali dengan keterampilan melakukan telaah dan menyelesaikan berbagai permasalahan yang bersumber dari pendayagunaan sumber daya alam, sumber daya energi, dan sumber daya lingkungan. Selain itu, kamu juga akan belajar mitigasi bencana kebumian yang dalam praktiknya membutuhkan pemodelan dan pengolahan data geofisika.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                PNS, Teknisi Tambang, Minyak, dan Material, Teknisi Konversasi Lingkungan, Tenaga Ahli Prakiraan Cuaca, Dosen, Bartender, Arsiparis.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah di jurusan Geofisika, kamu akan ditempa selama 4 tahun atau 8 semester. Kamu akan mengkaji fenomena alam, pengukuran, karakteristik, dan penggunannya untuk mengetahui kondisi di bawah permukaan bumi dengan kaidah, prinsip, dan berbagai aspek dalam fisika. Dengan demikian, kamu akan mengetahui sifat-sifat dan kondisi di bawah permukaan bumi secara vertikal maupun horizontal. Kuliah di jurusan Geofisika juga akan ada banyak mata kukiah yang seru lho.
                <br/>Mata kuliah yang bisa kamu temui di Geofisika antara lain Termodinamika, Gelombang, Metode Komputasi, Geologi Struktur, Elektronika Geofisika, Mekanika Medium Kontinyu, Perpetaan, Elektromagnetika Geofisika, Metode Seismik, Seismologi, Metode Gravitasi dan Magnetik, Metode Analisis Geofisika, Metode Geoelektrisitas, Fisika Gunung Api, Sistem Posisi Global, Fisika Batuan, Petrologi, Analisis Spektral Sinyal Digital, Geodinamika, dan sebagainya. Setelah menuntaskan studi, kamu akan meraih gelar Sarjana Sains.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Pertanian Bogor, Institut Teknologi Bandung, Institut Teknologi Sepuluh Nopember, Universitas Brawijaya, Universitas Cenderawasih, Universitas Gadjah Mada, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>7. Ilmu Komputer</p>
                <p className='text-justify'>
                Ilmu Komputer merupakan bidang studi yang identik dengan computer programming. Kamu akan dibekali keterampilan menyusun algoritma dan programming untuk mengembangkan sebuah aplikasi maupun sistem perangkat lunak. Jadi, pada dasarnya kamu akan belajar bagaimana cara agar komputer mampu melakukan berbagai hal yang diinginkan penggunanya. Di jurusan ini, ide-ide kreatifmu bisa diwujudkan apalagi di dunia informasi digital yang semakin tak terbatas ini!
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Perancang Web (Web Designer), Insinyur Aplikasi (Application Engineer), Game Creator, Game Programmer / Game Developer, Insinyur Perangkat Lunak (Software Engineering), Konsultan IT, Data Scientist, Programmer (Software Developer), Dosen, Technopreneur.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Kuliah selama 4 tahun atau 8 semester di jurusan Ilmu Komputer akan sering bersentuhan dengan computer programming. Kamu akan dibekali kemampuan agar bisa membuat sebuah komputer bisa menjalankan semua fungsi yang diinginkan. Di jurusan ini kamu akan dituntut berpikir secara sistematis, tahapan demi tahapan, agar komputer mampu melakukan berbagai hal sebagaimana keinginanmu. Nah, tahapan demi tahapan ini kamu pelajari lebih dalam di algoritma. Kamu akan menerjemahkan algoritma menjadi kode-kode di bahasa pemrograman.
                <br/>Beberapa mata kuliah yang akan kamu temui di jurusan Ilmu Komputer antara lain Teori dan Bahasa Automata, Rekayasa Perangkat Lunak, Pemrograman Sistem, Algoritma dan Data Struktur, Sistem Cerdas, Jaringan Komputer, Data Science and Analytics, Analisis Numerik, Desain dan Analisis Algoritma, Sistem Operasi, Kriptografi dan sebagainya. Jurusan ini menawarkan beberapa bidang minat, seperti Arsitektur dan Infrastruktur TI, Teknologi Perangkat Lunak, Pengolahan Informasi Multimedia, juga Kecerdasan Komputasional.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, Universitas Gadjah Mada, BINUS University, Institut Teknologi Sepuluh Nopember, Institut Pertanian Bogor, Universitas Pendidikan Indonesia, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>8. Teknik Informatika</p>
                <p className='text-justify'>
                Teknik Informatika merupakan bidang ilmu yang mempelajari bagaimana menggunakan teknologi komputer secara optimal guna menangani masalah transformasi atau pengolahan data dengan proses logika. Di Jurusan Teknik Informatika kamu akan mempelajari berbagai prinsip terkait ilmu komputer mulai dari proses perancangan, pengembangan, pengujian, hingga evaluasi sistem operasi perangkat lunak.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Insinyur Aplikasi (Application Engineer), Game Creator, Game Programmer / Game Developer, Insinyur Perangkat Lunak (Software Engineering), Konsultan IT, Data Scientist, Programmer (Software Developer), Teknisi Robot (Robot Engineer), Dosen, Teknisi Rekam Medis, Technopreneur.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jadi, selama 4 tahun atau 8 semester kamu akan dibekali dengan ilmu dan keterampilan untuk pengembangan perangkat lunak. Sehari-hari, kamu akan mempelajari bahasa pemrograman hingga kecerdasan buatan dan multimedia. Selain itu, kamu pun akan belajar bagaimana memecahkan berbagai masalah komputasi, seperti mencari informasi dari miliaran dokumen web, memproses jutaan permintaan secara bersamaan, menciptakan sistem keamanan, dan masih banyak lainnya.
                <br/>Beberapa mata kuliah yang bisa kamu temui di jurusan Teknik Informatika antara lain Sistem Digital, Struktur Data, Pemrograman Berorientasi Objek, Komputasi Numerik, Sistem Basis Data, Organisasi Komputer, Manajemen Basis Data, Kecerdasan Buatan, Sistem Operasi, Analisis dan Perancangan Sistem Informasi, Kecerdasan Komputasional, Manajemen Proyek Perangkat Lunak, Pemrograman Web, Keamanan Informasi dan Jaringan, Perancangan Perangkat Lunak, dan sebagainya. Setelah lulus, kamu akan menyandang gelar Sarjana Komputer atau Sarjana Teknik atau Sarjana Sains tergantung kebijakan kampus.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Teknologi Bandung, Universitas Padjadjaran, Institut Teknologi Sepuluh Nopember, Universitas Hasanuddin, Universitas Sebelas Maret, Universitas Telkom, Universitas Komputer Indonesia, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>9. Statistika</p>
                <p className='text-justify'>
                Statistika merupakan perpanjangan dari bidang studi Matematika. Bedanya, Statistika lebih fokus ke arah data dan pengolahannya. Sederhananya, jika kamu kuliah di jurusan Statistika akan mempelajari cara mengumpulkan, menganalisis, dan menyajikan data ke dalam bahasa yang mudah dipahami sehingga bisa dijadikan sebuah informasi untuk banyak orang.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Analis Kontrol Kualitas, Analis Bisnis, Analisis Riset Operasional, Data Scientist, Aktuaris, Peneliti Survei, Pegawai Bank, Tenaga Pengajar.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama 4 tahun atau 8 semester kuliah di jurusan Statistika, kamu akan fokus bagaimana mengumpulkan, menganalisa, dan menginterpretasi data. Karena pada dasarnya, Statistika itu belajar alat analisis untuk penelitian. Statistika merupakan cabang dari ilmu Matematika di mana para Statistikawan bertugas merumuskan dan merangkai bahasa Matematis kemudian dijadikan alat pengolah data. Dalam melakukan analisis data, kamu akan dibantu oleh beberapa jenis software. Jadi jangan khawatir ya! Kuliahnya nggak melulu soal rumus dan perhitungan matematika.
                <br/>Mata kuliah yang akan kamu temui di jurusan Statistika misalnya Kalkulus, Metode Numerik, Metode Survei Sampel, Analisis Regresi, Komputasi Statistika, Proses Stokastik, Statistika Nonparametrik, Statistika Multivariat, Analisis Data Kategori, Analisis Runtun Waktu, juga Teknik Simulasi.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Pertanian Bogor, Institut Teknologi Sepuluh Nopember, Universitas Brawijaya, Universitas Airlangga, Universitas Diponegoro, Universitas Hasanuddin, Universitas Padjadjaran, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>10. Aktuaria</p>
                <p className='text-justify'>
                Jurusan Aktuaria adalah jurusan yang mempelajari ilmu probabilitas, matematika, statistik dan keuangan untuk dapat melakukan pengelolaan resiko dan ketidakpastian dalam membantu client meminimalkan resiko.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Akuntan, Ekonom, Aktuaris.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Aktuaria adalah ilmu tentang asuransi, atau ilmu tentang pengelolaan risiko keuangan di masa yang akan datang. Kamu akan mendapatkan mata kuliah yang merupakan kombinasi antara ilmu tentang peluang, matematika, statistika, keuangan, pemrograman komputer, hingga data science atau big data.
                <br/>Dengan belajar di jurusan ini kamu diharapkan dapat menjadi ahli madya asuransi yang punya keahlian praktis dalam bidang administrasi asuransi dan aktuaria, serta keahlian dalam profesi perencanaan keuangan personal.
                <br/>Meskipun masih berada dalam lingkup matematika, jurusan Akturia memiliki perbedaan dengan lulusan matematika lainnya. Kamu akan dilatih menjadi seseorang yang mampu menghitung prediksi dan peluang sekaligus menganalisis risiko dan dampak yang akan terjadi di masa depan.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Indonesia, IPB University, Universitas Gadjah Mada, Universitas Padjadjaran, Institut Teknologi Sepuluh Nopember, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>11. Ilmu Kelautan</p>
                <p className='text-justify'>
                Ilmu Kelautan merupakan cabang dari ilmu bumi yang mempelajari lautan. Topik pembahasan di jurusan ini antara lain meliputi organisme laut, dinamika ekosistem laut, geologi dasar laut, arus samudera, gelombang, dan dinamika cairan geofisika. Selain itu, bidang ini juga berhubungan dengan atmosfer lho. Tak heran jika nantinya kamu juga akan membahas isu-isu mengenai perubahan iklim, potensi pemanasan global, dan masalah biosfer terkait.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Pegawai Bank (Account Officer), Teknisi Tambang, Minyak, dan Material, Peternak, Teknisi Konservasi Lingkungan, Peneliti Bioteknologi, Dosen, Ekonom, Wirausaha (Entrepreneur), Research And Development (RnD), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Selama 4 tahun atau 8 semester kuliah di Jurusan Kelautan kamu akan diajak untuk mempelajari ilmu bumi khususnya lautan secara mendalam. Kamu akan banyak membahas tumbuhan, hewan, dan mikroba laut juga interaksi ekologinya dengan samudera di Oseanografi Biologi. Kamu akan mengkaji kimia lautan dan interaksinya dengan atmosfer di Oseanografi Kimia serta mempelajari geologi dasar samudera di Oseanografi Geologi. Kamu juga akan meneliti atribut fisik lautan di Oseanografi Fisik
                <br/>Mata kuliah yang akan kamu temui antara lain Ichtyologi, Zoologi Laut, Ekologi Perairan, Ekologi Laut Tropis, Mikrobiologi Laut, Oseanografi, Pemetaan Sumber Daya Hayati Laut, Meteorologi Laut, Geologi Laut, Koralogi, Dinamika Ekosistem Laut, Pencemaran Laut, Penginderaan Jauh Kelautan, Instrumentasi Kelautan, Konservasi Sumber Daya Kelautan dan Perikanan, Pengelolaan Wilayah Pesisir dan Laut Terpadu, Bioteknologi Laut, dan sebagainya. Nantinya setelah berhasil menyelesaikan studi, kamu akan menyandang gelar Sarjana Kelautan.
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Institut Pertanian Bogor, Universitas Padjadjaran, Institut Teknologi Bandung, Universitas Gadjah Mada, Universitas Diponegoro, Universitas Brawijaya, Universitas Sriwijaya, dll.
                </p>
              </span>
              <br/><br/>

              <span>
                <p className='text-lg bold'>12. Ilmu Perikanan</p>
                <p className='text-justify'>
                Jurusan Perikanan mempelajari tentang berbagai aspek perikanan dan kelautan. Mulai dari budidaya ikan hias maupun ikan konsumsi, mencegah dan menanggulangi penyakit pada ikan, memformulasikan pakan, mengelola lingkungan perairan, mengelola industri pengolahan hasil perikanan, hingga meningkatkan nilai ekonomis limbah perikanan.
                </p>
                <div className='flex flex-row justify-center'>
                  <div className='flex flex-col'>
                    <Image alt="kedokteran" src={placeholder} width={500} height={250}/>
                    <p className='text-center'>Sumber: Zharfan Faza Wibawa</p></div>
                </div>
                <br/>
                <p className='text-lg bold'>Prospek Kerja: </p>
                <p className='text-justify'>
                Pegawai Negeri Sipil (PNS), Pegawai Negeri Sipil Daerah (PNS Daerah), Peternak, Teknisi Konservasi Lingkungan, Dosen, Chocolatier, Quality Assurance (QA) & Quality Control (QC), System Analyst.
                </p>
                <br/>
                <p className='text-lg bold'>Sistem Perkuliahan: </p>
                <p className='text-justify'>
                Jurusan Perikanan umumnya dibagi menjadi beberapa program, antara lain Budidaya Perairan, Manajemen dan Sumber Daya Perairan, Pemanfaatan Sumber Daya Perikanan, Agrobisnis Perikanan, serta Teknologi Hasil Perikanan. Kamu akan ditempa selama 4 tahun atau 8 semester agar meraih gelar Sarjana Perikanan setelah menuntaskan studi. Kuliahnya juga terbilang seru, lho. Karena ada beberapa praktikum di daerah pesisir. Jadi bisa sekalian jalan-jalan deh!
                </p>
                <br/>
                <p className='text-lg bold'>Perguruan Tinggi: </p>
                <p className='text-justify'>
                Universitas Padjadjaran, Institut Pertanian Bogor, Universitas Brawijaya, Universitas Hasanuddin, Universitas Riau.
                </p>
              </span>
              <br/><br/>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pendidikan">
            <AccordionTrigger className='text-xl'>Pendidikan</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sospol">
            <AccordionTrigger className='text-xl'>Sospol</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
            <AccordionTrigger className='text-xl'>Teknik</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vokasi">
            <AccordionTrigger className='text-xl'>Vokasi</AccordionTrigger>
              <AccordionContent>
              <h1>Agraria</h1>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
      </div>
    </main>
  )
}