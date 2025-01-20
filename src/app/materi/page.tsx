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

import Link from 'next/link'
import maskot from "../../../public/maskot1.png"

export default function Home() {
  const [value, setValue] = useState('')

  return (
    <main className="bg-generic w-screen bg-no-repeat bg-cover">
      <div className="container mx-auto p-4">

      <Card className="max-w-screen md:max-w-[50vw] mx-auto mt-20">
        <CardHeader>
          <CardTitle className='text-xl'>Kamu mau baca apa?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row justify-between">
            <div>
              <p>Klik salah satu materi untuk mengaksesnya, ya</p>
            </div>
            <Image alt="maskot" src={maskot} width={200} height={200}
            className='size-28'/>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-6"></div>

      <Card id="entre" className="max-w-screen mx-auto mt-20">
        <CardContent>
        <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            <AccordionItem value="entre">
              <AccordionTrigger className='text-2xl'>Entrepreneurship</AccordionTrigger>
              <AccordionContent>
                <p className='text-justify'>
                  Entrepreneur adalah individu dengan ide unik dan praktis untuk memulai serta mengelola bisnis, sementara entrepreneurship adalah proses yang melibatkan identifikasi peluang, pengembangan, dan optimalisasi sumber daya. Jadi entrepreneur adalah pelaku usaha bisnis, sedangkan entrepreneurship adalah proses dalam mengelolanya. Pola pikir entrepreneur penting bagi mahasiswa karena membantu mengembangkan kreativitas, inovasi, dan kemandirian untuk menghadapi persaingan dunia kerja. Pola pikir ini melatih mahasiswa berpikir kritis, menyelesaikan masalah, dan menciptakan peluang baru, baik dalam bisnis maupun proyek sosial.
                  <br/><br/>
                  Beberapa bisnis potensial yang dapat digeluti mencakup beberapa sektor, diantaranya sektor kuliner, seperti makanan sehat atau camilan kreatif; fashion dan aksesoris, seperti pakaian custom atau produk lokal handmade; teknologi, seperti pengembangan aplikasi, website, atau layanan digital; hingga bidang jasa, seperti desain grafis, e-commerce, konten kreator, dan pertanian urban (misalnya budidaya tanaman hidroponik). Selain itu, bisnis pendidikan, seperti kursus online atau les privat, serta event organizer kecil untuk acara tertentu juga memiliki prospek menjanjikan.
                  <br/><br/>
                  Seorang entrepreneur memiliki pola pikir khas yang berfokus pada solusi, orientasi pelanggan, dan visi yang kuat. Mereka memadukan kreativitas dengan inovasi untuk menghasilkan ide-ide unik. Keberanian mengambil risiko yang didukung dengan analisis matang, menjadi dasar dari keberhasilan. Selain itu, mereka dituntut memiliki kemampuan komunikasi yang baik, kepemimpinan kuat, manajemen waktu yang efisien, serta ketangguhan menghadapi tantangan. Keberanian beradaptasi terhadap perubahan juga merupakan sifat penting seorang entrepreneur.
                  <br/><br/>
                  Tahap membangun bisnis dimulai dengan identifikasi ide yang relevan dengan minat, kemampuan, serta kebutuhan pasar. Langkah berikutnya adalah riset pasar yang meliputi analisis target konsumen dan kompetitor. Penyusunan rencana bisnis menjadi dasar operasional, termasuk menetapkan visi, misi, strategi pemasaran, dan proyeksi keuangan. Setelah itu, pendirian legalitas usaha, pengumpulan modal, pengembangan produk, hingga pemasaran dan promosi secara efektif melalui media sosial atau kampanye lokal harus dilakukan secara terencana. Evaluasi rutin diperlukan untuk mengidentifikasi kekurangan dan melakukan perbaikan demi keberlanjutan bisnis.
                  <br/><br/>
                  Untuk meminimalisir kegagalan, pengusaha pemula dapat memulai dari skala kecil untuk menguji pasar, bersikap adaptif, serta mengelola keuangan secara baik dengan mencatat transaksi dan menghindari pemborosan. Dukungan dari komunitas bisnis dan pelanggan sangat penting untuk perkembangan usaha. Pemanfaatan teknologi digital, seperti platform e-commerce, membantu meningkatkan efisiensi dan jangkauan pemasaran. Fokus pada kualitas produk dan kepuasan pelanggan menjadi pondasi untuk membangun loyalitas yang berkelanjutan.
                  <br/><br/>
                  Network dan platform digital juga menjadi alat strategis. Keaktifan di LinkedIn dapat membangun koneksi profesional, sementara media sosial memperkuat visibilitas. Kolaborasi dengan influencer dan pemanfaatan marketplace memungkinkan bisnis menjangkau lebih banyak konsumen. Mengikuti seminar atau webinar membantu memperluas jaringan sekaligus memperoleh wawasan baru. Bagi mahasiswa, sumber pendanaan dapat berasal dari tabungan pribadi, hibah dari universitas, atau program kewirausahaan seperti Program Kreativitas Mahasiswa (PKM). Kompetisi bisnis mahasiswa juga menawarkan peluang pendanaan tambahan. 
                  <br/><br/>
                  Dalam mengukur kesuksesan dan keberhasilan, indikator seperti pertumbuhan penjualan, laba bersih, dan kepuasan pelanggan dapat digunakan. Ketika menghadapi kegagalan, langkah pertama yang harus dilakukan adalah evaluasi objektif untuk memahami penyebabnya. Pelajaran dari kegagalan tersebut harus digunakan untuk menyusun strategi baru. Berani membuat inovasi dan mencari dukungan dari mentor atau komunitas bisnis sangat membantu dalam proses kebangkitan. Mulailah lagi dengan langkah kecil, kendalikan keuangan dengan baik, dan teruslah menyesuaikan strategi sesuai dengan kebutuhan pasar untuk mencapai kesuksesan yang berkelanjutan.
                  <br/><br/>
                </p>
              </AccordionContent>
            </AccordionItem>
        </Accordion>
        </CardContent>
      </Card>
      <div className="space-y-6"></div>

      <Card id="adaptasi" className="max-w-screen mx-auto mt-20">
        <CardContent>
        <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            <AccordionItem value="adaptasi">
              <AccordionTrigger className='text-2xl'>Adaptasi Perkuliahan</AccordionTrigger>
              <AccordionContent>
                <p className='text-justify'>
                  Salah satu perbedaan utama antara dunia perkuliahan dan SMA adalah kurikulum yang diterapkan. Kurikulum SMA berfokus pada pembelajaran mata pelajaran inti seperti Matematika, Bahasa Inggris, Sains, Sejarah, dan lainnya. Sementara itu, kurikulum perguruan tinggi memiliki cakupan yang lebih luas dan mendalam dalam bidang tertentu. Kurikulum perguruan tinggi meliputi mata pelajaran yang lebih spesifik dan sering kali terbagi menjadi program studi yang berbeda. Perkuliahan seringkali lebih menekankan metode belajar diskusi. Melalui diskusi, mahasiswa juga belajar menghargai perspektif lain, mengembangkan keterampilan komunikasi yang efektif, dan membangun rasa percaya diri dalam menyampaikan gagasan mereka. Selain itu juga, mahasiswa harus menyusun rencana studi mereka sendiri, yang melibatkan pemilihan mata kuliah yang ingin diambil setiap semester berdasarkan program studi dan minat pribadi. Hal ini berbeda dengan SMA, di mana kurikulum dan jadwal pelajaran telah ditentukan oleh sekolah. Mahasiswa harus belajar mengatur jadwal mereka sendiri, menghadapi beban akademis yang lebih besar, dan memastikan mereka menyelesaikan tugas-tugas tepat waktu. Selain itu, mengelola keuangan sendiri menjadi tantangan baru bagi banyak mahasiswa. Mereka harus belajar membuat anggaran, mengontrol pengeluaran, dan mencari sumber pendapatan tambahan seperti pekerjaan paruh waktu atau beasiswa untuk memenuhi kebutuhan sehari-hari. 
                  <br/><br/>
                  Dalam memanajemen waktu dan meningkatkan kemandirian, mulailah dengan membuat jadwal harian dan mingguan yang terorganisir, sehingga dapat mengatur prioritas tugas akademis dan kegiatan lainnya. Kalian juga dapat menggunakan metode time blocking, di mana setiap tugas atau aktivitas diberikan slot waktu yang telah ditentukan sebelumnya. Misalnya, kalian memblokir waktu dari pukul 9 hingga 10 pagi untuk mengerjakan tugas kuliah, kemudian dari pukul 10 hingga 11 pagi untuk membaca materi tambahan, dan seterusnya. Pendekatan ini membantu memastikan bahwa setiap tugas mendapatkan perhatian dan waktu yang cukup, sehingga mengurangi risiko tumpang tindih atau pengabaian tugas penting. Salah satu cara mengatur keuangan yang paling mudah, yaitu buatlah anggaran bulanan yang mencakup semua pengeluaran utama, seperti biaya sewa, makanan, transportasi, dan kebutuhan kuliah. Dengan memiliki anggaran yang jelas, kalian dapat melihat dengan pasti berapa banyak uang yang dapat disisihkan untuk tabungan. Automasi tabungan juga bisa menjadi solusi praktis; atur agar sebagian dari pendapatan kalian, misalnya uang kiriman dari orang tua atau beasiswa, secara otomatis disetor ke rekening tabungan setiap bulan. Selain itu, cobalah untuk selalu mencari cara untuk menghemat pengeluaran, seperti memasak makanan sendiri daripada sering makan di luar, atau memanfaatkan transportasi umum. Menjaga gaya hidup sederhana dan menghindari pembelian impulsif juga penting untuk menjaga keseimbangan keuangan.
                  <br/><br/>
                  Dalam dunia perkuliahan, mahasiswa tidak hanya dituntut untuk unggul dalam bidang akademis, tetapi juga diharapkan untuk berkembang dalam berbagai aspek kehidupan lainnya. Salah satu cara untuk mencapai hal ini adalah dengan berpartisipasi dalam Organisasi Mahasiswa (ORMAWA). Mahasiswa dapat mengasah keterampilan kepemimpinan dengan mengambil peran aktif dalam mengorganisir kegiatan dan memimpin tim. Keterampilan ini sangat berguna untuk karier profesional di masa depan. Berikut beberapa contoh ORMAWA beserta penjelasannya:
                  <br/><br/>
                </p>

                <li>Badan Eksekutif Mahasiswa (BEM)</li>
                <p className='text-justify'>
                BEM adalah organisasi mahasiswa yang mirip dengan pemerintahan di tingkat universitas. Tugas utama BEM adalah mengoordinasikan kegiatan mahasiswa, mewakili kepentingan mahasiswa di depan pimpinan universitas, dan menyelenggarakan berbagai program serta acara kampus. BEM biasanya terdiri dari berbagai departemen yang mengelola aspek-aspek seperti akademik, kesejahteraan mahasiswa, dan hubungan eksternal.
                </p><br/>
                <li>Himpunan Mahasiswa (HIMA)</li>
                <p className='text-justify'>
                HIMA adalah organisasi yang mewadahi mahasiswa dari satu jurusan atau program studi tertentu. Tujuan utama HIMA adalah mengembangkan keilmuan dan keterampilan mahasiswa di bidang studi mereka, serta membangun kebersamaan antar-mahasiswa satu jurusan. HIMA sering mengadakan seminar, workshop, dan lomba akademis yang berkaitan dengan bidang studi mereka.
                </p><br/>
                <li>Unit Kegiatan Mahasiswa (UKM)</li>
                <p className='text-justify'>
                UKM adalah organisasi yang fokus pada minat dan bakat tertentu. Contohnya, UKM seni dan budaya yang mencakup teater, tari, musik, dan seni rupa; UKM olahraga seperti basket, sepak bola, bulu tangkis; dan UKM keterampilan khusus seperti debat, fotografi, dan kewirausahaan. UKM memberikan wadah bagi mahasiswa untuk menyalurkan dan mengembangkan minat serta bakat mereka di bidang tertentu.
                </p><br/>

                <p className='text-justify'>
                Namun, dengan segala aktivitas dan tanggung jawab yang ada bersamaan dengan keterlibatan ORMAWA, penting bagi mahasiswa untuk memikirkan bagaimana caranya agar akademik mereka tidak terganggu, salah satunya dengan belajar mandiri. Belajar mandiri adalah keterampilan penting yang perlu dikembangkan oleh mahasiswa untuk mencapai kesuksesan akademis dan pribadi. Pertama, mulailah dengan menyusun jadwal belajar yang teratur dan disiplin. Tentukan waktu khusus setiap hari untuk belajar dan pastikan  tetap konsisten dengan jadwal tersebut. Selanjutnya, buatlah ruang belajar yang nyaman dan bebas dari gangguan, dengan pencahayaan yang baik dan perlengkapan yang diperlukan. Manfaatkan berbagai sumber belajar, seperti buku teks, jurnal, video tutorial, dan kursus online, untuk memperkaya pemahaman  tentang materi. Selain itu, gunakan teknik pembelajaran aktif, seperti membuat catatan, membuat mind map, atau mengajarkan materi kepada orang lain, untuk memperdalam pemahaman. Teknik manajemen waktu seperti teknik Pomodoro juga bisa sangat membantu. Belajarlah dalam interval waktu tertentu (misalnya, 25 menit) diikuti oleh istirahat singkat untuk menjaga fokus dan produktivitas. 
                <br/><br/>
                Namun, keberhasilan di dunia akademis tidak hanya bergantung pada kemampuan mandiri saja. Kita sebagai individu juga harus memiliki jaringan relasi yang kuat supaya bisa membuka banyak peluang, baik di dalam kampus maupun setelah lulus nanti. Dengan bertemu banyak orang dari berbagai latar belakang, kalian bisa belajar banyak hal baru. Bergabung dalam organisasi kampus adalah cara yang paling efektif untuk memperluas pertemanan sekaligus mengembangkan keterampilan sosial dan kepemimpinan. Menghadiri seminar juga membuka peluang untuk berdiskusi dengan dosen atau praktisi yang mungkin bisa membimbing di masa depan. Kadang-kadang, sebuah koneksi yang terbentuk di acara semacam ini bisa berubah menjadi kolaborasi profesional atau bahkan membuka pintu karier. Bergabung dalam komunitas di luar kampus dapat memberikan kesempatan untuk bertemu dengan orang-orang dari berbagai latar belakang yang mungkin tidak kalian temui di kampus. Mulai dari komunitas hobi, klub olahraga, hingga kelompok sukarelawan, semuanya bisa menjadi jembatan untuk memperluas jaringan pertemanan di luar lingkungan akademis. Bergabung dengan komunitas di luar kampus juga memberi sudut pandang baru serta memperluas wawasan. Kalian bisa belajar dari pengalaman orang-orang yang lebih beragam, yang nantinya akan membantu beradaptasi lebih baik di dunia kerja dan kehidupan sosial. 
                <br/><br/>
                Membangun jaringan pertemanan melalui LinkedIn dapat menjadi langkah strategis dalam memperluas koneksi profesional. Pertama, pastikan profil LinkedIn lengkap dan menarik, mencakup foto profesional, ringkasan singkat yang menggambarkan individu, serta pengalaman dan keterampilan yang relevan. Selanjutnya, mulailah dengan mengirim permintaan koneksi kepada orang-orang yang sudah kalian kenal, seperti teman sekelas, dosen, dan alumni universitas. Jangan ragu untuk memperluas jaringan  dengan menghubungi orang-orang yang bekerja di bidang yang  minati, atau mereka yang memiliki latar belakang yang serupa. Saat mengirim permintaan koneksi, sertakan pesan pribadi yang sopan dan singkat, menjelaskan alasan ingin terhubung. Aktiflah dalam mengikuti dan berpartisipasi dalam diskusi di grup LinkedIn yang relevan dengan minat dan industri. Selain itu, rajinlah memposting konten yang berharga dan relevan, seperti artikel atau pencapaian akademis, untuk menunjukkan keahlian dan minat. Dengan cara ini, tidak hanya membangun jaringan pertemanan, tetapi juga membangun reputasi profesional yang kuat di platform LinkedIn. Kuncinya adalah bersikap proaktif, komunikatif, dan otentik dalam setiap interaksi.
                <br/><br/>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <div className="space-y-6"></div>

      <Card id="rumpun" className="max-w-screen mx-auto mt-20">
        <CardHeader>
          <CardTitle className='text-2xl'>Rumpun Ilmu</CardTitle>
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
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vSGu6OQPwW9CoRgYawzMzI120IvHJpRxWcvTiCrc3AEL10WkR1d4feDgudF64Mwo8Y1zsE_STvgDdO8/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="humaniora">
              <AccordionTrigger className='text-xl'>Humaniora</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vSTNaUuJ4r198Ee7tw_Gdv3C51r7oYrXnftWefRBFaqcnvPdiUw3wtR3Ew3ZfDNjvim1YwLDn4u4pYV/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kesehatan">
              <AccordionTrigger className='text-xl'>Kesehatan</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vRJIWPjTUD5dGtVgi9JSc5aV_pGnNWssTlJjLvg6j3u5esNZkpM64lbrGj0DwuLCo0YNcABXFbaDZQG/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ekbis">
              <AccordionTrigger className='text-xl'>Ekbis</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vQPN6UK0HDzFs54Qq4lvjg_nTfejbZqS_PK1SjBqo6lhENBA4DE8R2mEqoSs1Y82J-b2btmOzz_htYd/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mipakom">
              <AccordionTrigger className='text-xl'>Mipakom</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vToMvl6vmEkmgFmULnQoZz1z3BGLYcH2J-7lMtUQ22FB9hA1nwwfnaUOHGYsvLlcGO7j4Of0VqC-Jk1/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pendidikan">
              <AccordionTrigger className='text-xl'>Pendidikan</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vS__bqiE0CODQkAw20L4JJ_Y3SfgGhi1Pw6IXKV75izCe-b1AV1nH9Vrar9-iuS3tsDaJsEMOAoPSmv/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sospol">
              <AccordionTrigger className='text-xl'>Sospol</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vRghdSvSEgXl59oL1maD09MABsF091PBQI2fh7mj-CLPANO5l3ZhyU8Efcn5hqlx8n9nQzmSZ16mwcD/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teknik">
              <AccordionTrigger className='text-xl'>Teknik</AccordionTrigger>
              <AccordionContent>
              <iframe width={500} height={800} className='w-full'
               src="https://docs.google.com/document/d/e/2PACX-1vQVrw_jcwpLGuxi8HhijJv5KRcbrMI3Kb16kWeynOPscvdKOkeMbWZCMicOa_QiT5g1vXfmYpPhh1u3/pub?embedded=true"></iframe>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
      </div>
    </main>
  )
}