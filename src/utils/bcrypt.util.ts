import * as bcrypt from 'bcrypt';

export const encrypt = async (plainText: string): Promise<string> => {
    const saltOrRounds = 10;
    return await bcrypt.hash(plainText, saltOrRounds);
}

export const validator = async (plainText, encryptValue): Promise<boolean> => {
    return await bcrypt.compare(plainText, encryptValue);
}