// Theme switcher based on CSS variables made by Fernardo Paredes
// https://www.fdp.io/blog/2016/11/08/theming-via-css-properties/

// Polyfilling Object.entries for Safari :/
Object.entries = (object) => Object.keys(object).map(
  (key) => [ key, object[key] ]
)

const isObject = (obj) => obj === Object(obj)

const LightTheme = {
  '--bg-color': '#eee',
  '--text-color': '#484848',
  '--text-color-light': '#828282',
  '--link-color': '#000',
  '--metadata-color': '#999',
  '--post-title': '#313131',
  '--code-bg-color': '#fff',
  '--code-border': '#f5f5f5',
  '--table-border-color': '#e5e5e5',
  '--table-header-color': '#fefefe',
  '--shadow-color': 'rgba(0, 0, 0, 0.1)',
  '--invert-logo-color': 'invert(0)',
  themeName: 'LightTheme'
}

const NightTheme = {
  '--bg-color': '#1c1c1c',
  '--text-color': '#c4c4c4',
  '--text-color-light': '#777',
  '--link-color': '#f1f1f1',
  '--metadata-color': '#666',
  '--post-title': '#fff',
  '--code-bg-color': '#252525',
  '--code-border': '#222',
  '--table-border-color': '#292929',
  '--table-header-color': '#505050',
  '--shadow-color': 'rgba(255, 255, 255, 0.1)',
  '--invert-logo-color': 'invert(1)',
  themeName: 'NightTheme'
}

const setCSSVariable = (key, value) => document.body.style.setProperty(key, value)

const saveTheme = (theme) => {
  if (window.localStorage) {
    localStorage['theme'] = JSON.stringify(theme)
    localStorage['currentTheme'] = theme.themeName
  }
}

const loadSavedTheme = () => {
  if (window.localStorage) {
    const maybeTheme = localStorage['theme']
    if (maybeTheme) return JSON.parse(maybeTheme)
  }

  return null
}

const updateTheme = (theme) => {
  if (!isObject(theme)) return

  Object
  .entries(theme)
  .forEach(([key, value]) => setCSSVariable(key, value))

  saveTheme(theme)
}

const checkForSavedTheme = () => {
  const theme = loadSavedTheme()
  if (theme) updateTheme(theme)
}

const switchTheme = () => {
  const el = document.getElementById('theme-switcher')
  // Check if we have a saved theme
  const theme = loadSavedTheme()
  const currentTheme = localStorage['currentTheme']
  if (theme && currentTheme === NightTheme.themeName) {
    updateTheme(LightTheme)
    el.className = iconForTheme(LightTheme.themeName)
  } else {
    updateTheme(NightTheme)
    el.className = iconForTheme(NightTheme.themeName)
  }
}

const iconForTheme = (themeName) => {
  if (themeName === NightTheme.themeName) {
    return 'icon-invert_colors'
  } else {
    return 'icon-invert_colors2'
  }
}

// initiate

// set inital theme to light
updateTheme(LightTheme);
checkForSavedTheme();

const el = document.getElementById('theme-switcher');

if (window.localStorage && localStorage['currentTheme']) {
  var iconClasses = iconForTheme(localStorage['currentTheme']);
  el.className = iconClasses;
} else {
  el.className = iconForTheme();
}
