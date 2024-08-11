import { pTag } from "../methods/pTag/pTag.js";

export const any = pTag(/./);

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

export const dot = pTag(/\./);
export const comma = pTag(/,/);

export const colon = pTag(/:/);
export const semicolon = pTag(/;/);

export const dash = pTag(/-/);
export const underscore = pTag(/_/);

export const slash = pTag(/\//);
export const backSlash = pTag(/\\/);

export const leftParen = pTag(/\(/);
export const rightParen = pTag(/\)/);
export const leftBrace = pTag(/\{/);
export const rightBrace = pTag(/\}/);
export const leftBracket = pTag(/\[/);
export const rightBracket = pTag(/\]/);

export const equals = pTag(/=/);
export const not = pTag(/!/);
export const question = pTag(/\?/);
export const at = pTag(/@/);

export const singleQuote = pTag(/'/);
export const doubleQuote = pTag(/"/);
