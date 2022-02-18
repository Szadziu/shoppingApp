import { axiosClient } from 'utils/axios';

export const getList = (listUrl) => {
  return axiosClient.get(listUrl);
};

export const addList = async (nameList) => {
  const res = await axiosClient.post('list/create', {
    data: { name: nameList },
  });
  console.log(res.data);
};
