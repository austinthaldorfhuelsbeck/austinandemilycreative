import { filmsContent } from "@/lib/constants";
import { FeaturedFilm } from "./featured-film";
import { FilmSection } from "./film-section";

export default function FilmsPage() {
  return (
    <main className="bg-primary flex flex-col gap-10">
      <FeaturedFilm />
      {filmsContent.map((film, idx) => (
        <FilmSection key={idx} {...film} idx={idx} />
      ))}
    </main>
  );
}
