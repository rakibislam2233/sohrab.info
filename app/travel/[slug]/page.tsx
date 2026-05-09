import type { Metadata } from "next";
import Image from "next/image";
import RelatedPosts from "../../../components/RelatedPosts";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const story = await prisma.travelStory.findUnique({
    where: { slug: params.slug },
  });
  return { title: story?.title || "Travel Story" };
}

export default async function TravelDetail({
  params,
}: {
  params: { slug: string };
}) {
  const story = await prisma.travelStory.findUnique({
    where: { slug: params.slug },
  });
  if (!story) return <div className="container py-12">Not found</div>;
  return (
    <main className="container py-12">
      <div className="mb-6">
        <Image
          src={story.coverImage}
          alt={story.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      <h1 className="text-4xl  mb-2">{story.title}</h1>
      <div className="text-sm text-gray-600 mb-6">
        {new Date(story.travelDate).toLocaleDateString()} • {story.destination}
      </div>
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
      <RelatedPosts category="Travel" excludeId={story.id} />
    </main>
  );
}
