import { pTag } from "../methods/pTag/pTag.js";

export const digit = pTag(/[0-9]/);
export const digit1 = pTag(/[1-9]/);
export const digits = pTag(/[0-9]+/);
export const optDigits = pTag(/[0-9]*/);
export const digits1 = pTag(digit1, optDigits);

export const letter = pTag(/[a-zA-Z]/);
export const lowLetter = pTag(/[a-z]/);
export const upLetter = pTag(/[A-Z]/);
export const lowLetters = pTag(/[a-z]+/);
export const upLetters = pTag(/[A-Z]+/);
export const letters = pTag(/[a-zA-Z]+/);
export const optLowLetters = pTag(/[a-z]*/);
export const optUpLetters = pTag(/[A-Z]*/);
export const optLetters = pTag(/[a-zA-Z]*/);

export const whitespace = pTag(/\s/);
export const whitespaces = pTag(/\s+/);
export const optWhitespaces = pTag(/\s*/);

export const any = pTag(/./);
