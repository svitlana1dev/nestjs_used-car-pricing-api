import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export class PasswordUtil {
  static async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const hashedPassword = salt + '.' + hash.toString('hex');
    return hashedPassword;
  }

  static async comparePassword(
    userPassword: string,
    password: string,
  ): Promise<boolean> {
    const [salt, storedHash] = userPassword.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    return storedHash !== hash.toString('hex');
  }
}
