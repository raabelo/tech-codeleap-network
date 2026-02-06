import { User } from "@prisma/client";

interface MentionDropdownProps {
    users: User[] | undefined;
    onSelect: (user: User) => void;
}

export default function MentionDropdown({ users, onSelect }: MentionDropdownProps) {
    if (!users || users.length === 0) return null;

    return (
        <div className="absolute z-50 w-full mt-1 bg-white border border-neutral-dark rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {users.map((user) => (
                <button
                    key={user.id}
                    type="button"
                    onClick={() => onSelect(user)}
                    className="w-full px-4 py-2 text-left hover:bg-neutral-light flex items-center gap-2 transition-colors"
                >
                    <span className="font-bold text-neutral-dark">@{user.username}</span>
                </button>
            ))}
        </div>
    );
}
