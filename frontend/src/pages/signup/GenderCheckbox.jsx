const GenderCheckbox = ({ register }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Homem</span>
          <input type='radio' value='male' {...register('gender')} className="checkbox border-slate-500" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Mulher</span>
          <input type='radio' value='female' {...register('gender')} className="checkbox border-slate-500" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox;