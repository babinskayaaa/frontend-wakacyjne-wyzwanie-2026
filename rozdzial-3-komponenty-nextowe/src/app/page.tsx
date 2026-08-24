import Script from "next/script";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <TeamMemberCard
        name="Palina Babinskaya"
        role="Frontend & Mobile Developer"
        bio="Pasjonatka tworzenia nowoczesnych interfejsów, fotografii mobilnej oraz estetycznych aplikacji internetowych."
        skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"]}
      />

      <Script id="welcome-alert" strategy="afterInteractive">
        {`alert('Witaj na stronie profilu!');`}
      </Script>
    </main>
  );
}