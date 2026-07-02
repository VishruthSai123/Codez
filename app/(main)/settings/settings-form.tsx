"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateUser } from "@/actions/user-settings";

type SettingsFormProps = {
  initialName: string;
};

export const SettingsForm = ({ initialName }: SettingsFormProps) => {
  const [name, setName] = useState(initialName);
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser(name)
        .then(() => {
          toast.success("Profile updated");
        })
        .catch((err) => {
          toast.error(err.message || "Something went wrong.");
        });
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4 rounded-xl border-2 p-6 shadow-sm">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name" className="text-sm font-bold text-neutral-700">
          Display Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={pending}
          required
          minLength={3}
          className="border-2"
        />
      </div>
      <Button type="submit" disabled={pending} variant="secondary" className="w-full">
        Save Changes
      </Button>
    </form>
  );
};
