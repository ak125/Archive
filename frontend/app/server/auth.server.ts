import { redirect, type AppLoadContext } from "@remix-run/node";
import { z } from 'zod';

// Schéma pour valider un utilisateur authentifié
const authenticatedUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

// Fonction pour récupérer un utilisateur optionnel
export const getOptionalUser = async ({ context }: { context: AppLoadContext }) => {
  const user = authenticatedUserSchema.safeParse(context.user); // Corrigé de `context.User` à `context.user`
  if (!user.success || !user.data) {
    return null;
  }

  if (!context.remixService) {
    throw new Error("RemixService est undefined");
  }

  return await context.remixService.getUser({
    userId: user.data.id,
  });
};

// Fonction pour récupérer un utilisateur requis
export const requireUser = async ({ context }: { context: AppLoadContext }) => {
  const user = await getOptionalUser({ context });
  if (!user) {
    throw redirect('/login'); // Redirection vers /login si aucun utilisateur trouvé
  }
  return user;
};
