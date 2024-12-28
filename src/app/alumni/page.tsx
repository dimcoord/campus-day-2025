import Image from "next/image";

export default function Home() {
  return (
    <html lang="en">
    <head>
      <title>
      Educational Institution
      </title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet"/>
    </head>
    <body className="font-roboto bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img alt="Logo of the educational institution" className="mr-3" height="50" src="https://storage.googleapis.com/a1aa/image/X2e6C25kwLWSR6EAADKS1PeYTSpX8mntf2bpfQ2WCJLCIY9PB.jpg" width="50"/>
        <h1 className="text-2xl font-bold">
          EduInstitution
        </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
        <a className="hover:underline" href="#">
          Home
        </a>
        <a className="hover:underline" href="#">
          About Us
        </a>
        <a className="hover:underline" href="#">
          Courses
        </a>
        <a className="hover:underline" href="#">
          Admissions
        </a>
        <a className="hover:underline" href="#">
          Contact
        </a>
        </nav>
        <div className="md:hidden">
        <button className="text-white focus:outline-none" id="menu-btn">
          <i className="fas fa-bars">
          </i>
        </button>
        </div>
      </div>
      </header>
      <div className="hidden bg-blue-600 text-white p-4" id="mobile-menu">
      <a className="block py-2" href="#">
        Home
      </a>
      <a className="block py-2" href="#">
        About Us
      </a>
      <a className="block py-2" href="#">
        Courses
      </a>
      <a className="block py-2" href="#">
        Admissions
      </a>
      <a className="block py-2" href="#">
        Contact
      </a>
      </div>
      <section className="bg-green-500 text-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
        Welcome to EduInstitution
        </h2>
        <p className="text-lg mb-6">
        Empowering students to achieve their full potential
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
        </button>
      </div>
      </section>
      <section className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
        About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
        <img alt="Image of the institution building" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" height="300" src="https://storage.googleapis.com/a1aa/image/hlwFZOniIXJzLlDyD2xIqbwehP9K9qYDZvf1XQigJVCFCWfnA.jpg" width="400"/>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
          EduInstitution is dedicated to providing high-quality education to students from all backgrounds. Our mission is to foster a love of learning and to help students achieve their academic and personal goals.
          </p>
          <p className="text-lg">
          We offer a wide range of courses and programs designed to meet the needs of our diverse student body. Our experienced faculty and staff are committed to supporting students every step of the way.
          </p>
        </div>
        </div>
      </div>
      </section>
      <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
        Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <img alt="Image representing Course 1" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/drCjyOPxZtJXORYiSvUGi9OLoHBmK24b2fxKgSGgW4tBBrfTA.jpg" width="300"/>
          <h3 className="text-xl font-bold mb-2">
          Course 1
          </h3>
          <p className="text-lg mb-4">
          Description of Course 1. This course covers various topics and provides in-depth knowledge.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enroll Now
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img alt="Image representing Course 2" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/CZFzEqBTO27FBNqsZsfpBqsw8LNQm9xB0qEeUxcbcH9HCWfnA.jpg" width="300"/>
          <h3 className="text-xl font-bold mb-2">
          Course 2
          </h3>
          <p className="text-lg mb-4">
          Description of Course 2. This course covers various topics and provides in-depth knowledge.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enroll Now
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img alt="Image representing Course 3" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/upnepitzKFWHeEo81VmkcmtIMVWEyzfg0b5L3MAWAe94HY9PB.jpg" width="300"/>
          <h3 className="text-xl font-bold mb-2">
          Course 3
          </h3>
          <p className="text-lg mb-4">
          Description of Course 3. This course covers various topics and provides in-depth knowledge.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enroll Now
          </button>
        </div>
        </div>
      </div>
      </section>
      <section className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
        Admissions
        </h2>
        <div className="flex flex-col md:flex-row items-center">
        <img alt="Image of students during admission process" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" height="300" src="https://storage.googleapis.com/a1aa/image/1PbeDTiXMnQ4EattLTeR9NYEYtWRiKOxFjQlT1tvzRnJCWfnA.jpg" width="400"/>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
          Our admissions process is designed to be straightforward and accessible. We welcome students from all backgrounds and are committed to helping you achieve your educational goals.
          </p>
          <p className="text-lg">
          To apply, please fill out our online application form and submit the required documents. Our admissions team is here to assist you with any questions you may have.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
          </button>
        </div>
        </div>
      </div>
      </section>
      <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
        Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
        <img alt="Image of the institution's contact office" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" height="300" src="https://storage.googleapis.com/a1aa/image/FbN5JVZHfQxMYqscPrlu7cjH0iq7qfcqYlF3jueiIY9FEsePB.jpg" width="400"/>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
          We are here to help! If you have any questions or need further information, please do not hesitate to contact us. Our team is available to assist you with any inquiries you may have.
          </p>
          <p className="text-lg mb-4">
          Phone: (123) 456-7890
          </p>
          <p className="text-lg mb-4">
          Email: info@eduinstitution.com
          </p>
          <p className="text-lg">
          Address: 123 Education Lane, Knowledge City, ED 45678
          </p>
        </div>
        </div>
      </div>
      </section>
      <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
        © 2023 EduInstitution. All rights reserved.
        </p>
      </div>
      </footer>
    </body>
    </html>
  );
}
