export function LoadingSpinner() {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='w-16 h-16 border-4 border-t-4 border-gray-200 border-t-orange-500 rounded-full animate-spin'></div>
        <span>Carregando...</span>
      </div>
    </div>
  )
}
