import { instance } from "../instance";


export async function getDiets() {
  try {
    const { data } = await instance.get(`/dieta`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMeals() {
  try {
    const { data } = await instance.get(`/comidas`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createDiet(request) {

  try {

    const { status } = await instance.post(`/dieta`, request);
    return status;
  } catch (error) {
    throw error;
  }
}


export async function deleteMeal(id) {


  try {

    const { status } = await instance.delete(`/comidas/${id}`);
    return status;
  } catch (error) {
    throw error;
  }
}

export async function createMeal(request) {

  try {

    const { status } = await instance.post(`/comidas`, request);
    return status;
  } catch (error) {
    throw error;
  }
}