import { ref } from "vue";

type Item = {
  id: string;
  description: string;
};

type Data = {
  total: number;
  items: Item[];
};

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const itemsMock = new Array(511).fill(0).map((_, i) => ({
  id: i.toString(),
  description: `Description-${i}`,
}));

const useApi = () => {
  const loading = ref(false);
  const data = ref<Data>({
    total: 0,
    items: [],
  });

  const getItems = async (start: number, end: number) => {
    loading.value = true;
    await wait(500);

    data.value = {
      total: 511,
      items: itemsMock.slice(start, end),
    };

    loading.value = false;
  };

  return {
    loading,
    data,
    getItems,
  };
};

export default useApi;
