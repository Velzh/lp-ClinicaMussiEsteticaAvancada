import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SimuladorAssinatura } from "@/components/sections/SimuladorAssinatura";
import { Protocolos } from "@/components/sections/Protocolos";
import { Biosseguranca } from "@/components/sections/Biosseguranca";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <SimuladorAssinatura />
        <Protocolos />
        <Biosseguranca />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
