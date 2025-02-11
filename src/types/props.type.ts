import { TProject } from "./project";

export type TProductCartProps = {
    project: TProject;
    index: number;
}
export type TNavItemProps = {
    href: string;
    icon: React.ElementType;
    label: string;
}
