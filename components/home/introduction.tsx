import { motion } from "motion/react";
import Image from "next/image";
import Text from "../ui/text";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <section className="flex flex-row gap-8 justify-around w-full h-full">
        <div className="flex flex-col gap-2  w-[30%]">
          <div className="   grid grid-cols-3 gap-4 h-full">
            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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
                  className=" w-[500px] h-[100px] rounded-2xl object-cover"
                  src="/introduction/image1.jpg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={100}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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

          <div className="   grid grid-cols-3 gap-4 h-full">
            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex "></span>
          </div>
        </div>

        <motion.div
          className="w-fit h-full relative items-center justify-center flex"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 20, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-[-50px] right-[-50px] rotate-[20deg] "
          >
            <Image
              className=""
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
              className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl "
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
            className="absolute bottom-[-50px] left-[-50px] rotate-[210deg]"
          >
            <Image
              src="/collage/fig4.svg"
              alt="Figurinha 1"
              width={100}
              height={100}
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-2  w-[30%]">
          <div className="   grid grid-cols-3 gap-4 h-full">
            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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

          <div className="   grid grid-cols-3 gap-4 h-full">
            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "></span>

            <motion.div
              className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex  "
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
                  className="w-full h-full max-w-[500px] max-h-[500px] rounded-2xl "
                  src="/introduction/image6.jpeg"
                  alt="Foto da turma do curso de Tecnologia em Sistemas para Internet do instituto Federal de São Paulo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </motion.div>

            <span className="w-full h-full max-w-[200px] max-h-[200px] items-center justify-center flex "></span>
          </div>
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
          className="text-4xl font-bold"
          spanClassName="text-7xl"
        />
        <p className="text-xl text-gray-500 max-w-[50%] text-center">
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
