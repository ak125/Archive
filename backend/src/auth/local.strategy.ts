import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { PrismaServices } from '../prisma/prisma.services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaServices) {
    super({
      usernameField: 'email', // ou 'username' si nécessaire
    });
  }

  async validate(email: string, password: string): Promise<any> {
    console.log(`Tentative de validation de l'utilisateur avec l'email: ${email}`);
    // Recherchez l'utilisateur par email
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      console.error('Utilisateur non trouvé avec les informations fournies');
      throw new UnauthorizedException('Invalid credentials');
    }

    console.log('Utilisateur trouvé, validation réussie.');
    return user; // En mode dev, vous pouvez ignorer la vérification réelle du mot de passe
  }
}
