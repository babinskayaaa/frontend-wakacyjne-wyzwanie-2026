import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 p-6">
      <TeamMemberCard
        name="Palina Babinskaya"
        role="Frontend Developer"
        bio="I am learning frontend development and building my first projects with Next.js and Tailwind CSS."
        skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
      />
    </main>
  );
}
