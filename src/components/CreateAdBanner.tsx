import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
        <div className="">
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white flex items-center gap-3 rounded-md hover:bg-violet-600'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}