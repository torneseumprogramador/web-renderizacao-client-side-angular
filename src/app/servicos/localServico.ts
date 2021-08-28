export class LocalServico{
  public static getToken() {
    let token = localStorage.getItem("token")
    return token
  }
  public static setToken(token:string) {
    localStorage.setItem("token", token)
  }

  public static getNome() {
    let token = localStorage.getItem("nome")
    return token
  }
  public static setNome(token:string) {
    localStorage.setItem("nome", token)
  }

  public static limpar(){
    localStorage.clear()
  }
}
