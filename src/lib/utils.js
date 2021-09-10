export const fetchData = async endpoint => {
  const response = await fetch(endpoint)
  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    throw new Error(data)
  }
}

export const log = value => console.log(value)

export const scrollToTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

export const randomInt = max => Math.round(Math.random() * max)

export const randomNum = max => Math.random() * max
