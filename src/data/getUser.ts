import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data.data)

export function getUser(id: number) {
  const { data } = useSWR(`http://localhost:3000/user/${id}`, fetcher)

  return {
    user: data,
  }
}

export function getUserAverageSessions(id: number) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/average-sessions`, fetcher)

  return {
    averageSessions: data,
  }
}

export function getUserActivity(id: number) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/activity`, fetcher)

  return {
    activity: data,
  }
}

export function getUserPerformance(id: number) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/performance`, fetcher)

  return {
    performance: data,
  }
}
