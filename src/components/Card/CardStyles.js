export const cardContainer = {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  gap: `10px`,
  py: `10px`,
  borderRadius: `8px`,
  _hover: {
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
  },
}

export const cardTextContainer = {
  width: `150px`,
  borderRadius: `8px`,
  overflow: `hidden`,
  textAlign: `center`,
}

export const cardTitle = {
  fontSize: `16px`,
  backgroundColor: `darkerPurple`,
  color: `white`,
}

export const cardSubtitle = {
  color: `black`,
  backgroundColor: `white`,
  mb: `10px`,
}

export const cardButton = {
  borderRadius: `8px`,
  backgroundColor: `darkerPurple`,
  color: `white`,
  _hover: {
    color: `darkerPurple`,
    backgroundColor: `white`,
  },
}
