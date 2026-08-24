import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const roleFont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  skills: string[];
}

export const TeamMemberCard = ({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) => {
  return (
    <div className="flex max-w-md flex-col items-center rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-white shadow-2xl">
      
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-500 shadow-lg">
        <Image
          src="/avatar.jpg"
          alt={`${name} avatar`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-white">{name}</h2>
      
      <p className={`${roleFont.className} mt-1 text-sm font-semibold uppercase tracking-wider text-cyan-400`}>
        {role}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {bio}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-cyan-500/40 bg-cyan-950/50 px-3 py-1 text-xs font-medium text-cyan-300">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="https://solvro.pwr.edu.pl"rel="noopener noreferrer" className="inline-block rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-cyan-400 active:scale-95">
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
};