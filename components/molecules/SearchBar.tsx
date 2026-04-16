"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useState } from "react";

type SearchBarProps = {
  onSearch?: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-3">
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search Next.js concepts"
      />
      <Button type="button" onClick={() => onSearch?.(value)}>
        Search
      </Button>
    </div>
  );
}
