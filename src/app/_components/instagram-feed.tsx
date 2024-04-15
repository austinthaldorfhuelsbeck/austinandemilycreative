import Image from "next/image";

export async function InstagramFeed() {
  const feed = await fetch("https://jsonplaceholder.typicode.com/photos").then(
    (res) => res.json()
  );

  const recentPostImages: string[] = feed
    .slice(0, 4)
    .map((post: { url: string }) => post.url);

  return (
    <section>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-7 max-w-md sm:max-w-5xl mx-auto">
        {recentPostImages.map((url, idx) => (
          <Image
            key={idx}
            src={url}
            alt="Instagram post"
            width={180}
            height={180}
            className="w-full h-full object-cover"
          />
        ))}
      </ul>
    </section>
  );
}
