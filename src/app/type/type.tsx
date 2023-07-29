import { z } from 'zod';

export const form = z.object({
  username: z.string().min(5, 'Username needs to be at least 5 characters.'),
  password: z.string().min(5, 'Password needs to be at least 5 characters.'),
});

type Form = z.infer<typeof form>;

export default Form;
