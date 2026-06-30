"use client";

import { motion } from "framer-motion";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading badge="FAQ" title="Časté otázky" />

        <div className="mt-10 grid gap-4">
          {faq.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}