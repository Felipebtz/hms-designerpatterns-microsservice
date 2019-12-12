import React from 'react'

function AuthLayout() {
  return (
    <div className='flex min-h-svh'>
      {/**Esquerda */}
     <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-[#400849]  to-[#9B428F] p-12 lg:w-[440px] xl:w-[500px]">
    
      <div className="flex items-center gap-3">
      <img src="#" alt="Logo condo center" className="size-12  rounded-xl shadow-lg shadow-black/20"/>
      <span className="text-base font-bold text-white">Condo center</span>

    </div>

    <div>
      <h1 className="max-w-[380px] text-2xl leading-snug font-bold text-white">Acesse sua conta para gerenciar o seu mercado</h1>
      <p className="mt-3.5 max-w-[360px] text-sm leading-5 text-[#E7B0DE]"> Condocenter o maior ecossistema para você no brasil</p>
    </div>

    <p className="text-xs text-[#FF5AOA]">&copy; 2026 Diretos Autorais a CondoCenter</p>
     </div>
     
     {/**Direita */}
     <div className='flex flex-1 items-center justify-center bg-white p-8'>

     </div>
     
    </div>
    
  )
}

export default AuthLayout
