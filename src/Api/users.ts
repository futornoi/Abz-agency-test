import { ApiCall } from "./config";
import { stringify } from "query-string";

interface UserParams {
  page?: number,
  count?: number,
  offset?: number
}

export interface Users {
  success: boolean,
  count: number,
  links: {
    next_url: string | null,
    prev_url: string | null,
  },
  page: number,
  total_pages: number,
  total_users: number,
  users: User[],
}

export interface User {
  id: number,
  email: string,
  name: string,
  phone: string,
  photo: string,
  position: string,
  position_id: number,
  registration_timestamp: number,
}

export interface UserValues extends Omit<User, 'registration_timestamp' | 'position' | 'id'> {}

export const getUsers = async (params?: UserParams): Promise<Users> => {
  return await ApiCall('get', `users?${stringify({...params})}`);
}

export const setUser = async (userValues: UserValues) => {
  const Fd = new FormData();

  for(let [key, value] of Object.entries(userValues)) {
    Fd.append(key, value as any)
  }

  return await ApiCall('post', 'users', Fd);
}

export const getPositions = async () => {
  return await ApiCall('get', 'positions');
}

export const getToken = async () => {
  return await ApiCall('get', 'token');
}