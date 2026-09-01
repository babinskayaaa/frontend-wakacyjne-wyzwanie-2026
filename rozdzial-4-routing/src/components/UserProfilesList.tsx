import { USERS } from "../data/users";
import { UserProfileCard } from "./UserProfileCard";

export function UserProfileList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {USERS.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
