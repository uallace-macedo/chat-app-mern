const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 select-none">Login
          <span className="text-orange-600">CaMern</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Usuário</span>
            </label>
            <input type="text" placeholder="Digite seu usuário" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Senha</span>
            </label>
            <input type="password" placeholder="Digite sua senha" className="w-full input input-bordered h-10 "/>
          </div>

          <div className="w-full flex items-center justify-end">
            <a href="#" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">
              Não tem uma conta?
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;