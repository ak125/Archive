import { Controller, Get, Next, Post, Query, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Get('/authenticate')
    @Redirect('/')
    login(
        @Query('redirectTo') redirectTo: string,
    ) {
        console.log('Utilisateur connecté, redirection en cours...');
        return {
            url: redirectTo
        }
    }

    @Post('auth/logout')
    async logout(
        @Req() request: Express.Request,
        @Res() response: Response,
        @Next() next: NextFunction,
    ) {
        console.log('Déconnexion de l’utilisateur en cours...');
        request.logOut(function (err) {
            if (err) {
                console.error('Erreur lors de la déconnexion:', err);
                return next(err);
            }
            request.session.destroy(() => {
                console.log('Session détruite, utilisateur déconnecté.');
                response.clearCookie('connect.sid');
                response.redirect('/');
            });
        });
    }
}
