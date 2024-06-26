import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStudents = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: students = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getStudents`);
      console.log(res);
      return res.data.data;
    },
  });

  return { students, isLoading, refetch };
};

export default useStudents;
