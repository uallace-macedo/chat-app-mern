import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useForm } from 'react-hook-form';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const { signup, loading } = useSignup();
  const { register, handleSubmit } = useForm();

  const onSubmitData = async (data) => {
    await signup(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 select-none">Registrar
          <span className="text-orange-600">CaMern</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div>
            <label className="label p-2">
              <span className="label-text">Nome Completo</span>
            </label>
            <input type="text" {...register('fullName')} placeholder="John M. S." className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text">Usuário</span>
            </label>
            <input type="text" {...register('username')} placeholder="johnms" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text">Senha</span>
            </label>
            <input type="password" {...register('password')} placeholder="Digite sua senha" className="w-full input input-bordered h-10" />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="label-text">Confirmação</span>
            </label>
            <input type="password" {...register('confirmPassword')} placeholder="Confirme sua senha" className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckbox register={register} />

          <div className="w-full flex items-center justify-end">
            <Link to="/login" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">
              Já tem uma conta?
            </Link>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Registrar'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup;