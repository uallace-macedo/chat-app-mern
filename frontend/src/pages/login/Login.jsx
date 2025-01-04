import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const {loading, login} = useLogin()

  const onSubmitData = async(data) => {
    await login(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 select-none">Login
          <span className="text-orange-600">CaMern</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Usuário</span>
            </label>
            <input type="text" {...register('username')} placeholder="Digite seu usuário" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Senha</span>
            </label>
            <input type="password" {...register('password')} placeholder="Digite sua senha" className="w-full input input-bordered h-10 "/>
          </div>

          <div className="w-full flex items-center justify-end">
            <Link to="/signup" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">
              Não tem uma conta?
            </Link>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2">
              {loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;