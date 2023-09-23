import { z } from 'zod';

export const AccessTokenSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string()
});

export const UserSchema = z.object({
  id: z.string(),
  username: z.string()
});
