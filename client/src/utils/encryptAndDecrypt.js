import CryptoJS from "crypto-js";

// Function to derive a key using Google ID and a salt
function deriveKey(googleId, salt) {
  return CryptoJS.PBKDF2(googleId, salt, {
    keySize: 256 / 32, // 256 bits
    iterations: 1000,
  }).toString();
}

// Encrypt function
export function encryptNote(googleId, note) {
  const salt = import.meta.env.VITE_KEY;
  const key = deriveKey(googleId, salt);
  const encrypted = CryptoJS.AES.encrypt(note, key).toString();
  return encrypted;
}

// Decrypt function
export function decryptNote(googleId, encryptedData) {
  const encrypted = encryptedData;
  const salt = import.meta.env.VITE_KEY;
  const key = deriveKey(googleId, salt);
  const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}
