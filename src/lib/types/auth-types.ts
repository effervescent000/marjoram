import type { z } from 'zod';
import type { AccessTokenSchema, UserSchema } from '$lib/schema/auth-schema';

export type AccessToken = z.infer<typeof AccessTokenSchema>;
export type User = z.infer<typeof UserSchema>;
