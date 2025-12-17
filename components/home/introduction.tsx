import { motion } from "motion/react";
import Image from "next/image";
import Text from "../ui/text";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-8 items-center w-full px-4 md:px-0">
      <section className="flex flex-col lg:flex-row gap-8 justify-around w-full h-full">
        <div className="hidden lg:flex flex-col gap-2 w-[30%]">
          <div className="grid grid-cols-3 gap-4 h-full">
            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-[500px] h-[100px] rounded-2xl object-cover"
                  src="/introduction/image1.jpg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={100}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl object-cover"
                  src="/introduction/image2.jpg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-4 h-full">
            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl object-cover"
                  src="/introduction/image3.jpg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>
          </div>
        </div>

        <motion.div
          className="w-full lg:w-fit h-full relative items-center justify-center flex"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-[-30px] md:top-[-50px] right-[-10px] md:right-[-50px] rotate-[20deg] z-10"
          >
            <Image
              className="w-[60px] md:w-[100px] h-auto"
              src="/collage/fig3.svg"
              alt="Figurinha 1"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              className="w-full h-auto max-w-[350px] md:max-w-[500px] max-h-[350px] md:max-h-[500px] rounded-2xl"
              src="/turma.jpeg"
              alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-[-30px] md:bottom-[-50px] left-[-10px] md:left-[-50px] rotate-[210deg] z-10"
          >
            <Image
              src="/collage/fig4.svg"
              alt="Figurinha 1"
              width={100}
              height={100}
              className="w-[60px] md:w-[100px] h-auto"
            />
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex flex-col gap-2 w-[30%]">
          <div className="grid grid-cols-3 gap-4 h-full">
            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl object-cover"
                  src="/introduction/image4.jpeg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-full h-full max-w-[500px] max-h-[200px] rounded-2xl object-cover"
                  src="/introduction/image5.jpeg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-4 h-full">
            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl"
                  src="/introduction/image6.jpeg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex"></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {[
            "/introduction/image1.jpg",
            "/introduction/image2.jpg",
            "/introduction/image3.jpg",
            "/introduction/image4.jpeg",
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Image
                className="w-full h-[120px] sm:h-[150px] rounded-xl object-cover"
                src={src}
                alt="Foto do curso TSI"
                width={300}
                height={150}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gap-4 flex flex-col items-center justify-center"
      >
        <Text
          text="Introdução"
          className="text-2xl md:text-4xl font-bold"
          spanClassName="text-4xl md:text-7xl"
        />
        <p className="text-base md:text-xl text-gray-500 max-w-full md:max-w-[50%] text-center px-2">
          O Curso Superior de Tecnologia em Sistemas para Internet tem por
          objetivo geral propiciar ao estudante um processo formativo que o
          habilite desenvolver e empregar os conhecimentos científicos e
          tecnológicos voltados para as atividades de desenvolvimento, teste,
          atualização e manutenção de sistemas para Internet e dispositivos
          móveis, tornando-o capaz de posicionar-se de maneira crítica no
          mercado e intervir no desenvolvimento econômico e social da sua
          região, além de contribuir em sua formação como cidadão.
        </p>
      </motion.section>
    </div>
  );
}
