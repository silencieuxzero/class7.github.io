import type { Site, Locale, NavMenu, MdConfig } from "@/types";
import { Github } from "lucide-react";

export const SITE: Site = {
    url: "https://silencieuxzero.github.io/class7.github.io",
    author: "送葬人",
    describe: "将回忆存放于此",
    title: "2021级7班班级网站",
    lightAndDarkMode: true,
    mail: "rain_wind1217@outlook.com"
};

export const LOCALE: Locale = {
    lang: "zh",
    langTag: "zh-cn"
} as const;

export const MDCONFIG: MdConfig = {
    show: true,
    max: 1,
    min: 3,
}

export const NAVMENU: NavMenu[] = [
    {
        id: '1',
        name: '归档',
        url: '/archives/',
    },
    {
        id: '2',
        name: '分类',
        url: '/categories/',
    },
    {
        id: '3',
        name: '云',
        url: '/meta/',
    },
    {
        id: '4',
        name: '相册',
        url: '/categories/',
    },
    {
        id: '5',
        name: '友情链接',
        url: '/friends/',
    },
    {
        id: '6',
        name: '关于',
        url: '/about/',
        prefetch: true,
    },
]

