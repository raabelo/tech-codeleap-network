"use client";

import { SetStateAction } from "react";
import Input from "../atoms/Input";
import { useLang } from "@/hooks/useLang";

interface ArticleListFilterProps {
    search: string;
    setSearch: (value: SetStateAction<string>) => void;
    setPage: (value: SetStateAction<number>) => void;
}

export default function ListFilter({ search, setSearch, setPage }: ArticleListFilterProps) {
    const t = useLang();

    const handleChange = (val: string) => {
        setSearch(val);
        setPage(1);
    };

    return (
        <div>
            <Input
                id="search"
                type="text"
                placeholder={t("codeleap.home.search.input.placeholder")}
                value={search}
                onChange={handleChange}
            />
        </div>
    );
}
