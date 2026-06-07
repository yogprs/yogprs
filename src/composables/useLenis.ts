import Lenis from "lenis";
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  let lenis: Lenis;

  const raf = (time: number) => {
    lenis?.raf(time * 1000);
  };

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sinkronisasi Lenis dengan ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Gunakan ticker GSAP sebagai render loop
    gsap.ticker.add(raf);

    // Menghindari lag smoothing GSAP
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger setelah inisialisasi
    ScrollTrigger.refresh();
  });

  onUnmounted(() => {
    gsap.ticker.remove(raf);

    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });

    lenis?.destroy();
  });

  return {
    get lenis() {
      return lenis;
    },
  };
}
