import { data } from "../data";

export default function useLang(lang) {
    
    const { header, hero, skills, profile, projects, footer } = data[lang]
    return [header, hero, skills, profile, projects, footer];
}