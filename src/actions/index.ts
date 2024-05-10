import { defineAction, z } from "astro:actions";

export const server = {
  newsLetter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      subscribe: z.boolean(),
    }),
    handler: async ({ email, subscribe }) => {
      console.log(`Email: ${email}, Subscribe: ${subscribe}`);
      return "success";
    },
  }),
};
