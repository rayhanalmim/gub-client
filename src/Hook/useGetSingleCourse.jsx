import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetSingleCourse = (id) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: singleCourse = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getSingleCourse?id=${id}`);
      console.log(res);
      return res.data.data;
    },
  });

  return { singleCourse, isLoading, refetch };
};

export default useGetSingleCourse;
