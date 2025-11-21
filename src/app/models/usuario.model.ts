export interface Usuario {
  id: number | string
  nome: string
  senha: string
  email: string
  lembrar: boolean;
  showPassword: boolean;
}
