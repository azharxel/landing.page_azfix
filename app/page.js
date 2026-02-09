"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR BY AZHAR */}
      <nav
        className={`fixed top-0 left-0 w-full px-3 py-1 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-gray/50 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
      <div className="flex flex-col items-center gap-2">

        <div className="flex items-center gap-1 justify-center w-full">
          <Image
            src="/gambar.png"
            alt="AZFIX"
            width={100}
            height={100}
          />
          <span className="font-semibold tracking-wide text-lg">
            AZFIX
          </span>
        </div>
        
        <div className="flex gap-6 text-sm font-medium justify-center w-full">
          <a href="#home" className="text-gray-500 hover:text-black transition">Home</a>
          <a href="#layanan" className="text-gray-500 hover:text-black transition">Layanan</a>
          <a href="#kontak" className="text-gray-500 hover:text-black transition">Kontak</a>
        </div>
      </div>

        <a
          href="https://wa.me/6285608936194"
          target="_blank"
          className="text-sm font-medium border px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white transition"
        >
          Hubungi
        </a>
      </nav>

      {/* INTI KONTEN */}
      <section id="home" className="scroll-mt-24 text-center px-6 py-32 pt-40">
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Service iPhone & Android
        </h2>

        <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
          Pengerjaan cepat, sparepart berkualitas, dan bergaransi.
          AZFIX memberikan layanan profesional dengan standar tinggi.
        </p>

        <a
          href="https://wa.me/6285608936194"
          target="_blank"
          className="inline-block mt-10 bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-80 transition"
        >
          Konsultasi Gratis
        </a>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="scroll-mt-24 py-10 px-6">
        <h3 className="text-3xl font-semibold text-center mb-16 tracking-tight">
          Layanan Kami
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Ganti LCD</h4>
            <p className="text-gray-500 mt-2 text-sm">
              LCD original dan berkualitas tinggi.
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Ganti Baterai</h4>
            <p className="text-gray-500 mt-2 text-sm">
              Baterai awet dan aman digunakan.
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Perbaikan Software</h4>
            <p className="text-gray-500 mt-2 text-sm">
              Flash, blank, lupa pola, dan perbaikan sistem.
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Perbaikan Mesin</h4>
            <p className="text-gray-500 mt-2 text-sm">
              Ditangani teknisi berpengalaman.
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Mati total</h4>
            <p className="text-gray-500 mt-2 text-sm">
              Ditangani teknisi berpengalaman.
            </p>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="scroll-mt-24 py-10 px-6">
        <h4 className="text-3xl font-semibold text-center mb-16 tracking-tight">
          Keuntungan Services di Tempat Kami
        </h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Bergaransi Sampai 1 Tahun</h4>
            <p className="text-gray-500 mt-2 text-sm">
              Garansi terjamin, tanpa tambahan biaya, Syarat & Ketentuan Berlaku.
            </p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer id="kontak" className="scroll-nt-24 text-center text-sm text-gray-400 pb-10">
        © {new Date().getFullYear()} AZFIX
      </footer>

    </main>
  );
}
