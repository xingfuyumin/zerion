import { getLocal } from '../func';
import themeDark from './theme_dark';
import themeBright from './theme_bright';

export const themes = {
    theme_dark: themeDark,
    theme_bright: themeBright,
};

export const changeTheme = (newThemeKey) => {
    const themeKey = newThemeKey || getLocal('ZERION_THEME_KEY', 'theme_dark') || 'theme_dark';
    const body = document.body;
    const theme = themes[themeKey];
    Object.keys(theme).forEach((key) => {
        body.style.setProperty(key, theme[key]);
    })
};