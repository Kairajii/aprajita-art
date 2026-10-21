import { FALLBACK_VIDEOS, SITE } from "./site";

export type Video = { id: string; title: string };

export async function getVideos(): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${SITE.youtubeChannelId}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("feed");
    const xml = await res.text();
    const out: Video[] = [];
    for (const m of xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)) {
      const id = m[0].match(/<yt:videoId>([^<]+)/)?.[1];
      const title = m[0]
        .match(/<title>([^<]+)/)?.[1]
        ?.replace(/#\S+/g, "")
        .replace(/&amp;/g, "&")
        .trim();
      if (id) out.push({ id, title: title || "Watercolour art" });
    }
    return out.length ? out : FALLBACK_VIDEOS;
  } catch {
    return FALLBACK_VIDEOS;
  }
}
