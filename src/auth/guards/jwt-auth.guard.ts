import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const [bearer, token] = req.headers.authorization.split(" ");

      if (!token || bearer !== "BEARER") {
        throw new HttpException("Пользователь на авторизован", HttpStatus.UNAUTHORIZED);
      }

      req.user = this.jwtService.verify(token);

      return true;
    } catch (e) {
      console.log(e);
      throw new HttpException("Пользователь на авторизован", HttpStatus.UNAUTHORIZED);
    }
  }
}
