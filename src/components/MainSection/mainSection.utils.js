import { axiosClient } from 'utils/axios';

export const getList = () => {
  return axiosClient.get('/list/773069a4-1de6-4a35-ae41-65b01a87ef10');
};

export const addList = async (nameList) => {
  const res = await axiosClient.post('list/create', {
    data: { name: nameList },
  });
  console.log(res.data);
};
