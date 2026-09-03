import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  height?: number;
};

export default function Logo({ className = "", height = 44 }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="S.O.S Comércio de bombas e peças"
        width={height * 3.2}
        height={height}
        className="h-auto w-auto rounded-md"
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
