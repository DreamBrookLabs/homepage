import { notFound } from "next/navigation";
import { allTechnologies } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allTechnologies
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const technology = allTechnologies.find((technology) => technology.slug === slug);

  if (!technology) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "technology", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header technology={technology} views={views} />
      <ReportView slug={technology.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={technology.body.code} />
      </article>
    </div>
  );
}
