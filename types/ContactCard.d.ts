import type { IconListItem } from "./IconList";

export interface ContactCardInfo {
    name: string;
    title?: string;
    profilePicture?: string;
    contactInfo: IconListItem[];
}
