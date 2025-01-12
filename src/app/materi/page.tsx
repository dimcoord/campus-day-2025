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
                <h1>Agraria</h1>
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