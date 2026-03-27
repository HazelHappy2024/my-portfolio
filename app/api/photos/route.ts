import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const photosDir = join(process.cwd(), "public", "photos");
    const files = await readdir(photosDir);
    const images = files
      .filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i))
      .map((f) => `/photos/${f}`);
    return Response.json(images);
  } catch {
    return Response.json([]);
  }
}
