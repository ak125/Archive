import { Injectable } from '@nestjs/common';
import { PrismaServices } from '../prisma/prisma.services';

interface UserExistenceParams {
  email: string;
  withPassword: boolean;
  password?: string; // Corrigé pour marquer `password` comme optionnel
}

const USER_SELECT_FIELDS = {
  id: true,
  name: true,
  email: true,
  password: true,
};

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaServices) {}

  public readonly doesUserExist = async ({
    email,
    withPassword,
    password,
  }: UserExistenceParams) => {
    console.log(`Vérification de l'existence de l'utilisateur avec l'email: ${email}`);
    // Vérifier si l'utilisateur existe
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: USER_SELECT_FIELDS,
    });

    if (!existingUser) {
      console.error("Utilisateur non trouvé pour l'email fourni");
      return this.generateErrorResponse("L'email est invalide");
    }

    console.log(`Utilisateur trouvé: ${existingUser.email}`);
    // Si `withPassword` est vrai, valider le mot de passe
    if (withPassword && password) {
      return this.validatePassword(password);
    }

    return {
      message: 'Cet email est déjà utilisé.',
      error: false,
    };
  };

  private generateErrorResponse(message: string) {
    console.error(`Erreur générée: ${message}`);
    return {
      message,
      error: true,
    };
  }

  private validatePassword(password: string) {
    console.log('Validation du mot de passe...');
    // Placeholder password validation logic
    const isValidPassword = password === '123'; // Logique fictive pour valider le mot de passe

    if (!isValidPassword) {
      console.error('Le mot de passe est invalide');
      return this.generateErrorResponse('Le mot de passe est invalide');
    }

    console.log('Le mot de passe est valide');
    return {
      message: 'Le mot de passe est valide',
      error: false,
    };
  }

  public readonly createUser = async ({
    email,
    name,
    password,
  }: {
    email: string;
    name: string;
    password: string;
  }) => {
    console.log(`Création de l'utilisateur avec l'email: ${email}`);
    const hashedPassword = 'hashedPasswordPlaceholder'; // Placeholder pour le mot de passe haché
    return await this.prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  };

  public readonly authenticateUser = async ({ email }: { email: string }) => {
    console.log(`Authentification de l'utilisateur avec l'email: ${email}`);
    return await this.prisma.session.create({
      data: {
        user: {
          connect: {
            email,
          },
        },
        sessionToken: 'sessionTokenPlaceholder', // Placeholder pour le token de session
      },
      select: {
        sessionToken: true,
      },
    });
  };
}
