"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Coffee, 
  Mountain, 
  Award, 
  Users, 
  Heart, 
  Sun, 
  Droplets,
  Play
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FDFBF7] text-[#4A3B32] overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#1D2F1D]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-[#A5C684]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg"
          >
            De la Finca a tu Taza
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl  tracking-wide mb-8 text-[--primary-color]/80 drop-shadow-lg"
          >
            Cada sorbo, un compromiso con la tierra
          </motion.p>
        </div>
      </section>

      {/* 2. NUESTRA HISTORIA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="text-[#C6A87C] font-bold tracking-widest uppercase text-sm">
              Nuestra Esencia
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1D2F1D]">
              Raíces Profundas en Santander
            </h2>
            <p className="text-lg text-[#4A3B32]/80 leading-relaxed">
              En el corazón de Guadalupe, Santander, nace Café Yamara. La Finca
              Miraflores no es solo un lugar de cultivo, es un ecosistema donde
              la tradición cafetera se encuentra con la sostenibilidad moderna.
            </p>
            <p className="text-lg text-[#4A3B32]/80 leading-relaxed">
              Nuestra filosofía se basa en el respeto por la tierra y el tiempo.
              Cada grano es seleccionado a mano, asegurando que solo los frutos
              en su punto óptimo de maduración lleguen a tu taza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#C6A87C] transform rotate-6 scale-105 opacity-30" />
              <Image
                src="/coffe-head.webp"
                alt="Fundadores"
                fill
                className="object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISIÓN Y VISIÓN */}
      <section className="py-20 px-6 bg-[#E8EDE3]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-md border border-[#C6A87C]/20 p-10 !text-[#4A3B32] !shadow-lg hover:!shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#1D2F1D] rounded-full flex items-center justify-center mb-6 text-[#C6A87C]">
                <Mountain size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-[#1D2F1D]">
                Nuestra Misión
              </h3>
              <p className="text-lg leading-relaxed">
                Producir el café orgánico más puro y sostenible de Colombia,
                honrando el trabajo de nuestros caficultores y protegiendo la
                biodiversidad de nuestras montañas.
              </p>
            </Card>

            <Card className="bg-[#1D2F1D] !text-[#FDFBF7] p-10 !shadow-lg hover:!shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#C6A87C] rounded-full flex items-center justify-center mb-6 text-[#1D2F1D]">
                <Sun size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFBF7]">
                Nuestra Visión
              </h3>
              <p className="text-lg leading-relaxed opacity-90">
                Ser reconocidos mundialmente como el referente del café de
                especialidad colombiano, conectando corazones a través de una
                experiencia sensorial única y consciente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. VALORES/PILARES */}
      <section className="py-24 px-6 bg-[#1D2F1D] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Nuestros Pilares
            </h2>
            <div className="w-24 h-1 bg-[#C6A87C] mx-auto" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: "Sostenibilidad",
                desc: "Cultivo orgánico respetuoso con el medio ambiente.",
              },
              {
                icon: Users,
                title: "Comunidad",
                desc: "Apoyo directo a las familias caficultoras locales.",
              },
              {
                icon: Award,
                title: "Calidad",
                desc: "Estándares premium en cada etapa del proceso.",
              },
              {
                icon: Heart,
                title: "Pasión",
                desc: "Amor por el café en cada detalle.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-[#C6A87C]/50 group"
              >
                <item.icon className="w-12 h-12 text-[#C6A87C] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROCESO DE PRODUCCIÓN */}
      <section className="py-24 px-6 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1D2F1D] mb-20">
            El Arte del Proceso
          </h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[3.5rem] left-0 w-full h-0.5 bg-[#C6A87C]/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  icon: Leaf,
                  title: "Cultivo",
                  desc: "Cosecha manual selectiva",
                },
                {
                  icon: Droplets,
                  title: "Beneficio",
                  desc: "Lavado y fermentación controlada",
                },
                {
                  icon: Sun,
                  title: "Secado",
                  desc: "Secado solar lento y natural",
                },
                {
                  icon: Coffee,
                  title: "Tostión",
                  desc: "Curva de tueste artesanal",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-28 h-28 bg-[#FDFBF7] border-2 border-[#C6A87C] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                    <step.icon className="w-10 h-10 text-[#1D2F1D]" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#1D2F1D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[#4A3B32]/70">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXTRAS & CTA */}
      <section className="py-20 px-6 bg-[#E8EDE3]/20">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Quote */}
          <div className="text-center relative px-4">
            <span className="text-8xl text-[#C6A87C] opacity-20 font-serif absolute -top-12 left-1/2 -translate-x-1/2">
              &quot;
            </span>
            <p className="text-2xl md:text-4xl font-serif italic text-[#4A3B32] leading-relaxed relative z-10">
              No solo vendemos café, compartimos la historia de nuestras
              montañas y el alma de nuestra gente.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-1 bg-[#C6A87C]" />
              <span className="font-bold text-[#1D2F1D] tracking-widest uppercase text-sm mt-2">
                Familia Yamara
              </span>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#1D2F1D] group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <Play className="w-10 h-10 text-white fill-current ml-1" />
              </div>
            </div>
            <Image
              src="/coffe-head.webp"
              alt="Video Cover"
              fill
              className="object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-2xl font-bold font-serif mb-1">
                Conoce nuestra finca
              </h3>
              <p className="text-base opacity-80">Un recorrido por el origen</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-10">
            <h2 className="text-4xl font-serif font-bold text-[#1D2F1D] mb-8">
              Descubre el Sabor de la Excelencia
            </h2>
            <Link href="/shop">
              <Button
                variant="primary"
                className="!bg-[#1D2F1D] !text-[#FDFBF7] !px-12 !py-5 !text-lg hover:!bg-[#2C452C] shadow-xl hover:shadow-2xl transition-all"
              >
                Ver Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
