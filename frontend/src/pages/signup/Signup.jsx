import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 select-none">Registrar
          <span className="text-orange-600">CaMern</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text">Nome Completo</span>
            </label>
            <input type="text" placeholder="John M. S." className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text">Usuário</span>
            </label>
            <input type="text" placeholder="johnms" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text">Senha</span>
            </label>
            <input type="password" placeholder="Digite sua senha" className="w-full input input-bordered h-10" />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="label-text">Confirmação</span>
            </label>
            <input type="password" placeholder="Confirme sua senha" className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckbox />

          <div className="w-full flex items-center justify-end">
            <a href="#" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">
              Já tem uma conta?
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2">
              Registrar
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup;