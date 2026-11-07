import Image from "next/image";

export type ReportPhotoData = {
  /** File name inside /public/images/sample-report (no extension). */
  file: string;
  alt: string;
  caption: string;
};

export function ReportPhoto({ file, alt, caption }: ReportPhotoData) {
  return (
    <figure className="my-6 max-w-[400px]">
      <Image
        src={`/images/sample-report/${file}.jpg`}
        alt={alt}
        width={400}
        height={300}
        sizes="(max-width: 480px) 100vw, 400px"
        className="w-full h-auto rounded-md border border-ink-200"
      />
      <figcaption className="mt-2 text-sm text-ink-600">{caption}</figcaption>
    </figure>
  );
}
