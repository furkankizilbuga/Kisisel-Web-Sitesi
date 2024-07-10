import { data } from "../data";

export default function useLang(lang) {
    
    const { header, hero, skills, profile, footer } = data[lang]
    return [header, hero, skills, profile, footer];
}