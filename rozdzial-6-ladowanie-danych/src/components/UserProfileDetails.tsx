import { User } from "@/src/types/User";
import PizzaIcon from "@/src/components/PizzaIcon";
import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
    <Card className="@container relative max-w-full h-full flex flex-col min-h-64 overflow-hidden border">
      <div className="relative w-full h-32 @lg:h-48">
        <div className="absolute inset-0 z-1 bg-blue-300" />
        <Avatar className="size-16 @lg:size-24 absolute z-2 bottom-0 left-4 translate-y-1/2 border-2 border-white shadow-md">
          <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      <CardContent className="w-full grid grid-cols-2 p-4 pt-12 @lg:pt-16">
        {likesPizza && (
          <div className="ml-auto row-span-2 col-start-2 size-10 grid place-items-center rounded-full">
            <PizzaIcon />
          </div>
        )}
        <CardTitle className="row-start-1 col-start-1 font-semibold text-xl @md:text-2xl">
          {name}
        </CardTitle>
        <span className="row-start-2 col-start-1 text-muted-foreground">{role}</span>
        <p className="mt-2 text-muted-foreground col-span-full @lg:max-w-md">{description}</p>
      </CardContent>
    </Card>
  );
}