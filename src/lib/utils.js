import { browser } from '$app/env'

const getUserJWT = key => {
  if (browser) {
    const item = sessionStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
  }
  return null
}

export const setUserJWT = (key, value) => {
  if (browser) {
    sessionStorage.setItem(key, value)
  }
  return null
}

export const loginUser = async (url, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    }
    body = JSON.stringify(body)
    const token = getUserJWT('jwt')
    token && (headers['Authorization'] = 'Bearer' + token)

    const res = await fetch(url, {
      method: 'POST',
      body,
      headers,
    })

    if (res.ok) {
      try {
        const json = await res.json()
        return json
      } catch (err) {
        console.log(err)
      }
    }
  } catch (err) {
    console.log(err)
  }
}

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

export const randomInt = max => Math.round(Math.random() * max)

export const randomNum = max => Math.random() * max
