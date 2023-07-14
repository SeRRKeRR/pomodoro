export function changeThemeHTML(darkTheme: boolean) {
  if (darkTheme) {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }
}
