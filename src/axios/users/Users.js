import { instance } from "../instance";

export async function users() {
  try {
    const { data } = await instance.get(`/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoles() {
  try {
    const { data } = await instance.get(`/roles`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createUser(request) {
  try {
    const { status } = await instance.post(`/users`, request);
    return status;
  } catch (error) {
    throw error;
  }
}

export async function usersById(id) {
  try {
    const { data } = await instance.get(`/users/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}