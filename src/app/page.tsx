import { Camera, Check, MapPin, MessageCircle, Palette, Phone, Play, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { REELS, SITE } from "@/lib/site";
import { getVideos } from "@/lib/videos";
import { ContactForm } from "./contact-form";

const NAV = [
  ["Home", "#home"],
  ["Reels", "#reels"],
  ["Videos", "#videos"],
  ["About", "#about"],
  ["Pricing", "#pricing"],
  ["Collaborate", "#collaborate"],
] as const;

// Placeholder tiers between ₹999 and custom: edit freely.
const PLANS = [
  { name: "Starter", price: "₹999", from: true, desc: "Small handmade piece", features: ["A5 watercolour or sketch", "1 subject", "Digital preview", "Ships across India"], cta: "Order Starter", featured: false },
  { name: "Classic", price: "₹1,999", from: true, desc: "Gift-worthy artwork", features: ["A4 watercolour or anime art", "Up to 2 subjects", "Digital preview", "Free revisions"], cta: "Order Classic", featured: true },
  { name: "Premium", price: "₹3,499", from: true, desc: "Detailed showpiece", features: ["A3 canvas or paper", "Up to 4 subjects", "Premium materials", "Gift packaging"], cta: "Order Premium", featured: false },
  { name: "Custom", price: "Custom", from: false, desc: "Brand work and special commissions", features: ["Any size or medium", "Murals and collaborations", "Content and reel partnerships", "Quote on request"], cta: "Get a quote", featured: false },
];

const ABOUT = [
  { Icon: Palette, t: "Watercolour & Anime", d: "Soft washes, bold characters and detail you can feel." },
  { Icon: Sparkles, t: "Custom commissions", d: "Share a photo or idea and get a one-of-a-kind artwork." },
  { Icon: Camera, t: "Process on camera", d: "Follow every brushstroke through reels and videos." },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="font-display grid size-9 place-items-center rounded-full border border-gold/60 text-lg text-primary">A</span>
      <span className="leading-tight">
        <span className="font-display block text-lg tracking-wide">
          APRAJITA <span className="text-primary">ART</span>
        </span>
        <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Handcrafted Originals</span>
      </span>
    </a>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-2 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export default async function Home() {
  const videos = await getVideos();

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-7 font-sans text-sm md:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-foreground/80 transition hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<a href={SITE.whatsapp} target="_blank" rel="noreferrer" />} size="sm" className="bg-sage font-sans text-white hover:bg-sage/90"><MessageCircle /> WhatsApp</Button>
            <Button nativeButton={false} render={<a href={`tel:${SITE.tel}`} aria-label="Call" />} size="sm" variant="outline" className="hidden sm:inline-flex"><Phone /></Button>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="sm" className="font-sans md:hidden" />}>
                  Menu
                </SheetTrigger>
              <SheetContent className="bg-background">
                <nav className="mt-12 flex flex-col gap-5 px-6 font-display text-2xl">
                  {NAV.map(([l, h]) => (
                    <a key={h} href={h}>
                      {l}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="brush">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-32">
            <div>
              <p className="mb-5 font-sans text-xs uppercase tracking-[0.35em] text-muted-foreground">Original · Handmade · India</p>
              <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
                Hand
                <br />
                <span className="text-primary/90">painted</span>
                <br />
                <span className="text-primary">memories</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Watercolours, anime art and heartfelt custom pieces by Aprajita Kaira. Watch the process, then bring your idea to life together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-sans">
                <Button nativeButton={false} render={<a href="#reels" />} size="lg">Watch reels</Button>
                <Button nativeButton={false} render={<a href="#collaborate" />} size="lg" variant="outline">Collaborate with me</Button>
              </div>
            </div>
            <div className="mx-auto grid aspect-square w-full max-w-md place-items-center rounded-full border border-gold/40 bg-card/60 shadow-xl">
              <div className="text-center">
                <Palette className="mx-auto size-14 text-gold" strokeWidth={1.2} />
                <p className="font-display mt-4 text-4xl">
                  Aprajita <span className="text-primary">Art</span>
                </p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Watercolour · Anime · Custom</p>
              </div>
            </div>
          </div>
        </section>

        <section id="reels" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead eyebrow="Instagram" title="Latest reels" sub="Straight from @aprajitakaira06" />
          {REELS.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REELS.map((c) => (
                <div key={c} className="overflow-hidden rounded-xl border bg-card">
                  <iframe src={`https://www.instagram.com/reel/${c}/embed`} title="Instagram reel" className="h-[560px] w-full" loading="lazy" allowFullScreen />
                </div>
              ))}
            </div>
          ) : (
            <Card className="mx-auto max-w-xl overflow-hidden p-0">
              <iframe src={`${SITE.instagram}/embed`} title="Aprajita on Instagram" className="h-[620px] w-full" loading="lazy" />
            </Card>
          )}
          <div className="mt-8 text-center font-sans">
            <Button nativeButton={false} render={<a href={`${SITE.instagram}/reels/`} target="_blank" rel="noreferrer" />} variant="outline"><Camera /> View all reels on Instagram</Button>
          </div>
        </section>

        <section id="videos" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="YouTube" title="Watch the art come alive" sub="Fresh from the channel" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.slice(0, 6).map((v) => (
                <Card key={v.id} className="overflow-hidden pt-0">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                      title={v.title}
                      className="size-full"
                      loading="lazy"
                      allow="accelerometer; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display line-clamp-2 text-base">{v.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center font-sans">
              <Button nativeButton={false} render={<a href={SITE.youtube} target="_blank" rel="noreferrer" />}><Play /> Visit YouTube channel</Button>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead eyebrow="About the artist" title="Every piece, painted by hand" />
          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT.map(({ Icon, t, d }) => (
              <Card key={t} className="text-center">
                <CardHeader className="items-center">
                  <Icon className="size-8 text-primary" strokeWidth={1.4} />
                  <CardTitle className="font-display mt-2 text-xl">{t}</CardTitle>
                  <CardDescription className="text-base">{d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Pricing" title="Art for every story" sub="Starting from ₹999, or fully custom" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PLANS.map((p) => (
                <Card key={p.name} className={p.featured ? "relative border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle className="font-display flex items-center justify-between text-xl">
                      {p.name}
                      {p.featured && <Badge className="bg-primary font-sans text-white">Popular</Badge>}
                    </CardTitle>
                    <p className="font-display text-4xl text-primary">
                      {p.price}
                      {p.from && <span className="ml-1 font-sans text-sm text-muted-foreground">onwards</span>}
                    </p>
                    <CardDescription>{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-6">
                    <ul className="space-y-2 font-sans text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-sage" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      nativeButton={false}
                      render={
                        <a
                          href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hi Aprajita, I am interested in the ${p.name} plan.`)}`}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                      variant={p.featured ? "default" : "outline"}
                      className="w-full font-sans"
                    >
                      {p.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center font-sans text-sm text-muted-foreground">Prices vary with size, medium and detail. Message me for an exact quote.</p>
          </div>
        </section>

        <section id="collaborate"className="bg-[#0d0a07] py-20 text-[#f8f3ec]">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12 text-center">
              <Badge className="bg-gold/20 font-sans uppercase tracking-widest text-gold">Collaborate</Badge>
              <h2 className="font-display mt-4 text-4xl md:text-5xl">Let&apos;s create something together</h2>
              <p className="mx-auto mt-3 max-w-xl text-[#f8f3ec]/70">
                Brand collaborations, custom art or just a hello. Reach out directly by call or WhatsApp.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 font-sans">
                <Card className="border-white/10 bg-white/5 text-inherit">
                  <CardContent className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-full bg-primary">
                        <Phone className="size-5 text-white" />
                      </span>
                      <div>
                        <p className="text-sm text-white/60">Call directly</p>
                        <p className="text-xl">+91 {SITE.phone}</p>
                      </div>
                    </div>
                    <Button nativeButton={false} render={<a href={`tel:${SITE.tel}`} />} variant="secondary">Call now</Button>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/5 text-inherit">
                  <CardContent className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-full bg-sage">
                        <MessageCircle className="size-5 text-white" />
                      </span>
                      <div>
                        <p className="text-sm text-white/60">WhatsApp</p>
                        <p className="text-xl">+91 {SITE.phone}</p>
                      </div>
                    </div>
                    <Button nativeButton={false} render={<a href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Aprajita, I would like to collaborate with you.")}`} target="_blank" rel="noreferrer" />} className="bg-sage text-white hover:bg-sage/90">Chat</Button>
                  </CardContent>
                </Card>
                <div className="flex items-center gap-3 px-2 text-white/60">
                  <MapPin className="size-4" /> India · Ships worldwide
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-5 py-8 font-sans text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Logo />
            <div className="flex gap-5">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                Instagram
              </a>
              <a href={SITE.youtube} target="_blank" rel="noreferrer" className="hover:text-primary">
                YouTube
              </a>
              <a href={`tel:${SITE.tel}`} className="hover:text-primary">
                Call
              </a>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center">© 2026 Aprajita Art. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
