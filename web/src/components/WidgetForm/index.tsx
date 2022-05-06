import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../ ../assets/bug.svg'
import ideaImageUrl from '../ ../assets/idea.svg'
import thoughtImageUrl from '../ ../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = { //array com os tipos de botao do feedback
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },
  },
// Object.entries(feedbackTypes) => 
/**
 * [ 
 *  ['BUG', {...}],
 *  ['IDEA', {...}], 
 *  ['OTHER', {...}] 
 * ]
 */
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
         <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer className="text-xs text-neutral-400">
        Feito da melhor forma na <a className="underline underline-offset-2" href="">NLWreturn</a>
      </footer>
    </div>
  )  
}