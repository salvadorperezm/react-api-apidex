export const gridContainer = {
  display: `grid`,
  gridTemplateAreas: {
    base: `"header" "main" "footer"`,
  },
  gridTemplateColumns: { base: `1fr` },
  gridTemplateRows: { base: `auto 1fr auto` },
  minHeight: `100vh`,
  backgroundColor: `mainPurple`,
}

export const gridHeader = {
  area: `header`,
}

export const gridMain = {
  area: `main`,
  py: `20px`,
}

export const gridFooter = {
  area: `footer`,
}
