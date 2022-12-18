import { keyRefreshToken, keyRole, keyToken, keyUser } from '@/variable';

const auth = {
  storeToken(token) {
    if (token) localStorage.setItem(keyToken, token);
  },
  storeUsers(user) {
    if (user) localStorage.setItem(keyUser, JSON.stringify(user));
  },
  storeRole(role) {
    if (role) localStorage.setItem(keyRole, JSON.stringify(role));
  },
  isAuthenticated() {
    return !!localStorage.getItem(keyToken);
  },
  getToken() {
    return localStorage.getItem(keyToken);
  },
  getUser() {
    const userStr = localStorage.getItem(keyUser);
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },
  getRole() {
    const roleStr = localStorage.getItem(keyRole);
    if (roleStr) {
      return JSON.parse(roleStr);
    }
    return null;
  },
  clearToken() {
    localStorage.removeItem(keyToken);
  },
};
export default auth;
