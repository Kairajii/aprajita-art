"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Aprajita, I am ${name || "a visitor"}.\n${msg}`;
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={send} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 font-sans">
      <p className="font-display text-2xl">Send a message on WhatsApp</p>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="border-white/20 bg-transparent text-white placeholder:text-white/40"
      />
      <Textarea
        required
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        rows={5}
        placeholder="Tell me about your idea or collaboration..."
        className="border-white/20 bg-transparent text-white placeholder:text-white/40"
      />
      <Button type="submit" size="lg" className="w-full bg-sage text-white hover:bg-sage/90">
        <MessageCircle /> Send via WhatsApp
      </Button>
    </form>
  );
}
