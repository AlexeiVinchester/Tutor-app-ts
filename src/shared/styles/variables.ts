/**
 * Ссылки на CSS-переменные из variables.css.
 * Использовать в inline-стилях и sx: color: variables.colorTextPrimary
 */
export const variables = {
  colorPrimary: "var(--color-primary)",
  colorPrimaryAccent: "var(--color-primary-accent)",
  colorTurquoise: "var(--color-turquoise)",
  colorTextPrimary: "var(--color-text-primary)",
  colorBgWhite: "var(--color-bg-white)",
  colorBgModal: "var(--color-bg-modal)",
  shadowSm: "var(--shadow-sm)",
  shadowMd: "var(--shadow-md)",
  shadowLg: "var(--shadow-lg)",
  shadowPanel: "var(--shadow-panel)",
} as const;
