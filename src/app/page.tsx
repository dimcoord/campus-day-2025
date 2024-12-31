"use client"

import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main>
        <div id="root"></div>
          <div className="min-h-screen flex flex-col bg-pink-50">
              <div className="flex-grow container mx-auto mt-12 p-4">
                  <section className="text-center my-8">
                      <h2 className="text-4xl font-bold text-pink-600">Welcome to the High School College Expo</h2>
                      <p className="text-lg text-gray-700 mt-4">Discover your future at our annual college expo. Meet representatives from top universities and colleges.</p>
                  </section>
                  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                          <img src="https://placehold.co/300x200" alt="Aerial view of a university campus with green lawns and modern buildings" className="w-full h-40 object-cover rounded-t-lg"/>
                          <h3 className="text-2xl font-bold text-pink-600 mt-4">University of Example</h3>
                          <p className="text-gray-700 mt-2">Explore the diverse programs and vibrant campus life at the University of Example.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                          <img src="https://placehold.co/300x200" alt="Students walking on a tree-lined pathway on a sunny day" className="w-full h-40 object-cover rounded-t-lg"/>
                          <h3 className="text-2xl font-bold text-pink-600 mt-4">Example State College</h3>
                          <p className="text-gray-700 mt-2">Learn about the academic excellence and community spirit at Example State College.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                          <img src="https://placehold.co/300x200" alt="Modern library building with glass walls and students studying inside" className="w-full h-40 object-cover rounded-t-lg"/>
                          <h3 className="text-2xl font-bold text-pink-600 mt-4">Example Technical Institute</h3>
                          <p className="text-gray-700 mt-2">Discover cutting-edge technology programs at Example Technical Institute.</p>
                      </div>
                  </section>
              </div>
              <footer className="bg-pink-200 p-4 text-center">
                  <p className="text-yellow-600">&copy; 2025 CampusDay Bidang TI. All rights reserved.</p>
              </footer>
          </div>
    </main>
  );
}
