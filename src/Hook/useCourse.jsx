import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourse = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: course = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getCourse`);
      console.log(res);
      return res.data.data;
    },
  });

  return { course, isLoading, refetch };
};

export default useCourse;
