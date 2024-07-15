import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useTextMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (lang) => {
        const response = await axios.get("https://6694d87f4bd61d8314c8e0c0.mockapi.io/texts?lang=" + lang);
        console.log(response)
        return response.data; 
      },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["texts"] });
    },
  });
};