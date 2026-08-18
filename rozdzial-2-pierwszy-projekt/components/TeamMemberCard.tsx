interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export const TeamMemberCard = ({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-cyan-900/80 bg-slate-950 p-8 shadow-lg md:flex-row md:items-start">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/60 bg-slate-900 text-3xl font-extrabold text-cyan-300">
        {name.charAt(0)}
      </div>

      <div className="flex flex-col gap-3 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {name}
          </h2>

          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {role}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">
          {bio}
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/40 bg-slate-900 px-4 py-1.5 text-xs font-semibold text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
