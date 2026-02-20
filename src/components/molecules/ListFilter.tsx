"use client";

import { SetStateAction, useState } from "react";
import Input from "../atoms/Input";
import { useLang } from "@/hooks/useLang";
import { ArticleSort } from "@/hooks/queries/useArticles";
import { IconFilter2, IconZoom } from "@tabler/icons-react";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";

interface ArticleListFilterProps {
    search: string;
    setSearch: (value: SetStateAction<string>) => void;
    setPage: (value: SetStateAction<number>) => void;
    sort: string;
    setSort: (value: SetStateAction<ArticleSort>) => void;
}

export default function ListFilter({
    search,
    setSearch,
    setPage,
    sort,
    setSort,
}: ArticleListFilterProps) {
    const t = useLang();

    const [value, setValue] = useState(search);

    const debouncedSearch = useDebouncedCallback((val: unknown) => {
        setSearch(val as string);
        setPage(1);
    }, 800);

    const handleChange = (val: string) => {
        setValue(val);
        debouncedSearch(val);
    };

    return (
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-2 items-center md:sticky top-22 py-3 bg-white w-full">
            <div className="flex-1 w-full">
                <Input
                    id="search"
                    type="text"
                    placeholder={t("codeleap.home.search.input.placeholder")}
                    value={value}
                    onChange={handleChange}
                    icon={<IconZoom size={20} />}
                />
            </div>
            <div className="w-full md:w-fit h-full flex flex-row gap-2 items-center">
                <IconFilter2 className="hidden md:flex" />
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as ArticleSort)}
                    className="border border-neutral-dark rounded-lg w-full py-1.5 px-3 bg-white h-full"
                >
                    <option value="-created_datetime">
                        {t("codeleap.home.search.filter.sort.newest")}
                    </option>
                    <option value="created_datetime">
                        {t("codeleap.home.search.filter.sort.oldest")}
                    </option>
                    <option value="popularity">
                        {t("codeleap.home.search.filter.sort.popular")}
                    </option>
                </select>
            </div>
        </div>
    );
}
