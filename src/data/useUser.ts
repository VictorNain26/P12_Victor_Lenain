import useSWR from 'swr'

import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data.data)

export function useUser(id) {
  const { data } = useSWR(`http://localhost:3000/user/${id}`, fetcher)

  return {
    user: data,
  }
}

export function useUserAverageSessions(id) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/average-sessions`, fetcher)

  return {
    averageSessions: data,
  }
}

export function useUserActivity(id) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/activity`, fetcher)

  return {
    activity: data,
  }
}

export function useUserPerformance(id) {
  const { data } = useSWR(`http://localhost:3000/user/${id}/performance`, fetcher)

  return {
    performance: data,
  }
}
