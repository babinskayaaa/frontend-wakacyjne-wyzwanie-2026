"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "../types/User";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import PizzaIcon from "./PizzaIcon";
interface UserProfileCardProps {
  user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <Card className="w-full relative flex flex-col items-center text-center p-6 transition-all hover:shadow-lg group">
      {user.likesPizza && (
        <div className="absolute top-4 right-4">
          <PizzaIcon />
        </div>
      )}

      <CardHeader className="p-0 mb-4 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border flex items-center justify-center overflow-hidden mb-4 bg-muted/20">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <CardTitle className="text-xl font-bold">{user.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{user.role}</p>
      </CardHeader>

      <CardContent className="p-0 mb-6 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {user.description}
        </p>
      </CardContent>

      <CardFooter className="p-0 w-full">
        <Button asChild className="w-full">
          <Link href={`/users/${user.id}`}>See profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}