import type { IROUTES } from "@/types";

interface IROUTES_CHILDREN extends IROUTES {
    point: number;
}
export const ROUTES: IROUTES[] = [
    { title: "О нас", href: "", context: true },
    { title: "Услуги", href: "", context: true },
    { title: "Блог", href: "#" },
    { title: "on Board", href: "#" },
    { title: "Контакты", href: "/#contacts" },
];

export const ROUTES_CHILDREN: IROUTES_CHILDREN[] = [
    { title: "Изготовление на заказ", href: "/#repair", label: "", point: 0 },
    { title: "Диагностика гидроцилиндров", href: "/#repair", label: "", point: 0 },
    { title: "Замена уплотнений", href: "/#repair", label: "", point: 0 },
    { title: "Проведение испытаний", href: "/#repair", label: "", point: 0 },
    { title: "Восстановление/замена штока", href: "/#repair", label: "", point: 0 },
    { title: "Замена гильзы", href: "/#repair", label: "", point: 0 },
    {
        title: "Фрезерная обработка",
        href: "/frezernaya-obrabotka-detalej",
        label: "frezernayaObrabotkaDetalej",
        point: 1,
    },
    { title: "Токарная обработка", href: "/tokarnaya-obrabotka-detalej", label: "tokarnayaObrabotkaDetalej", point: 1 },
    { title: "Термообработка металла", href: "/termoobrabotka", label: "termoobrabotka", point: 1 },
    { title: "Зубонарезные работы", href: "/zubonareznye-raboty", label: "zubonareznyeRaboty", point: 1 },
    {
        title: "Изготовление специнструмента",
        href: "/izgotovlenie-specinstrumenta",
        label: "izgotovlenieSpecinstrumenta",
        point: 1,
    },
    {
        title: "Изготовление по чертежам",
        href: "/izgotovlenie-po-chertezham",
        label: "izgotovleniePoChertezham",
        point: 1,
    },
    { title: "Уплотнения SKF", href: "/uplotneniya-skf", label: "uplotneniyaSkf", point: 2 },
];
